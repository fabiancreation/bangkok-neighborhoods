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
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink-950 text-paper-50"
    >
      {/* Background: typographic-only fallback gradient while AI hero is generated. */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={reduce ? { scale: 1.08 } : { scale: 1.18 }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(1200px 600px at 70% 30%, rgba(184,134,75,0.42), transparent 60%), radial-gradient(900px 700px at 20% 80%, rgba(44,74,75,0.55), transparent 65%), linear-gradient(180deg, #0c0a08 0%, #1e3536 45%, #2c4a4b 75%, #8f6533 105%)",
          }}
        />
        {/* River silhouette */}
        <svg
          aria-hidden
          viewBox="0 0 1600 900"
          className="absolute inset-0 h-full w-full opacity-[0.18]"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0 720 Q 200 660 420 690 T 820 660 T 1240 700 T 1600 650 L 1600 900 L 0 900 Z"
            fill="#0c0a08"
          />
          <path
            d="M640 240 L 660 160 L 672 180 L 688 130 L 700 170 L 720 260 Z"
            fill="#b8864b"
            opacity="0.65"
          />
          <circle cx="686" cy="140" r="3" fill="#d2a168" />
        </svg>
        <GrainOverlay opacity={0.22} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-brass-400"
        >
          {copy.hero.kicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-6 max-w-[16ch] text-[14vw] leading-[0.92] tracking-[-0.03em] md:text-[8.5vw] lg:text-[7rem]"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 40" }}
        >
          The Shape
          <br />
          <span className="italic text-brass-400" style={{ fontVariationSettings: "'opsz' 144" }}>
            of Bangkok.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-serif mt-8 max-w-[38ch] text-lg leading-relaxed text-paper-100 md:text-xl"
        >
          {copy.hero.deck}
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-10 border-l border-brass-500 pl-5 max-w-[42ch]"
        >
          <p className="font-display italic text-xl leading-snug text-paper-50 md:text-2xl">
            “{copy.hero.grabber}”
          </p>
          <footer className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-brass-400">
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
            className="group inline-flex items-center justify-center gap-3 bg-brass-500 px-7 py-4 font-sans text-[13px] uppercase tracking-[0.2em] text-ink-950 transition hover:bg-brass-400"
          >
            {copy.hero.primaryCta}
            <span aria-hidden className="translate-y-[1px] transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#sample"
            onClick={() => trackEvent("chapter_one_request", { location: "hero" })}
            className="group inline-flex items-center justify-center gap-3 border border-paper-200/50 px-7 py-4 font-sans text-[13px] uppercase tracking-[0.2em] text-paper-100 transition hover:border-paper-50 hover:text-paper-50"
          >
            {copy.hero.secondaryCta}
          </a>
        </motion.div>

        <div className="mt-16 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-200/70">
          <span>19 chapters</span>
          <span className="h-px w-8 bg-paper-200/30" />
          <span>65,200 words</span>
          <span className="h-px w-8 bg-paper-200/30" />
          <span>EPUB + Kindle</span>
        </div>
      </div>
    </section>
  );
}
