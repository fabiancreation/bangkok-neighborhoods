"use client";
import { useState } from "react";
import { copy } from "@/content/copy";
import { trackEvent } from "@/lib/analytics";

export function FooterEditorial() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });
      if (!res.ok) throw new Error("Request failed");
      trackEvent("newsletter_signup", { source: "footer" });
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="relative overflow-hidden text-paper-100">
      {/* Warm gradient background, more saturated than before */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1000px 500px at 10% 0%, rgba(224,122,58,0.35), transparent 55%)," +
            "radial-gradient(800px 500px at 100% 100%, rgba(222,148,128,0.28), transparent 60%)," +
            "radial-gradient(600px 400px at 60% 40%, rgba(245,198,90,0.1), transparent 70%)," +
            "linear-gradient(180deg, #3d2f25 0%, #2a201a 80%, #1c140e 100%)",
        }}
      />
      {/* Top gradient rule */}
      <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-tamarind-500 via-saffron-500 to-jade-500 opacity-80" />

      <div className="mx-auto max-w-[1400px] px-6 pt-16 sm:px-8 md:px-10 md:pt-20">
        {/* Top row: newsletter (left) + two nav columns (right) */}
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Newsletter */}
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-saffron-400">
              {copy.newsletter.title}
            </p>
            <hr className="my-4 w-12 border-saffron-400/70" />
            <h3
              className="font-display max-w-[20ch] text-[1.9rem] leading-[1.05] tracking-[-0.02em] text-paper-50 sm:text-[2.2rem] md:text-[2.4rem]"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              Dispatches from the research.
            </h3>
            <p className="mt-4 max-w-[52ch] font-serif text-[15px] leading-relaxed text-paper-100/85 sm:text-[16px]">
              {copy.newsletter.description}
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex max-w-[520px] flex-col gap-2.5 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={copy.newsletter.placeholder}
                aria-label="Email address"
                className="min-h-[48px] flex-1 border border-paper-100/25 bg-paper-50/5 px-4 py-3 font-serif text-[16px] text-paper-50 placeholder:text-paper-100/45 focus:border-saffron-400 focus:bg-paper-50/10 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "submitting" || status === "done"}
                className="min-h-[48px] bg-tamarind-500 px-7 py-3 font-sans text-[12px] uppercase tracking-[0.2em] text-paper-50 shadow-[0_8px_20px_-8px_rgba(224,122,58,0.6)] transition hover:bg-tamarind-600 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending" : status === "done" ? "Sent" : copy.newsletter.cta}
              </button>
            </form>
            {status === "done" && (
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-saffron-400">
                Check your inbox.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-chili-500">
                Something broke. Try again.
              </p>
            )}
          </div>

          {/* The series */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-tamarind-400">
              The series
            </p>
            <hr className="my-4 w-10 border-tamarind-500/50" />
            <ul className="space-y-3 font-serif text-[15px]">
              <li>
                <a
                  href="https://understandingthaiculture.com"
                  className="group/link inline-flex items-center gap-1.5 text-paper-50 transition hover:text-saffron-400"
                >
                  Understanding Thai Culture
                  <span aria-hidden className="inline-block transition-transform group-hover/link:translate-x-0.5">
                    →
                  </span>
                </a>
              </li>
              <li>
                <a href="#top" className="text-paper-50 transition hover:text-saffron-400">
                  This book
                </a>
              </li>
              <li>
                <a href="#sample" className="text-paper-50 transition hover:text-saffron-400">
                  Free chapter
                </a>
              </li>
              <li>
                <a href="#buy" className="text-paper-50 transition hover:text-saffron-400">
                  Buy the eBook
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & contact */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-tamarind-400">
              Legal & contact
            </p>
            <hr className="my-4 w-10 border-tamarind-500/50" />
            <ul className="space-y-3 font-serif text-[15px]">
              <li>
                <a href="/imprint" className="text-paper-50 transition hover:text-saffron-400">
                  Imprint
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-paper-50 transition hover:text-saffron-400">
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@shape-of-bangkok.com"
                  className="break-all text-paper-50 transition hover:text-saffron-400"
                >
                  hello@shape-of-bangkok.com
                </a>
              </li>
              <li className="pt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-100/55">
                Bangkok, 13°45′N
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative river line with boat */}
        <div className="relative mt-14 md:mt-16">
          <svg
            viewBox="0 0 1200 40"
            className="h-6 w-full opacity-70"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 0 20 Q 150 8 320 22 T 640 18 T 960 26 T 1200 16"
              fill="none"
              stroke="#b8823a"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M 820 23 L 850 21 L 855 28 L 815 30 Z"
              fill="#e07a3a"
            />
            <line x1="830" y1="21" x2="826" y2="10" stroke="#e07a3a" strokeWidth="1" />
          </svg>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start gap-4 border-t border-paper-100/15 py-6 md:flex-row md:items-center md:justify-between md:py-7">
          <p
            className="font-display italic text-[1.35rem] leading-none text-saffron-400"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            {copy.footer.closing}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.24em] text-paper-100/65">
            <span>{copy.footer.rights}</span>
            <span className="text-tamarind-400">·</span>
            <span>{new Date().getFullYear()}</span>
            <span className="text-tamarind-400">·</span>
            <a
              href="https://understandingthaiculture.com"
              className="transition hover:text-saffron-400"
            >
              Understanding Thai Culture, Volume II
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
