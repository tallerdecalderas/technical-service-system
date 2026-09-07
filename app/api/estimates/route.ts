import { type NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { listEstimates, createEstimate } from "@/lib/services/estimate.service";
import { createEstimateSchema } from "@/lib/validations";

export async function GET(request: NextRequest) {
    try {
        const session = await requireAuth();
        const { searchParams } = new URL(request.url);

        const filters = {
            status: (searchParams.get("status") as any) ?? undefined,
            technicianId: searchParams.get("technicianId") ?? undefined,
        };

        const estimates = await listEstimates(filters, session);
        return NextResponse.json({ success: true, data: estimates });
    } catch (error: any) {
        const status = error.message === "Unauthorized" ? 401 : 500;
        return NextResponse.json(
            { success: false, error: error.message ?? "Error interno" },
            { status },
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const session = await requireAuth();
        const body = await request.json();

        const parsed = createEstimateSchema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { success: false, error: parsed.error.issues[0].message },
                { status: 400 },
            );
        }

        const estimate = await createEstimate(parsed.data, session);
        return NextResponse.json({ success: true, data: estimate }, { status: 201 });
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
