"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

const W = 1200;
const H = 80;
const COILS = 22;

function springPath(amp: number) {
  const step = (W - 80) / COILS;
  let d = `M0 ${H / 2} L40 ${H / 2}`;
  for (let i = 0; i < COILS; i++) {
    const x = 40 + i * step;
    d += ` C${x + step * 0.25} ${H / 2 - amp}, ${x + step * 0.75} ${H / 2 + amp}, ${x + step} ${H / 2}`;
  }
  return d + ` L${W} ${H / 2}`;
}

/** Kaydırmaya bağlı "reformer yayı": sayfa ilerledikçe gerilip gevşer. */
export function SpringDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const d = useTransform(scrollYProgress, (p) => springPath(reduce ? 14 : 4 + Math.sin(p * Math.PI) * 26));
  return (
    <div ref={ref} aria-hidden="true" className="wrap py-2 text-clay/60">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="h-12 w-full overflow-visible md:h-16">
        <motion.path d={d} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
