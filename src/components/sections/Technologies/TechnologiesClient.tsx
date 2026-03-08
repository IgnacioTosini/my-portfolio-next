"use client";

import { useEffect, useRef } from "react";
import { Title } from "@/components/ui/Title/Title";
import { TechnologyCard } from "@/components/ui/TechnologyCard/TechnologyCard";
import { useLanguage } from "@/providers/LanguageProvider";
import type { Technology } from "@/types/technology";
import { animateTechnologies } from "./animations/technologiesAnimations";

interface TechnologiesClientProps {
    technologies: Technology[];
}

export const TechnologiesClient = ({ technologies }: TechnologiesClientProps) => {
    const technologiesRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        if (!technologiesRef.current) return;

        return animateTechnologies(technologiesRef.current);
    }, []);

    return (
        <div className="technologies" id="tech" ref={technologiesRef}>
            <div data-technologies-anim="title">
                <Title text={t('technologies.title')} subTitle={t('technologies.subtitle')} />
            </div>
            <div className="technologiesGrid" data-technologies-anim="grid">
                {technologies.map((technology) => (
                    <div key={technology.id} className="technology" data-technologies-anim="card">
                        <TechnologyCard technology={technology} />
                    </div>
                ))}
            </div>
        </div>
    );
};
