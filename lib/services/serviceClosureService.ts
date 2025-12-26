import { prisma } from "@/lib/prisma";
import { PaymentMethod, ServiceStatus } from "@/generated/prisma";
import { Prisma } from "@/generated/prisma";

const Decimal = Prisma.Decimal;

export interface ServiceClosureData {
  serviceId: string;
  finalReport: string;
  photos: Array<{
    url: string;
    technicalNotes?: string;
    order: number;
  }>;
  spareParts?: Array<{
    name: string;
    quantity: number;
    unitPrice: number;
    notes?: string;
  }>;
  paymentMethod: PaymentMethod;
  amountPaid: number;
  notes?: string;
}

export interface ServiceClosureResult {
  success: boolean;
  serviceId: string;
  reportId?: string;
  paymentId?: string;
  error?: string;
}

/**
 * Closes a service with complete information
 * This is the main entry point for technicians to close services
 */
export async function closeService(
  data: ServiceClosureData,
  technicianId: string
): Promise<ServiceClosureResult> {
  try {
    // 1. Validate service exists and is assigned to technician
    const service = await prisma.service.findUnique({
      where: { id: data.serviceId },
      include: { payment: true, report: true },
    });

    if (!service) {
      return {
        success: false,
        serviceId: data.serviceId,
        error: "Service not found",
      };
    }

    if (service.technicianId !== technicianId) {
      return {
        success: false,
        serviceId: data.serviceId,
        error: "Service not assigned to this technician",
      };
    }

    // 2. Validate service is not already closed
    if (service.status === ServiceStatus.CLOSED || service.isLocked) {
      return {
        success: false,
        serviceId: data.serviceId,
        error: "Service is already closed",
      };
    }

    // 3. Validate expectedAmount is defined
    if (!service.expectedAmount) {
      return {
        success: false,
        serviceId: data.serviceId,
        error:
          "Expected amount must be defined before closing the service. Please contact administration.",
      };
    }

    // 4. Calculate spare parts cost
    const sparePartsCost = data.spareParts
      ? data.spareParts.reduce(
          (sum, part) => sum + part.quantity * part.unitPrice,
          0
        )
      : 0;

    // 5. Calculate debt
    const expectedAmount = Number(service.expectedAmount);
    const debtAmount = Math.max(0, expectedAmount - data.amountPaid);
    const hasDebt = debtAmount > 0;

    // 6. Execute transaction to close service
    const result = await prisma.$transaction(async (tx) => {
      // Create ServiceReport
      const report = await tx.serviceReport.create({
        data: {
          serviceId: data.serviceId,
          finalReport: data.finalReport,
          photos: {
            create: data.photos.map((photo) => ({
              url: photo.url,
              technicalNotes: photo.technicalNotes,
              order: photo.order,
            })),
          },
          spareParts: data.spareParts
            ? {
                create: data.spareParts.map((part) => ({
                  name: part.name,
                  quantity: part.quantity,
                  unitPrice: new Decimal(part.unitPrice),
                  totalPrice: new Decimal(part.quantity * part.unitPrice),
                  notes: part.notes,
                })),
              }
            : undefined,
        },
      });

      // Create Payment
      const payment = await tx.payment.create({
        data: {
          serviceId: data.serviceId,
          technicianId,
          method: data.paymentMethod,
          amountPaid: new Decimal(data.amountPaid),
          sparePartsCost: new Decimal(sparePartsCost),
          debtAmount: new Decimal(debtAmount),
          hasDebt,
          notes: data.notes,
        },
      });

      // Update Service to CLOSED
      await tx.service.update({
        where: { id: data.serviceId },
        data: {
          status: ServiceStatus.CLOSED,
          isLocked: true,
          closedAt: new Date(),
          closedById: technicianId,
          completedAt: new Date(),
        },
      });

      return { report, payment };
    });

    // TODO: Emit real-time notification to administration via Supabase Realtime

    return {
      success: true,
      serviceId: data.serviceId,
      reportId: result.report.id,
      paymentId: result.payment.id,
    };
  } catch (error) {
    console.error("Error closing service:", error);
    return {
      success: false,
      serviceId: data.serviceId,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Validates if a service can be closed
 */
export async function canCloseService(
  serviceId: string,
  technicianId: string
): Promise<{ canClose: boolean; reason?: string }> {
  const service = await prisma.service.findUnique({
    where: { id: serviceId },
  });

  if (!service) {
    return { canClose: false, reason: "Service not found" };
  }

  if (service.technicianId !== technicianId) {
    return { canClose: false, reason: "Service not assigned to you" };
  }

  if (service.status === ServiceStatus.CLOSED) {
    return { canClose: false, reason: "Service is already closed" };
  }

  if (service.isLocked) {
    return { canClose: false, reason: "Service is locked" };
  }

  if (!service.expectedAmount) {
    return {
      canClose: false,
      reason: "Expected amount not set. Contact administration.",
    };
  }

  return { canClose: true };
}

/**
 * Gets service details for closure form
 */
export async function getServiceForClosure(serviceId: string) {
  return await prisma.service.findUnique({
    where: { id: serviceId },
    include: {
      client: true,
      category: true,
      technician: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
}
