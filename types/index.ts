import {
  type User as PrismaUser,
  type Client as PrismaClient,
  type Service as PrismaService,
  type Payment as PrismaPayment,
  type Role as PrismaRole,
  type ServiceStatus as PrismaServiceStatus,
  type PaymentMethod as PrismaPaymentMethod,
} from "@/generated/prisma";

// Re-export Prisma types
export type User = PrismaUser;
export type Client = PrismaClient;
export type Service = PrismaService & {
  technician?: User | null;
  client?: Client | null;
  createdBy?: User | null;
  payment?: Payment | null;
};
export type Payment = PrismaPayment & {
  service?: Service | null;
  technician?: User | null;
};

export type Role = PrismaRole;
export type ServiceStatus = PrismaServiceStatus;
export type PaymentMethod = PrismaPaymentMethod;

// Manually defined since it was removed from Prisma schema but used in UI
export type PaymentType = "ON_SITE" | "MANUAL";

// API Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SessionUser {
  id: string;
  email: string;
  name: string | null;
  role: Role;
  avatar?: string | null;
}

// Filter types
export interface ServiceFilters {
  status?: ServiceStatus;
  technicianId?: string;
  clientId?: string;
  dateFrom?: Date;
  dateTo?: Date;
}

export interface PaymentFilters {
  technicianId?: string;
  dateFrom?: Date;
  dateTo?: Date;
}
