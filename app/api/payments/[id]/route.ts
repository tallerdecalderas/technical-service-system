import { type NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { success: false, error: "No autenticado" },
        { status: 401 },
      );
    }

    // Only admins can update debt payments
    if (session.role !== "ADMIN") {
      return NextResponse.json(
        { success: false, error: "Sin permisos" },
        { status: 403 },
      );
    }

    const { id } = params;

    const existing = await prisma.payment.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json(
        { success: false, error: "Cobro no encontrado" },
        { status: 404 },
      );
    }

    const body = await request.json();
    const { additionalPayment, debtAmount, hasDebt } = body as {
      additionalPayment?: number; // Monto adicional que el cliente paga ahora
      debtAmount?: number; // Sobreescribir deuda directamente
      hasDebt?: boolean;
    };

    let newAmountPaid = Number(existing.amountPaid);
    let newDebtAmount = Number(existing.debtAmount);
    let newHasDebt = existing.hasDebt;

    if (additionalPayment !== undefined && additionalPayment > 0) {
      // Registrar pago parcial: sumar al pagado, restar a la deuda
      newAmountPaid = newAmountPaid + additionalPayment;
      newDebtAmount = Math.max(0, newDebtAmount - additionalPayment);
      newHasDebt = newDebtAmount > 0;
    } else {
      // Actualización directa de deuda (ej: saldar todo)
      if (debtAmount !== undefined) newDebtAmount = Math.max(0, debtAmount);
      if (hasDebt !== undefined) newHasDebt = hasDebt;
      // Si la deuda queda en 0 siempre marcar como saldado
      if (newDebtAmount === 0) newHasDebt = false;
    }

    const updated = await prisma.payment.update({
      where: { id },
      data: {
        amountPaid: newAmountPaid,
        debtAmount: newDebtAmount,
        hasDebt: newHasDebt,
      },
      include: {
        service: {
          include: {
            client: true,
          },
        },
        technician: true,
      },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("Payment update error:", error);
    return NextResponse.json(
      { success: false, error: "Error interno" },
      { status: 500 },
    );
  }
}
