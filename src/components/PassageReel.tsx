"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { passages } from "@/content/passages";
import { copy } from "@/content/copy";

export function PassageReel() {
  return (
    <section id="passages" className="relative on-dark">
      {/* Warm deep-teal/brown backdrop, not pure black */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% 10%, rgba(224,122,58,0.18), transparent 60%), radial-gradient(1000px 800px at 90% 90%, rgba(90,138,111,0.18), transparent 65%), linear-gradient(180deg, #1f3536 0%, #2a201a 100%)",
        }}
      />
      <div className="mx-auto max-w-[1400px] px-5 pt-20 sm:px-6 sm:pt-28 md:px-10 md:pt-40">
        <div className="max-w-[62ch]">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-saffron-400">
            {copy.reel.eyebrow}
          </p>
          <hr className="my-5 w-12 border-saffron-400/70 sm:my-6" />
          <h2
            className="font-display text-[2rem] leading-[1.05] tracking-[-0.02em] text-paper-50 sm:text-[2.6rem] md:text-[3.4rem]"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            {copy.reel.title}
          </h2>
          <p className="mt-4 font-serif text-[16px] leading-relaxed text-paper-100/90 sm:mt-5 sm:text-[17px]">
            Five openings from the book. Nothing more, nothing less.
          </p>
        </div>
      </div>
      <div className="mt-12 sm:mt-20">
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
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -30]);

  return (
    <div ref={ref} className="relative h-[120vh] sm:h-[140vh]">
      <div className="sticky top-0 flex min-h-screen items-center">
        <motion.article
          style={{ opacity, y }}
          className="relative mx-auto w-full max-w-[920px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24"
        >
          <div className="flex items-baseline justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.26em] text-saffron-400 sm:text-[10px] sm:tracking-[0.28em]">
            <span className="truncate">{passage.chapter}</span>
            <span className="shrink-0">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
          <hr className="mt-5 w-12 border-saffron-400/60 sm:mt-6 sm:w-14" />
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-200/85 sm:mt-6 sm:text-[11px]">
            {passage.location}
          </p>

          <p
            className="font-display mt-8 text-[1.25rem] leading-[1.45] tracking-[-0.005em] text-paper-50 sm:mt-12 sm:text-[1.7rem] md:text-[2.3rem]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60", fontWeight: 400 }}
          >
            <span aria-hidden className="font-display mr-1 align-[-0.4em] text-[3.5rem] leading-none text-tamarind-400 opacity-80 sm:align-[-0.5em] sm:text-[5rem]">
              “
            </span>
            {passage.text}
          </p>

          {passage.highlight && (
            <p
              className="font-display mt-8 border-l-2 border-saffron-400 pl-4 text-[1.3rem] italic leading-[1.35] tracking-[-0.01em] text-saffron-400 sm:mt-12 sm:pl-6 sm:text-[1.7rem] md:text-[2.3rem]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80" }}
            >
              {passage.highlight}
            </p>
          )}
        </motion.article>
      </div>
    </div>
  );
}
