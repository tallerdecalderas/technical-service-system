import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Clock, Play, CheckCircle, DollarSign } from "lucide-react";

interface TechnicianStatsProps {
  stats: {
    todayCount: number;
    pendingCount: number;
    inProgressCount: number;
    completedCount: number;
  };
}

export function TechnicianStats({ stats }: TechnicianStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      <Card>
        <CardContent className="flex items-center gap-3 p-4">
          <div className="rounded-lg bg-amber-50 p-2">
            <Clock className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <p className="text-2xl font-bold">{stats.pendingCount}</p>
            <p className="text-xs text-muted-foreground">Pendientes</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center gap-3 p-4">
          <div className="rounded-lg bg-blue-50 p-2">
            <Play className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold">{stats.inProgressCount}</p>
            <p className="text-xs text-muted-foreground">En curso</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center gap-3 p-4">
          <div className="rounded-lg bg-emerald-50 p-2">
            <CheckCircle className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <p className="text-2xl font-bold">{stats.completedCount}</p>
            <p className="text-xs text-muted-foreground">Completados</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
