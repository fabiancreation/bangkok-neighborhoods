"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { copy } from "@/content/copy";

const accents = ["#e07a3a", "#e7a82a", "#5a8a6f", "#de9480"]; // tamarind, saffron, jade, blush

export function StatBand() {
  return (
    <section className="relative overflow-hidden bg-paper-100 paper-grain">
      {/* Decorative brass rule line across top */}
      <div className="absolute left-0 right-0 top-0 h-[6px] bg-gradient-to-r from-tamarind-500 via-saffron-500 to-jade-500 opacity-80" />
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 sm:py-24 md:px-10 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger(0.15)}
          className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-14 md:grid-cols-4"
        >
          {copy.stats.items.map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUp} className="flex flex-col items-start">
              <div
                className="font-display text-[2.6rem] leading-none tracking-[-0.04em] sm:text-[3.6rem] md:text-[5rem]"
                style={{
                  color: accents[i % accents.length],
                  fontVariationSettings: "'opsz' 144, 'SOFT' 50",
                }}
              >
                {stat.value}
              </div>
              <div
                className="mt-3 h-[2px] w-8 sm:mt-4 sm:w-10"
                style={{ backgroundColor: accents[i % accents.length] }}
              />
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-800 sm:mt-3 sm:text-[11px] sm:tracking-[0.26em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
