"use client";
import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/content/copy";
import { buildCheckoutUrl } from "@/lib/lemon-squeezy";
import { trackEvent } from "@/lib/analytics";
import { GrainOverlay } from "./GrainOverlay";

export function HeroCrossing() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden text-ink-950"
    >
      {/* Warm sunset background: saffron/blush/tamarind over cream */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1.04 }}
          animate={reduce ? { scale: 1.04 } : { scale: 1.1 }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(1200px 700px at 78% 18%, rgba(245,198,90,0.55), transparent 60%),
              radial-gradient(900px 600px at 18% 85%, rgba(240,184,165,0.55), transparent 65%),
              radial-gradient(1000px 500px at 50% 50%, rgba(224,122,58,0.18), transparent 70%),
              linear-gradient(180deg, #faf3e4 0%, #f2e7ce 40%, #f0b8a5 90%, #de9480 100%)
            `,
          }}
        />
        {/* River silhouette at the base */}
        <svg
          aria-hidden
          viewBox="0 0 1600 900"
          className="absolute inset-x-0 bottom-0 h-[55%] w-full"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="river-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3f6e6f" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#1f3536" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="reflection" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f5c65a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f5c65a" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Water */}
          <path
            d="M0 680 Q 200 640 420 660 T 820 630 T 1240 670 T 1600 620 L 1600 900 L 0 900 Z"
            fill="url(#river-gradient)"
          />
          {/* Water shimmer */}
          <g opacity="0.5">
            {Array.from({ length: 18 }).map((_, i) => (
              <rect
                key={i}
                x={80 + i * 85}
                y={720 + (i % 3) * 12}
                width={30 + (i % 5) * 10}
                height="1.5"
                fill="#f5c65a"
                opacity={0.4 + (i % 4) * 0.15}
              />
            ))}
          </g>
          {/* Wat Arun prang silhouette */}
          <g transform="translate(1080, 420)">
            <path
              d="M 0 260 L 20 100 L 26 115 L 32 60 L 38 115 L 42 30 L 48 115 L 54 85 L 60 260 Z"
              fill="#2a201a"
              opacity="0.95"
            />
            <circle cx="42" cy="22" r="3" fill="#b8823a" />
            {/* Reflection */}
            <path
              d="M 0 260 L 20 420 L 26 405 L 32 460 L 38 405 L 42 490 L 48 405 L 54 435 L 60 260 Z"
              fill="url(#reflection)"
              opacity="0.55"
            />
          </g>
          {/* Two longtail boats */}
          <g fill="#2a201a" opacity="0.85">
            <path d="M 280 690 L 360 688 L 370 702 L 270 702 Z" />
            <line x1="290" y1="688" x2="280" y2="670" stroke="#2a201a" strokeWidth="1.5" />
            <path d="M 780 665 L 860 663 L 870 678 L 770 678 Z" opacity="0.7" />
          </g>
        </svg>
        <GrainOverlay opacity={0.08} />
      </div>

      {/* Top bar spacer */}
      <div className="h-16" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-24 pt-8 md:px-10 md:pb-32 md:pt-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-brass-700"
        >
          {copy.hero.kicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-6 max-w-[15ch] text-[14vw] leading-[0.9] tracking-[-0.03em] text-ink-950 md:text-[9vw] lg:text-[8rem]"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
        >
          The Shape
          <br />
          <span
            className="italic text-tamarind-600"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80" }}
          >
            of Bangkok.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-serif mt-8 max-w-[40ch] text-lg leading-relaxed text-ink-800 md:text-xl"
        >
          {copy.hero.deck}
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-10 max-w-[42ch] border-l-2 border-tamarind-500 pl-5"
        >
          <p className="font-display italic text-xl leading-snug text-ink-900 md:text-2xl">
            “{copy.hero.grabber}”
          </p>
          <footer className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-brass-700">
            From Chapter 1 · Thonburi
          </footer>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={buildCheckoutUrl()}
            onClick={() => trackEvent("buy_click", { location: "hero" })}
            className="group inline-flex items-center justify-center gap-3 bg-ink-950 px-7 py-4 font-sans text-[13px] uppercase tracking-[0.2em] text-paper-50 shadow-[0_6px_28px_-8px_rgba(28,20,14,0.45)] transition hover:bg-tamarind-600"
          >
            {copy.hero.primaryCta}
            <span aria-hidden className="translate-y-[1px] transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#sample"
            onClick={() => trackEvent("chapter_one_request", { location: "hero" })}
            className="group inline-flex items-center justify-center gap-3 border border-ink-900/30 bg-paper-50/60 px-7 py-4 font-sans text-[13px] uppercase tracking-[0.2em] text-ink-900 backdrop-blur-sm transition hover:border-ink-900 hover:bg-paper-50"
          >
            {copy.hero.secondaryCta}
          </a>
        </motion.div>

        <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-800/80">
          <span>19 chapters</span>
          <span className="h-px w-8 bg-ink-900/30" />
          <span>65,200 words</span>
          <span className="h-px w-8 bg-ink-900/30" />
          <span>EPUB + Kindle</span>
        </div>
      </div>
    </section>
  );
}
