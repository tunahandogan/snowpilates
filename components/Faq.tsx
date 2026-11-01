import { faqs } from "@/content/business";
import { Fill } from "@/components/ui/Fill";

export function Faq({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <section className="section" aria-labelledby="sss-baslik">
      <div className="wrap grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay-deep">SSS</p>
          <h2 id="sss-baslik" className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            Sık sorulan <em className="italic text-clay-deep">sorular</em>
          </h2>
        </div>
        <div className="divide-y divide-line border-y border-line md:col-span-8">
          {items.map((f) => (
            <details key={f.q} className="group py-1">
              <summary className="tap flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-lg text-ink md:text-xl [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-2xl text-clay-deep transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 pr-8 text-ink-2">
                <Fill text={f.a} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
