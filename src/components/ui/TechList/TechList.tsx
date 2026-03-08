'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { useProjectsQuery } from '@/hooks/project/useProjectsQuery';
import './_techList.scss';

interface Props {
    selectedTech: string | null;
    onSelectTech: (id: string | null) => void;
}

export const TechList = ({ selectedTech, onSelectTech }: Props) => {
    const { data: projects = [] } = useProjectsQuery();
    const { t } = useLanguage();
    const uniqueTechnologies = Array.from(
        new Set(
            projects.flatMap(project => project.technologies.map((technology) => technology.name))
        )
    ).sort((a, b) => a.localeCompare(b));

    const listRef = useRef<HTMLUListElement>(null);
    const [isScrollable, setIsScrollable] = useState(false);
    const [hasSeenHint, setHasSeenHint] = useState(() => {
        if (typeof window === 'undefined') {
            return true;
        }

        return sessionStorage.getItem('client-list-hint-seen') === 'true';
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

    /*     useGSAP(() => {
            if (prefersReducedMotion()) {
                return;
            }
    
            const list = listRef.current;
            if (!list) {
                return;
            }
    
            const newProjectItems = Array.from(
                list.querySelectorAll<HTMLElement>('.project[data-project-item="true"]:not([data-project-animated="true"])')
            );
    
            if (newProjectItems.length === 0) {
                return;
            }
    
            newProjectItems.forEach((item) => {
                item.setAttribute('data-project-animated', 'true');
            });
    
            gsap.fromTo(
                newProjectItems,
                {
                    autoAlpha: 0,
                    y: 10,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.3,
                    stagger: 0.06,
                    ease: motionPreset.ease,
                    clearProps: 'opacity,visibility,transform',
                }
            );
        }, [sortedProjects.length]); */

    const showHint = isScrollable && !hasSeenHint;

    const hideHint = () => {
        if (!showHint) {
            return;
        }

        setHasSeenHint(true);
        sessionStorage.setItem('project-list-hint-seen', 'true');
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

                {uniqueTechnologies.map((tech) => {
                    const projectCount = projects.filter(p =>
                        p.technologies.some((technology) => technology.name === tech)
                    ).length;

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