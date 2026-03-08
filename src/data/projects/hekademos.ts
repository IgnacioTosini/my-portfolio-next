import { ProjectSeed } from "../../types/project-seed";

export const hekademosProject: ProjectSeed = {
    title: "Hekademos",
    slug: "hekademos",
    description: "Plataforma educativa.",
    longDescription: "Plataforma educativa para la gestión de cursos, profesores y estudiantes. Permite a los usuarios registrarse como estudiantes o profesores, inscribirse en cursos, acceder a materiales de estudio y participar en actividades interactivas. Los profesores pueden crear y gestionar sus cursos, subir materiales, asignar tareas y evaluar el progreso de los estudiantes. Los estudiantes pueden navegar por el catálogo de cursos, inscribirse en los que les interesen y acceder a los contenidos desde cualquier dispositivo. Desarrollada con Next.js, TypeScript y SCSS, la plataforma ofrece una experiencia de usuario fluida y responsiva, con un diseño moderno y atractivo.",
    githubUrl: "https://github.com/IgnacioTosini/hekademos-next",
    demoUrl: "https://hekademos.vercel.app",
    year: 2025,
    featured: true,
    videoUrl: "/projects/hekademos/demo.mp4",
    technologies: ["Next.js", "TypeScript", "SCSS", "Node.js"],
    images: [
        {
            url: "/projects/hekademos/main.webp",
            alt: "Hekademos",
            order: 0
        },
        {
            url: "/projects/hekademos/aboutUs.webp",
            alt: "Hekademos - About Us",
            order: 1
        },
        {
            url: "/projects/hekademos/OurPillars.webp",
            alt: "Hekademos - Our Pillars",
            order: 2
        },
        {
            url: "/projects/hekademos/ourTeachers.webp",
            alt: "Hekademos - Our Teachers",
            order: 3
        },
        {
            url: "/projects/hekademos/ourClasses.webp",
            alt: "Hekademos - Our Classes",
            order: 4
        },
        {
            url: "/projects/hekademos/ourCommunity.webp",
            alt: "Hekademos - Our Community",
            order: 5
        },
        {
            url: "/projects/hekademos/filosophy.webp",
            alt: "Hekademos - Filosophy",
            order: 6
        },
        {
            url: "/projects/hekademos/contact.webp",
            alt: "Hekademos - Contact",
            order: 7
        },
        {
            url: "/projects/hekademos/exercises.webp",
            alt: "Hekademos - Exercises",
            order: 8
        }
    ]
};
