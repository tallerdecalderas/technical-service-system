import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ServiceForm } from "@/components/services/service-form";

export default async function NewServicePage() {
  const session = await getSession();
  if (!session || session.role !== "ADMIN") {
    redirect("/login");
  }

  const clients = await prisma.client.findMany({
    orderBy: { createdAt: "desc" },
  });
  const technicians = await prisma.user.findMany({
    where: { role: "TECHNICIAN" },
  });

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Nuevo Servicio</h1>
        <p className="text-muted-foreground">
          Crea un nuevo servicio y asígnalo a un técnico
        </p>
      </div>

      <ServiceForm
        clients={clients}
        technicians={technicians.filter((t) => t.isActive)}
        createdById={session.id}
      />
    </div>
  );
}
