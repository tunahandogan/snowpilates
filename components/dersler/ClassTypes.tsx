"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { classTypes } from "@/content/business";
import { photos } from "@/content/photos";
import { classLink } from "@/lib/whatsapp";
import { Fill } from "@/components/ui/Fill";

const photoKey = {
  "reformer-grup": "reformer",
  mat: "mat",
  birebir: "detail",
  duet: "studio",
} as const;

const gradients = [
  "from-blush via-oat to-snow",
  "from-sage-soft via-oat to-snow",
  "from-oat-2 via-oat to-snow",
  "from-blush via-snow to-sage-soft",
];

function Visual({ id, index }: { id: string; index: number }) {
  const key = photoKey[id as keyof typeof photoKey];
  const photo = key ? photos[key] : null;
  if (photo) {
    return (
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 768px) 45vw, 100vw"
        className="object-cover"
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]}`}
    >
      <div className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-clay/30" />
      <div className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-clay/15" />
    </div>
  );
}

export function ClassTypes({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion();
  const enter = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  if (compact) {
    return (
      <section className="section" aria-labelledby="dersler-baslik">
        <div className="wrap">
          <motion.div {...enter()} className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay-deep">Dersler</p>
            <h2 id="dersler-baslik" className="mt-3 font-display text-3xl leading-tight text-ink md:text-5xl">
              Size uygun <em className="italic text-clay-deep">ritmi</em> seçin
            </h2>
          </motion.div>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {classTypes.map((c, i) => (
              <motion.li key={c.id} {...enter(i * 0.08)}>
                <Link
                  href={classLink(c.id)}
                  className="tap group grid gap-2 py-6 md:grid-cols-[4rem_1fr_1.4fr_auto] md:items-baseline md:gap-8"
                >
                  <span className="font-display text-sm text-muted">0{i + 1}</span>
                  <span className="font-display text-2xl text-ink transition-colors group-hover:text-clay-deep">
                    {c.name}
                  </span>
                  <span className="text-ink-2">{c.text}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-clay-deep">
                    Bu ders için yaz <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            <Link
              href="/dersler"
              className="tap inline-flex items-center font-semibold text-ink underline decoration-clay underline-offset-4"
            >
              Tüm derslere bak
            </Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section" aria-labelledby="dersler-baslik">
      <div className="wrap">
        <motion.div {...enter()} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay-deep">Ders türleri</p>
          <h2 id="dersler-baslik" className="mt-3 font-display text-4xl leading-tight text-ink md:text-6xl">
            Dört format, <em className="italic text-clay-deep">tek sakin</em> tempo
          </h2>
          <p className="mt-5 text-lg text-ink-2">
            Hangi derste nasıl hissedeceğinizi seçin; gerisini birlikte planlayalım.
          </p>
        </motion.div>

        <div className="mt-14 space-y-16 md:space-y-24">
          {classTypes.map((c, i) => {
            const flip = i % 2 === 1;
            return (
              <motion.article
                key={c.id}
                {...enter()}
                className="grid items-center gap-8 md:grid-cols-12 md:gap-12"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-oat md:col-span-6 ${
                    flip ? "md:order-2 md:col-start-7" : ""
                  } ${flip ? "md:rounded-tl-[6rem]" : "md:rounded-tr-[6rem]"}`}
                >
                  <Visual id={c.id} index={i} />
                </div>
                <div className={`md:col-span-5 ${flip ? "md:col-start-1 md:row-start-1" : "md:col-start-8"}`}>
                  <span className="font-display text-5xl italic text-clay/60 md:text-7xl">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-3xl text-ink md:text-4xl">{c.name}</h3>
                  <p className="mt-4 text-lg text-ink-2">{c.text}</p>
                  <p className="mt-4 text-sm text-muted">
                    Grup: <Fill text={c.group} />
                  </p>
                  {c.source === "dogrulanacak" && (
                    <p className="mt-1 text-xs text-muted">
                      Stüdyoda var mı: <Fill text="[DOLDURULACAK: stüdyoda bu ders var mı]" />
                    </p>
                  )}
                  <Link
                    href={classLink(c.id)}
                    className="tap mt-6 inline-flex items-center gap-2 rounded-full bg-clay-deep px-6 py-3 font-semibold text-snow transition-colors hover:bg-ink"
                  >
                    Bu ders için yaz <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
