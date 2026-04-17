"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { copy } from "@/content/copy";

export function AuthorNote() {
  return (
    <section id="author" className="relative bg-ink-950 text-paper-100">
      <div className="mx-auto max-w-[1200px] px-6 py-32 md:px-10 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger(0.15)}
          className="grid gap-16 md:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="md:col-span-5">
            {/* Portrait placeholder: abstract vertical composition */}
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-900">
              <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full">
                <defs>
                  <linearGradient id="portrait-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3a332d" />
                    <stop offset="100%" stopColor="#151210" />
                  </linearGradient>
                </defs>
                <rect width="400" height="500" fill="url(#portrait-grad)" />
                {/* Suggested silhouette */}
                <ellipse cx="200" cy="190" rx="58" ry="72" fill="#231f1b" />
                <path d="M 110 500 Q 110 330 200 320 Q 290 330 290 500 Z" fill="#231f1b" />
                <line x1="40" y1="470" x2="360" y2="470" stroke="#b8864b" strokeWidth="0.6" opacity="0.4" />
              </svg>
              <div className="absolute inset-x-0 bottom-0 p-6 font-mono text-[10px] uppercase tracking-[0.24em] text-brass-400">
                Fabian Arndt · Bangkok
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass-400">
              {copy.author.eyebrow}
            </p>
            <hr className="my-6 w-12 border-brass-500/50" />
            <h2
              className="font-display text-[2.4rem] leading-[1.04] tracking-[-0.02em] text-paper-50 md:text-[3rem]"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              {copy.author.title}
            </h2>
            <div className="mt-10 space-y-6 font-serif text-[17px] leading-[1.8] text-paper-200">
              <p>{copy.author.paragraphs[0]}</p>
              <p>{copy.author.paragraphs[1]}</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.22em] text-paper-300">
              <span>Resident since 2011</span>
              <span className="text-brass-500">·</span>
              <span>Thai sources verified</span>
              <span className="text-brass-500">·</span>
              <span>Three years of walking</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
