"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faq } from "@/content/faq";
import { fadeUp, stagger } from "@/lib/motion";

export function FAQ() {
  return (
    <section id="faq" className="relative bg-paper-100 paper-grain">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 sm:py-28 md:px-10 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1)}
          className="grid gap-10 sm:gap-14 md:grid-cols-12 md:gap-16"
        >
          <motion.div variants={fadeUp} className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-tamarind-600">
              Questions
            </p>
            <hr className="hairline-brass my-6 w-12" />
            <h2
              className="font-display text-[1.9rem] leading-[1.05] tracking-[-0.02em] text-ink-950 sm:text-[2.4rem] md:text-[2.8rem]"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              The things people ask before they buy.
            </h2>
            <p className="mt-6 font-serif text-[16px] leading-relaxed text-ink-800">
              Tap any question. If yours is missing, email{" "}
              <a className="link-editorial" href="mailto:hello@shape-of-bangkok.com">
                hello@shape-of-bangkok.com
              </a>
              .
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-8">
            <Accordion.Root
              type="single"
              collapsible
              className="flex flex-col gap-3"
            >
              {faq.map((item, i) => (
                <Accordion.Item
                  key={i}
                  value={`item-${i}`}
                  className="group/item relative overflow-hidden border border-paper-200 bg-paper-50 transition-all duration-300 data-[state=open]:border-tamarind-500/40 data-[state=open]:bg-paper-50 data-[state=open]:shadow-[0_16px_40px_-20px_rgba(184,130,58,0.35)]"
                >
                  {/* Left accent bar, scales in when open */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-0 h-full w-[4px] origin-top scale-y-0 bg-gradient-to-b from-tamarind-500 via-saffron-500 to-blush-500 transition-transform duration-300 group-data-[state=open]/item:scale-y-100"
                  />

                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="group/trigger flex w-full items-center gap-4 px-4 py-5 text-left transition-colors sm:gap-6 sm:px-5 sm:py-6 md:px-8 md:py-7">
                      {/* Index number */}
                      <span
                        className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-700 transition-colors group-data-[state=open]/item:text-tamarind-600"
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="flex-1 font-display text-[1.02rem] leading-snug tracking-[-0.005em] text-ink-900 transition-colors group-data-[state=open]/item:text-ink-950 sm:text-[1.15rem] md:text-[1.35rem]"
                        style={{ fontVariationSettings: "'opsz' 72" }}
                      >
                        {item.q}
                      </span>

                      {/* Plus icon that rotates 45° to become × when open */}
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-900/20 text-ink-900 transition-all duration-300 group-hover/trigger:border-tamarind-500 group-hover/trigger:text-tamarind-600 group-data-[state=open]/item:rotate-45 group-data-[state=open]/item:border-tamarind-500 group-data-[state=open]/item:bg-tamarind-500 group-data-[state=open]/item:text-paper-50"
                        aria-hidden
                      >
                        <Plus size={16} strokeWidth={2} />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <Accordion.Content className="accordion-content overflow-hidden">
                    <div className="px-4 pb-6 pl-[calc(1rem+32px+1rem)] pr-4 sm:px-5 sm:pb-7 sm:pl-[calc(1.25rem+32px+1.5rem)] md:px-8 md:pb-8 md:pl-[calc(2rem+32px+1.5rem)]">
                      {/* Hairline divider before answer */}
                      <hr className="mb-6 w-12 border-tamarind-500/60" />
                      <p className="font-serif max-w-[60ch] text-[16.5px] leading-[1.75] text-ink-800 md:text-[17.5px]">
                        {item.a}
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
