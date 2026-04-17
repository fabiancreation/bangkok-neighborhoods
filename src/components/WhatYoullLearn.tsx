"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { copy } from "@/content/copy";

export function WhatYoullLearn() {
  return (
    <section className="relative bg-paper-50 paper-grain">
      <div className="mx-auto max-w-[1200px] px-6 py-32 md:px-10 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.08)}
        >
          <motion.p variants={fadeUp} className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass-600">
            {copy.learn.eyebrow}
          </motion.p>
          <motion.hr variants={fadeUp} className="hairline-brass my-6 w-12" />
          <motion.h2
            variants={fadeUp}
            className="font-display max-w-[18ch] text-[2.4rem] leading-[1.05] tracking-[-0.02em] text-ink-950 md:text-[3rem]"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            Eight things the book leaves you with.
          </motion.h2>

          <motion.ol variants={fadeUp} className="mt-16 grid gap-[1px] bg-paper-200">
            {copy.learn.items.map((item, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="group flex items-baseline gap-6 bg-paper-50 px-4 py-7 transition hover:bg-paper-100 md:px-6 md:py-9"
              >
                <span
                  className="font-mono text-[12px] uppercase tracking-[0.22em] text-brass-600"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[1.3rem] leading-snug tracking-[-0.01em] text-ink-900 md:text-[1.55rem]">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>
      </div>
    </section>
  );
}
