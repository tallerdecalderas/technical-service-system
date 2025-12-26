import { Badge } from "@/components/ui/badge"
import { getStatusLabel, getStatusColor } from "@/lib/utils"
import type { ServiceStatus } from "@/types"

interface ServiceStatusBadgeProps {
  status: ServiceStatus
}

export function ServiceStatusBadge({ status }: ServiceStatusBadgeProps) {
  return (
    <Badge className={getStatusColor(status)} variant="secondary">
      {getStatusLabel(status)}
    </Badge>
  )
}
