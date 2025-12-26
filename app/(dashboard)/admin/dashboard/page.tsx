import { prisma } from "@/lib/prisma";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { TodayServices } from "@/components/dashboard/today-services";

async function getDashboardStats() {
  const today = new Date();
  const startOfDay = new Date(today);
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date(today);
  endOfDay.setHours(23, 59, 59, 999);

  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const [
    todayServices,
    pendingServices,
    inProgressServices,
    completedThisMonth,
    totalCollectedAgg,
    activeTechnicians,
    totalClients,
  ] = await Promise.all([
    prisma.service.count({
      where: {
        scheduledDate: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    }),
    prisma.service.count({ where: { status: "PENDING" } }),
    prisma.service.count({ where: { status: "IN_PROGRESS" } }),
    prisma.service.count({
      where: {
        status: "COMPLETED",
        scheduledDate: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    }),
    prisma.payment.aggregate({
      _sum: { amountPaid: true },
    }),

    prisma.user.count({ where: { role: "TECHNICIAN", isActive: true } }),
    prisma.client.count(),
  ]);

  return {
    todayServices,
    pendingServices,
    inProgressServices,
    completedThisMonth,
    totalCollected: totalCollectedAgg._sum.amountPaid?.toNumber() || 0,

    activeTechnicians,
    totalClients,
  };
}

export default async function AdminDashboardPage() {
  const stats = await getDashboardStats();

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);

  const todayServices = await prisma.service.findMany({
    where: {
      scheduledDate: {
        gte: todayStart,
        lte: todayEnd,
      },
    },
    include: {
      technician: true,
      client: true,
      createdBy: true,
      payment: true,
    },
    orderBy: { scheduledTime: "asc" },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Resumen de operaciones y estado del sistema
        </p>
      </div>

      <DashboardStats stats={stats} />

      <div className="grid gap-6 lg:grid-cols-2">
        <TodayServices services={todayServices} />
      </div>
    </div>
  );
}
