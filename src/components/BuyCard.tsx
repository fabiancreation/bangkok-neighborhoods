"use client";
import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { copy } from "@/content/copy";
import { fadeUp, stagger } from "@/lib/motion";
import { buildCheckoutUrl } from "@/lib/lemon-squeezy";
import { trackEvent } from "@/lib/analytics";
import { BookCover3D } from "./BookCover3D";

export function BuyCard() {
  return (
    <section id="buy" className="relative bg-paper-50 paper-grain">
      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.12)}
          className="relative grid items-center gap-16 border border-ink-900 bg-paper-100 p-8 md:grid-cols-12 md:p-16"
        >
          {/* Cover */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-5 flex justify-center md:justify-start"
          >
            <BookCover3D size="lg" />
          </motion.div>

          {/* Details */}
          <motion.div variants={fadeUp} className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass-600">
              {copy.buy.eyebrow}
            </p>
            <hr className="hairline-brass my-6 w-12" />
            <h2
              className="font-display text-[2.4rem] leading-[1.05] tracking-[-0.02em] text-ink-950 md:text-[3rem]"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              {copy.buy.title}
            </h2>
            <div className="mt-8 flex items-baseline gap-4">
              <span
                className="font-display text-[4.5rem] leading-none tracking-[-0.04em] text-brass-600"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 40" }}
              >
                {copy.buy.price}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-700">
                USD · one-time · instant delivery
              </span>
            </div>

            <ul className="mt-10 space-y-4">
              {copy.buy.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-serif text-[16px] leading-relaxed text-ink-900">
                  <Check className="mt-[6px] shrink-0 text-brass-600" size={16} strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={buildCheckoutUrl()}
                onClick={() => trackEvent("buy_click", { location: "buy_card" })}
                className="group inline-flex items-center justify-center gap-3 bg-ink-950 px-8 py-5 font-sans text-[13px] uppercase tracking-[0.22em] text-paper-50 transition hover:bg-brass-600"
              >
                {copy.buy.cta}
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#sample"
                className="inline-flex items-center justify-center gap-3 border border-ink-900/30 px-8 py-5 font-sans text-[13px] uppercase tracking-[0.22em] text-ink-900 transition hover:border-brass-500 hover:text-brass-600"
              >
                Read Chapter One free
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-700">
              <span>{copy.buy.devices}</span>
            </div>

            <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-700">
              <ShieldCheck size={14} className="text-brass-600" />
              <span>{copy.buy.guarantee}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
