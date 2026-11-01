import { ImageResponse } from "next/og";
import { business } from "@/content/business";

export const alt = `${business.displayName} · ${business.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(text: string) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@144,500&text=${encodeURIComponent(text)}`,
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function Image() {
  const title = business.displayName;
  const sub = business.tagline;
  const font = await loadFont(`${title}${sub}`);
  const family = font ? "Fraunces" : "serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #fbfaf8 0%, #f1ebe3 100%)",
          padding: "80px 96px",
          fontFamily: family,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div style={{ fontSize: 112, lineHeight: 1.05, color: "#221c19", display: "flex" }}>{title}</div>
          <div style={{ width: 96, height: 4, background: "#b8664a", marginTop: 36, display: "flex" }} />
          <div style={{ fontSize: 40, color: "#4a413b", marginTop: 32, display: "flex" }}>{sub}</div>
        </div>
        <div
          style={{
            width: 320,
            height: 320,
            borderRadius: 9999,
            border: "3px solid #b8664a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: 9999,
              border: "3px solid #e2d9cd",
              background: "#f3dfd6",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "Fraunces", data: font, style: "normal", weight: 500 }] : undefined,
    },
  );
}
