import { type NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") {
      return NextResponse.json(
        { success: false, error: "No autorizado" },
        { status: 403 }
      );
    }

    const { id } = await params;
    const body = await request.json();
    const { name, email, phone, role, password, isActive } = body;

    const data: any = {
      name,
      email,
      phone,
      role,
      isActive,
    };

    if (password) {
      data.passwordHash = await hash(password, 10);
    }

    const technician = await prisma.user.update({
      where: { id },
      data,
    });

    return NextResponse.json({ success: true, data: technician });
  } catch (error) {
    console.error("Error updating technician:", error);
    return NextResponse.json(
      { success: false, error: "Error al actualizar técnico" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") {
      return NextResponse.json(
        { success: false, error: "No autorizado" },
        { status: 403 }
      );
    }

    const { id } = await params;

    // Check if technician has related data
    const servicesCount = await prisma.service.count({
      where: { technicianId: id },
    });

    const paymentsCount = await prisma.payment.count({
      where: { technicianId: id },
    });

    if (servicesCount > 0 || paymentsCount > 0) {
      // Soft delete if they have history
      await prisma.user.update({
        where: { id },
        data: { isActive: false },
      });
    } else {
      // Hard delete if clean
      await prisma.user.delete({
        where: { id },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting technician:", error);
    return NextResponse.json(
      { success: false, error: "Error al eliminar técnico" },
      { status: 500 }
    );
  }
}
