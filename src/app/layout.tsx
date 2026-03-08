import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer/Footer";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import Providers from "@/providers/Providers";
import { getSiteUrl } from "@/utils/site-url";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();
const socialImageUrl = `${siteUrl}/opengraph-image`;
const sameAsProfiles = [
  "https://github.com/ignaciotosini",
  "https://www.linkedin.com/in/ignacio-tosini/",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: "Ignacio Tosini",
      url: siteUrl,
      image: `${siteUrl}/dibujoFoto.webp`,
      sameAs: sameAsProfiles,
      jobTitle: "Frontend Developer",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Ignacio Tosini - Portfolio",
      url: siteUrl,
      inLanguage: "es",
      publisher: {
        "@id": `${siteUrl}#person`,
      },
    },
  ],
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ignacio Tosini - Portfolio",
  description: "Desarrollador Full Stack con experiencia en React, Node.js y bases de datos. Apasionado por crear soluciones web eficientes y escalables. En este portfolio encontrarás mis proyectos destacados, habilidades técnicas y formas de contacto. ¡Explora mi trabajo y no dudes en conectarte conmigo!",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ignacio Tosini - Portfolio",
    description: "Desarrollador Full Stack con experiencia en React, Node.js y bases de datos. Apasionado por crear soluciones web eficientes y escalables. En este portfolio encontrarás mis proyectos destacados, habilidades técnicas y formas de contacto. ¡Explora mi trabajo y no dudes en conectarte conmigo!",
    url: siteUrl,
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: socialImageUrl,
        alt: "Ignacio Tosini Portfolio",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignacio Tosini - Portfolio",
    description: "Desarrollador Full Stack con experiencia en React, Node.js y bases de datos. Apasionado por crear soluciones web eficientes y escalables. En este portfolio encontrarás mis proyectos destacados, habilidades técnicas y formas de contacto. ¡Explora mi trabajo y no dudes en conectarte conmigo!",
    images: [
      {
        url: socialImageUrl,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
