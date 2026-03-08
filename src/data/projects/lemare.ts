import { ProjectSeed } from "../../types/project-seed";

export const lemareProject: ProjectSeed = {
    title: "Lemare",
    slug: "lemare",
    description: "Pagína Informatica sobre el equipo de futbol Lemare Fc.",
    longDescription: "Lemare es una página informativa dedicada al equipo de fútbol Lemare FC. La plataforma ofrece a los fanáticos y seguidores del equipo una experiencia completa para mantenerse al día con las últimas noticias, estadísticas de jugadores. Desarrollada con React, TypeScript, SpringBoot y SCSS, la página presenta un diseño moderno y responsivo que se adapta a diferentes dispositivos. Los usuarios pueden explorar secciones dedicadas a la historia del club, perfiles de jugadores y una galería multimedia con fotos y videos destacados. Además, la plataforma incluye una sección de contacto para que los fans puedan interactuar con el equipo.",
    githubUrl: "https://github.com/IgnacioTosini/lemare-fc",
    demoUrl: "https://lemare-fc.vercel.app",
    year: 2025,
    featured: true,
    videoUrl: "/projects/lemare/demo.mp4",
    technologies: ["React", "TypeScript", "SCSS", "Node.js", "SpringBoot"],
    images: [
        {
            url: "/projects/lemare/main.webp",
            alt: "Lemare - Main Page",
            order: 0
        },
        {
            url: "/projects/lemare/explore.webp",
            alt: "Lemare - Explore Page",
            order: 1
        },
        {
            url: "/projects/lemare/uniform.webp",
            alt: "Lemare - Uniform Page",
            order: 2
        },
        {
            url: "/projects/lemare/team.webp",
            alt: "Lemare - Team Page",
            order: 3
        },
        {
            url: "/projects/lemare/playerDetails.webp",
            alt: "Lemare - Player Details Page",
            order: 4
        },
        {
            url: "/projects/lemare/multimedia.webp",
            alt: "Lemare - Multimedia Page",
            order: 5
        },
        {
            url: "/projects/lemare/aboutUs.webp",
            alt: "Lemare - About Us Page",
            order: 6
        }
    ]
};
