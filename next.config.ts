import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/dibujoFoto.webp",
      },
      {
        pathname: "/dibujoFoto.jpg",
      },
      {
        pathname: "/dibujoFoto.png",
      },
      {
        pathname: "/perfil.jpeg",
      },
      {
        pathname: "/projects/**",
      },
    ],
  },
};

export default nextConfig;
