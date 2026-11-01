"use client";

import { motion, useReducedMotion } from "motion/react";
import { business, reviews } from "@/content/business";

const tones = [
  "bg-blush md:col-span-7",
  "bg-sage-soft md:col-span-5 md:mt-12",
  "bg-oat md:col-span-8 md:col-start-3",
];

export function Reviews() {
  const reduce = useReducedMotion();
  const { rating, reviewCount } = business.google;
  const ratingText = rating.toFixed(1).replace(".", ",");
  return (
    <section className="section" aria-labelledby="yorumlar-baslik">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay-deep">Yorumlar</p>
          <h2 id="yorumlar-baslik" className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            Kursiyerler <em className="italic text-clay-deep">ne diyor</em>
          </h2>
          <p className="mt-4 text-ink-2">
            Google&apos;da {ratingText} · {reviewCount} yorum
          </p>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-12">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.initials}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-[1.75rem] p-7 md:p-8 ${tones[i % tones.length]}`}
            >
              <span
                aria-hidden="true"
                className="absolute -top-2 left-6 font-display text-8xl leading-none text-clay/40"
              >
                &ldquo;
              </span>
              <blockquote className="relative pt-8 font-display text-xl leading-relaxed text-ink md:text-2xl">
                {r.text}
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted">
                {r.initials} · Google yorumu, {r.when}
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">
          <a
            href={business.maps.placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="tap inline-flex items-center font-semibold text-ink underline decoration-clay underline-offset-4"
          >
            Tüm yorumları Google Haritalar&apos;da oku
          </a>
          <span className="ml-2">(kontrol: 1 Kasım 2026)</span>
        </p>
      </div>
    </section>
  );
}
