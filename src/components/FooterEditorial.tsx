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
      {/* Warmer, richer background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1000px 500px at 12% 0%, rgba(224,122,58,0.28), transparent 60%)," +
            "radial-gradient(900px 500px at 88% 100%, rgba(222,148,128,0.2), transparent 65%)," +
            "linear-gradient(180deg, #3d2f25 0%, #2a201a 60%, #1c140e 100%)",
        }}
      />
      {/* Top gradient rule */}
      <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-tamarind-500 via-saffron-500 to-jade-500 opacity-80" />

      <div className="mx-auto max-w-[1400px] px-6 pt-20 md:px-10 md:pt-24">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          {/* Newsletter — spans 7 cols */}
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-saffron-400">
              {copy.newsletter.title}
            </p>
            <hr className="my-5 w-12 border-saffron-400/70" />
            <h3
              className="font-display max-w-[20ch] text-[2rem] leading-[1.05] tracking-[-0.02em] text-paper-50 md:text-[2.5rem]"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              Dispatches from the research.
            </h3>
            <p className="mt-5 max-w-[50ch] font-serif text-[15.5px] leading-relaxed text-paper-100/85">
              {copy.newsletter.description}
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-7 flex max-w-[520px] flex-col gap-2.5 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={copy.newsletter.placeholder}
                aria-label="Email address"
                className="flex-1 border border-paper-100/25 bg-paper-50/5 px-4 py-3 font-serif text-[16px] text-paper-50 placeholder:text-paper-100/45 focus:border-saffron-400 focus:bg-paper-50/10 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "submitting" || status === "done"}
                className="bg-tamarind-500 px-7 py-3 font-sans text-[12px] uppercase tracking-[0.2em] text-paper-50 shadow-[0_8px_20px_-8px_rgba(224,122,58,0.6)] transition hover:bg-tamarind-600 disabled:opacity-60"
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

          {/* Nav columns — 2+3 */}
          <div className="md:col-span-2 md:col-start-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-tamarind-400">
              The series
            </p>
            <ul className="mt-5 space-y-2.5 font-serif text-[15px]">
              <li>
                <a
                  href="https://understandingthaiculture.com"
                  className="inline-flex items-center gap-1 text-paper-50 transition hover:text-saffron-400"
                >
                  Understanding Thai Culture
                  <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
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

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-tamarind-400">
              Legal & contact
            </p>
            <ul className="mt-5 space-y-2.5 font-serif text-[15px]">
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
                  className="text-paper-50 transition hover:text-saffron-400"
                >
                  hello@shape-of-bangkok.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-paper-100/15 py-7 md:flex-row md:items-center md:py-8">
          <div className="flex items-baseline gap-4">
            <p
              className="font-display italic text-[1.35rem] leading-none text-saffron-400 md:text-[1.6rem]"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              {copy.footer.closing}
            </p>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.24em] text-paper-100/50 md:inline">
              Chao Phraya, 13°45′N
            </span>
          </div>
          <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.24em] text-paper-100/65">
            <span>{copy.footer.rights}</span>
            <span className="text-tamarind-400">·</span>
            <span>{new Date().getFullYear()}</span>
            <span className="text-tamarind-400">·</span>
            <span>Bangkok</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
