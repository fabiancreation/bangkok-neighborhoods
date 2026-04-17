import { cn } from "@/lib/cn";

type Props = {
  roman: string;
  thai: string;
  translation: string;
  className?: string;
};

export function ThaiTermLabel({ roman, thai, translation, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-700",
        className,
      )}
    >
      <span className="text-tamarind-600 font-semibold">{roman}</span>
      <span className="text-paper-300">·</span>
      <span className="font-thai text-[13px] text-ink-900" style={{ fontFamily: "var(--font-thai)" }}>
        {thai}
      </span>
      <span className="text-paper-300">·</span>
      <span className="text-ink-700">{translation}</span>
    </span>
  );
}
