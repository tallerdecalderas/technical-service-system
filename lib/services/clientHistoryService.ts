import { prisma } from "@/lib/prisma";

export interface ClientEconomicBalance {
  clientId: string;
  clientName: string;
  totalExpected: number;
  totalPaid: number;
  totalDebt: number;
  totalSparePartsCost: number;
  servicesCount: number;
  closedServicesCount: number;
}

export interface ServiceHistoryItem {
  id: string;
  title: string;
  description: string | null;
  status: string;
  scheduledDate: Date;
  closedAt: Date | null;
  expectedAmount: number | null;
  category: {
    id: string;
    name: string;
    color: string | null;
    icon: string | null;
  } | null;
  technician: {
    id: string;
    name: string | null;
  } | null;
  report: {
    id: string;
    finalReport: string;
    photos: Array<{
      id: string;
      url: string;
      technicalNotes: string | null;
      order: number;
    }>;
    spareParts: Array<{
      id: string;
      name: string;
      quantity: number;
      unitPrice: number;
      totalPrice: number;
      notes: string | null;
    }>;
  } | null;
  payment: {
    id: string;
    method: string;
    amountPaid: number;
    sparePartsCost: number;
    debtAmount: number;
    hasDebt: boolean;
    notes: string | null;
  } | null;
}

/**
 * Gets complete service history for a client
 */
export async function getClientServiceHistory(
  clientId: string
): Promise<ServiceHistoryItem[]> {
  const services = await prisma.service.findMany({
    where: {
      clientId,
    },
    include: {
      category: {
        select: {
          id: true,
          name: true,
          color: true,
          icon: true,
        },
      },
      technician: {
        select: {
          id: true,
          name: true,
        },
      },
      report: {
        include: {
          photos: {
            orderBy: {
              order: "asc",
            },
          },
          spareParts: true,
        },
      },
      payment: true,
    },
    orderBy: {
      scheduledDate: "desc",
    },
  });

  return services.map((service) => ({
    id: service.id,
    title: service.title,
    description: service.description,
    status: service.status,
    scheduledDate: service.scheduledDate,
    closedAt: service.closedAt,
    expectedAmount: service.expectedAmount
      ? Number(service.expectedAmount)
      : null,
    category: service.category,
    technician: service.technician,
    report: service.report
      ? {
          id: service.report.id,
          finalReport: service.report.finalReport,
          photos: service.report.photos.map((photo) => ({
            id: photo.id,
            url: photo.url,
            technicalNotes: photo.technicalNotes,
            order: photo.order,
          })),
          spareParts: service.report.spareParts.map((part) => ({
            id: part.id,
            name: part.name,
            quantity: part.quantity,
            unitPrice: Number(part.unitPrice),
            totalPrice: Number(part.totalPrice),
            notes: part.notes,
          })),
        }
      : null,
    payment: service.payment
      ? {
          id: service.payment.id,
          method: service.payment.method,
          amountPaid: Number(service.payment.amountPaid),
          sparePartsCost: Number(service.payment.sparePartsCost),
          debtAmount: Number(service.payment.debtAmount),
          hasDebt: service.payment.hasDebt,
          notes: service.payment.notes,
        }
      : null,
  }));
}

/**
 * Gets economic balance for a client
 */
export async function getClientEconomicBalance(
  clientId: string
): Promise<ClientEconomicBalance> {
  const client = await prisma.client.findUnique({
    where: { id: clientId },
    include: {
      services: {
        include: {
          payment: true,
        },
      },
    },
  });

  if (!client) {
    throw new Error("Client not found");
  }

  const closedServices = client.services.filter(
    (s) => s.status === "CLOSED" && s.payment
  );

  const totalExpected = closedServices.reduce(
    (sum, service) =>
      sum + (service.expectedAmount ? Number(service.expectedAmount) : 0),
    0
  );

  const totalPaid = closedServices.reduce(
    (sum, service) =>
      sum + (service.payment ? Number(service.payment.amountPaid) : 0),
    0
  );

  const totalDebt = closedServices.reduce(
    (sum, service) =>
      sum + (service.payment ? Number(service.payment.debtAmount) : 0),
    0
  );

  const totalSparePartsCost = closedServices.reduce(
    (sum, service) =>
      sum + (service.payment ? Number(service.payment.sparePartsCost) : 0),
    0
  );

  return {
    clientId: client.id,
    clientName: client.name,
    totalExpected,
    totalPaid,
    totalDebt,
    totalSparePartsCost,
    servicesCount: client.services.length,
    closedServicesCount: closedServices.length,
  };
}

/**
 * Searches services by category
 */
export async function searchServicesByCategory(
  categoryId: string,
  includeClients: boolean = false
) {
  return await prisma.service.findMany({
    where: {
      categoryId,
    },
    include: {
      category: true,
      technician: {
        select: {
          id: true,
          name: true,
        },
      },
      ...(includeClients && {
        client: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
      }),
    },
    orderBy: {
      scheduledDate: "desc",
    },
  });
}

/**
 * Searches clients who have had a specific type of service
 */
export async function searchClientsByService(categoryName: string) {
  const category = await prisma.serviceCategory.findUnique({
    where: { name: categoryName },
  });

  if (!category) {
    return [];
  }

  const services = await prisma.service.findMany({
    where: {
      categoryId: category.id,
    },
    include: {
      client: true,
    },
    distinct: ["clientId"],
  });

  // Return unique clients
  const clientsMap = new Map();
  services.forEach((service) => {
    if (service.client && !clientsMap.has(service.client.id)) {
      clientsMap.set(service.client.id, {
        ...service.client,
        servicesCount: services.filter((s) => s.clientId === service.client!.id)
          .length,
      });
    }
  });

  return Array.from(clientsMap.values());
}

/**
 * Gets service categories
 */
export async function getServiceCategories() {
  return await prisma.serviceCategory.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      name: "asc",
    },
  });
}
