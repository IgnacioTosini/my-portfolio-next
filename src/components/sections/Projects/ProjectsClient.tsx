"use client";

import { useEffect, useRef } from "react";
import { Title } from "@/components/ui/Title/Title";
import { ProjectsGrid } from "@/components/ui/ProjectsGrid/ProjectsGrid";
import { useLanguage } from "@/providers/LanguageProvider";
import type { Project } from "@/types/project";
import { animateProjects } from "./animations/projectsAnimations";

interface ProjectsClientProps {
    projects: Project[];
}

export const ProjectsClient = ({ projects }: ProjectsClientProps) => {
    const projectsRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        if (!projectsRef.current) return;

        return animateProjects(projectsRef.current);
    }, []);

    return (
        <div className="projects" id="projects" ref={projectsRef}>
            <div data-projects-anim="title">
                <Title text={t('projectsSection.title')} subTitle={t('projectsSection.subtitle')} />
            </div>
            <div data-projects-anim="grid">
                <ProjectsGrid projects={projects} />
            </div>
        </div>
    );
};
