import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TechnicianAgenda } from "@/components/technician/technician-agenda";
import { TechnicianStats } from "@/components/technician/technician-stats";

export default async function TechnicianDashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const today = new Date();
  const startOfDay = new Date(today);
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date(today);
  endOfDay.setHours(23, 59, 59, 999);

  const todayServices = await prisma.service.findMany({
    where: {
      technicianId: session.id,
      scheduledDate: {
        gte: startOfDay,
      },
      NOT: {
        status: "CANCELLED",
      },
    },
    include: {
      technician: true,
      client: true,
      createdBy: true,
      payment: true,
    },
    orderBy: [{ scheduledDate: "asc" }, { scheduledTime: "asc" }],
  });

  const stats = {
    todayCount: todayServices.length,
    pendingCount: todayServices.filter((s) => s.status === "PENDING").length,
    inProgressCount: todayServices.filter((s) => s.status === "IN_PROGRESS")
      .length,
    completedCount: todayServices.filter((s) => s.status === "COMPLETED")
      .length,
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-foreground md:text-2xl">
          Mi Agenda
        </h1>
        <p className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString("es-CL", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
        </p>
      </div>

      <TechnicianStats stats={stats} />
      <TechnicianAgenda services={todayServices} />
    </div>
  );
}
