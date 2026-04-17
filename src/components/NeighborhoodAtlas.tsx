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

// Each part gets a distinct Thai color
const partColors: Record<Part, { main: string; soft: string; name: string }> = {
  I: { main: "#b8823a", soft: "#e6bc7f", name: "Brass" },     // brass — the old river
  II: { main: "#e07a3a", soft: "#f09658", name: "Tamarind" }, // tamarind — trade and layers
  III: { main: "#c14028", soft: "#e0715a", name: "Chili" },    // chili — political upheaval
  IV: { main: "#e7a82a", soft: "#f5c65a", name: "Saffron" },  // saffron — new money, sun
  V: { main: "#5a8a6f", soft: "#7eac95", name: "Jade" },      // jade — the edges, greenery
};

export function NeighborhoodAtlas() {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const openTeaser = (n: number) => {
    setActive(n);
    trackEvent("atlas_pin_open", { chapter: n });
  };

  const activeNeighborhood = active != null ? neighborhoods.find((n) => n.number === active) : null;

  // Group by part, preserving chapter order
  const grouped: Record<Part, Neighborhood[]> = { I: [], II: [], III: [], IV: [], V: [] };
  neighborhoods
    .slice()
    .sort((a, b) => a.number - b.number)
    .forEach((n) => grouped[n.part].push(n));

  return (
    <section id="atlas" className="relative bg-paper-50 paper-grain">
      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.12)}
          className="mb-20 max-w-[62ch]"
        >
          <motion.p variants={fadeUp} className="font-mono text-[11px] uppercase tracking-[0.28em] text-tamarind-600">
            {copy.atlas.eyebrow}
          </motion.p>
          <motion.hr variants={fadeUp} className="my-6 w-12 border-tamarind-500/70" />
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

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* MAP — sticky on desktop, paper background */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <MapSVG hovered={hovered} onPinHover={setHovered} onPinClick={openTeaser} />
              <div className="mt-8 space-y-3">
                {(Object.keys(parts) as Part[]).map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span
                      className="mt-[7px] h-[10px] w-[10px] shrink-0 rounded-full"
                      style={{ backgroundColor: partColors[p].main }}
                    />
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-700">
                        Part {p}
                      </div>
                      <div className="font-display text-[1.05rem] leading-tight tracking-[-0.01em] text-ink-950">
                        {parts[p].title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LIST — grouped by part */}
          <div className="lg:col-span-7">
            {(Object.keys(grouped) as Part[]).map((p) => (
              <div key={p} className="mb-16 last:mb-0">
                <div className="mb-8 flex items-baseline gap-4">
                  <span
                    className="font-display text-[2.4rem] leading-none tracking-[-0.02em]"
                    style={{ color: partColors[p].main, fontVariationSettings: "'opsz' 144" }}
                  >
                    {p}.
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-700">
                      Part {p}
                    </div>
                    <div className="font-display text-[1.3rem] leading-tight tracking-[-0.01em] text-ink-950">
                      {parts[p].title}
                    </div>
                  </div>
                </div>

                <ul className="space-y-1">
                  {grouped[p].map((n) => (
                    <li
                      key={n.number}
                      onMouseEnter={() => setHovered(n.number)}
                      onMouseLeave={() => setHovered(null)}
                      className={cn(
                        "group relative overflow-hidden border-l-2 border-transparent transition-all",
                        hovered === n.number && "border-l-tamarind-500 bg-paper-100",
                      )}
                      style={
                        hovered === n.number
                          ? { borderLeftColor: partColors[p].main, backgroundColor: partColors[p].soft + "22" }
                          : undefined
                      }
                    >
                      <button
                        onClick={() => openTeaser(n.number)}
                        className="flex w-full items-start gap-5 py-5 pl-5 pr-4 text-left md:gap-7 md:py-6 md:pl-7 md:pr-6"
                      >
                        <span
                          className="font-display text-[2.2rem] leading-none tracking-[-0.03em] md:text-[2.8rem]"
                          style={{
                            color: hovered === n.number ? partColors[p].main : "#946525",
                            fontVariationSettings: "'opsz' 144",
                          }}
                        >
                          {String(n.number).padStart(2, "0")}
                        </span>
                        <div className="flex-1 pt-1">
                          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                            <h3
                              className="font-display text-[1.6rem] leading-tight tracking-[-0.01em] text-ink-950 md:text-[1.9rem]"
                              style={{ fontVariationSettings: "'opsz' 96" }}
                            >
                              {n.name}
                            </h3>
                            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-700">
                              {n.tier} · {n.words.toLocaleString()}w
                            </span>
                          </div>
                          <p className="mt-3 font-serif text-[16.5px] leading-[1.65] text-ink-800 md:text-[17px]">
                            {n.tagline}
                          </p>
                        </div>
                        <span
                          className="mt-3 hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-700 transition group-hover:text-tamarind-600 md:inline-block"
                          aria-hidden
                        >
                          →
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
    <div className="relative aspect-square w-full overflow-hidden border border-paper-200 bg-paper-100 shadow-[0_20px_50px_-25px_rgba(28,20,14,0.2)] md:aspect-[4/5]">
      <svg viewBox="0 0 1000 1000" className="h-full w-full">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbb385" strokeWidth="0.3" opacity="0.45" />
          </pattern>
          <linearGradient id="river-wash" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7eac95" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#5a8a8b" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#3f6e6f" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        {/* Paper background inside map */}
        <rect width="1000" height="1000" fill="#faf3e4" />
        <rect width="1000" height="1000" fill="url(#grid)" />

        {/* Chao Phraya river band — filled */}
        <path
          d="M 440 30 Q 410 180 430 260 Q 450 340 385 420 Q 305 510 325 600 Q 355 700 455 760 Q 575 820 625 900 L 625 980 L 645 980 L 645 900 Q 595 820 475 760 Q 375 700 345 600 Q 325 510 405 420 Q 470 340 450 260 Q 430 180 460 30 Z"
          fill="url(#river-wash)"
          opacity="0.8"
        />
        <path
          d="M 450 30 Q 420 180 440 260 Q 460 340 395 420 Q 315 510 335 600 Q 365 700 465 760 Q 585 820 635 900"
          fill="none"
          stroke="#2c4a4b"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Khlong hints — warm accent */}
        <g stroke="#e07a3a" strokeWidth="0.8" opacity="0.28" fill="none" strokeDasharray="3 5">
          <path d="M 400 420 Q 500 400 600 430" />
          <path d="M 470 760 Q 560 730 650 750" />
          <path d="M 450 260 Q 540 280 620 260" />
          <path d="M 340 600 Q 440 580 520 610" />
          <path d="M 700 500 Q 800 520 880 490" />
        </g>

        {/* Text labels */}
        <text
          x="180"
          y="975"
          fill="#946525"
          fontFamily="var(--font-plex-mono)"
          fontSize="13"
          letterSpacing="5"
          fontWeight="500"
        >
          CHAO PHRAYA
        </text>
        <text
          x="820"
          y="45"
          fill="#946525"
          fontFamily="var(--font-plex-mono)"
          fontSize="11"
          letterSpacing="4"
          textAnchor="end"
        >
          NORTH ↑
        </text>
        <text
          x="120"
          y="60"
          fill="#946525"
          fontFamily="var(--font-plex-mono)"
          fontSize="10"
          letterSpacing="3"
        >
          THE SHAPE OF BANGKOK · ATLAS
        </text>

        {/* Decorative compass rose bottom-right */}
        <g transform="translate(900, 920)" opacity="0.5">
          <circle r="28" fill="none" stroke="#b8823a" strokeWidth="0.6" />
          <circle r="16" fill="none" stroke="#b8823a" strokeWidth="0.6" />
          <line x1="0" y1="-28" x2="0" y2="28" stroke="#b8823a" strokeWidth="0.6" />
          <line x1="-28" y1="0" x2="28" y2="0" stroke="#b8823a" strokeWidth="0.6" />
          <path d="M 0 -24 L 3 0 L 0 24 L -3 0 Z" fill="#e07a3a" />
        </g>

        {/* Pins */}
        {neighborhoods.map((n) => {
          const isHover = hovered === n.number;
          const colors = partColors[n.part];
          return (
            <g
              key={n.number}
              transform={`translate(${n.x},${n.y})`}
              className="cursor-pointer"
              onMouseEnter={() => onPinHover(n.number)}
              onMouseLeave={() => onPinHover(null)}
              onClick={() => onPinClick(n.number)}
            >
              {/* Halo */}
              <circle
                r={isHover ? 26 : 16}
                fill={colors.main}
                opacity={isHover ? 0.22 : 0.14}
                className="transition-all duration-300"
              />
              {/* Pin body */}
              <circle
                r={isHover ? 11 : 8}
                fill={colors.main}
                stroke="#faf3e4"
                strokeWidth="2"
                className="transition-all duration-300"
              />
              <text
                x="0"
                y="3.2"
                textAnchor="middle"
                fill="#faf3e4"
                fontFamily="var(--font-plex-mono)"
                fontSize={isHover ? "10" : "8"}
                fontWeight="700"
                className="pointer-events-none transition-all duration-300"
              >
                {n.number}
              </text>
              {isHover && (
                <g className="pointer-events-none">
                  <rect
                    x="18"
                    y="-14"
                    width={n.name.length * 9.2 + 20}
                    height="26"
                    rx="2"
                    fill="#1c140e"
                    opacity="0.95"
                  />
                  <text
                    x="28"
                    y="3"
                    fill="#faf3e4"
                    fontFamily="var(--font-plex-sans)"
                    fontSize="13"
                    fontWeight="500"
                  >
                    {n.name}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
      <div className="pointer-events-none absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-[0.24em] text-ink-700/70">
        Stylized · not to scale
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
  const accent = neighborhood ? partColors[neighborhood.part] : partColors.I;
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 z-[90] bg-ink-950/55 data-[state=open]:animate-[fadeIn_200ms_ease]"
        />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed left-1/2 top-1/2 z-[100] w-[92vw] max-w-[780px] max-h-[85vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto border-t-4 bg-paper-50 p-8 shadow-[0_40px_80px_-20px_rgba(28,20,14,0.5)] focus:outline-none md:p-12"
          style={{ borderTopColor: accent.main }}
        >
          {neighborhood ? (
            <>
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p
                    className="font-mono text-[11px] uppercase tracking-[0.28em]"
                    style={{ color: accent.main }}
                  >
                    Chapter {String(neighborhood.number).padStart(2, "0")} · Part {neighborhood.part} ·{" "}
                    {neighborhood.tier}
                  </p>
                  <hr className="my-4 w-10 border-t-2" style={{ borderColor: accent.main }} />
                  <Dialog.Title
                    className="font-display text-[2rem] leading-tight tracking-[-0.02em] text-ink-950 md:text-[2.8rem]"
                    style={{ fontVariationSettings: "'opsz' 144" }}
                  >
                    {neighborhood.name}
                  </Dialog.Title>
                </div>
                <Dialog.Close
                  aria-label="Close"
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink-900/20 text-ink-900 transition hover:border-tamarind-500 hover:text-tamarind-600"
                >
                  <X size={18} />
                </Dialog.Close>
              </div>

              <div className="mt-8 border-l-2 pl-6" style={{ borderColor: accent.main }}>
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
                  className="inline-flex items-center gap-2 bg-tamarind-500 px-5 py-3 font-sans text-[11px] uppercase tracking-[0.2em] text-paper-50 transition hover:bg-tamarind-600"
                >
                  Read the book →
                </a>
              </div>
            </>
          ) : (
            <Dialog.Title className="sr-only">Chapter teaser</Dialog.Title>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
