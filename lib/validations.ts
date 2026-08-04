import { z } from "zod";

// ─── Clientes ───────────────────────────────────────────────────────────────

export const createClientSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  notes: z.string().optional(),
});

export const updateClientSchema = createClientSchema.partial();

// ─── Servicios / Órdenes de Trabajo ─────────────────────────────────────────

export const createServiceSchema = z.object({
  title: z.string().min(1, "El título es requerido"),
  description: z.string().optional(),
  clientId: z.string().uuid("clientId inválido"),
  technicianId: z.string().uuid().optional().nullable(),
  scheduledDate: z.string().min(1, "La fecha es requerida"),
  scheduledTime: z.string().min(1, "La hora es requerida"),
  address: z.string().optional(),
  notes: z.string().optional(),
  expectedAmount: z.number().positive().optional().nullable(),
  categoryId: z.string().uuid().optional().nullable(),
});

export const updateServiceSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional().nullable(),
  clientId: z.string().uuid().optional(),
  technicianId: z.string().uuid().optional().nullable(),
  scheduledDate: z.string().optional(),
  scheduledTime: z.string().optional(),
  address: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  expectedAmount: z.number().positive().optional().nullable(),
  categoryId: z.string().uuid().optional().nullable(),
});

export const updateStatusSchema = z.object({
  status: z.enum([
    "PENDING",
    "IN_PROGRESS",
    "COMPLETED",
    "CANCELLED",
    "CLOSED",
  ]),
  completedPhotoUrl: z.string().url().optional().nullable(),
});

export const finishServiceSchema = z.object({
  notes: z.string().optional(),
  completedPhotoUrl: z.string().url().optional().nullable(),
});

// ─── Cobros ──────────────────────────────────────────────────────────────────

export const createPaymentSchema = z.object({
  serviceId: z.string().uuid("serviceId inválido"),
  technicianId: z.string().uuid("technicianId inválido"),
  method: z.enum(["CASH", "TRANSFER", "CARD", "OTHER"]),
  amountPaid: z.number().min(0, "El monto no puede ser negativo"),
  notes: z.string().optional(),
  receiptPhotoUrl: z.string().url().optional().nullable(),
  // parts opcionales en la creación
  parts: z
    .array(
      z.object({
        supplierId: z.string().uuid(),
        description: z.string().min(1),
        quantity: z.number().int().positive(),
        unitPrice: z.number().min(0),
      }),
    )
    .optional(),
});

export const updatePaymentSchema = z.object({
  additionalPayment: z.number().positive().optional(),
  debtAmount: z.number().min(0).optional(),
  hasDebt: z.boolean().optional(),
  notes: z.string().optional(),
});

// ─── Repuestos ────────────────────────────────────────────────────────────────

export const createPaymentPartSchema = z.object({
  supplierId: z.string().uuid("supplierId inválido"),
  description: z.string().min(1, "La descripción es requerida"),
  quantity: z.number().int().positive("La cantidad debe ser positiva"),
  unitPrice: z.number().min(0, "El precio no puede ser negativo"),
});

export const updatePaymentPartSchema = createPaymentPartSchema.partial();

// ─── Presupuestos ─────────────────────────────────────────────────────────────

export const createEstimateSchema = z.object({
  serviceId: z.string().uuid("serviceId inválido"),
  amount: z.number().positive("El monto debe ser positivo"),
  description: z.string().optional(),
  notes: z.string().optional(),
});

// ─── Proveedores ──────────────────────────────────────────────────────────────

export const createSupplierSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  phone: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  notes: z.string().optional(),
});

export const updateSupplierSchema = createSupplierSchema.partial();

// ─── Rendiciones ──────────────────────────────────────────────────────────────

export const generateSettlementSchema = z.object({
  technicianId: z.string().uuid("technicianId inválido"),
  weekNumber: z.number().int().min(1).max(53),
  year: z.number().int().min(2020),
});

// ─── Técnicos ─────────────────────────────────────────────────────────────────

export const createTechnicianSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Contraseña mínimo 6 caracteres"),
  phone: z.string().optional(),
});

export const updateTechnicianSchema = z.object({
  name: z.string().min(1).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
  phone: z.string().optional(),
  isActive: z.boolean().optional(),
  role: z.enum(["ADMIN", "TECHNICIAN"]).optional(),
});
