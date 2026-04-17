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
    <footer className="on-dark relative overflow-hidden text-paper-200">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 400px at 15% 10%, rgba(224,122,58,0.18), transparent 65%), linear-gradient(180deg, #2a201a 0%, #1c140e 100%)",
        }}
      />
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-saffron-400">
              {copy.newsletter.title}
            </p>
            <hr className="my-6 w-12 border-saffron-400/70" />
            <h3
              className="font-display max-w-[18ch] text-[2rem] leading-[1.05] tracking-[-0.02em] text-paper-50 md:text-[2.6rem]"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              Dispatches from the research.
            </h3>
            <p className="mt-6 max-w-[45ch] font-serif text-[16px] leading-relaxed text-paper-200">
              {copy.newsletter.description}
            </p>
            <form onSubmit={handleSubmit} className="mt-10 flex max-w-[480px] flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={copy.newsletter.placeholder}
                aria-label="Email address"
                className="flex-1 border border-paper-200/30 bg-transparent px-4 py-3 font-serif text-[16px] text-paper-50 placeholder:text-paper-300/60 focus:border-saffron-400 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "submitting" || status === "done"}
                className="bg-tamarind-500 px-6 py-3 font-sans text-[12px] uppercase tracking-[0.2em] text-paper-50 transition hover:bg-tamarind-600 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending" : status === "done" ? "Sent" : copy.newsletter.cta}
              </button>
            </form>
            {status === "done" && (
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-saffron-400">
                Check your inbox.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-chili-500">
                Something broke. Try again.
              </p>
            )}
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper-300">The series</p>
            <hr className="my-6 w-12 border-paper-200/30" />
            <ul className="space-y-3 font-serif text-[15px] text-paper-200">
              <li>
                <a className="link-editorial" href="https://understandingthaiculture.com">
                  Understanding Thai Culture →
                </a>
              </li>
              <li>
                <a className="link-editorial" href="#top">
                  This book
                </a>
              </li>
              <li>
                <a className="link-editorial" href="#sample">
                  Free chapter
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper-300">Legal</p>
            <hr className="my-6 w-12 border-paper-200/30" />
            <ul className="space-y-3 font-serif text-[15px] text-paper-200">
              <li>
                <a className="link-editorial" href="/imprint">
                  Imprint
                </a>
              </li>
              <li>
                <a className="link-editorial" href="/privacy">
                  Privacy
                </a>
              </li>
              <li>
                <a className="link-editorial" href="mailto:hello@shape-of-bangkok.com">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-paper-200/15 pt-8 md:flex-row md:items-center">
          <p
            className="font-display italic text-[1.3rem] text-paper-100"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            {copy.footer.closing}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-300">
            {copy.footer.rights} · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
