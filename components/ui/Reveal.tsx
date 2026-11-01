"use client";

import { motion } from "motion/react";

/** Kaydırınca yumuşak giriş. reduced-motion'da globals.css [data-reveal] kuralıyla statik. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 0.8, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
