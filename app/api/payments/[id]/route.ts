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

    // Only admins can mark debts as paid
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
    const { debtAmount, hasDebt } = body as {
      debtAmount?: number;
      hasDebt?: boolean;
    };

    const updated = await prisma.payment.update({
      where: { id },
      data: {
        ...(debtAmount !== undefined && { debtAmount }),
        ...(hasDebt !== undefined && { hasDebt }),
      },
      include: {
        service: true,
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
