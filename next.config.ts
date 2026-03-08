import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/dibujoFoto.webp",
      },
      {
        pathname: "/projects/**",
      },
    ],
  },
};

export default nextConfig;
