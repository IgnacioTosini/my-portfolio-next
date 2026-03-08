import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
            "radial-gradient(circle at 20% 20%, #1f2937 0%, #0f172a 55%, #020617 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            opacity: 0.9,
            letterSpacing: 1.5,
          }}
        >
          IGNACIO TOSINI
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
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Frontend Developer
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#cbd5e1",
              maxWidth: 980,
            }}
          >
            React, Next.js, TypeScript y arquitectura web moderna.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#38bdf8",
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
