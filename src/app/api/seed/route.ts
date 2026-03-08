import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

import { technologies } from "@/data/technologies";
import { projects } from "@/data/projects/index";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function runSeed() {

    await prisma.image.deleteMany();
    await prisma.project.deleteMany();
    await prisma.technology.deleteMany();

    await prisma.technology.createMany({
        data: technologies,
        skipDuplicates: true
    });

    const techs = await prisma.technology.findMany();

    const techIdByName = new Map(
        techs.map((tech) => [tech.name, tech.id])
    );

    for (const project of projects) {
        const missingTechnologies = project.technologies.filter(
            (name) => !techIdByName.has(name)
        );

        if (missingTechnologies.length > 0) {
            return NextResponse.json(
                {
                    message: "Seed failed",
                    project: project.slug,
                    missingTechnologies,
                },
                { status: 400 }
            );
        }

        const technologyConnections = project.technologies.map((name) => ({
            id: techIdByName.get(name)!
        }));

        await prisma.project.create({
            data: {
                title: project.title,
                slug: project.slug,
                description: project.description,
                longDescription: project.longDescription,
                githubUrl: project.githubUrl,
                demoUrl: project.demoUrl,
                year: project.year,
                videoUrl: project.videoUrl,
                featured: project.featured,

                technologies: {
                    connect: technologyConnections
                },

                images: {
                    create: project.images
                }
            }
        });

    }

    const response = NextResponse.json({
        message: "Seed executed 🌱"
    });

    response.cookies.set({
        name: "portfolio-seed-buster",
        value: String(Date.now()),
        path: "/",
        sameSite: "lax",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 365,
    });

    return response;

}

export async function GET() {
    return runSeed();
}

export async function POST() {
    return runSeed();
}