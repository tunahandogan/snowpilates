import { business } from "@/content/business";
import { HoursList } from "@/components/HoursList";
import { MapEmbed } from "@/components/MapEmbed";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function LocationSection() {
  return (
    <section className="section bg-oat/60" aria-labelledby="konum">
      <div className="wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <Eyebrow>Konum</Eyebrow>
          <h2 id="konum" className="font-display mt-5 text-4xl font-light leading-[1.08] tracking-tight md:text-5xl">
            {business.district}&apos;te, <em className="text-clay">sizi</em> bekliyoruz
          </h2>
          <address className="mt-6 text-ink-2 not-italic">
            {business.address.full}
          </address>
          <a href={`tel:${business.phone.e164}`} className="tap mt-1 inline-flex items-center text-lg font-semibold text-ink underline-offset-4 hover:underline">
            {business.phone.display}
          </a>
          <div className="mt-6 text-sm text-ink-2">
            <HoursList />
          </div>
          <div className="mt-7">
            <Button href={business.maps.directionsUrl} external variant="outline">
              Yol tarifi al
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <MapEmbed className="h-80 w-full overflow-hidden rounded-3xl md:h-[26rem]" />
        </Reveal>
      </div>
    </section>
  );
}
