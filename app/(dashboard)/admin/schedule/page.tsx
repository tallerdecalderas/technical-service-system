import { prisma } from "@/lib/prisma";
import { ScheduleCalendar } from "@/components/schedule/schedule-calendar";

export default async function AdminSchedulePage() {
  const services = await prisma.service.findMany({
    include: {
      technician: true,
      client: true,
      createdBy: true,
      payment: true,
    },
    orderBy: { scheduledDate: "desc" },
  });
  const technicians = await prisma.user.findMany({
    where: { role: "TECHNICIAN" },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Agenda</h1>
        <p className="text-muted-foreground">Vista de servicios programados</p>
      </div>

      <ScheduleCalendar
        services={services}
        technicians={technicians.filter((t) => t.isActive)}
      />
    </div>
  );
}
