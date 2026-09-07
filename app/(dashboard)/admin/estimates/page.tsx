import { prisma } from "@/lib/prisma"
import { EstimatesTable } from "@/components/estimates/estimates-table"
import { serialize } from "@/lib/utils"

export const revalidate = 0 // Disable static cache for estimates to ensure real-time status

export default async function AdminEstimatesPage() {
  const estimates = await prisma.estimate.findMany({
    include: {
      service: true,
      client: true,
    },
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Presupuestos</h1>
        <p className="text-muted-foreground">
          Revisa y gestiona los presupuestos enviados por los técnicos
        </p>
      </div>

      <EstimatesTable initialEstimates={serialize(estimates)} />
    </div>
  )
}
