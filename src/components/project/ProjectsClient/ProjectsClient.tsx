"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Project } from "@/types/project";
import { TechList } from "@/components/ui/TechList/TechList";
import { ProjectsGrid } from "@/components/ui/ProjectsGrid/ProjectsGrid";
import { Title } from "@/components/ui/Title/Title";
import { useLanguage } from "@/providers/LanguageProvider";
import { PROJECTS_SMOOTH_SCROLL_KEY } from "@/utils/navigation-scroll";
import { animateProjectsPage } from "./animations/projectsPageAnimations";
import './_projectsClient.scss'

interface Props {
    projects: Project[];
}

export default function ProjectsClient({ projects }: Props) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { t } = useLanguage();

    const selectedTechFromUrl = searchParams.get('tech');

    const handleSelectTech = useCallback((tech: string | null) => {
        const params = new URLSearchParams(searchParams.toString());

        if (tech) {
            params.set('tech', tech);
        } else {
            params.delete('tech');
        }

        const nextQuery = params.toString();
        router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, { scroll: false });
    }, [pathname, router, searchParams]);

    const filteredProjects = selectedTechFromUrl
        ? projects.filter(project =>
            project.technologies.some((technology) => technology.name === selectedTechFromUrl)
        )
        : projects;

    useEffect(() => {
        const shouldUseSmoothScroll = sessionStorage.getItem(PROJECTS_SMOOTH_SCROLL_KEY) === '1';
        sessionStorage.removeItem(PROJECTS_SMOOTH_SCROLL_KEY);

        if (!shouldUseSmoothScroll) {
            return;
        }

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });

    }, []);

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        return animateProjectsPage(containerRef.current);
    }, []);

    return (
        <div className="worksClient" ref={containerRef}>
            <div data-projects-page-anim="title">
                <Title text={t('projectsPage.title')} subTitle={t('projectsPage.subtitle')} />
            </div>
            <div data-projects-page-anim="filters">
                <TechList
                    selectedTech={selectedTechFromUrl}
                    onSelectTech={handleSelectTech}
                />
            </div>
            <div data-projects-page-anim="grid">
                <ProjectsGrid projects={filteredProjects} />
            </div>
        </div>
    );
}