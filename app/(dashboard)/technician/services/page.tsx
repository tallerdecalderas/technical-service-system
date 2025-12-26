import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TechnicianServicesList } from "@/components/technician/technician-services-list";

export default async function TechnicianServicesPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const services = await prisma.service.findMany({
    where: { technicianId: session.id },
    include: {
      technician: true,
      client: true,
      createdBy: true,
      payment: true,
    },
    orderBy: { scheduledDate: "desc" },
  });

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-foreground md:text-2xl">
          Mis Servicios
        </h1>
        <p className="text-sm text-muted-foreground">
          Historial de todos tus servicios asignados
        </p>
      </div>

      <TechnicianServicesList services={services} />
    </div>
  );
}
