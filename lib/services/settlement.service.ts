/**
 * Settlement Service (Rendiciones) — TechService
 * Documentación: docs/rendiciones.md, docs/reglas-negocio.md
 *
 * Reglas clave:
 * - Rendición semanal (Lunes-Domingo) por técnico.
 * - El cálculo de comisión es automático: (Cobrado - Repuestos) × 50%.
 * - Solo el Administrador puede liquidar y bloquear una rendición.
 * - Pagos ya incluidos en una rendición no pueden modificarse.
 */
import { prisma } from "@/lib/prisma";
import { calculateSettlementTotals } from "@/lib/helpers/commission";
import { getWeekInfo } from "@/lib/helpers/week";
import type { Settlement, SettlementFilters, SessionUser } from "@/types";
import type { z } from "zod";
import type { generateSettlementSchema } from "@/lib/validations";

export type GenerateSettlementInput = z.infer<typeof generateSettlementSchema>;

const FULL_INCLUDE = {
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
  liquidatedBy: {
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
  payments: {
    include: {
      service: { include: { client: true } },
      parts: { include: { supplier: true } },
    },
  },
};

export async function listSettlements(
  filters: SettlementFilters,
): Promise<Settlement[]> {
  const where: Record<string, unknown> = {};

  if (filters.technicianId) where.technicianId = filters.technicianId;
  if (filters.weekNumber) where.weekNumber = filters.weekNumber;
  if (filters.year) where.year = filters.year;
  if (filters.status) where.status = filters.status;

  return prisma.settlement.findMany({
    where,
    include: FULL_INCLUDE,
    orderBy: [{ year: "desc" }, { weekNumber: "desc" }],
  }) as unknown as Settlement[];
}

export async function getSettlementById(
  id: string,
): Promise<Settlement | null> {
  return prisma.settlement.findUnique({
    where: { id },
    include: FULL_INCLUDE,
  }) as unknown as Settlement | null;
}

/**
 * Genera (o recalcula) la rendición de un técnico para una semana.
 * Incluye todos los pagos correspondientes a esa semana que no estén
 * en otra rendición liquidada.
 */
export async function generateSettlement(
  data: GenerateSettlementInput,
  session: SessionUser,
): Promise<Settlement> {
  if (session.role !== "ADMIN")
    throw new Error("Solo un Administrador puede generar rendiciones");

  const { startDate, endDate } = getWeekInfo(data.weekNumber, data.year);

  // No regenerar si ya está liquidada
  const existing = await prisma.settlement.findFirst({
    where: {
      technicianId: data.technicianId,
      weekNumber: data.weekNumber,
      year: data.year,
    },
  });

  if (existing && existing.status === "PAID") {
    throw new Error("Esta rendición ya fue liquidada y no puede regenerarse");
  }

  // Buscar pagos del técnico en esa semana (no asignados a otra rendición liquidada)
  const payments = await prisma.payment.findMany({
    where: {
      technicianId: data.technicianId,
      createdAt: { gte: startDate, lte: endDate },
      OR: [{ settlementId: null }, { settlement: { status: { not: "PAID" } } }],
    },
  });

  const paymentIds = payments.map((p) => p.id);
  const totals = calculateSettlementTotals(
    payments.map((p) => ({
      amountPaid: p.amountPaid,
      sparePartsCost: p.sparePartsCost,
    })),
  );

  if (existing) {
    // Actualizar rendición pendiente existente
    await prisma.payment.updateMany({
      where: { settlementId: existing.id },
      data: { settlementId: null },
    });

    const updated = await prisma.settlement.update({
      where: { id: existing.id },
      data: {
        totalCollected: totals.totalCollected,
        totalParts: totals.totalParts,
        netAmount: totals.netAmount,
        techCommission: totals.techCommission,
        compCommission: totals.compCommission,
        status: "PENDING",
        payments: { connect: paymentIds.map((id) => ({ id })) },
      },
      include: FULL_INCLUDE,
    });

    return updated as unknown as Settlement;
  }

  // Crear nueva rendición
  const settlement = await prisma.settlement.create({
    data: {
      technicianId: data.technicianId,
      weekNumber: data.weekNumber,
      year: data.year,
      weekStart: startDate,
      weekEnd: endDate,
      totalCollected: totals.totalCollected,
      totalParts: totals.totalParts,
      netAmount: totals.netAmount,
      techCommission: totals.techCommission,
      compCommission: totals.compCommission,
      status: "PENDING",
      payments: { connect: paymentIds.map((id) => ({ id })) },
    },
    include: FULL_INCLUDE,
  });

  return settlement as unknown as Settlement;
}

/**
 * Liquida (cierra) una rendición.
 * Bloquea los pagos incluidos para que no puedan reasignarse.
 */
export async function liquidateSettlement(
  id: string,
  session: SessionUser,
): Promise<Settlement> {
  if (session.role !== "ADMIN")
    throw new Error("Solo un Administrador puede liquidar rendiciones");

  const settlement = await prisma.settlement.findUnique({ where: { id } });
  if (!settlement) throw new Error("Rendición no encontrada");
  if (settlement.status === "PAID")
    throw new Error("Esta rendición ya fue liquidada");

  const updated = await prisma.settlement.update({
    where: { id },
    data: {
      status: "PAID",
      liquidatedById: session.id,
      liquidatedAt: new Date(),
    },
    include: FULL_INCLUDE,
  });

  return updated as unknown as Settlement;
}
