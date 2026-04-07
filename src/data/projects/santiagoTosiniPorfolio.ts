import { ProjectSeed } from "@/types/project-seed";

export const santiagoTosiniPortfolioProject: ProjectSeed = {
    title: "Santiago Tosini Portfolio",
    slug: "santiago-tosini-portfolio",
    description: "Portfolio oficial de Santiago Tosini, creador de contenido deportivo, con métricas de audiencia e integraciones con YouTube, Instagram y TikTok.",
    longDescription: "Sitio web desarrollado con Next.js 16, React 19 y TypeScript para presentar la marca personal de Santiago Tosini, su contenido de fútbol y sus propuestas de colaboración con sponsors. Incluye una landing moderna con animaciones en GSAP, secciones de presentación, servicios, contacto y métricas de audiencia, además de endpoints API para consultar y sincronizar analytics de YouTube, Instagram y TikTok con datos fallback cuando alguna plataforma no está disponible.",
    githubUrl: "https://github.com/IgnacioTosini/santiago-tosini-porfolio",
    demoUrl: "https://www.santiagotosini.com",
    year: 2026,
    featured: true,
    technologies: ["Next.js", "TypeScript", "SCSS"],
    videoUrl: "/projects/santiagoTosiniPortfolio/demo.mp4",
    images: [
        {
            url: "/projects/santiagoTosiniPortfolio/main.webp",
            alt: "Santiago Tosini Portfolio",
            order: 0
        },
        {
            url: "/projects/santiagoTosiniPortfolio/journey.webp",
            alt: "Santiago Tosini Portfolio - Journey",
            order: 1
        },
        {
            url: "/projects/santiagoTosiniPortfolio/about.webp",
            alt: "Santiago Tosini Portfolio - About",
            order: 2
        },
        {
            url: "/projects/santiagoTosiniPortfolio/socialMain.webp",
            alt: "Santiago Tosini Portfolio - Social Main",
            order: 3
        },
        {
            url: "/projects/santiagoTosiniPortfolio/igSocial.webp",
            alt: "Santiago Tosini Portfolio - Instagram Social",
            order: 4
        },
        {
            url: "/projects/santiagoTosiniPortfolio/tiktokSocial.webp",
            alt: "Santiago Tosini Portfolio - TikTok Social",
            order: 5
        },
        {
            url: "/projects/santiagoTosiniPortfolio/ytSocial.webp",
            alt: "Santiago Tosini Portfolio - YouTube Social",
            order: 6
        },
        {
            url: "/projects/santiagoTosiniPortfolio/services.webp",
            alt: "Santiago Tosini Portfolio - Services",
            order: 7
        },
        {
            url: "/projects/santiagoTosiniPortfolio/sponsors.webp",
            alt: "Santiago Tosini Portfolio - Sponsors",
            order: 8
        },
        {
            url: "/projects/santiagoTosiniPortfolio/contact.webp",
            alt: "Santiago Tosini Portfolio - Contact",
            order: 9
        }
    ]
}