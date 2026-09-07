/**
 * Client Service — TechService
 * Documentación: docs/reglas-negocio.md, docs/api.md
 */
import { prisma } from "@/lib/prisma";
import type { Client } from "@/types";
import type { z } from "zod";
import type { createClientSchema, updateClientSchema } from "@/lib/validations";

export type CreateClientInput = z.infer<typeof createClientSchema>;
export type UpdateClientInput = z.infer<typeof updateClientSchema>;

const DEFAULT_INCLUDE = {
  services: {
    select: { id: true, title: true, status: true, scheduledDate: true },
    orderBy: { scheduledDate: "desc" as const },
    take: 5,
  },
};

export async function listClients(): Promise<Client[]> {
  return prisma.client.findMany({
    orderBy: { name: "asc" },
  }) as Promise<Client[]>;
}

export async function getClientById(id: string): Promise<Client | null> {
  return prisma.client.findUnique({
    where: { id },
    include: DEFAULT_INCLUDE,
  }) as Promise<Client | null>;
}

export async function createClient(data: CreateClientInput): Promise<Client> {
  return prisma.client.create({
    data: {
      name: data.name,
      email: data.email || undefined,
      phone: data.phone,
      address: data.address,
      city: data.city,
      notes: data.notes,
    },
  }) as Promise<Client>;
}

export async function updateClient(
  id: string,
  data: UpdateClientInput,
): Promise<Client> {
  const existing = await prisma.client.findUnique({ where: { id } });
  if (!existing) throw new Error("Cliente no encontrado");

  return prisma.client.update({
    where: { id },
    data: {
      ...(data.name && { name: data.name }),
      ...(data.email !== undefined && { email: data.email || undefined }),
      ...(data.phone !== undefined && { phone: data.phone }),
      ...(data.address !== undefined && { address: data.address }),
      ...(data.city !== undefined && { city: data.city }),
      ...(data.notes !== undefined && { notes: data.notes }),
    },
  }) as Promise<Client>;
}

/**
 * Elimina un cliente solamente si no tiene servicios asociados.
 * Los clientes con historial no pueden eliminarse (docs/reglas-negocio.md).
 */
export async function removeClient(id: string): Promise<void> {
  const existing = await prisma.client.findUnique({
    where: { id },
    include: { services: { select: { id: true }, take: 1 } },
  });

  if (!existing) throw new Error("Cliente no encontrado");

  if ((existing as any).services?.length > 0) {
    throw new Error(
      "No se puede eliminar el cliente porque tiene servicios asociados. El historial debe preservarse.",
    );
  }

  await prisma.client.delete({ where: { id } });
}
