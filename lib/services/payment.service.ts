/**
 * Payment Service (Cobros) — TechService
 * Documentación: docs/reglas-negocio.md, docs/facturacion.md
 *
 * Reglas clave:
 * - Cada servicio puede tener UN ÚNICO cobro.
 * - El costo de repuestos se calcula automáticamente desde PaymentParts.
 * - Solo técnicos asignados pueden registrar cobros.
 */
import { prisma } from "@/lib/prisma";
import { logActivity, ACTIONS } from "./activity-log.service";
import type { Payment, PaymentFilters, SessionUser } from "@/types";
import type { z } from "zod";
import type {
  createPaymentSchema,
  updatePaymentSchema,
} from "@/lib/validations";

export type CreatePaymentInput = z.infer<typeof createPaymentSchema>;
export type UpdatePaymentInput = z.infer<typeof updatePaymentSchema>;

const FULL_INCLUDE = {
  service: { include: { client: true } },
  technician: {
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      role: true,
      isActive: true,
      avatar: true,
      createdAt: true,
      updatedAt: true,
      passwordHash: false,
    },
  },
  parts: { include: { supplier: true } },
  settlement: true,
};

export async function listPayments(
  filters: PaymentFilters,
  session: SessionUser,
): Promise<Payment[]> {
  const where: Record<string, unknown> = {};

  // Técnicos solo ven sus propios cobros
  if (session.role === "TECHNICIAN") {
    where.technicianId = session.id;
  } else {
    if (filters.technicianId) where.technicianId = filters.technicianId;
  }

  if (filters.dateFrom || filters.dateTo) {
    where.createdAt = {
      ...(filters.dateFrom ? { gte: new Date(filters.dateFrom) } : {}),
      ...(filters.dateTo ? { lte: new Date(filters.dateTo) } : {}),
    };
  }

  return prisma.payment.findMany({
    where,
    include: FULL_INCLUDE,
    orderBy: { createdAt: "desc" },
  }) as unknown as Payment[];
}

export async function getPaymentById(
  id: string,
  session: SessionUser,
): Promise<Payment | null> {
  const payment = await prisma.payment.findUnique({
    where: { id },
    include: FULL_INCLUDE,
  });

  if (!payment) return null;

  // Técnico solo puede ver sus propios cobros
  if (session.role === "TECHNICIAN" && payment.technicianId !== session.id) {
    throw new Error("Sin permisos para ver este cobro");
  }

  return payment as unknown as Payment;
}

export async function getPaymentByService(
  serviceId: string,
): Promise<Payment | null> {
  return prisma.payment.findUnique({
    where: { serviceId },
    include: FULL_INCLUDE,
  }) as unknown as Payment | null;
}

export async function createPayment(
  data: CreatePaymentInput,
  session: SessionUser,
): Promise<Payment> {
  // Verificar que el servicio existe
  const service = await prisma.service.findUnique({
    where: { id: data.serviceId },
  });
  if (!service) throw new Error("Orden no encontrada");

  // Técnico solo puede cobrar sus propias órdenes
  if (session.role === "TECHNICIAN" && service.technicianId !== session.id) {
    throw new Error(
      "Sin permisos: solo podés registrar cobros de tus propias órdenes",
    );
  }

  // Verificar cobro duplicado
  const existingPayment = await prisma.payment.findUnique({
    where: { serviceId: data.serviceId },
  });
  if (existingPayment)
    throw new Error("Esta orden ya tiene un cobro registrado");

  // Calcular costo de repuestos si se incluyen
  const partsCost = (data.parts ?? []).reduce(
    (acc, p) => acc + p.unitPrice * p.quantity,
    0,
  );

  const payment = await prisma.payment.create({
    data: {
      serviceId: data.serviceId,
      technicianId: data.technicianId,
      method: data.method,
      amountPaid: data.amountPaid,
      sparePartsCost: partsCost,
      notes: data.notes,
      receiptPhotoUrl: data.receiptPhotoUrl ?? undefined,
      parts: data.parts?.length
        ? {
            create: data.parts.map((p) => ({
              supplierId: p.supplierId,
              description: p.description,
              quantity: p.quantity,
              unitPrice: p.unitPrice,
              totalPrice: p.unitPrice * p.quantity,
            })),
          }
        : undefined,
    },
    include: FULL_INCLUDE,
  });

  await logActivity(
    data.serviceId,
    session.id,
    ACTIONS.PAYMENT_CREATED,
    "Cobro registrado",
    {
      amountPaid: data.amountPaid,
      method: data.method,
      sparePartsCost: partsCost,
    },
  );

  return payment as unknown as Payment;
}

/**
 * Actualiza un cobro (solo ADMIN).
 * Permite registrar pagos adicionales para saldar deuda.
 */
export async function updatePayment(
  id: string,
  data: UpdatePaymentInput,
  session: SessionUser,
): Promise<Payment> {
  if (session.role !== "ADMIN")
    throw new Error("Solo un Administrador puede modificar cobros");

  const existing = await prisma.payment.findUnique({ where: { id } });
  if (!existing) throw new Error("Cobro no encontrado");

  let newAmountPaid = Number(existing.amountPaid);
  let newDebtAmount = Number(existing.debtAmount);
  let newHasDebt = existing.hasDebt;

  if (data.additionalPayment !== undefined && data.additionalPayment > 0) {
    newAmountPaid = newAmountPaid + data.additionalPayment;
    newDebtAmount = Math.max(0, newDebtAmount - data.additionalPayment);
    newHasDebt = newDebtAmount > 0;
  } else {
    if (data.debtAmount !== undefined)
      newDebtAmount = Math.max(0, data.debtAmount);
    if (data.hasDebt !== undefined) newHasDebt = data.hasDebt;
    if (newDebtAmount === 0) newHasDebt = false;
  }

  const updated = await prisma.payment.update({
    where: { id },
    data: {
      amountPaid: newAmountPaid,
      debtAmount: newDebtAmount,
      hasDebt: newHasDebt,
      ...(data.notes !== undefined && { notes: data.notes }),
    },
    include: FULL_INCLUDE,
  });

  await logActivity(
    existing.serviceId,
    session.id,
    ACTIONS.PAYMENT_UPDATED,
    "Cobro actualizado",
    {
      newAmountPaid,
      newDebtAmount,
    },
  );

  return updated as unknown as Payment;
}

/**
 * Recalcula sparePartsCost en el payment sumando todos sus PaymentParts.
 */
export async function recalculateSparePartsCost(
  paymentId: string,
): Promise<void> {
  const parts = await prisma.paymentPart.findMany({ where: { paymentId } });
  const total = parts.reduce((acc, p) => acc + Number(p.totalPrice), 0);
  await prisma.payment.update({
    where: { id: paymentId },
    data: { sparePartsCost: total },
  });
}
