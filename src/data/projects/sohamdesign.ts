import { ProjectSeed } from "../../types/project-seed";

export const sohamDesignProject: ProjectSeed = {
    title: "So ham Design",
    slug: "so-ham-design",
    description: "Sistema de gestión para gimnasio.",
    longDescription: "Sistema integral desarrollado para So ham Design, orientado a centralizar la gestión diaria de un gimnasio. Permite administrar usuarios, alumnos, coaches, membresías, pagos, turnos, asistencia, rutinas y solicitudes de cambio de horario desde un panel administrativo. Los coaches pueden consultar sus alumnos, revisar horarios, actualizar rutinas y registrar información relevante, mientras que los alumnos cuentan con un perfil propio para ver su plan, pagos, asistencia, turnos elegidos, rutina y solicitar cambios. También incorpora recordatorios por email, recuperación de contraseña, auditoría de acciones, carga de imágenes con Cloudinary y una base de datos PostgreSQL gestionada con Prisma. Desarrollado con Next.js, TypeScript y SCSS, ofrece una experiencia responsive, ordenada y adaptada a las necesidades reales de administración de So ham Design.",
    githubUrl: "https://github.com/IgnacioTosini/so-ham-desing",
    demoUrl: "https://so-ham-desing.vercel.app",
    year: 2025,
    featured: true,
    videoUrl: "/projects/soham-design/demo.mp4",
    technologies: ["Next.js", "TypeScript", "SCSS", "Node.js", "Prisma"],
    images: [
        {
            url: "/projects/soham-design/main.webp",
            alt: "So ham Design",
            order: 0
        },
        {
            url: "/projects/soham-design/seeProducts.webp",
            alt: "So ham Design - See Products",
            order: 1
        },
        {
            url: "/projects/soham-design/createYourPiece.webp",
            alt: "So ham Design - Create Your Piece",
            order: 2
        },
        {
            url: "/projects/soham-design/simulate.webp",
            alt: "So ham Design - Simulate",
            order: 3
        },
        {
            url: "/projects/soham-design/about.webp",
            alt: "So ham Design - About",
            order: 4
        },
        {
            url: "/projects/soham-design/adminGeneral.webp",
            alt: "So ham Design - Admin General",
            order: 5
        },
        {
            url: "/projects/soham-design/editStone.webp",
            alt: "So ham Design - Edit Stone",
            order: 6
        },
        {
            url: "/projects/soham-design/editProduct.webp",
            alt: "So ham Design - Edit Product",
            order: 7
        }
    ]
};
