import { Technology } from "./technology";

export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    longDescription?: string | null;
    images: ProjectImage[];
    githubUrl?: string | null;
    demoUrl?: string | null;
    videoUrl?: string | null;
    year: number | null;
    featured: boolean;
    createdAt: Date;
    updatedAt: Date;
    technologies: Technology[];
}

export interface ProjectImage {
    id: string;
    url: string;
    alt?: string | null;
    order: number;
}