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
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-28 md:px-10 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.12)}
          className="relative grid items-center gap-10 border border-tamarind-500/30 bg-gradient-to-br from-paper-100 via-paper-50 to-saffron-400/20 p-6 shadow-[0_40px_80px_-30px_rgba(184,130,58,0.35)] sm:gap-12 sm:p-10 md:grid-cols-12 md:gap-16 md:p-16"
        >
          {/* Cover */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center md:col-span-5 md:justify-start"
          >
            <BookCover3D size="lg" className="max-w-full" />
          </motion.div>

          {/* Details */}
          <motion.div variants={fadeUp} className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-tamarind-600">
              {copy.buy.eyebrow}
            </p>
            <hr className="hairline-brass my-6 w-12" />
            <h2
              className="font-display text-[1.9rem] leading-[1.05] tracking-[-0.02em] text-ink-950 sm:text-[2.4rem] md:text-[3rem]"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              {copy.buy.title}
            </h2>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 sm:mt-8">
              <span
                className="font-display text-[3.4rem] leading-none tracking-[-0.04em] text-tamarind-600 sm:text-[4.5rem]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 40" }}
              >
                {copy.buy.price}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-700 sm:text-[11px]">
                USD · one-time · instant delivery
              </span>
            </div>

            <ul className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
              {copy.buy.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-serif text-[15px] leading-relaxed text-ink-900 sm:text-[16px]">
                  <Check className="mt-[6px] shrink-0 text-tamarind-600" size={16} strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={buildCheckoutUrl()}
                onClick={() => trackEvent("buy_click", { location: "buy_card" })}
                className="group inline-flex min-h-[56px] items-center justify-center gap-3 bg-tamarind-500 px-6 py-4 font-sans text-[12px] uppercase tracking-[0.22em] text-paper-50 shadow-[0_8px_28px_-10px_rgba(224,122,58,0.6)] transition hover:bg-tamarind-600 sm:px-8 sm:py-5 sm:text-[13px]"
              >
                {copy.buy.cta}
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#sample"
                className="inline-flex min-h-[56px] items-center justify-center gap-3 border border-ink-900/30 px-6 py-4 font-sans text-[12px] uppercase tracking-[0.22em] text-ink-900 transition hover:border-tamarind-500 hover:text-tamarind-600 sm:px-8 sm:py-5 sm:text-[13px]"
              >
                Read Chapter One free
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-700">
              <span>{copy.buy.devices}</span>
            </div>

            <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-700">
              <ShieldCheck size={14} className="text-tamarind-600" />
              <span>{copy.buy.guarantee}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
