import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { EstimateDetail } from "@/components/estimates/estimate-detail"
import { serialize } from "@/lib/utils"

export const revalidate = 0 // Ensure fresh data on details page

interface EstimatePageProps {
  params: Promise<{ id: string }>
}

export default async function AdminEstimatePage({ params }: EstimatePageProps) {
  const { id } = await params

  const estimate = await prisma.estimate.findUnique({
    where: { id },
    include: {
      service: {
        include: {
          technician: true,
        },
      },
      client: true,
    },
  })

  if (!estimate) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Detalle del Presupuesto
        </h1>
        <p className="text-muted-foreground">
          Información del presupuesto ingresado por el técnico
        </p>
      </div>

      <EstimateDetail estimate={serialize(estimate)} />
    </div>
  )
}
