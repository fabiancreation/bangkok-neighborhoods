import { ImageResponse } from "next/og";

export const alt = "The Shape of Bangkok: a book by Fabian Arndt";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(900px 500px at 80% 10%, #b8864b 0%, transparent 55%), linear-gradient(180deg, #f6f1e7 0%, #ede4d1 100%)",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            color: "#8f6533",
            fontSize: 16,
            letterSpacing: 8,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <span>UNDERSTANDING THAI CULTURE · VOL II</span>
          <span>A BOOK BY FABIAN ARNDT</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 128,
              lineHeight: 0.95,
              letterSpacing: -4,
              color: "#0c0a08",
              fontWeight: 500,
            }}
          >
            The Shape
          </div>
          <div
            style={{
              fontSize: 128,
              lineHeight: 0.95,
              letterSpacing: -4,
              color: "#8f6533",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            of Bangkok.
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 28,
              fontStyle: "italic",
              color: "#231f1b",
              maxWidth: 760,
            }}
          >
            History and culture, explained through nineteen neighborhoods.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#8f6533",
            fontSize: 14,
            letterSpacing: 6,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <span>19 CHAPTERS · 65,200 WORDS · EPUB + KINDLE</span>
          <span>SHAPE-OF-BANGKOK.COM</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
