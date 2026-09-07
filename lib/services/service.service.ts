/**
 * Service Service (Órdenes de Trabajo) — TechService
 * Documentación: docs/ordenes.md, docs/reglas-negocio.md, docs/decisiones.md
 *
 * Reglas clave:
 * - El Administrador crea y gestiona. El Técnico solo opera sus propias órdenes.
 * - Los servicios NUNCA se eliminan físicamente (soft delete → CANCELLED).
 * - Cada cambio importante se registra en ActivityLog.
 */
import { prisma } from "@/lib/prisma";
import { logActivity, ACTIONS } from "./activity-log.service";
import type { Service, ServiceFilters, SessionUser } from "@/types";
import type { z } from "zod";
import type {
  createServiceSchema,
  updateServiceSchema,
  updateStatusSchema,
  finishServiceSchema,
} from "@/lib/validations";

export type CreateServiceInput = z.infer<typeof createServiceSchema>;
export type UpdateServiceInput = z.infer<typeof updateServiceSchema>;
export type UpdateStatusInput = z.infer<typeof updateStatusSchema>;
export type FinishServiceInput = z.infer<typeof finishServiceSchema>;

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
  client: true,
  createdBy: {
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
  closedBy: {
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
  payment: { include: { parts: { include: { supplier: true } } } },
  estimate: true,
  category: true,
  activityLogs: {
    include: {
      user: {
        select: { id: true, name: true, role: true, passwordHash: false },
      },
    },
    orderBy: { createdAt: "asc" as const },
  },
};

function buildWhere(filters: ServiceFilters, session: SessionUser) {
  const where: Record<string, unknown> = {};

  // Técnicos solo ven sus propias órdenes (DEC-012)
  if (session.role === "TECHNICIAN") {
    where.technicianId = session.id;
  } else {
    if (filters.technicianId) where.technicianId = filters.technicianId;
    if (filters.clientId) where.clientId = filters.clientId;
  }

  if (filters.status) where.status = filters.status;

  if (filters.dateFrom || filters.dateTo) {
    where.scheduledDate = {
      ...(filters.dateFrom ? { gte: new Date(filters.dateFrom) } : {}),
      ...(filters.dateTo ? { lte: new Date(filters.dateTo) } : {}),
    };
  }

  return where;
}

export async function listServices(
  filters: ServiceFilters,
  session: SessionUser,
): Promise<Service[]> {
  const where = buildWhere(filters, session);
  return prisma.service.findMany({
    where,
    include: FULL_INCLUDE,
    orderBy: { scheduledDate: "desc" },
  }) as unknown as Service[];
}

export async function getServiceById(
  id: string,
  session: SessionUser,
): Promise<Service | null> {
  const service = await prisma.service.findUnique({
    where: { id },
    include: FULL_INCLUDE,
  });

  if (!service) return null;

  // Técnico solo puede ver sus propias órdenes
  if (session.role === "TECHNICIAN" && service.technicianId !== session.id) {
    throw new Error("Sin permisos para ver esta orden");
  }

  return service as unknown as Service;
}

export async function createService(
  data: CreateServiceInput,
  session: SessionUser,
): Promise<Service> {
  if (session.role !== "ADMIN")
    throw new Error("Solo un Administrador puede crear órdenes");

  const service = await prisma.service.create({
    data: {
      title: data.title,
      description: data.description,
      companyId: data.companyId,
      clientId: data.clientId,
      technicianId: data.technicianId ?? undefined,
      scheduledDate: new Date(data.scheduledDate),
      scheduledTime: data.scheduledTime,
      address: data.address,
      locality: data.locality,
      notes: data.notes,
      expectedAmount: data.expectedAmount ?? undefined,
      categoryId: data.categoryId ?? undefined,
      createdById: session.id,
      status: "PENDING",
    },
    include: FULL_INCLUDE,
  });

  await logActivity(
    service.id,
    session.id,
    ACTIONS.SERVICE_CREATED,
    "Orden creada",
    {
      title: data.title,
      clientId: data.clientId,
      technicianId: data.technicianId,
    },
  );

  if (data.technicianId) {
    await logActivity(
      service.id,
      session.id,
      ACTIONS.SERVICE_TECHNICIAN_ASSIGNED,
      "Técnico asignado",
      {
        technicianId: data.technicianId,
      },
    );
  }

  return service as unknown as Service;
}

export async function updateService(
  id: string,
  data: UpdateServiceInput,
  session: SessionUser,
): Promise<Service> {
  if (session.role !== "ADMIN")
    throw new Error("Solo un Administrador puede modificar órdenes");

  const existing = await prisma.service.findUnique({ where: { id } });
  if (!existing) throw new Error("Orden no encontrada");
  if (existing.status === "CLOSED")
    throw new Error("No se puede modificar una orden cerrada");

  const service = await prisma.service.update({
    where: { id },
    data: {
      ...(data.title && { title: data.title }),
      ...(data.description !== undefined && { description: data.description }),
      ...(data.clientId && { clientId: data.clientId }),
      ...(data.technicianId !== undefined && {
        technicianId: data.technicianId,
      }),
      ...(data.scheduledDate && {
        scheduledDate: new Date(data.scheduledDate),
      }),
      ...(data.scheduledTime && { scheduledTime: data.scheduledTime }),
      ...(data.address !== undefined && { address: data.address }),
      ...(data.notes !== undefined && { notes: data.notes }),
      ...(data.expectedAmount !== undefined && {
        expectedAmount: data.expectedAmount,
      }),
      ...(data.categoryId !== undefined && { categoryId: data.categoryId }),
    },
    include: FULL_INCLUDE,
  });

  const changes: Record<string, unknown> = {};
  if (
    data.technicianId !== undefined &&
    data.technicianId !== existing.technicianId
  ) {
    changes.technicianId = data.technicianId;
    await logActivity(
      id,
      session.id,
      ACTIONS.SERVICE_TECHNICIAN_ASSIGNED,
      "Técnico modificado",
      changes,
    );
  }
  if (
    data.scheduledDate &&
    new Date(data.scheduledDate).toDateString() !==
    existing.scheduledDate.toDateString()
  ) {
    changes.from = existing.scheduledDate;
    changes.to = data.scheduledDate;
  }

  await logActivity(
    id,
    session.id,
    ACTIONS.SERVICE_UPDATED,
    "Orden actualizada",
    {
      fields: Object.keys(data),
    },
  );

  return service as unknown as Service;
}

export async function updateServiceStatus(
  id: string,
  data: UpdateStatusInput,
  session: SessionUser,
): Promise<Service> {
  const existing = await prisma.service.findUnique({ where: { id } });
  if (!existing) throw new Error("Orden no encontrada");

  // Técnicos solo pueden modificar sus propias órdenes
  if (session.role === "TECHNICIAN" && existing.technicianId !== session.id) {
    throw new Error("Sin permisos para modificar esta orden");
  }

  if (existing.status === "CLOSED")
    throw new Error("No se puede cambiar el estado de una orden cerrada");

  const updateData: Record<string, unknown> = { status: data.status };
  if (data.status === "IN_PROGRESS") {
    updateData.completedAt = null; // reset if going back
  }
  if (data.status === "COMPLETED" || data.status === "CLOSED") {
    updateData.completedAt = new Date();
    if (data.completedPhotoUrl)
      updateData.completedPhotoUrl = data.completedPhotoUrl;
  }

  const service = await prisma.service.update({
    where: { id },
    data: updateData,
    include: FULL_INCLUDE,
  });

  await logActivity(
    id,
    session.id,
    ACTIONS.SERVICE_STATUS_CHANGED,
    `Estado cambiado a ${data.status}`,
    {
      from: existing.status,
      to: data.status,
    },
  );

  return service as unknown as Service;
}

/**
 * Cierra definitivamente una orden (status=CLOSED, isLocked=true).
 * Solo el Administrador puede cerrar.
 */
export async function finishService(
  id: string,
  data: FinishServiceInput,
  session: SessionUser,
): Promise<Service> {
  if (session.role !== "ADMIN")
    throw new Error("Solo un Administrador puede cerrar órdenes");

  const existing = await prisma.service.findUnique({ where: { id } });
  if (!existing) throw new Error("Orden no encontrada");
  if (existing.status === "CLOSED") throw new Error("La orden ya está cerrada");

  const service = await prisma.service.update({
    where: { id },
    data: {
      status: "CLOSED",
      closedAt: new Date(),
      closedById: session.id,
      ...(data.notes !== undefined && { notes: data.notes }),
      ...(data.completedPhotoUrl && {
        completedPhotoUrl: data.completedPhotoUrl,
      }),
    },
    include: FULL_INCLUDE,
  });

  await logActivity(
    id,
    session.id,
    ACTIONS.SERVICE_CLOSED,
    "Orden cerrada y bloqueada",
  );

  return service as unknown as Service;
}

/**
 * Cancela una orden (soft delete según docs/reglas-negocio.md).
 * Los servicios NUNCA se eliminan físicamente.
 */
export async function cancelService(
  id: string,
  session: SessionUser,
): Promise<Service> {
  if (session.role !== "ADMIN")
    throw new Error("Solo un Administrador puede cancelar órdenes");

  const existing = await prisma.service.findUnique({ where: { id } });
  if (!existing) throw new Error("Orden no encontrada");
  if (existing.status === "CLOSED")
    throw new Error("No se puede cancelar una orden cerrada");

  const service = await prisma.service.update({
    where: { id },
    data: { status: "CANCELLED" },
    include: FULL_INCLUDE,
  });

  await logActivity(
    id,
    session.id,
    ACTIONS.SERVICE_CANCELLED,
    "Orden cancelada",
  );

  return service as unknown as Service;
}
