import { ProjectSeed } from "../../types/project-seed";

export const polivalenteProject: ProjectSeed = {
    title: "Polivalente de Arte",
    slug: "polivalente-de-arte",
    description: "Plataforma educativa.",
    longDescription: "Plataforma educativa desarrollada con React, TypeScript y SCSS. Ofrece una experiencia de usuario fluida y responsiva, con un diseño moderno y atractivo. Permite a los usuarios explorar diferentes especialidades artísticas, acceder a recursos educativos y participar en actividades interactivas. El proyecto se destaca por su enfoque en la usabilidad y la accesibilidad, asegurando que todos los usuarios puedan disfrutar de la plataforma sin importar sus habilidades técnicas.",
    githubUrl: "https://github.com/IgnacioTosini/polivalente-de-arte",
    demoUrl: "https://polivalente-de-arte.vercel.app",
    year: 2025,
    featured: true,
    videoUrl: "/projects/polivalente/demo.mp4",
    technologies: ["React", "TypeScript", "SCSS"],
    images: [
        {
            url: "/projects/polivalente/main.webp",
            alt: "Polivalente de Arte - Main",
            order: 0
        },
        {
            url: "/projects/polivalente/main2.webp",
            alt: "Polivalente de Arte - Main 2",
            order: 1
        },
        {
            url: "/projects/polivalente/institucional1.webp",
            alt: "Polivalente de Arte - Institucional 1",
            order: 2
        },
        {
            url: "/projects/polivalente/gallery.webp",
            alt: "Polivalente de Arte - Gallery",
            order: 3
        },
        {
            url: "/projects/polivalente/especialidades.webp",
            alt: "Polivalente de Arte - Especialidades",
            order: 4
        },
        {
            url: "/projects/polivalente/arteAbierto.webp",
            alt: "Polivalente de Arte - Arte Abierto",
            order: 5
        },
        {
            url: "/projects/polivalente/contact.webp",
            alt: "Polivalente de Arte - Contact",
            order: 6
        }
    ]
};
