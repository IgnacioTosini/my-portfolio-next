import { ProjectSeed } from "../../types/project-seed";

export const helloAgenciaCreativaProject: ProjectSeed = {
    title: "Hello Agencia Creativa",
    slug: "hello-agencia-creativa",
    description: "Sitio web para una agencia creativa.",
    longDescription: "Sitio web para Hello Agencia Creativa, una agencia que ofrece servicios creativos. Incluye secciones de portafolio, contacto y blog, con un diseño moderno y responsivo. Desarrollado con Next.js, TypeScript y SCSS.",
    githubUrl: "https://github.com/IgnacioTosini/hello-agencia-creativa",
    demoUrl: "https://hello-agencia-creativa.vercel.app",
    year: 2025,
    featured: true,
    videoUrl: "/projects/hello-agencia-creativa/demo.mp4",
    technologies: ["Next.js", "TypeScript", "SCSS", "Node.js", "Prisma"],
    images: [
        {
            url: "/projects/hello-agencia-creativa/main.webp",
            alt: "Hello Agencia Creativa",
            order: 0
        },
        {
            url: "/projects/hello-agencia-creativa/services.webp",
            alt: "Hello Agencia Creativa - Services",
            order: 1
        },
        {
            url: "/projects/hello-agencia-creativa/portfolio.webp",
            alt: "Hello Agencia Creativa - Portfolio",
            order: 2
        },
        {
            url: "/projects/hello-agencia-creativa/diagnostic.webp",
            alt: "Hello Agencia Creativa - Diagnostic",
            order: 3
        },
        {
            url: "/projects/hello-agencia-creativa/contact.webp",
            alt: "Hello Agencia Creativa - Contact",
            order: 4
        },
        {
            url: "/projects/hello-agencia-creativa/adminPanel.webp",
            alt: "Hello Agencia Creativa - Admin Panel",
            order: 5
        },
        {
            url: "/projects/hello-agencia-creativa/adminPanelProjects.webp",
            alt: "Hello Agencia Creativa - Admin Panel Projects",
            order: 6
        },
        {
            url: "/projects/hello-agencia-creativa/adminPanelServices.webp",
            alt: "Hello Agencia Creativa - Admin Panel Services",
            order: 7
        },
        {
            url: "/projects/hello-agencia-creativa/adminPanelDiagnostic.webp",
            alt: "Hello Agencia Creativa - Admin Panel Diagnostic",
            order: 8
        }
    ]
};
