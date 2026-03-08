'use server'

import { prisma } from "@/lib/prisma"
import { Project } from "@/types/project";

export const getProjectBySlug = async (slug: string): Promise<Project | null> => {
    try {
        if (!slug?.trim()) return null;
        const project = await prisma.project.findUnique({
            include: {
                technologies: true,
                images: {
                    orderBy: {
                        order: "asc",
                    },
                },
            },
            where: {
                slug
            }
        })

        if (!project) return null;

        return project;

    } catch (error) {
        console.log(error)
        throw new Error('Error al obtener project por slug')
    }
}