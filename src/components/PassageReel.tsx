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
      <div className="mx-auto max-w-[1400px] px-6 pt-32 md:px-10 md:pt-40">
        <div className="max-w-[62ch]">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-saffron-400">
            {copy.reel.eyebrow}
          </p>
          <hr className="my-6 w-12 border-saffron-400/70" />
          <h2
            className="font-display text-[2.6rem] leading-[1.04] tracking-[-0.02em] text-paper-50 md:text-[3.4rem]"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            {copy.reel.title}
          </h2>
          <p className="mt-5 font-serif text-[17px] leading-relaxed text-paper-100/90">
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
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -30]);

  return (
    <div ref={ref} className="relative h-[140vh]">
      <div className="sticky top-0 flex min-h-screen items-center">
        <motion.article
          style={{ opacity, y }}
          className="relative mx-auto w-full max-w-[920px] px-6 py-24 md:px-10"
        >
          <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-saffron-400">
            <span>{passage.chapter}</span>
            <span>
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
          <hr className="mt-6 w-14 border-saffron-400/60" />
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-paper-200/85">
            {passage.location}
          </p>

          <p
            className="font-display mt-12 text-[1.7rem] leading-[1.5] tracking-[-0.005em] text-paper-50 md:text-[2.3rem]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60", fontWeight: 400 }}
          >
            <span aria-hidden className="font-display mr-1 align-[-0.5em] text-[5rem] leading-none text-tamarind-400 opacity-80">
              “
            </span>
            {passage.text}
          </p>

          {passage.highlight && (
            <p
              className="font-display mt-12 border-l-2 border-saffron-400 pl-6 text-[1.7rem] italic leading-[1.4] tracking-[-0.01em] text-saffron-400 md:text-[2.3rem]"
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
