import { getProjects } from "@/actions/project/getProjects";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
    try {
        const data = await getProjects();
        return NextResponse.json(data, { status: 200 });
    } catch {
        return NextResponse.json({ message: "Error al obtener proyectos" }, { status: 500 });
    }
}