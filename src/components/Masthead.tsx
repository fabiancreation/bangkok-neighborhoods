"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { copy } from "@/content/copy";
import { buildCheckoutUrl } from "@/lib/lemon-squeezy";
import { trackEvent } from "@/lib/analytics";

export function Masthead() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        scrolled
          ? "backdrop-blur-md bg-paper-50/80 border-b border-paper-200"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-900"
        >
          <span>{copy.series.mark}</span>
          <span className="text-paper-300">·</span>
          <span className="text-brass-600">{copy.series.volume}</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#atlas" className="font-sans text-[13px] tracking-wide text-ink-800 hover:text-brass-600">
            The nineteen
          </a>
          <a href="#passages" className="font-sans text-[13px] tracking-wide text-ink-800 hover:text-brass-600">
            Passages
          </a>
          <a href="#author" className="font-sans text-[13px] tracking-wide text-ink-800 hover:text-brass-600">
            Author
          </a>
          <a href="#faq" className="font-sans text-[13px] tracking-wide text-ink-800 hover:text-brass-600">
            FAQ
          </a>
        </nav>
        <a
          href={buildCheckoutUrl()}
          onClick={() => trackEvent("buy_click", { location: "masthead" })}
          className="group inline-flex items-center gap-2 border border-ink-900 bg-ink-900 px-4 py-2 font-sans text-[12px] uppercase tracking-[0.18em] text-paper-50 transition hover:bg-brass-600 hover:border-brass-600"
        >
          <span>Buy · $14</span>
        </a>
      </div>
    </header>
  );
}
