"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { copy } from "@/content/copy";

export function WhatYoullLearn() {
  return (
    <section className="relative bg-paper-50 paper-grain">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 sm:py-28 md:px-10 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.08)}
        >
          <motion.p variants={fadeUp} className="font-mono text-[11px] uppercase tracking-[0.28em] text-tamarind-600">
            {copy.learn.eyebrow}
          </motion.p>
          <motion.hr variants={fadeUp} className="hairline-brass my-6 w-12" />
          <motion.h2
            variants={fadeUp}
            className="font-display max-w-[18ch] text-[1.9rem] leading-[1.05] tracking-[-0.02em] text-ink-950 sm:text-[2.4rem] md:text-[3rem]"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            Eight things the book leaves you with.
          </motion.h2>

          <motion.ol variants={fadeUp} className="mt-10 grid gap-[1px] bg-paper-200 sm:mt-16">
            {copy.learn.items.map((item, i) => {
              const accentColors = [
                "text-tamarind-600",
                "text-saffron-600",
                "text-jade-600",
                "text-blush-600",
                "text-tamarind-600",
                "text-saffron-600",
                "text-jade-600",
                "text-blush-600",
              ];
              return (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="group flex items-baseline gap-4 bg-paper-50 px-4 py-5 transition hover:bg-paper-100 sm:gap-6 sm:py-7 md:px-6 md:py-9"
                >
                  <span
                    className={`shrink-0 font-display text-[1.6rem] leading-none tracking-[-0.03em] sm:text-[2rem] md:text-[2.4rem] ${accentColors[i % accentColors.length]}`}
                    aria-hidden
                    style={{ fontVariationSettings: "'opsz' 144" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[1.1rem] leading-snug tracking-[-0.01em] text-ink-900 sm:text-[1.35rem] md:text-[1.6rem]">
                    {item}
                  </span>
                </motion.li>
              );
            })}
          </motion.ol>
        </motion.div>
      </div>
    </section>
  );
}
