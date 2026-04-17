"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { copy } from "@/content/copy";

export function AuthorNote() {
  return (
    <section id="author" className="relative bg-paper-50 paper-grain">
      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger(0.15)}
          className="grid gap-16 md:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="md:col-span-5">
            {/* Portrait placeholder with warm tamarind/saffron wash */}
            <div className="relative aspect-[4/5] overflow-hidden bg-paper-100">
              <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full">
                <defs>
                  <linearGradient id="portrait-wash" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f5c65a" stopOpacity="0.55" />
                    <stop offset="55%" stopColor="#f09658" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#de9480" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <rect width="400" height="500" fill="#f2e7ce" />
                <rect width="400" height="500" fill="url(#portrait-wash)" />
                {/* Silhouette in warm brown */}
                <ellipse cx="200" cy="190" rx="58" ry="72" fill="#2a201a" opacity="0.85" />
                <path d="M 110 500 Q 110 330 200 320 Q 290 330 290 500 Z" fill="#2a201a" opacity="0.85" />
                {/* Horizon rule */}
                <line x1="40" y1="470" x2="360" y2="470" stroke="#946525" strokeWidth="1" opacity="0.6" />
              </svg>
              <div className="absolute inset-x-0 bottom-0 p-6 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-900">
                Fabian Arndt · Bangkok
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-tamarind-600">
              {copy.author.eyebrow}
            </p>
            <hr className="my-6 w-12 border-tamarind-500/70" />
            <h2
              className="font-display text-[2.4rem] leading-[1.04] tracking-[-0.02em] text-ink-950 md:text-[3rem]"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              {copy.author.title}
            </h2>
            <div className="mt-10 space-y-6 font-serif text-[18px] leading-[1.8] text-ink-800">
              <p>{copy.author.paragraphs[0]}</p>
              <p>{copy.author.paragraphs[1]}</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              <span className="inline-flex items-center gap-2 bg-tamarind-500/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-tamarind-600">
                <span className="h-1.5 w-1.5 rounded-full bg-tamarind-500" />
                Resident since 2011
              </span>
              <span className="inline-flex items-center gap-2 bg-jade-500/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-jade-600">
                <span className="h-1.5 w-1.5 rounded-full bg-jade-500" />
                Thai sources verified
              </span>
              <span className="inline-flex items-center gap-2 bg-saffron-500/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-saffron-600">
                <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" />
                Three years of walking
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
