"use client";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  size?: "sm" | "md" | "lg";
  className?: string;
  interactive?: boolean;
};

const sizeMap = {
  sm: "w-[180px] h-[270px]",
  md: "w-[260px] h-[390px]",
  lg: "w-[340px] h-[510px]",
};

export function BookCover3D({ size = "md", className, interactive = true }: Props) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn("relative [perspective:1800px]", className)}
      style={{ filter: "drop-shadow(0 30px 60px rgba(12,10,8,0.35))" }}
    >
      <motion.div
        initial={{ rotateY: -18, rotateX: 4 }}
        whileHover={interactive && !reduce ? { rotateY: -8, rotateX: 2 } : undefined}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn("relative [transform-style:preserve-3d]", sizeMap[size])}
      >
        {/* Spine */}
        <div
          className="absolute top-0 left-0 h-full w-[18px] bg-brass-700"
          style={{
            transform: "rotateY(-90deg) translateZ(9px) translateX(-9px)",
            transformOrigin: "left",
          }}
        />
        {/* Pages (edge) */}
        <div
          className="absolute top-[4px] right-0 bottom-[4px] w-[14px] bg-paper-100"
          style={{
            transform: "rotateY(90deg) translateZ(0)",
            transformOrigin: "right",
            backgroundImage:
              "repeating-linear-gradient(to bottom, #ede4d1 0, #ede4d1 1px, #dcceb2 1px, #dcceb2 2px)",
          }}
        />
        {/* Front cover */}
        <img
          src="/cover.svg"
          alt="The Shape of Bangkok: book cover"
          className="absolute inset-0 h-full w-full object-cover shadow-[inset_0_0_40px_rgba(12,10,8,0.08)]"
          style={{ transform: "translateZ(0.5px)" }}
        />
        {/* Top gleam */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 35%)",
            transform: "translateZ(1px)",
          }}
        />
      </motion.div>
    </div>
  );
}
