"use client";

import { Project } from "@/types/project";
import { useQuery } from "@tanstack/react-query";

async function fetchProjects() {
    const res = await fetch("/api/projects", { cache: "no-store" });
    if (!res.ok) throw new Error("Error al obtener proyectos");
    return res.json();
}

export function useProjectsQuery(initialData?: Project[]) {
    return useQuery<Project[]>({
        queryKey: ["projects"],
        queryFn: fetchProjects,
        initialData,
        staleTime: 0,
        refetchOnMount: "always",
    });
}