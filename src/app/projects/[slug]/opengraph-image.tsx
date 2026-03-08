import { ImageResponse } from "next/og";

interface Props {
  params: Promise<{ slug: string }>;
}

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const formatSlug = (slug: string) =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export default async function OpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const projectName = formatSlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "linear-gradient(135deg, #111827 0%, #0b1120 40%, #1d4ed8 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            opacity: 0.9,
            letterSpacing: 1.2,
          }}
        >
          PROYECTO
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 1020,
            }}
          >
            {projectName}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#cbd5e1",
            }}
          >
            Ignacio Tosini Portfolio
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#93c5fd",
          }}
        >
          my-portfolio-next.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
