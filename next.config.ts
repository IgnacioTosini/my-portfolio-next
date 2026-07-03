import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/dibujoFoto.png",
      },
      {
        pathname: "/fotoPerfil.jpeg",
      },
      {
        pathname: "/projects/**",
      },
    ],
  },
};

export default nextConfig;
