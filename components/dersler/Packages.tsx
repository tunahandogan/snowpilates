"use client";

import { motion, useReducedMotion } from "motion/react";
import { packages } from "@/content/business";
import { Fill } from "@/components/ui/Fill";

export function Packages() {
  const reduce = useReducedMotion();
  return (
    <section className="section bg-oat" aria-labelledby="paketler-baslik">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay-deep">Paketler</p>
          <h2 id="paketler-baslik" className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            Ders <em className="italic text-clay-deep">paketleri</em>
          </h2>
          <p className="mt-4 text-ink-2">Fiyat ve içerik stüdyodan öğrenilip buraya eklenecek.</p>
        </div>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {packages.map((p, i) => (
            <motion.li
              key={p.id}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-2 py-7 md:grid-cols-[1fr_1.5fr_auto] md:items-center md:gap-8"
            >
              <h3 className="font-display text-2xl text-ink md:text-3xl">{p.name}</h3>
              <p className="text-ink-2">
                <Fill text={p.detail} />
              </p>
              <p className="font-semibold text-clay-deep">
                {p.price ? (
                  p.price
                ) : (
                  <>
                    Fiyat: <Fill text="[DOLDURULACAK: fiyat]" />
                  </>
                )}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
