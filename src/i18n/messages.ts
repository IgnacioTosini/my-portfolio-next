export const messages = {
    es: {
        navigation: {
            about: "Sobre mí",
            tech: "Tecnologías",
            projects: "Proyectos",
            contact: "Contacto",
            allProjects: "Todos los Proyectos",
            toggleMenu: "Abrir menú de navegación",
            switchToEn: "Cambiar a inglés",
            switchToEs: "Cambiar a español",
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
            github: "GitHub",
            linkedin: "LinkedIn",
            downloadCv: "Descargar CV",
            profileImageAlt: "Foto de perfil de Ignacio Tosini",
        },
        about: {
            title: "Sobre mí",
            subtitle: "Construyendo la web, componente a componente",
            paragraph1: "Soy un Frontend Developer apasionado por crear experiencias de usuario de alto nivel. Con una base sólida en React y en el ecosistema moderno de JavaScript, me especializo en construir aplicaciones escalables y performantes.",
            paragraph2: "Me enfoco en escribir código mantenible, accesible y orientado a producto, colaborando de cerca con equipos para transformar ideas en experiencias digitales claras y efectivas.",
        },
        technologies: {
            title: "Tecnologías",
            subtitle: "Mi Stack Técnico",
        },
        projectsSection: {
            title: "Proyectos Destacados",
            subtitle: "Trabajos Seleccionados",
        },
        contact: {
            title: "Contacto",
            subtitle: "Trabajemos juntos",
            description: "¿Tienes un proyecto en mente o simplemente quieres saludar? No dudes en contactarme. Estoy siempre abierto a nuevas oportunidades y colaboraciones. Puedes enviarme un correo electrónico o completar el formulario de contacto, y me aseguraré de responder lo antes posible. ¡Espero con interés saber de ti!",
        },
        contactForm: {
            sendErrorFallback: "Error al enviar",
            successToast: "Mensaje enviado correctamente ✅",
            errorToast: "No se pudo enviar el mensaje",
            nameLabel: "NOMBRE",
            nameRequired: "El nombre es requerido",
            namePlaceholder: "Tu nombre",
            emailLabel: "CORREO",
            emailRequired: "El email es requerido",
            emailInvalid: "Email inválido",
            emailPlaceholder: "tu@correo.com",
            messageLabel: "MENSAJE",
            messageRequired: "El mensaje es requerido",
            messagePlaceholder: "Cuéntame sobre tu proyecto...",
            sending: "Enviando...",
            submit: "Enviar Mensaje",
        },
        projectsPage: {
            title: "Proyectos",
            subtitle: "Todos mis trabajos",
            metadataTitle: "Proyectos",
            metadataDescription: "Portfolio de proyectos personales y profesionales.",
        },
        works: {
            allProjects: "Todos",
            swipeHint: "Desliza para ver más →",
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
            demoVideoAlt: "Video demo del proyecto",
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
            contact: "Contact",
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
            subtitle: "Let’s Work Together",
            description: "Do you have a project in mind or just want to say hello? Feel free to reach out. I'm always open to new opportunities and collaborations. You can send me an email or fill out the contact form, and I will make sure to respond as soon as possible. I look forward to hearing from you!",
        },
        contactForm: {
            sendErrorFallback: "Error sending message",
            successToast: "Message sent successfully ✅",
            errorToast: "Could not send the message",
            nameLabel: "NAME",
            nameRequired: "Name is required",
            namePlaceholder: "Your name",
            emailLabel: "EMAIL",
            emailRequired: "Email is required",
            emailInvalid: "Invalid email",
            emailPlaceholder: "you@email.com",
            messageLabel: "MESSAGE",
            messageRequired: "Message is required",
            messagePlaceholder: "Tell me about your project...",
            sending: "Sending...",
            submit: "Send Message",
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
            demoVideoAlt: "Project demo video",
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