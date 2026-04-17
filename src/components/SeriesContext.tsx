"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

const volumes = [
  { roman: "I", title: "Understanding Thai Culture", subtitle: "Cultural · available", status: "available" as const },
  { roman: "II", title: "The Shape of Bangkok", subtitle: "Urban · this book", status: "current" as const },
  { roman: "III", title: "Understanding Chiang Mai", subtitle: "Regional · in progress", status: "upcoming" as const },
  { roman: "IV", title: "Volume IV", subtitle: "Not yet fixed", status: "ghost" as const },
];

export function SeriesContext() {
  return (
    <section className="relative bg-paper-100 paper-grain">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-28 md:px-10 md:py-36">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger(0.12)}
        >
          <motion.p variants={fadeUp} className="font-mono text-[11px] uppercase tracking-[0.28em] text-tamarind-600">
            {copy.series_context.eyebrow}
          </motion.p>
          <motion.hr variants={fadeUp} className="hairline-brass my-6 w-12" />
          <motion.h2
            variants={fadeUp}
            className="font-display text-[1.9rem] leading-tight tracking-[-0.02em] text-ink-950 sm:text-[2.4rem] md:text-[2.8rem]"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            {copy.series_context.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-[55ch] font-serif text-[17px] leading-relaxed text-ink-800">
            {copy.series_context.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-[2px] bg-paper-200 sm:mt-14 md:grid-cols-4">
            {volumes.map((v) => (
              <div
                key={v.roman}
                className={cn(
                  "group relative flex flex-col justify-between gap-10 bg-paper-50 p-6 transition md:p-8",
                  v.status === "current" && "bg-gradient-to-br from-tamarind-600 to-blush-600 text-paper-50",
                  v.status === "ghost" && "text-ink-700/40",
                )}
              >
                <div
                  className={cn(
                    "font-display text-[5rem] leading-none tracking-tight",
                    v.status === "current" ? "text-saffron-400" : "text-brass-500/70",
                    v.status === "ghost" && "text-paper-300/60",
                  )}
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  {v.roman}
                </div>
                <div>
                  <div
                    className={cn(
                      "font-display text-[1.3rem] leading-tight tracking-[-0.01em]",
                      v.status === "current" ? "text-paper-50" : "text-ink-950",
                      v.status === "ghost" && "text-ink-700/50",
                    )}
                    style={{ fontVariationSettings: "'opsz' 72" }}
                  >
                    {v.title}
                  </div>
                  <div
                    className={cn(
                      "mt-2 font-mono text-[10px] uppercase tracking-[0.22em]",
                      v.status === "current" ? "text-saffron-400" : "text-ink-700/70",
                    )}
                  >
                    {v.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
