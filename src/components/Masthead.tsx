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
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6 md:px-10">
        <a
          href="#top"
          className="flex min-w-0 items-baseline gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-900 sm:gap-3 sm:text-[11px] sm:tracking-[0.22em]"
        >
          {/* Compact mark on mobile, full mark on >=sm */}
          <span className="hidden sm:inline">{copy.series.mark}</span>
          <span className="sm:hidden">UTC</span>
          <span className="text-paper-300">·</span>
          <span className="truncate text-tamarind-600">{copy.series.volume}</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#atlas" className="font-sans text-[13px] tracking-wide text-ink-800 hover:text-tamarind-600">
            The nineteen
          </a>
          <a href="#passages" className="font-sans text-[13px] tracking-wide text-ink-800 hover:text-tamarind-600">
            Passages
          </a>
          <a href="#author" className="font-sans text-[13px] tracking-wide text-ink-800 hover:text-tamarind-600">
            Author
          </a>
          <a href="#faq" className="font-sans text-[13px] tracking-wide text-ink-800 hover:text-tamarind-600">
            FAQ
          </a>
        </nav>
        <a
          href={buildCheckoutUrl()}
          onClick={() => trackEvent("buy_click", { location: "masthead" })}
          className="group inline-flex shrink-0 items-center gap-2 bg-tamarind-500 px-3 py-2 font-sans text-[11px] uppercase tracking-[0.16em] text-paper-50 transition hover:bg-tamarind-600 sm:px-4 sm:text-[12px] sm:tracking-[0.18em]"
        >
          <span>Buy · $14</span>
        </a>
      </div>
    </header>
  );
}
