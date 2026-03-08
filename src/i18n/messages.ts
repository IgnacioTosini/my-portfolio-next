export const messages = {
    es: {
        navigation: {
            about: "Sobre mi",
            tech: "Tecnologias",
            projects: "Proyectos",
            allProjects: "Todos los Proyectos",
            toggleMenu: "Abrir menu de navegacion",
            switchToEn: "Cambiar a ingles",
            switchToEs: "Cambiar a espanol",
            githubProfile: "Perfil de GitHub",
            linkedinProfile: "Perfil de LinkedIn",
        },
        locale: {
            es: "ES",
            en: "EN",
        },
        hero: {
            intro: "Hola, soy",
            role: "Desarrollador Frontend",
            description1: "Especializado en React, Next.js y TypeScript.",
            description2: "Construyo aplicaciones web performantes, accesibles y visualmente potentes con tecnologias modernas y arquitectura limpia.",
            github: "GitHub",
            linkedin: "LinkedIn",
            downloadCv: "Descargar CV",
            profileImageAlt: "Foto de perfil de Ignacio Tosini",
        },
        about: {
            title: "Sobre mi",
            subtitle: "Construyendo la web, componente a componente",
            paragraph1: "Soy un Frontend Developer apasionado por crear experiencias de usuario de alto nivel. Con una base solida en React y en el ecosistema moderno de JavaScript, me especializo en construir aplicaciones escalables y performantes.",
            paragraph2: "Me enfoco en escribir codigo mantenible, accesible y orientado a producto, colaborando de cerca con equipos para transformar ideas en experiencias digitales claras y efectivas.",
        },
        technologies: {
            title: "Tecnologias",
            subtitle: "Mi Stack Tecnico",
        },
        projectsSection: {
            title: "Proyectos Destacados",
            subtitle: "Trabajo Seleccionado",
        },
        contact: {
            title: "Contacto",
        },
        projectsPage: {
            title: "Proyectos",
            subtitle: "Todos mis trabajos",
            metadataTitle: "Proyectos",
            metadataDescription: "Portfolio de proyectos personales y profesionales.",
        },
        works: {
            allProjects: "Todos",
            swipeHint: "Desliza para ver mas →",
        },
        projectLinks: {
            github: "GitHub",
            demo: "Demo",
        },
        projectGallery: {
            backToProjects: "Volver a Proyectos",
            aboutProject: "Sobre este proyecto",
            browserNoVideo: "Tu navegador no soporta video HTML5.",
            showVideo: "Mostrar video",
            showImage: "Mostrar imagen",
            demoVideoAlt: "video demo del proyecto",
        },
        footer: {
            copyright: "© {year} Ignacio Tosini. Todos los derechos reservados.",
        },
    },
    en: {
        navigation: {
            about: "About",
            tech: "Tech",
            projects: "Projects",
            allProjects: "All Projects",
            toggleMenu: "Toggle navigation menu",
            switchToEn: "Switch to English",
            switchToEs: "Switch to Spanish",
            githubProfile: "GitHub profile",
            linkedinProfile: "LinkedIn profile",
        },
        locale: {
            es: "ES",
            en: "EN",
        },
        hero: {
            intro: "Hello, I'm",
            role: "Frontend Developer",
            description1: "Specialized in React, Next.js and TypeScript.",
            description2: "I build performant, accessible, and visually compelling web applications with modern technologies and clean architecture.",
            github: "GitHub",
            linkedin: "LinkedIn",
            downloadCv: "Download CV",
            profileImageAlt: "Ignacio Tosini profile picture",
        },
        about: {
            title: "About Me",
            subtitle: "Building the web, one component at a time",
            paragraph1: "I'm a Frontend Developer passionate about crafting exceptional user experiences. With a strong foundation in React and the modern JavaScript ecosystem, I specialize in building scalable and performant applications.",
            paragraph2: "I focus on writing maintainable, accessible, and product-driven code, working closely with teams to turn ideas into clear and effective digital experiences.",
        },
        technologies: {
            title: "Technologies",
            subtitle: "My Tech Stack",
        },
        projectsSection: {
            title: "Featured Projects",
            subtitle: "Selected Work",
        },
        contact: {
            title: "Contact",
        },
        projectsPage: {
            title: "Projects",
            subtitle: "All my work",
            metadataTitle: "Projects",
            metadataDescription: "Portfolio of personal and professional projects.",
        },
        works: {
            allProjects: "All",
            swipeHint: "Swipe to see more →",
        },
        projectLinks: {
            github: "GitHub",
            demo: "Demo",
        },
        projectGallery: {
            backToProjects: "Back to Projects",
            aboutProject: "About this project",
            browserNoVideo: "Your browser does not support HTML5 video.",
            showVideo: "Show video",
            showImage: "Show image",
            demoVideoAlt: "project demo video",
        },
        footer: {
            copyright: "© {year} Ignacio Tosini. All rights reserved.",
        },
    },
} as const;

export type AppLocale = keyof typeof messages;

export const defaultLocale: AppLocale = "es";

const isObjectRecord = (value: unknown): value is Record<string, unknown> => {
    return typeof value === "object" && value !== null;
};

export const getMessage = (locale: AppLocale, key: string): string => {
    const segments = key.split(".");
    let current: unknown = messages[locale];

    for (const segment of segments) {
        if (!isObjectRecord(current) || !(segment in current)) {
            current = undefined;
            break;
        }

        current = current[segment];
    }

    if (typeof current === "string") return current;

    if (locale !== defaultLocale) {
        return getMessage(defaultLocale, key);
    }

    return key;
};
