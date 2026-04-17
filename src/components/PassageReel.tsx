"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { passages } from "@/content/passages";
import { copy } from "@/content/copy";

export function PassageReel() {
  return (
    <section id="passages" className="relative bg-ink-950 text-paper-50">
      <div className="mx-auto max-w-[1400px] px-6 pt-32 md:px-10 md:pt-40">
        <div className="max-w-[62ch]">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass-400">
            {copy.reel.eyebrow}
          </p>
          <hr className="my-6 w-12 border-brass-500/60" />
          <h2
            className="font-display text-[2.6rem] leading-[1.04] tracking-[-0.02em] text-paper-50 md:text-[3.4rem]"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            {copy.reel.title}
          </h2>
          <p className="mt-4 font-serif text-[16px] leading-relaxed text-paper-200">
            Five openings from the book. Nothing more, nothing less.
          </p>
        </div>
      </div>
      <div className="mt-20">
        {passages.map((p, i) => (
          <PinnedPassage key={p.id} index={i} total={passages.length} passage={p} />
        ))}
      </div>
    </section>
  );
}

function PinnedPassage({
  index,
  total,
  passage,
}: {
  index: number;
  total: number;
  passage: (typeof passages)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -40]);

  return (
    <div ref={ref} className="relative h-[140vh]">
      <div className="sticky top-0 flex min-h-screen items-center">
        <motion.article
          style={{ opacity, y }}
          className="relative mx-auto w-full max-w-[900px] px-6 py-24 md:px-10"
        >
          <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-brass-400">
            <span>{passage.chapter}</span>
            <span>
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
          <hr className="mt-6 w-14 border-brass-500/60" />
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-paper-300">
            {passage.location}
          </p>

          <p
            className="font-display mt-12 text-[1.5rem] leading-[1.45] tracking-[-0.01em] text-paper-50 md:text-[2.1rem]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 40" }}
          >
            <span aria-hidden className="pull-quote-mark mr-1 align-[-0.7em]">
              “
            </span>
            {passage.text}
          </p>

          {passage.highlight && (
            <p
              className="font-display mt-10 border-l-2 border-brass-500 pl-6 text-[1.6rem] italic leading-[1.35] tracking-[-0.01em] text-brass-400 md:text-[2.2rem]"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              {passage.highlight}
            </p>
          )}
        </motion.article>
      </div>
    </div>
  );
}
