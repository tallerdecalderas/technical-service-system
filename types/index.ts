import { } from "@/generated/prisma8/contract.json";

// ─── Prisma model re-exports ──────────────────────────────────────────────────
export type User = UserPrisma;
export type Client = PrismaClient;
export type Supplier = PrismaSupplier;
export type ServiceCategory = PrismaServiceCategory;

// ─── Enum re-exports ──────────────────────────────────────────────────────────
export type Role = PrismaRole;
export type ServiceStatus = PrismaServiceStatus;
export type PaymentMethod = PrismaPaymentMethod;
export type EstimateStatus = PrismaEstimateStatus;
export type SettlementStatus = PrismaSettlementStatus;

// ─── Rich types with relations ────────────────────────────────────────────────

export type Service = PrismaService & {
  technician?: User | null;
  client?: Client | null;
  createdBy?: User | null;
  closedBy?: User | null;
  payment?: Payment | null;
  estimate?: Estimate | null;
  activityLogs?: ActivityLog[];
  category?: ServiceCategory | null;
};

export type Payment = PrismaPayment & {
  service?: Service | null;
  technician?: User | null;
  parts?: PaymentPart[];
  settlement?: Settlement | null;
};

export type PaymentPart = PrismaPaymentPart & {
  supplier?: Supplier | null;
  payment?: Payment | null;
};

export type Estimate = PrismaEstimate & {
  service?: Service | null;
  technician?: User | null;
  client?: Client | null;
};

export type Settlement = PrismaSettlement & {
  technician?: User | null;
  liquidatedBy?: User | null;
  payments?: Payment[];
};

export type ActivityLog = PrismaActivityLog & {
  service?: Service | null;
  user?: User | null;
};

// ─── API Types ────────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
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

// ─── Filter types ─────────────────────────────────────────────────────────────

export interface ServiceFilters {
  status?: ServiceStatus;
  technicianId?: string;
  clientId?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface PaymentFilters {
  technicianId?: string;
  dateFrom?: string;
  dateTo?: string;
  weekNumber?: number;
  year?: number;
}

export interface EstimateFilters {
  status?: EstimateStatus;
  technicianId?: string;
}

export interface SettlementFilters {
  technicianId?: string;
  weekNumber?: number;
  year?: number;
  status?: SettlementStatus;
}
