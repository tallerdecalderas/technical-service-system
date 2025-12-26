import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { TechnicianForm } from "@/components/technicians/technician-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface EditTechnicianPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditTechnicianPage({
  params,
}: EditTechnicianPageProps) {
  const { id } = await params;
  const technician = await prisma.user.findUnique({
    where: { id },
  });

  if (!technician) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/admin/technicians">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a técnicos
        </Link>
      </Button>

      <div>
        <h1 className="text-2xl font-bold text-foreground">Editar Técnico</h1>
        <p className="text-muted-foreground">
          Actualiza la información del técnico
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Información del Técnico</CardTitle>
          <CardDescription>Modifica los datos del usuario.</CardDescription>
        </CardHeader>
        <CardContent>
          <TechnicianForm initialData={technician} isEdit />
        </CardContent>
      </Card>
    </div>
  );
}
