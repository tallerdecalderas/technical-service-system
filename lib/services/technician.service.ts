/**
 * Technician Service — TechService
 * Documentación: docs/tecnicos.md, docs/decisiones.md (DEC-012)
 * El Técnico nunca administra información de otros técnicos.
 */
import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";
import type { User } from "@/types";
import type { z } from "zod";
import type {
  createTechnicianSchema,
  updateTechnicianSchema,
} from "@/lib/validations";

export type CreateTechnicianInput = z.infer<typeof createTechnicianSchema>;
export type UpdateTechnicianInput = z.infer<typeof updateTechnicianSchema>;

const SAFE_SELECT = {
  id: true,
  name: true,
  email: true,
  phone: true,
  role: true,
  isActive: true,
  avatar: true,
  createdAt: true,
  updatedAt: true,
  // Excluir passwordHash siempre
  passwordHash: false,
};

export async function listTechnicians(): Promise<Omit<User, "passwordHash">[]> {
  return prisma.user.findMany({
    where: { role: "TECHNICIAN" },
    select: SAFE_SELECT,
    orderBy: { name: "asc" },
  }) as Promise<Omit<User, "passwordHash">[]>;
}

export async function listUsers(): Promise<Omit<User, "passwordHash">[]> {
  return prisma.user.findMany({
    select: SAFE_SELECT,
    orderBy: { name: "asc" },
  }) as Promise<Omit<User, "passwordHash">[]>;
}

export async function getTechnicianById(
  id: string,
): Promise<Omit<User, "passwordHash"> | null> {
  return prisma.user.findUnique({
    where: { id },
    select: SAFE_SELECT,
  }) as Promise<Omit<User, "passwordHash"> | null>;
}

export async function createTechnician(
  data: CreateTechnicianInput,
): Promise<Omit<User, "passwordHash">> {
  const existing = await prisma.user.findUnique({
    where: { email: data.email },
  });
  if (existing) throw new Error("El email ya está registrado");

  const passwordHash = await hash(data.password, 10);

  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      passwordHash,
      phone: data.phone,
      role: "TECHNICIAN",
      isActive: true,
    },
    select: SAFE_SELECT,
  }) as Promise<Omit<User, "passwordHash">>;
}

export async function updateTechnician(
  id: string,
  data: UpdateTechnicianInput,
): Promise<Omit<User, "passwordHash">> {
  const existing = await prisma.user.findUnique({ where: { id } });
  if (!existing) throw new Error("Técnico no encontrado");

  const updateData: Record<string, unknown> = {};
  if (data.name) updateData.name = data.name;
  if (data.email) updateData.email = data.email;
  if (data.phone !== undefined) updateData.phone = data.phone;
  if (data.role) updateData.role = data.role;
  if (data.isActive !== undefined) updateData.isActive = data.isActive;
  if (data.password) updateData.passwordHash = await hash(data.password, 10);

  return prisma.user.update({
    where: { id },
    data: updateData,
    select: SAFE_SELECT,
  }) as Promise<Omit<User, "passwordHash">>;
}

/**
 * Realiza soft delete si el técnico tiene historial, hard delete si no.
 */
export async function removeTechnician(id: string): Promise<void> {
  const existing = await prisma.user.findUnique({ where: { id } });
  if (!existing) throw new Error("Técnico no encontrado");

  const [servicesCount, paymentsCount] = await Promise.all([
    prisma.service.count({ where: { technicianId: id } }),
    prisma.payment.count({ where: { technicianId: id } }),
  ]);

  if (servicesCount > 0 || paymentsCount > 0) {
    await prisma.user.update({ where: { id }, data: { isActive: false } });
  } else {
    await prisma.user.delete({ where: { id } });
  }
}
