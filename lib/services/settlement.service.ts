/**
 * Settlement Service (Rendiciones) — TechService
 * Documentación: .docs/modulos/paymentsRendition.md, .docs/reglas-negocio.md
 *
 * Reglas clave:
 * - Período libre: el admin define startDate y endDate por cada rendición.
 * - Comisión variable: se hereda del campo `commissionRate` del técnico al momento de generar.
 * - Solo el Administrador puede generar y liquidar rendiciones.
 * - Pagos ya incluidos en una rendición PAID no pueden reasignarse.
 */
import { prisma } from "@/lib/prisma";
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
      commissionRate: true,
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
  company: {
    select: {
      id: true,
      name: true,
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
  if (filters.status) where.status = filters.status;
  if (filters.companyId) where.companyId = filters.companyId;

  // Filtrar por rango de fechas si se proveen
  if (filters.dateFrom || filters.dateTo) {
    where.startDate = {};
    if (filters.dateFrom) (where.startDate as Record<string, unknown>).gte = new Date(filters.dateFrom);
    if (filters.dateTo) (where.startDate as Record<string, unknown>).lte = new Date(filters.dateTo);
  }

  return prisma.settlement.findMany({
    where,
    include: FULL_INCLUDE,
    orderBy: [{ startDate: "desc" }],
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
 * Genera (o recalcula) la rendición de un técnico para un período libre.
 * El admin define startDate y endDate. La comisión se hereda del técnico.
 *
 * Lógica de cálculo:
 *   netAmount = totalCollected - totalParts
 *   techCommission = netAmount × commissionRate
 *   compCommission = netAmount × (1 - commissionRate)
 */
export async function generateSettlement(
  data: GenerateSettlementInput,
  session: SessionUser,
): Promise<Settlement> {
  if (session.role !== "ADMIN")
    throw new Error("Solo un Administrador puede generar rendiciones");

  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);

  if (startDate >= endDate)
    throw new Error("La fecha de inicio debe ser anterior a la fecha de fin");

  // Obtener commissionRate del técnico
  const technician = await prisma.user.findUnique({
    where: { id: data.technicianId },
    select: { id: true, name: true, commissionRate: true, isActive: true },
  });
  if (!technician) throw new Error("Técnico no encontrado");
  if (!technician.isActive) throw new Error("El técnico no está activo");

  const commissionRate = Number(technician.commissionRate);

  // Buscar pagos del técnico en ese rango, no asignados a otra rendición liquidada
  const payments = await prisma.payment.findMany({
    where: {
      technicianId: data.technicianId,
      createdAt: { gte: startDate, lte: endDate },
      OR: [{ settlementId: null }, { settlement: { status: { not: "PAID" } } }],
    },
  });

  const paymentIds = payments.map((p) => p.id);

  // Calcular totales
  const totalCollected = payments.reduce((sum: number, p) => sum + Number(p.amountPaid), 0);
  const totalParts = payments.reduce((sum: number, p) => sum + Number(p.sparePartsCost), 0);
  const netAmount = totalCollected - totalParts;
  const techCommission = netAmount * commissionRate;
  const compCommission = netAmount * (1 - commissionRate);

  // Etiqueta automática si no se provee
  const label =
    data.label ||
    `Rendición ${technician.name} — ${startDate.toLocaleDateString("es-AR")} al ${endDate.toLocaleDateString("es-AR")}`;

  // ¿Existe una rendición PENDING para este técnico en este período?
  const existing = await prisma.settlement.findFirst({
    where: {
      technicianId: data.technicianId,
      startDate: startDate,
      endDate: endDate,
      status: "PENDING",
    },
  });

  if (existing) {
    // Desasignar pagos previos de la rendición y recalcular
    await prisma.payment.updateMany({
      where: { settlementId: existing.id },
      data: { settlementId: null },
    });

    const updated = await prisma.settlement.update({
      where: { id: existing.id },
      data: {
        commissionRate,
        label,
        ordersCount: paymentIds.length,
        paymentsCount: paymentIds.length,
        totalCollected,
        totalParts,
        netAmount,
        techCommission,
        compCommission,
        status: "PENDING",
        companyId: data.companyId ?? null,
        payments: { connect: paymentIds.map((id: string) => ({ id })) },
      },
      include: FULL_INCLUDE,
    });

    return updated as unknown as Settlement;
  }

  // Crear nueva rendición
  const settlement = await prisma.settlement.create({
    data: {
      technicianId: data.technicianId,
      companyId: data.companyId ?? null,
      startDate,
      endDate,
      label,
      commissionRate,
      ordersCount: paymentIds.length,
      paymentsCount: paymentIds.length,
      totalCollected,
      totalParts,
      netAmount,
      techCommission,
      compCommission,
      status: "PENDING",
      payments: { connect: paymentIds.map((id: string) => ({ id })) },
    },
    include: FULL_INCLUDE,
  });

  return settlement as unknown as Settlement;
}

/**
 * Liquida (cierra) una rendición.
 * Una vez liquidada, los pagos incluidos no pueden reasignarse.
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
