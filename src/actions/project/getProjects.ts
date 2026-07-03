import { prisma } from "@/lib/prisma";
import { Project } from "@/types/project";

export const getProjects = async (): Promise<Project[]> => {
    try {
        const projects = await prisma.project.findMany({
            include: {
                technologies: true,
                images: {
                    orderBy: {
                        order: "asc",
                    },
                },
            },
        });

        return projects;
    } catch (error) {
        console.error("Error al obtener proyectos:", error);
        throw new Error("Error al obtener proyectos");
    }
};
