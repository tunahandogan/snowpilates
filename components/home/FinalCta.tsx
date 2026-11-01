import { waLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { WaIcon } from "@/components/ui/WaIcon";

export function FinalCta() {
  return (
    <section className="section" aria-labelledby="son-cta">
      <div className="wrap">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-blush px-6 py-14 text-center md:px-16 md:py-20">
          <div aria-hidden="true" className="breath-ring-2 absolute -right-16 -top-16 h-56 w-56 rounded-full border border-clay/30" />
          <div aria-hidden="true" className="breath-ring absolute -bottom-20 -left-12 h-64 w-64 rounded-full border border-clay/25" />
          <div className="relative flex flex-col items-center">
            <Eyebrow>İlk adım</Eyebrow>
            <h2 id="son-cta" className="font-display mt-5 max-w-xl text-4xl font-light leading-[1.08] tracking-tight md:text-5xl">
              Bir mesaj kadar <em className="text-clay-deep">yakın</em>
            </h2>
            <p className="mt-5 max-w-md text-ink-2">
              Ders türünü ve uygun saatleri yazın, size dönelim. Form doldurmak ya da bilgi bırakmak gerekmez.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={waLink()} external size="lg">
                <WaIcon /> WhatsApp&apos;tan yaz
              </Button>
              <Button href="/ilk-ders" variant="light" size="lg">
                İlk ders rehberi
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
