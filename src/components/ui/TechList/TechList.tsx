'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import type { Project } from '@/types/project';
import './_techList.scss';

const HINT_STORAGE_KEY = 'project-list-hint-seen';

interface Props {
    projects: Project[];
    selectedTech: string | null;
    onSelectTech: (id: string | null) => void;
}

export const TechList = ({ projects, selectedTech, onSelectTech }: Props) => {
    const { t } = useLanguage();
    const technologyCounts = useMemo(() => {
        const counts = new Map<string, number>();

        projects.forEach((project) => {
            project.technologies.forEach((technology) => {
                counts.set(technology.name, (counts.get(technology.name) ?? 0) + 1);
            });
        });

        return Array.from(counts.entries()).sort(([firstTech], [secondTech]) =>
            firstTech.localeCompare(secondTech)
        );
    }, [projects]);

    const listRef = useRef<HTMLUListElement>(null);
    const [isScrollable, setIsScrollable] = useState(false);
    const [hasSeenHint, setHasSeenHint] = useState(() => {
        if (typeof window === 'undefined') {
            return true;
        }

        return sessionStorage.getItem(HINT_STORAGE_KEY) === 'true';
    });

    useEffect(() => {
        const list = listRef.current;

        if (!list) {
            return;
        }

        const updateScrollableState = () => {
            const hasHorizontalOverflow = list.scrollWidth > list.clientWidth + 4;
            setIsScrollable(hasHorizontalOverflow);
        };

        const frameId = window.requestAnimationFrame(updateScrollableState);
        window.addEventListener('resize', updateScrollableState);

        return () => {
            window.cancelAnimationFrame(frameId);
            window.removeEventListener('resize', updateScrollableState);
        };
    }, [projects.length]);

    const showHint = isScrollable && !hasSeenHint;

    const hideHint = () => {
        if (!showHint) {
            return;
        }

        setHasSeenHint(true);
        sessionStorage.setItem(HINT_STORAGE_KEY, 'true');
    };

    return (
        <div className={`techListWrapper ${isScrollable ? 'is-scrollable' : ''}`}>
            <ul
                ref={listRef}
                className="techList"
                onScroll={hideHint}
                onTouchStart={hideHint}
            >
                <li
                    className={`tech ${selectedTech === null ? 'selected' : ''}`}
                    onClick={() => {
                        hideHint();
                        onSelectTech(null);
                    }}
                >
                    {t("works.allProjects")}
                </li>

                {technologyCounts.map(([tech, projectCount]) => {
                    return (
                        <li
                            key={tech}
                            data-tech-item="true"
                            className={`tech ${selectedTech === tech ? 'selected' : ''}`}
                            onClick={() => {
                                hideHint();
                                onSelectTech(tech);
                            }}
                        >
                            <span>{tech}</span>
                            <span className="techCount">({projectCount})</span>
                        </li>
                    );
                })}
            </ul>

            {showHint && isScrollable && (
                <span className="techListHint" aria-hidden="true">
                    {t("works.swipeHint")}
                </span>
            )}
        </div>
    );
};
