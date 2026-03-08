import { ProjectSeed } from "../../types/project-seed";

export const crostiFocacciaProject: ProjectSeed = {
    title: "Crosti Focaccia",
    slug: "crosti-focaccia",
    description: "Sistema de pedidos para una focacceria.",
    longDescription:
        "Aplicación full stack para gestionar pedidos, productos y clientes. Incluye panel de administración para la gestión de productos y pedidos, y una interfaz de usuario para realizar pedidos en línea. Desarrollada con Next.js, TypeScript, Prisma y PostgreSQL. Implementa autenticación de usuarios, gestión de sesiones y un sistema de roles para diferenciar entre clientes y administradores. El panel de administración permite a los administradores agregar, editar y eliminar productos, así como gestionar los pedidos recibidos. La interfaz de usuario es responsiva y fácil de usar, permitiendo a los clientes navegar por el menú, personalizar sus pedidos y realizar pagos en línea.",
    githubUrl: "https://github.com/IgnacioTosini/crosti-focaccias-next",
    demoUrl: "https://crosti-focaccias.vercel.app",
    year: 2025,
    videoUrl: "/projects/crosti/demo.mp4",
    featured: true,
    technologies: ["Next.js", "TypeScript", "SpringBoot", "Node.js", "SCSS"],
    images: [
        {
            url: "/projects/crosti/main.webp",
            alt: "Crosti Focaccia",
            order: 0
        },
        {
            url: "/projects/crosti/about.webp",
            alt: "Crosti Focaccia - About",
            order: 1
        },
        {
            url: "/projects/crosti/products.webp",
            alt: "Crosti Focaccia - Products",
            order: 2
        },
        {
            url: "/projects/crosti/howToOrder.webp",
            alt: "Crosti Focaccia - How to Order",
            order: 3
        },
        {
            url: "/projects/crosti/order.webp",
            alt: "Crosti Focaccia - Order",
            order: 4
        },
        {
            url: "/projects/crosti/adminPanelProducts.webp",
            alt: "Crosti Focaccia - Admin Panel Products",
            order: 5
        },
        {
            url: "/projects/crosti/adminPanelOrders.webp",
            alt: "Crosti Focaccia - Admin Panel Orders",
            order: 6
        }
    ]
};
