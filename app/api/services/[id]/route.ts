import { type NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { success: false, error: "No autenticado" },
        { status: 401 }
      );
    }

    const { id } = await params;
    const service = await prisma.service.findUnique({
      where: { id },
      include: {
        technician: true,
        client: true,
        createdBy: true,
        payment: true,
      },
    });

    if (!service) {
      return NextResponse.json(
        { success: false, error: "No encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: service });
  } catch (error) {
    console.error("Service fetch error:", error);
    return NextResponse.json(
      { success: false, error: "Error interno" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") {
      return NextResponse.json(
        { success: false, error: "Sin permisos" },
        { status: 403 }
      );
    }

    const { id } = await params;
    const body = await request.json();

    // Remove relational fields that could cause Prisma errors if sent directly
    const { client, technician, createdBy, payment, ...updateData } =
      body as any;

    const service = await prisma.service.update({
      where: { id },
      data: updateData,
      include: {
        technician: true,
        client: true,
        createdBy: true,
        payment: true,
      },
    });

    return NextResponse.json({ success: true, data: service });
  } catch (error) {
    console.error("Service update error:", error);
    return NextResponse.json(
      { success: false, error: "Error interno" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") {
      return NextResponse.json(
        { success: false, error: "Sin permisos" },
        { status: 403 }
      );
    }

    const { id } = await params;

    // Delete related payments first to avoid FK constraints
    await prisma.payment.deleteMany({ where: { serviceId: id } });
    await prisma.service.delete({ where: { id } });

    return NextResponse.json({ success: true, message: "Servicio eliminado" });
  } catch (error) {
    console.error("Service delete error:", error);
    return NextResponse.json(
      { success: false, error: "Error interno" },
      { status: 500 }
    );
  }
}
