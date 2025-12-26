import { NextResponse } from "next/server"
import { getSession } from "@/lib/auth"

export async function GET() {
  try {
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ success: false, error: "No autenticado" }, { status: 401 })
    }

    return NextResponse.json({
      success: true,
      data: session,
    })
  } catch (error) {
    console.error("Session error:", error)
    return NextResponse.json({ success: false, error: "Error interno del servidor" }, { status: 500 })
  }
}
