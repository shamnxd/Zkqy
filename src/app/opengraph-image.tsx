import { ImageResponse } from "next/og";

export const alt = "Zkqy — ERP & AI Automation | A Complete Tech Partner";
export const size = { width: 1200, height: 630 };
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
          background: "linear-gradient(160deg, #ff4500 0%, #ff6a33 45%, #fff5f0 100%)",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ff4500",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            Z
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: "#ffffff" }}>Zkqy</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: -1.5,
              maxWidth: 900,
            }}
          >
            ERP & AI Automation
          </div>
          <div style={{ fontSize: 36, fontWeight: 600, color: "#ffffff", opacity: 0.95 }}>
            A Complete Tech Partner
          </div>
          <div style={{ fontSize: 24, color: "#ffffff", opacity: 0.85, maxWidth: 800 }}>
            Unify operations, automate workflows, and scale faster.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
