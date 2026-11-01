"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { firstClass } from "@/content/business";
import { Fill } from "@/components/ui/Fill";

export function FirstClass({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion();
  const items = compact ? firstClass.slice(0, 3) : firstClass;
  return (
    <section className="section bg-oat" aria-labelledby="ilk-ders-baslik">
      <div className="wrap grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay-deep">İlk ders</p>
          <h2 id="ilk-ders-baslik" className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            İlk dersinize <em className="italic text-clay-deep">hazırlık</em>
          </h2>
          <p className="mt-4 text-ink-2">Çok az şey yeterli; kalanını stüdyoda birlikte hallederiz.</p>
          {compact && (
            <Link
              href="/ilk-ders"
              className="tap mt-6 inline-flex items-center font-semibold text-ink underline decoration-clay underline-offset-4"
            >
              İlk ders rehberinin tamamı
            </Link>
          )}
        </div>
        <ol className="relative md:col-span-7">
          <span aria-hidden="true" className="absolute bottom-3 left-5 top-3 w-px bg-line" />
          {items.map((item, i) => (
            <motion.li
              key={item.id}
              initial={reduce ? false : { opacity: 0, x: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-5 pb-9 last:pb-0"
            >
              <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-clay/40 bg-snow font-display text-lg text-clay-deep">
                {i + 1}
              </span>
              <div className="pt-1">
                <h3 className="font-display text-xl text-ink md:text-2xl">{item.title}</h3>
                <p className="mt-1 text-ink-2">
                  <Fill text={item.text} />
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
