'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { Project } from "@/types/project";
import { TechBadge } from "@/components/ui/TechBadge/TechBadge";
import { ProjectLinks } from "@/components/ui/ProjectLinks/ProjectLinks";
import { useLanguage } from "@/providers/LanguageProvider";
import { animateProjectGallery, animateProjectMediaSwap } from "./animations/projectGalleryAnimations";
import './_projectGallery.scss';

interface Props {
    project: Project;
    selectedTechParam?: string | null;
}

type GalleryMedia = {
    id: string;
    type: "image" | "video";
    url: string;
    alt: string;
    poster?: string;
};

export default function ProjectGallery({ project, selectedTechParam = null }: Props) {
    const { t } = useLanguage();
    const mediaVersion = new Date(project.updatedAt).getTime();
    const withVersion = (url: string) => `${url}${url.includes("?") ? "&" : "?"}v=${mediaVersion}`;

    const firstImage = project.images?.[0];

    const imageMedia: GalleryMedia[] = project.images.map((image) => ({
        id: `image-${image.id}`,
        type: "image",
        url: withVersion(image.url),
        alt: image.alt || project.title,
    }));

    const mediaItems: GalleryMedia[] = [
        ...(project.videoUrl
            ? [{
                id: "project-video",
                type: "video" as const,
                url: withVersion(project.videoUrl),
                alt: `${project.title} ${t('projectGallery.demoVideoAlt')}`,
                poster: firstImage?.url ? withVersion(firstImage.url) : undefined,
            }]
            : []),
        ...imageMedia,
    ];

    const [mainMedia, setMainMedia] = useState<GalleryMedia>(
        mediaItems[0] ?? {
            id: "fallback",
            type: "image",
            url: "/placeholder.png",
            alt: project.title,
        }
    );
    const workPageRef = useRef<HTMLDivElement | null>(null);
    const imageContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!workPageRef.current) {
            return;
        }

        return animateProjectGallery(workPageRef.current);
    }, []);

    useEffect(() => {
        if (!imageContainerRef.current) {
            return;
        }

        animateProjectMediaSwap(imageContainerRef.current);
    }, [mainMedia.id]);

    const handleSelectMedia = (media: GalleryMedia) => {
        if (mainMedia.id !== media.id) {
            setMainMedia(media);
        }
    };

    const backHref = selectedTechParam
        ? {
            pathname: '/projects',
            query: { tech: selectedTechParam },
        }
        : '/projects';

    return (
        <div ref={workPageRef} className="projectGallery">
            <div className="projectPageContainer">
                <Link href={backHref} className="backButton" data-project-gallery-anim="back">
                    <IoArrowBack /> {t('projectGallery.backToProjects')}
                </Link>

                <div className="projectData">
                    <div className="projectDataHeader" data-project-gallery-anim="header">
                        <h1>{project.title}<span>{project.year}</span></h1>
                        <div className="projectTechnologies">
                            {
                                project.technologies.map(tech => (
                                    <TechBadge key={tech.id} tech={tech} />
                                ))
                            }
                        </div>
                        <ProjectLinks githubUrl={project.githubUrl ?? undefined} demoUrl={project.demoUrl ?? undefined} />
                    </div>
                </div>

                <div ref={imageContainerRef} className="imageContainer" data-project-gallery-anim="media">
                    {mainMedia.type === "image" ? (
                        <Image
                            src={mainMedia.url}
                            alt={mainMedia.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="mainProjectImage"
                        />
                    ) : (
                        <video
                            src={mainMedia.url}
                            poster={mainMedia.poster}
                            className="mainProjectImage"
                            controls
                            muted
                            preload="metadata"
                        >
                            {t('projectGallery.browserNoVideo')}
                        </video>
                    )}
                </div>

                <div className="imagesList">
                    {mediaItems.map((media) => (
                        <button
                            key={media.id}
                            type="button"
                            className={`mediaThumbButton ${mainMedia.id === media.id ? "active" : ""}`}
                            onClick={() => handleSelectMedia(media)}
                            aria-label={media.type === 'video' ? t('projectGallery.showVideo') : t('projectGallery.showImage')}
                            data-project-gallery-anim="thumb"
                        >
                            {media.type === "image" ? (
                                <Image
                                    src={media.url}
                                    alt={media.alt}
                                    width={400}
                                    height={300}
                                    className="projectCardImage"
                                />
                            ) : (
                                <video
                                    src={media.url}
                                    poster={media.poster}
                                    className="projectCardImage"
                                    muted
                                    preload="metadata"
                                />
                            )}
                        </button>
                    ))}
                </div>

                <div className="projectDescription" data-project-gallery-anim="description">
                    <h2>{t('projectGallery.aboutProject')}</h2>
                    <p className="shortDescription">{project.description}</p>
                    <p className="longDescription">{project.longDescription}</p>
                </div>
            </div>
        </div>
    );
}