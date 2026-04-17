"use client";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { neighborhoods, parts, type Neighborhood, type Part } from "@/content/neighborhoods";
import { copy } from "@/content/copy";
import { fadeUp, stagger } from "@/lib/motion";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

const partColors: Record<Part, string> = {
  I: "#b8864b",
  II: "#8f6533",
  III: "#2c4a4b",
  IV: "#d2a168",
  V: "#b8412a",
};

export function NeighborhoodAtlas() {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const openTeaser = (n: number) => {
    setActive(n);
    trackEvent("atlas_pin_open", { chapter: n });
  };

  const activeNeighborhood = active != null ? neighborhoods.find((n) => n.number === active) : null;

  return (
    <section id="atlas" className="relative bg-paper-50">
      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.12)}
          className="mb-16 max-w-[62ch]"
        >
          <motion.p variants={fadeUp} className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass-600">
            {copy.atlas.eyebrow}
          </motion.p>
          <motion.hr variants={fadeUp} className="hairline-brass my-6 w-12" />
          <motion.h2
            variants={fadeUp}
            className="font-display text-[2.6rem] leading-[1.04] tracking-[-0.02em] text-ink-950 md:text-[3.4rem]"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            {copy.atlas.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 font-serif text-[17px] leading-relaxed text-ink-800">
            {copy.atlas.description}
          </motion.p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* MAP: sticky on desktop */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <MapSVG hovered={hovered} onPinHover={setHovered} onPinClick={openTeaser} />
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-700">
                {(Object.keys(parts) as Part[]).map((p) => (
                  <span key={p} className="inline-flex items-center gap-2">
                    <span
                      className="h-[6px] w-[6px] rounded-full"
                      style={{ backgroundColor: partColors[p] }}
                    />
                    <span>
                      Part {p} · {parts[p].title}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* LIST */}
          <div className="lg:col-span-7">
            <ol className="divide-y divide-paper-200 border-y border-paper-200">
              {neighborhoods.map((n) => (
                <li
                  key={n.number}
                  onMouseEnter={() => setHovered(n.number)}
                  onMouseLeave={() => setHovered(null)}
                  className={cn(
                    "group cursor-pointer transition",
                    hovered === n.number && "bg-paper-100",
                  )}
                >
                  <button
                    onClick={() => openTeaser(n.number)}
                    className="flex w-full items-start gap-6 py-6 text-left md:gap-8 md:py-8"
                  >
                    <div className="flex flex-col items-start gap-2 pt-1">
                      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brass-600">
                        {String(n.number).padStart(2, "0")}
                      </span>
                      <span
                        className="h-[6px] w-[6px] rounded-full"
                        style={{ backgroundColor: partColors[n.part] }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-3">
                        <h3
                          className="font-display text-[1.5rem] leading-tight tracking-[-0.01em] text-ink-950 md:text-[1.8rem]"
                          style={{ fontVariationSettings: "'opsz' 96" }}
                        >
                          {n.name}
                        </h3>
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-700/60">
                          Part {n.part} · {n.tier}
                        </span>
                      </div>
                      <p className="mt-2 font-serif text-[16px] leading-relaxed text-ink-800">
                        {n.tagline}
                      </p>
                    </div>
                    <div className="hidden items-center self-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-700 transition group-hover:text-brass-600 md:flex">
                      Open →
                    </div>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <TeaserDialog
        open={active !== null}
        onOpenChange={(o) => !o && setActive(null)}
        neighborhood={activeNeighborhood}
      />
    </section>
  );
}

function MapSVG({
  hovered,
  onPinHover,
  onPinClick,
}: {
  hovered: number | null;
  onPinHover: (n: number | null) => void;
  onPinClick: (n: number) => void;
}) {
  return (
    <div className="relative aspect-square w-full overflow-hidden bg-ink-950 p-4 md:aspect-[4/5]">
      <svg viewBox="0 0 1000 1000" className="h-full w-full">
        {/* Paper-ish backdrop inside the ink card */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3a332d" strokeWidth="0.4" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="1000" height="1000" fill="#0c0a08" />
        <rect width="1000" height="1000" fill="url(#grid)" />

        {/* Chao Phraya river curve */}
        <path
          d="M 460 50 Q 430 180 450 260 Q 465 340 400 420 Q 320 510 340 600 Q 370 700 470 760 Q 590 820 640 900 L 640 1000 L 0 1000 L 0 0 L 460 0 Z"
          fill="#1e3536"
          opacity="0.35"
        />
        <path
          d="M 460 50 Q 430 180 450 260 Q 465 340 400 420 Q 320 510 340 600 Q 370 700 470 760 Q 590 820 640 900"
          fill="none"
          stroke="#2c4a4b"
          strokeWidth="2"
        />

        {/* Khlong (canal) hints */}
        <g stroke="#b8864b" strokeWidth="0.6" opacity="0.35" fill="none">
          <path d="M 400 420 Q 500 400 600 430" />
          <path d="M 470 760 Q 560 730 650 750" />
          <path d="M 450 260 Q 540 280 620 260" />
          <path d="M 340 600 Q 440 580 520 610" />
        </g>

        {/* Labels */}
        <text
          x="200"
          y="965"
          fill="#8f6533"
          fontFamily="var(--font-plex-mono)"
          fontSize="14"
          letterSpacing="4"
        >
          CHAO PHRAYA
        </text>
        <text
          x="820"
          y="50"
          fill="#8f6533"
          fontFamily="var(--font-plex-mono)"
          fontSize="11"
          letterSpacing="3"
          textAnchor="end"
        >
          NORTH ↑
        </text>

        {/* Pins */}
        {neighborhoods.map((n) => {
          const isHover = hovered === n.number;
          return (
            <g
              key={n.number}
              transform={`translate(${n.x},${n.y})`}
              className="cursor-pointer"
              onMouseEnter={() => onPinHover(n.number)}
              onMouseLeave={() => onPinHover(null)}
              onClick={() => onPinClick(n.number)}
            >
              <circle
                r={isHover ? 22 : 14}
                fill={partColors[n.part]}
                opacity={isHover ? 0.2 : 0.12}
                className="transition-all duration-300"
              />
              <circle
                r={isHover ? 9 : 6}
                fill={partColors[n.part]}
                className="transition-all duration-300"
              />
              <text
                x="0"
                y="3"
                textAnchor="middle"
                fill="#0c0a08"
                fontFamily="var(--font-plex-mono)"
                fontSize={isHover ? "9" : "7"}
                fontWeight="600"
                className="pointer-events-none transition-all duration-300"
              >
                {n.number}
              </text>
              {isHover && (
                <text
                  x="18"
                  y="4"
                  fill="#f6f1e7"
                  fontFamily="var(--font-fraunces)"
                  fontSize="16"
                  fontStyle="italic"
                  className="pointer-events-none"
                >
                  {n.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <div className="pointer-events-none absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.24em] text-paper-300/70">
        Stylized atlas · not to scale
      </div>
    </div>
  );
}

function TeaserDialog({
  open,
  onOpenChange,
  neighborhood,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  neighborhood: Neighborhood | null | undefined;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink-950/80 backdrop-blur-sm data-[state=open]:animate-[fadeIn_200ms_ease]" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-[780px] -translate-x-1/2 -translate-y-1/2 border border-paper-200 bg-paper-50 p-8 shadow-2xl md:p-12">
          {neighborhood && (
            <>
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass-600">
                    Chapter {String(neighborhood.number).padStart(2, "0")} · Part {neighborhood.part} ·{" "}
                    {neighborhood.tier}
                  </p>
                  <hr className="hairline-brass my-4 w-10" />
                  <Dialog.Title
                    className="font-display text-[2rem] leading-tight tracking-[-0.02em] text-ink-950 md:text-[2.8rem]"
                    style={{ fontVariationSettings: "'opsz' 144" }}
                  >
                    {neighborhood.name}
                  </Dialog.Title>
                </div>
                <Dialog.Close className="flex h-10 w-10 items-center justify-center border border-ink-900/30 text-ink-900 transition hover:border-brass-500 hover:text-brass-600">
                  <X size={18} />
                </Dialog.Close>
              </div>
              <Dialog.Description className="sr-only">
                Chapter opening for {neighborhood.name}
              </Dialog.Description>

              <div className="mt-8 border-l-2 border-brass-500 pl-6">
                <p className="font-serif text-[18px] leading-[1.8] text-ink-900">
                  {neighborhood.teaser}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-paper-200 pt-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-700">
                  {neighborhood.words.toLocaleString()} words · full chapter in the book
                </span>
                <a
                  href="#buy"
                  onClick={() => onOpenChange(false)}
                  className="inline-flex items-center gap-2 bg-ink-900 px-5 py-3 font-sans text-[11px] uppercase tracking-[0.2em] text-paper-50 transition hover:bg-brass-600"
                >
                  Read the book →
                </a>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
