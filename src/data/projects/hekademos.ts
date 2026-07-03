import { ProjectSeed } from "../../types/project-seed";

export const hekademosProject: ProjectSeed = {
    title: "Hekademos",
    slug: "hekademos",
    description: "Sistema de gestión para gimnasio.",
    longDescription: "Sistema integral desarrollado para Hekademos, orientado a centralizar la gestión diaria de un gimnasio. Permite administrar usuarios, alumnos, coaches, membresías, pagos, turnos, asistencia, rutinas y solicitudes de cambio de horario desde un panel administrativo. Los coaches pueden consultar sus alumnos, revisar horarios, actualizar rutinas y registrar información relevante, mientras que los alumnos cuentan con un perfil propio para ver su plan, pagos, asistencia, turnos elegidos, rutina y solicitar cambios. También incorpora recordatorios por email, recuperación de contraseña, auditoría de acciones, carga de imágenes con Cloudinary y una base de datos PostgreSQL gestionada con Prisma. Desarrollado con Next.js, TypeScript y SCSS, ofrece una experiencia responsive, ordenada y adaptada a las necesidades reales de administración de Hekademos.",
    githubUrl: "https://github.com/IgnacioTosini/hekademos-next",
    demoUrl: "https://hekademos.vercel.app",
    year: 2025,
    featured: true,
    videoUrl: "/projects/hekademos/demo.mp4",
    technologies: ["Next.js", "TypeScript", "SCSS", "Node.js", "Prisma"],
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
