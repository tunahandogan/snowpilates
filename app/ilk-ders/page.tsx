import type { Metadata } from "next";
import { FirstClass } from "@/components/ilk-ders/FirstClass";
import { Faq } from "@/components/Faq";
import { waLink } from "@/lib/whatsapp";
import { WaIcon } from "@/components/ui/WaIcon";

export const metadata: Metadata = {
  title: "İlk ders",
  description: "Snow Pilates'te ilk dersinize nasıl hazırlanacağınızı ve sık sorulan soruları görün.",
};

export default function IlkDersPage() {
  return (
    <main id="icerik">
      <header className="wrap pt-16 md:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay-deep">İlk ders</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[1.05] text-ink md:text-7xl">
          İlk adım, <em className="italic text-clay-deep">hafif</em> olsun
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-2">
          Pilatese yeni başlıyorsanız merak ettiklerinizi buraya topladık.
        </p>
      </header>
      <FirstClass />
      <Faq />
      <div className="wrap pb-20 md:pb-28">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="tap inline-flex items-center gap-2 rounded-full bg-clay-deep px-7 py-3.5 font-semibold text-snow transition-colors hover:bg-ink"
        >
          <WaIcon className="size-5" />
          WhatsApp&apos;tan yaz
        </a>
      </div>
    </main>
  );
}
