import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer/Footer";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import Providers from "@/providers/Providers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ignacio Tosini - Portfolio",
  description: "Desarrollador Full Stack con experiencia en React, Node.js y bases de datos. Apasionado por crear soluciones web eficientes y escalables. En este portfolio encontrarás mis proyectos destacados, habilidades técnicas y formas de contacto. ¡Explora mi trabajo y no dudes en conectarte conmigo!",
  openGraph: {
    title: "Ignacio Tosini - Portfolio",
    description: "Desarrollador Full Stack con experiencia en React, Node.js y bases de datos. Apasionado por crear soluciones web eficientes y escalables. En este portfolio encontrarás mis proyectos destacados, habilidades técnicas y formas de contacto. ¡Explora mi trabajo y no dudes en conectarte conmigo!",
    url: "https://ignaciotosini.com",
    images: [
      {
        url: "https://ignaciotosini.com/dibujoFoto.webp",
        alt: "Ignacio Tosini Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignacio Tosini - Portfolio",
    description: "Desarrollador Full Stack con experiencia en React, Node.js y bases de datos. Apasionado por crear soluciones web eficientes y escalables. En este portfolio encontrarás mis proyectos destacados, habilidades técnicas y formas de contacto. ¡Explora mi trabajo y no dudes en conectarte conmigo!",
    images: [
      {
        url: "https://ignaciotosini.com/dibujoFoto.webp",
        alt: "Ignacio Tosini Portfolio",
      },
    ],
  },
  icons: {
    icon: "/dibujoFoto.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${spaceGrotesk.variable}`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
