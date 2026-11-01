import { highlights } from "@/content/business";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Highlights() {
  return (
    <section className="section" aria-labelledby="one-cikanlar">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <Eyebrow>Yorumlardan</Eyebrow>
          <h2 id="one-cikanlar" className="font-display mt-5 text-4xl font-light leading-[1.08] tracking-tight md:text-5xl">
            Kursiyerlerin en çok <em className="text-clay">anlattığı</em> şeyler
          </h2>
          <p className="mt-5 max-w-sm text-ink-2">Google yorumlarında tekrar eden üç başlık.</p>
        </Reveal>
        <ol className="flex flex-col">
          {highlights.map((h, i) => (
            <li key={h.title}>
              <Reveal delay={i * 0.08} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-line py-7 first:border-t-0 first:pt-0 md:grid-cols-[5rem_1fr]">
                <span aria-hidden="true" className="font-display text-4xl font-light italic text-clay/70 md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl tracking-tight md:text-3xl">{h.title}</h3>
                  <p className="mt-2 max-w-md text-ink-2">{h.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
