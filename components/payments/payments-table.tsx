"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { formatDate, formatCurrency, getPaymentMethodLabel } from "@/lib/utils";
import { DollarSign, Calendar, CheckCircle, Loader2 } from "lucide-react";
import type { Payment, User } from "@/types";
import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  isWithinInterval,
} from "date-fns";

interface PaymentsTableProps {
  payments: Payment[];
  technicians: User[];
}

export function PaymentsTable({ payments, technicians }: PaymentsTableProps) {
  const [technicianFilter, setTechnicianFilter] = useState<string>("ALL");
  const [timeFilter, setTimeFilter] = useState<string>("ALL");
  // Map paymentId -> local debt override for optimistic updates
  const [settledDebts, setSettledDebts] = useState<Record<string, boolean>>({});
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const filteredPayments = payments.filter((payment) => {
    const matchesTechnician =
      technicianFilter === "ALL" || payment.technicianId === technicianFilter;

    let matchesTime = true;
    const paymentDate = new Date(payment.createdAt);
    const now = new Date();

    if (timeFilter === "WEEK") {
      matchesTime = isWithinInterval(paymentDate, {
        start: startOfWeek(now, { weekStartsOn: 1 }),
        end: endOfWeek(now, { weekStartsOn: 1 }),
      });
    } else if (timeFilter === "MONTH") {
      matchesTime = isWithinInterval(paymentDate, {
        start: startOfMonth(now),
        end: endOfMonth(now),
      });
    }

    return matchesTechnician && matchesTime;
  });

  const totalAmount = filteredPayments.reduce(
    (sum, p) => sum + Number(p.amountPaid),
    0,
  );

  const totalDebt = filteredPayments.reduce((sum, p) => {
    if (settledDebts[p.id]) return sum;
    return sum + Number(p.debtAmount || 0);
  }, 0);

  async function handleSettleDebt(paymentId: string) {
    setLoadingId(paymentId);
    try {
      const res = await fetch(`/api/payments/${paymentId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ debtAmount: 0, hasDebt: false }),
      });
      if (res.ok) {
        // Optimistic update: mark as settled locally
        setSettledDebts((prev) => ({ ...prev, [paymentId]: true }));
      }
    } catch (err) {
      console.error("Error settling debt:", err);
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              {filteredPayments.length} cobros - Total Pagado:{" "}
              {formatCurrency(totalAmount)}
              {totalDebt > 0 && (
                <span className="text-red-500 text-sm ml-2">
                  (Deuda: {formatCurrency(totalDebt)})
                </span>
              )}
            </CardTitle>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <Select
              value={technicianFilter}
              onValueChange={setTechnicianFilter}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Técnico" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">Todos los técnicos</SelectItem>
                {technicians.map((tech) => (
                  <SelectItem key={tech.id} value={tech.id}>
                    {tech.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-full md:w-[150px]">
                <Calendar className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Periodo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">Histórico</SelectItem>
                <SelectItem value="WEEK">Esta Semana</SelectItem>
                <SelectItem value="MONTH">Este Mes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>Servicio</TableHead>
                <TableHead>Técnico</TableHead>
                <TableHead>Método</TableHead>
                <TableHead className="text-right">Pagado</TableHead>
                <TableHead className="text-right">Deuda</TableHead>
                <TableHead className="text-right">Acción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayments.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center py-8 text-muted-foreground"
                  >
                    No se encontraron cobros
                  </TableCell>
                </TableRow>
              ) : (
                filteredPayments.map((payment) => {
                  const isSettled = settledDebts[payment.id];
                  const hasDebt = !isSettled && Number(payment.debtAmount) > 0;
                  const isLoading = loadingId === payment.id;

                  return (
                    <TableRow key={payment.id}>
                      <TableCell>{formatDate(payment.createdAt)}</TableCell>
                      <TableCell>
                        <Link
                          href={`/admin/services/${payment.serviceId}`}
                          className="text-primary hover:underline"
                        >
                          {payment.service?.title}
                        </Link>
                      </TableCell>
                      <TableCell>{payment.technician?.name}</TableCell>
                      <TableCell>
                        {getPaymentMethodLabel(payment.method)}
                      </TableCell>
                      <TableCell className="text-right font-medium text-emerald-600">
                        {formatCurrency(payment.amountPaid)}
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {hasDebt ? (
                          <span className="text-red-600">
                            {formatCurrency(payment.debtAmount)}
                          </span>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        {hasDebt ? (
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-emerald-600 border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                                disabled={isLoading}
                              >
                                {isLoading ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                )}
                                Saldar deuda
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  ¿Marcar deuda como pagada?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Esto va a registrar que la deuda de{" "}
                                  <strong>
                                    {formatCurrency(payment.debtAmount)}
                                  </strong>{" "}
                                  del cobro{" "}
                                  <strong>{payment.service?.title}</strong> fue
                                  completamente saldada. Esta acción no se puede
                                  deshacer.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleSettleDebt(payment.id)}
                                  className="bg-emerald-600 hover:bg-emerald-700"
                                >
                                  Confirmar pago
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        ) : (
                          <span className="text-xs text-muted-foreground">
                            {isSettled ? "✓ Saldado" : "-"}
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
