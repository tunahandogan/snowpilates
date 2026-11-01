import Image from "next/image";
import { business } from "@/content/business";
import { photos } from "@/content/photos";
import { waLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WaIcon } from "@/components/ui/WaIcon";
import { BreathRing } from "./BreathRing";
import { Snowfall } from "./Snowfall";

const WORDS: { t: string; em?: boolean }[] = [
  { t: "Karın" },
  { t: "sessizliğinde," },
  { t: "nefesle", em: true },
  { t: "başlayan" },
  { t: "pilates." },
];

function ReformerSketch() {
  return (
    <svg viewBox="0 0 400 300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4/5 text-clay/70">
      <rect x="40" y="170" width="320" height="22" rx="11" />
      <rect x="130" y="140" width="130" height="30" rx="14" />
      <path d="M52 192v34M348 192v34M52 226h20M348 226h-20" />
      <path d="M300 140v-70M300 70h40" />
      <path d="M268 160c-8-6-8-12 0-18s8-12 0-18 -8-12 0-18" />
      <path d="M84 150c-6-5-6-10 0-15s6-10 0-15" />
    </svg>
  );
}

export function Hero() {
  const photo = photos.hero;
  return (
    <section data-hero className="relative overflow-hidden bg-snow">
      <Snowfall />
      <div className="wrap relative grid gap-10 pb-14 pt-10 md:pb-20 md:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
        <div>
          <div className="mist-block" style={{ animationDelay: "0.05s" }}>
            <Eyebrow>{business.tagline}</Eyebrow>
          </div>
          <h1 className="font-display mt-5 text-[2.85rem] font-light leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]">
            {WORDS.map((w, i) => (
              <span key={w.t}>
                <span
                  className={`mist-word ${w.em ? "italic text-clay" : ""}`}
                  style={{ animationDelay: `${0.1 + i * 0.09}s` }}
                >
                  {w.t}
                </span>{" "}
              </span>
            ))}
          </h1>
          <p className="mist-block mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink-2" style={{ animationDelay: "0.5s" }}>
            Reformer, mat, birebir ve düet dersler. Ders türünü ve saatini seçin, tek dokunuşla WhatsApp&apos;tan yazın.
          </p>
          <div className="mist-block mt-7 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.65s" }}>
            <Button href={waLink()} external size="lg">
              <WaIcon /> WhatsApp&apos;tan yaz
            </Button>
            <Button href="/dersler" variant="outline" size="lg">
              Dersleri keşfet
            </Button>
          </div>
          <BreathRing className="mt-9" />
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-gradient-to-b from-blush via-oat to-oat-2">
            {photo ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 448px) 448px, 90vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-end justify-center pb-16">
                <ReformerSketch />
              </div>
            )}
          </div>
          {photo ? (
            <p className="mt-2 text-right text-[0.7rem] text-muted">
              Stok fotoğraf:{" "}
              <a href={photo.credit.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                {photo.credit.author} / Pexels
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
