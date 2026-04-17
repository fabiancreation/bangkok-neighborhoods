"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { copy } from "@/content/copy";

export function StatBand() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-paper-50">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={stagger(0.15)}
          className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4"
        >
          {copy.stats.items.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="flex flex-col items-start">
              <div
                className="font-display text-[3.5rem] leading-none tracking-[-0.04em] text-brass-400 md:text-[4.5rem]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 40" }}
              >
                {stat.value}
              </div>
              <div className="mt-4 h-px w-8 bg-brass-500/60" />
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.26em] text-paper-200">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
