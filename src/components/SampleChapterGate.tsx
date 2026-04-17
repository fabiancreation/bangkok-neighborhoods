"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { fadeUp, stagger } from "@/lib/motion";
import { trackEvent } from "@/lib/analytics";

export function SampleChapterGate() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "sample_chapter" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Request failed");
      }
      trackEvent("chapter_one_delivered", { source: "sample_chapter" });
      setStatus("done");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Request failed");
    }
  }

  return (
    <section id="sample" className="on-dark relative overflow-hidden text-paper-50">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 500px at 85% 15%, rgba(245,198,90,0.25), transparent 60%), radial-gradient(700px 500px at 10% 85%, rgba(224,122,58,0.22), transparent 65%), linear-gradient(180deg, #2a201a 0%, #1c140e 100%)",
        }}
      />
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 sm:py-28 md:px-10 md:py-36">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger(0.1)}
          className="grid gap-10 sm:gap-14 md:grid-cols-12 md:gap-16"
        >
          <motion.div variants={fadeUp} className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-saffron-400">
              Chapter 01 · Thonburi
            </p>
            <hr className="my-6 w-12 border-saffron-400/70" />
            <h2
              className="font-display text-[1.9rem] leading-[1.05] tracking-[-0.02em] text-paper-50 sm:text-[2.4rem] md:text-[3rem]"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              {copy.sample.title}
            </h2>
            <p className="mt-6 max-w-[45ch] font-serif text-[17px] leading-relaxed text-paper-200">
              {copy.sample.description}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-6 md:col-start-7">
            {status === "done" ? (
              <div className="border border-saffron-400/50 bg-ink-950 p-8 md:p-10">
                <p
                  className="font-display text-[1.4rem] leading-snug text-saffron-400"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  {copy.sample.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-300">
                    Where should I send it?
                  </span>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    aria-label="Email address"
                    className="mt-3 w-full border border-paper-200/30 bg-transparent px-5 py-4 font-serif text-[18px] text-paper-50 placeholder:text-paper-300/60 focus:border-saffron-400 focus:outline-none"
                  />
                </label>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex min-h-[56px] w-full items-center justify-center gap-3 bg-tamarind-500 px-6 py-4 font-sans text-[12px] uppercase tracking-[0.22em] text-paper-50 shadow-[0_6px_24px_-8px_rgba(224,122,58,0.6)] transition hover:bg-tamarind-600 disabled:opacity-60 sm:w-auto sm:px-8 sm:py-5 sm:text-[13px]"
                >
                  {status === "submitting" ? "Sending" : copy.sample.cta}
                  <span>→</span>
                </button>
                {status === "error" && (
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-chili-500">
                    {error ?? "Something broke. Try again."}
                  </p>
                )}
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-300/60">
                  No spam. Unsubscribe in one click.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
