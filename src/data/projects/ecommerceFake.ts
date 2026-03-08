import { ProjectSeed } from "@/types/project-seed";

export const ecommerceFakeProject: ProjectSeed = {
    title: "Ecommerce Fake",
    slug: "ecommerce-fake",
    description: "Ecommerce Fake.",
    longDescription: "Ecommerce Fake desarrollado con React, TypeScript y SCSS. Muestra proyectos y habilidades del desarrollador, ofreciendo una experiencia de usuario fluida y responsiva, con un diseño moderno y atractivo. El proyecto incluye una sección de productos, detalles de productos, carrito de compras, perfil de usuario, historial de pedidos y un panel de administración para gestionar productos y pedidos. El backend se implementó con Spring Boot, proporcionando una API RESTful para manejar la lógica del negocio y la persistencia de datos.",
    githubUrl: "https://github.com/IgnacioTosini/e-commerce-fake",
    demoUrl: "https://eclothes-fake-store.vercel.app",
    year: 2025,
    featured: true,
    technologies: ["React", "TypeScript", "SpringBoot", "SCSS"],
    videoUrl: "/projects/ecommerceFake/demo.mp4",
    images: [
        {
            url: "/projects/ecommerceFake/main.webp",
            alt: "Ecommerce Fake - Main Page",
            order: 0
        },
        {
            url: "/projects/ecommerceFake/productsSection.webp",
            alt: "Ecommerce Fake - Products Section",
            order: 1
        },
        {
            url: "/projects/ecommerceFake/productDetails.webp",
            alt: "Ecommerce Fake - Product Details Page",
            order: 2
        },
        {
            url: "/projects/ecommerceFake/cart.webp",
            alt: "Ecommerce Fake - Processing Cart",
            order: 3
        },
        {
            url: "/projects/ecommerceFake/profile.webp",
            alt: "Ecommerce Fake - Profile Page",
            order: 4
        },
        {
            url: "/projects/ecommerceFake/profileDetails.webp",
            alt: "Ecommerce Fake - Profile Details Page",
            order: 5
        },
        {
            url: "/projects/ecommerceFake/orders.webp",
            alt: "Ecommerce Fake - Orders Page",
            order: 6
        },
        {
            url: "/projects/ecommerceFake/orderDetails.webp",
            alt: "Ecommerce Fake - Order Details Page",
            order: 7
        },
        {
            url: "/projects/ecommerceFake/abm.webp",
            alt: "Ecommerce Fake - Abm Page",
            order: 8
        },
        {
            url: "/projects/ecommerceFake/abmProductList.webp",
            alt: "Ecommerce Fake - ABM Product List",
            order: 9
        },
        {
            url: "/projects/ecommerceFake/abmProductDetails.webp",
            alt: "Ecommerce Fake - ABM Product Details",
            order: 10
        }
    ]
}