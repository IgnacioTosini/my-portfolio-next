import { ProjectSeed } from "../../types/project-seed";

export const donnaEcommerceProject: ProjectSeed = {
    title: "Donna Ecommerce",
    slug: "donna-ecommerce",
    description: "Tienda online de indumentaria con panel administrativo.",
    longDescription: "Tienda ecommerce desarrollada para gestionar y vender productos de indumentaria online. Incluye un sitio público responsive con catálogo de productos, categorías, búsqueda, filtros por género, talle, color, precio, destacados y ofertas, detalle de producto con galería de imágenes, variantes por color y talle, control de stock, carrito lateral y checkout conectado con WhatsApp. También incorpora un panel administrativo protegido para gestionar productos, categorías, banners y pedidos, con creación, edición y eliminación de registros, carga de imágenes con Cloudinary, actualización de estados de pedido, reserva y restauración automática de stock, sitemap, robots y revalidación de páginas. Desarrollado con Next.js, React, TypeScript, SCSS, Prisma y PostgreSQL, ofrece una experiencia moderna, ordenada y adaptable tanto para clientes como para administración.",
    githubUrl: "https://github.com/IgnacioTosini/donna-ecommerce",
    demoUrl: "https://donna-ecommerce.vercel.app",
    year: 2026,
    featured: true,
    videoUrl: "/projects/donna-ecommerce/demo.mp4",
    technologies: ["Next.js", "React", "TypeScript", "SCSS", "Prisma", "PostgreSQL", "Cloudinary", "Zustand"],
    images: [
        {
            url: "/projects/donna-ecommerce/main.webp",
            alt: "Donna Ecommerce",
            order: 0
        },
        {
            url: "/projects/donna-ecommerce/categories.webp",
            alt: "Donna Ecommerce - Categories",
            order: 1
        },
        {
            url: "/projects/donna-ecommerce/bestSellers.webp",
            alt: "Donna Ecommerce - Best Sellers",
            order: 2
        },
        {
            url: "/projects/donna-ecommerce/about.webp",
            alt: "Donna Ecommerce - About",
            order: 3
        },
        {
            url: "/projects/donna-ecommerce/footer.webp",
            alt: "Donna Ecommerce - Footer",
            order: 4
        },
        {
            url: "/projects/donna-ecommerce/productsList.webp",
            alt: "Donna Ecommerce - Products List",
            order: 5
        },
        {
            url: "/projects/donna-ecommerce/productDetails.webp",
            alt: "Donna Ecommerce - Product Details",
            order: 6
        },
        {
            url: "/projects/donna-ecommerce/dashboardMenu.webp",
            alt: "Donna Ecommerce - Dashboard Menu",
            order: 7
        },
        {
            url: "/projects/donna-ecommerce/dashboardProducts.webp",
            alt: "Donna Ecommerce - Dashboard Products",
            order: 8
        },
        {
            url: "/projects/donna-ecommerce/dashboardOrders.webp",
            alt: "Donna Ecommerce - Dashboard Orders",
            order: 9
        }
    ]
};
