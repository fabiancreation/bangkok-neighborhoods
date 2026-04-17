"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faq } from "@/content/faq";
import { fadeUp, stagger } from "@/lib/motion";

export function FAQ() {
  return (
    <section id="faq" className="relative bg-paper-100 paper-grain">
      <div className="mx-auto max-w-[1200px] px-6 py-32 md:px-10 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1)}
          className="grid gap-16 md:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-tamarind-600">Questions</p>
            <hr className="hairline-brass my-6 w-12" />
            <h2
              className="font-display text-[2.4rem] leading-[1.05] tracking-[-0.02em] text-ink-950 md:text-[2.8rem]"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              The things people ask before they buy.
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-8">
            <Accordion.Root type="single" collapsible className="border-t border-paper-200">
              {faq.map((item, i) => (
                <Accordion.Item
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-paper-200 data-[state=open]:bg-paper-50"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left transition md:py-8">
                      <span className="font-display text-[1.2rem] leading-snug text-ink-900 md:text-[1.4rem]">
                        {item.q}
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-ink-900/30 text-ink-900 transition group-hover:border-brass-500 group-hover:text-tamarind-600 group-data-[state=open]:hidden">
                        <Plus size={16} />
                      </span>
                      <span className="hidden h-8 w-8 shrink-0 items-center justify-center border border-brass-500 text-tamarind-600 group-data-[state=open]:flex">
                        <Minus size={16} />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[collapse_200ms_ease] data-[state=open]:animate-[expand_300ms_ease]">
                    <p className="font-serif max-w-[60ch] pb-8 pr-12 text-[17px] leading-[1.75] text-ink-800">
                      {item.a}
                    </p>
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
