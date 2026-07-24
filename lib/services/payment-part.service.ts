/**
 * PaymentPart Service (Repuestos) — TechService
 * Documentación: docs/facturacion.md, docs/reglas-negocio.md
 *
 * Los repuestos pertenecen a un cobro y se asocian a un proveedor.
 * El costo de repuestos se recalcula automáticamente en el Payment tras cada operación.
 */
import { prisma } from "@/lib/prisma";
import { logActivity, ACTIONS } from "./activity-log.service";
import { recalculateSparePartsCost } from "./payment.service";
import type { PaymentPart, SessionUser } from "@/types";
import type { z } from "zod";
import type {
  createPaymentPartSchema,
  updatePaymentPartSchema,
} from "@/lib/validations";

export type CreatePaymentPartInput = z.infer<typeof createPaymentPartSchema>;
export type UpdatePaymentPartInput = z.infer<typeof updatePaymentPartSchema>;

const INCLUDE = { supplier: true };

export async function listPaymentParts(
  paymentId: string,
): Promise<PaymentPart[]> {
  return prisma.paymentPart.findMany({
    where: { paymentId },
    include: INCLUDE,
    orderBy: { createdAt: "asc" },
  }) as unknown as PaymentPart[];
}

export async function addPaymentPart(
  paymentId: string,
  data: CreatePaymentPartInput,
  session: SessionUser,
): Promise<PaymentPart> {
  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
    include: { service: true },
  });
  if (!payment) throw new Error("Cobro no encontrado");

  // Técnico solo puede agregar repuestos a sus propios cobros
  if (session.role === "TECHNICIAN" && payment.technicianId !== session.id) {
    throw new Error("Sin permisos para modificar este cobro");
  }

  const totalPrice = data.unitPrice * data.quantity;

  const part = await prisma.paymentPart.create({
    data: {
      paymentId,
      supplierId: data.supplierId,
      description: data.description,
      quantity: data.quantity,
      unitPrice: data.unitPrice,
      totalPrice,
    },
    include: INCLUDE,
  });

  // Recalcular total de repuestos en el cobro
  await recalculateSparePartsCost(paymentId);

  if (payment.serviceId) {
    await logActivity(
      payment.serviceId,
      session.id,
      ACTIONS.PART_ADDED,
      `Repuesto agregado: ${data.description}`,
      {
        supplierId: data.supplierId,
        quantity: data.quantity,
        unitPrice: data.unitPrice,
      },
    );
  }

  return part as unknown as PaymentPart;
}

export async function updatePaymentPart(
  partId: string,
  data: UpdatePaymentPartInput,
  session: SessionUser,
): Promise<PaymentPart> {
  const existing = await prisma.paymentPart.findUnique({
    where: { id: partId },
    include: { payment: true },
  });
  if (!existing) throw new Error("Repuesto no encontrado");

  if (
    session.role === "TECHNICIAN" &&
    existing.payment?.technicianId !== session.id
  ) {
    throw new Error("Sin permisos para modificar este repuesto");
  }

  const qty = data.quantity ?? Number(existing.quantity);
  const price = data.unitPrice ?? Number(existing.unitPrice);
  const totalPrice = qty * price;

  const part = await prisma.paymentPart.update({
    where: { id: partId },
    data: {
      ...(data.supplierId && { supplierId: data.supplierId }),
      ...(data.description && { description: data.description }),
      quantity: qty,
      unitPrice: price,
      totalPrice,
    },
    include: INCLUDE,
  });

  await recalculateSparePartsCost(existing.paymentId);

  return part as unknown as PaymentPart;
}

export async function removePaymentPart(
  partId: string,
  session: SessionUser,
): Promise<void> {
  const existing = await prisma.paymentPart.findUnique({
    where: { id: partId },
    include: { payment: { include: { service: true } } },
  });
  if (!existing) throw new Error("Repuesto no encontrado");

  if (
    session.role === "TECHNICIAN" &&
    existing.payment?.technicianId !== session.id
  ) {
    throw new Error("Sin permisos para eliminar este repuesto");
  }

  const paymentId = existing.paymentId;
  const serviceId = existing.payment?.serviceId;

  await prisma.paymentPart.delete({ where: { id: partId } });
  await recalculateSparePartsCost(paymentId);

  if (serviceId) {
    await logActivity(
      serviceId,
      session.id,
      ACTIONS.PART_REMOVED,
      `Repuesto eliminado: ${existing.description}`,
    );
  }
}
