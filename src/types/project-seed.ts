export interface ProjectSeedImage {
    url: string;
    alt?: string;
    order: number;
}

export interface ProjectSeed {
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    githubUrl: string;
    demoUrl: string;
    year: number;
    videoUrl?: string;
    featured: boolean;
    technologies: string[];
    images: ProjectSeedImage[];
}
