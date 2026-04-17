import Link from "next/link";
import type { Metadata } from "next";
import { Masthead } from "@/components/Masthead";
import { thonburiChapter } from "@/content/thonburi-chapter";

export const metadata: Metadata = {
  title: "Chapter One · Thonburi",
  description:
    "Read the first chapter of The Shape of Bangkok free. Thonburi, the pre-Bangkok capital, told through the ferry crossing, the canals, and the founding.",
};

function splitBlocks(markdown: string): Array<{ type: "h1" | "h2" | "p"; text: string }> {
  return markdown
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      if (line.startsWith("# ")) return { type: "h1" as const, text: line.slice(2) };
      if (line.startsWith("## ")) return { type: "h2" as const, text: line.slice(3) };
      return { type: "p" as const, text: line };
    });
}

export default function SampleChapterPage() {
  const blocks = splitBlocks(thonburiChapter);

  return (
    <div className="min-h-screen bg-paper-50 text-ink-900">
      <Masthead />
      <article className="mx-auto max-w-[68ch] px-6 pb-32 pt-40 md:px-0">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-tamarind-600">
          The Shape of Bangkok · Free Sample
        </p>
        <hr className="hairline-brass my-6 w-12" />

        {blocks.map((b, i) => {
          if (b.type === "h1") {
            return (
              <h1
                key={i}
                className="font-display mb-4 text-[3rem] leading-[0.95] tracking-[-0.03em] text-ink-950 md:text-[4rem]"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                {b.text.replace(/^\d+\.\s*/, "")}
              </h1>
            );
          }
          if (b.type === "h2") {
            return (
              <h2
                key={i}
                className="font-display mt-16 mb-6 text-[1.4rem] italic tracking-[-0.01em] text-tamarind-600"
                style={{ fontVariationSettings: "'opsz' 96" }}
              >
                {b.text}
              </h2>
            );
          }
          const isFirst = blocks.slice(0, i).every((prev) => prev.type !== "p");
          return (
            <p
              key={i}
              className={`font-serif mb-6 text-[18px] leading-[1.85] text-ink-900 ${isFirst ? "drop-cap" : ""}`}
            >
              {b.text}
            </p>
          );
        })}

        <hr className="hairline-brass my-16" />
        <div className="border border-ink-900 bg-ink-950 p-10 text-paper-50">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass-400">End of sample</p>
          <h3
            className="font-display mt-4 text-[2rem] leading-tight text-paper-50 md:text-[2.5rem]"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            Eighteen more neighborhoods are waiting.
          </h3>
          <p className="mt-4 max-w-[50ch] font-serif text-paper-200">
            The book continues across the river to Rattanakosin, then through Chinatown, Bang Rak, Silom, and all the way east to the edge where Bangkok dissolves into something else.
          </p>
          <Link
            href="/#buy"
            className="mt-8 inline-flex items-center gap-3 bg-brass-500 px-8 py-4 font-sans text-[13px] uppercase tracking-[0.22em] text-ink-950 transition hover:bg-brass-400"
          >
            Buy the eBook · $14 →
          </Link>
        </div>
      </article>
    </div>
  );
}
