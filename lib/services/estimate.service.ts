/**
 * Estimate Service (Presupuestos) — TechService
 * Documentación: docs/presupuestos.md, docs/reglas-negocio.md
 *
 * Reglas clave:
 * - Solo el Técnico asignado puede enviar un presupuesto.
 * - Solo el Administrador puede aprobarlo o rechazarlo.
 * - Máximo 1 presupuesto activo por orden.
 */
import { prisma } from "@/lib/prisma";
import { logActivity, ACTIONS } from "./activity-log.service";
import type { Estimate, EstimateFilters, SessionUser } from "@/types";
import type { z } from "zod";
import type { createEstimateSchema } from "@/lib/validations";

export type CreateEstimateInput = z.infer<typeof createEstimateSchema>;

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
  client: true,
};

export async function listEstimates(
  filters: EstimateFilters,
  session: SessionUser,
): Promise<Estimate[]> {
  const where: Record<string, unknown> = {};

  // Técnicos solo ven sus propios presupuestos
  if (session.role === "TECHNICIAN") {
    where.technicianId = session.id;
  } else {
    if (filters.technicianId) where.technicianId = filters.technicianId;
  }

  if (filters.status) where.status = filters.status;

  return prisma.estimate.findMany({
    where,
    include: FULL_INCLUDE,
    orderBy: { createdAt: "desc" },
  }) as unknown as Estimate[];
}

export async function getEstimateById(
  id: string,
  session: SessionUser,
): Promise<Estimate | null> {
  const estimate = await prisma.estimate.findUnique({
    where: { id },
    include: FULL_INCLUDE,
  });

  if (!estimate) return null;

  if (session.role === "TECHNICIAN" && estimate.technicianId !== session.id) {
    throw new Error("Sin permisos para ver este presupuesto");
  }

  return estimate as unknown as Estimate;
}

export async function getEstimateByService(
  serviceId: string,
): Promise<Estimate | null> {
  return prisma.estimate.findUnique({
    where: { serviceId },
    include: FULL_INCLUDE,
  }) as unknown as Estimate | null;
}

export async function createEstimate(
  data: CreateEstimateInput,
  session: SessionUser,
): Promise<Estimate> {
  const service = await prisma.service.findUnique({
    where: { id: data.serviceId },
  });
  if (!service) throw new Error("Orden no encontrada");

  // Solo el técnico asignado puede enviar presupuesto
  if (session.role === "TECHNICIAN" && service.technicianId !== session.id) {
    throw new Error(
      "Sin permisos: solo podés enviar presupuestos de tus propias órdenes",
    );
  }

  // Solo 1 presupuesto activo por orden
  const existing = await prisma.estimate.findUnique({
    where: { serviceId: data.serviceId },
  });
  if (existing && existing.status !== "REJECTED") {
    throw new Error(
      "Esta orden ya tiene un presupuesto activo. Debe rechazarse antes de crear uno nuevo.",
    );
  }

  const estimate = await prisma.estimate.create({
    data: {
      serviceId: data.serviceId,
      technicianId: session.id,
      clientId: service.clientId,
      amount: data.amount,
      description: data.description,
      notes: data.notes,
      status: "PENDING",
    },
    include: FULL_INCLUDE,
  });

  await logActivity(
    data.serviceId,
    session.id,
    ACTIONS.ESTIMATE_SENT,
    "Presupuesto enviado",
    {
      amount: data.amount,
    },
  );

  return estimate as unknown as Estimate;
}

export async function finalizeEstimate(
  id: string,
  action: "COMPLETED" | "REJECTED",
  session: SessionUser,
): Promise<Estimate> {
  if (session.role !== "ADMIN")
    throw new Error(
      "Solo un Administrador puede aprobar o rechazar presupuestos",
    );

  const estimate = await prisma.estimate.findUnique({ where: { id } });
  if (!estimate) throw new Error("Presupuesto no encontrado");
  if (estimate.status !== "PENDING")
    throw new Error("El presupuesto ya fue procesado");

  const updated = await prisma.estimate.update({
    where: { id },
    data: { status: action },
    include: FULL_INCLUDE,
  });

  await logActivity(
    estimate.serviceId,
    session.id,
    ACTIONS.ESTIMATE_FINALIZED,
    action === "COMPLETED" ? "Presupuesto aprobado" : "Presupuesto rechazado",
  );

  return updated as unknown as Estimate;
}
