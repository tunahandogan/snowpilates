import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import { business } from "@/content/business";
import { waLink } from "@/lib/whatsapp";
import { DersPlanner } from "@/components/planner/DersPlanner";
import { MapEmbed } from "@/components/MapEmbed";
import { HoursList } from "@/components/HoursList";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${business.displayName} adresi, telefonu, çalışma saatleri ve WhatsApp ile iletişim. ${business.address.full}.`,
};

export default function IletisimPage() {
  return (
    <main id="icerik">
      <section aria-labelledby="iletisim-baslik" className="section">
        <div className="wrap">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-clay-deep">İletişim</p>
          <h1 id="iletisim-baslik" className="font-display text-4xl text-ink sm:text-5xl">
            Bize <em className="font-normal italic text-clay-deep">ulaşın</em>
          </h1>
          <p className="mt-3 max-w-xl text-ink-2">
            Sorularınız için WhatsApp&apos;tan yazabilir, arayabilir ya da stüdyoya uğrayabilirsiniz.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="mb-2 flex items-center gap-2 font-display text-xl text-ink">
                  <MapPin className="size-5 text-clay-deep" aria-hidden="true" />
                  Adres
                </h2>
                <address className="not-italic text-ink-2">{business.address.full}</address>
              </div>
              <div>
                <h2 className="mb-2 flex items-center gap-2 font-display text-xl text-ink">
                  <Phone className="size-5 text-clay-deep" aria-hidden="true" />
                  Telefon ve WhatsApp
                </h2>
                <a
                  href={`tel:${business.phone.e164}`}
                  className="tap inline-flex items-center text-lg font-semibold text-ink hover:text-clay-deep"
                >
                  {business.phone.display}
                </a>
                <div className="mt-2">
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap inline-flex items-center rounded-full bg-clay-deep px-6 font-semibold text-snow hover:bg-ink"
                  >
                    WhatsApp&apos;tan yaz
                  </a>
                </div>
              </div>
              <div>
                <h2 className="mb-3 font-display text-xl text-ink">Çalışma saatleri</h2>
                <HoursList />
              </div>
            </div>
            <MapEmbed />
          </div>
        </div>
      </section>
      <DersPlanner variant="page" />
    </main>
  );
}
