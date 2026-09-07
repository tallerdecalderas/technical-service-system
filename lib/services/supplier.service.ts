/**
 * Supplier Service — TechService
 * Documentación: docs/reglas-negocio.md, docs/facturacion.md
 * Los proveedores no administran stock. Solo identifican origen de repuestos.
 */
import { prisma } from "@/lib/prisma";
import type { Supplier } from "@/types";
import type { z } from "zod";
import type {
  createSupplierSchema,
  updateSupplierSchema,
} from "@/lib/validations";

export type CreateSupplierInput = z.infer<typeof createSupplierSchema>;
export type UpdateSupplierInput = z.infer<typeof updateSupplierSchema>;

export async function listSuppliers(onlyActive = false): Promise<Supplier[]> {
  return prisma.supplier.findMany({
    where: onlyActive ? { isActive: true } : undefined,
    orderBy: { name: "asc" },
  }) as Promise<Supplier[]>;
}

export async function getSupplierById(id: string): Promise<Supplier | null> {
  return prisma.supplier.findUnique({
    where: { id },
  }) as Promise<Supplier | null>;
}

export async function createSupplier(
  data: CreateSupplierInput,
): Promise<Supplier> {
  const existing = await prisma.supplier.findUnique({
    where: { name: data.name },
  });
  if (existing) throw new Error("Ya existe un proveedor con ese nombre");

  return prisma.supplier.create({
    data: {
      name: data.name,
      phone: data.phone,
      email: data.email || undefined,
      notes: data.notes,
    },
  }) as Promise<Supplier>;
}

export async function updateSupplier(
  id: string,
  data: UpdateSupplierInput,
): Promise<Supplier> {
  const existing = await prisma.supplier.findUnique({ where: { id } });
  if (!existing) throw new Error("Proveedor no encontrado");

  return prisma.supplier.update({
    where: { id },
    data: {
      ...(data.name && { name: data.name }),
      ...(data.phone !== undefined && { phone: data.phone }),
      ...(data.email !== undefined && { email: data.email || undefined }),
      ...(data.notes !== undefined && { notes: data.notes }),
    },
  }) as Promise<Supplier>;
}

/**
 * Desactiva un proveedor (soft delete).
 * Los proveedores nunca se eliminan para mantener integridad histórica.
 */
export async function deactivateSupplier(id: string): Promise<Supplier> {
  const existing = await prisma.supplier.findUnique({ where: { id } });
  if (!existing) throw new Error("Proveedor no encontrado");

  return prisma.supplier.update({
    where: { id },
    data: { isActive: false },
  }) as Promise<Supplier>;
}

export async function reactivateSupplier(id: string): Promise<Supplier> {
  const existing = await prisma.supplier.findUnique({ where: { id } });
  if (!existing) throw new Error("Proveedor no encontrado");

  return prisma.supplier.update({
    where: { id },
    data: { isActive: true },
  }) as Promise<Supplier>;
}
