import { type NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

/**
 * POST /api/integrations/whatsapp/log
 * Registra en IntegrationLog cada vez que se genera/copia/abre un mensaje WhatsApp.
 * Body: { serviceId: string, action: "COPIED" | "OPENED" }
 */
export async function POST(request: NextRequest) {
  try {
    const session = await requireAuth();
    const body = await request.json();

    const { serviceId, action } = body;

    if (!serviceId || !action) {
      return NextResponse.json(
        { success: false, error: "serviceId y action son requeridos" },
        { status: 400 },
      );
    }

    // Verificar que el servicio existe
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
    });

    if (!service) {
      return NextResponse.json(
        { success: false, error: "Servicio no encontrado" },
        { status: 404 },
      );
    }

    const log = await prisma.integrationLog.create({
      data: {
        type: "WhatsApp",
        entity: "Service",
        entityId: serviceId,
        result: "SUCCESS",
        message:
          action === "COPIED"
            ? "Mensaje copiado al portapapeles"
            : "WhatsApp abierto",
        userId: session.id,
      },
    });

    return NextResponse.json({ success: true, data: log }, { status: 201 });
  } catch (error: any) {
    const status = error.message === "Unauthorized" ? 401 : 500;
    return NextResponse.json(
      { success: false, error: error.message ?? "Error interno" },
      { status },
    );
  }
}
