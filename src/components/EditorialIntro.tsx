"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { copy } from "@/content/copy";

export function EditorialIntro() {
  return (
    <section className="relative bg-paper-50 paper-grain">
      <div className="mx-auto max-w-[1200px] px-6 py-32 md:px-10 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger(0.2)}
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-tamarind-600"
          >
            {copy.pitch.eyebrow}
          </motion.p>
          <motion.hr variants={fadeUp} className="hairline-brass my-6 w-12" />

          <div className="grid gap-12 md:grid-cols-12">
            <motion.div variants={fadeUp} className="md:col-span-5">
              <h2
                className="font-display text-[2.6rem] leading-[1.02] tracking-[-0.02em] text-ink-950 md:text-[3.2rem]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
              >
                A city told through the{" "}
                <span className="italic text-tamarind-600">neighborhoods</span> that built it.
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-7">
              <p className="font-serif drop-cap text-[19px] leading-[1.8] text-ink-900">
                {copy.pitch.paragraphs[0]}
              </p>
              <p className="font-serif mt-6 text-[19px] leading-[1.8] text-ink-900">
                {copy.pitch.paragraphs[1]}
              </p>
              <p className="font-serif mt-6 text-[19px] leading-[1.8] text-ink-800">
                {copy.pitch.paragraphs[2]}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
