import { type NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { getEstimateById, finalizeEstimate } from "@/lib/services/estimate.service";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        const session = await requireAuth();
        const { id } = await params;

        const estimate = await getEstimateById(id, session);
        if (!estimate) {
            return NextResponse.json(
                { success: false, error: "Presupuesto no encontrado" },
                { status: 404 },
            );
        }

        return NextResponse.json({ success: true, data: estimate });
    } catch (error: any) {
        const status =
            error.message === "Unauthorized"
                ? 401
                : error.message?.includes("permisos")
                    ? 403
                    : 500;
        return NextResponse.json(
            { success: false, error: error.message ?? "Error interno" },
            { status },
        );
    }
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        const session = await requireAuth();
        const { id } = await params;

        // Solo ADMIN puede finalizar presupuestos
        if (session.role !== "ADMIN") {
            return NextResponse.json(
                { success: false, error: "Solo los administradores pueden finalizar presupuestos" },
                { status: 403 },
            );
        }

        const estimate = await finalizeEstimate(id, session);
        return NextResponse.json({ success: true, data: estimate });
    } catch (error: any) {
        const status =
            error.message === "Unauthorized"
                ? 401
                : error.message?.includes("permisos")
                    ? 403
                    : 400;
        return NextResponse.json(
            { success: false, error: error.message ?? "Error interno" },
            { status },
        );
    }
}
