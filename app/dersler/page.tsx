import type { Metadata } from "next";
import { ClassTypes } from "@/components/dersler/ClassTypes";
import { Packages } from "@/components/dersler/Packages";
import { DersPlanner } from "@/components/planner/DersPlanner";

export const metadata: Metadata = {
  title: "Dersler",
  description: "Snow Pilates'te reformer, mat, birebir ve düet dersler. Ders türünü seçin, WhatsApp'tan yazın.",
};

export default function DerslerPage() {
  return (
    <main id="icerik">
      <header className="wrap pt-16 md:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay-deep">Dersler</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[1.05] text-ink md:text-7xl">
          Nefesle başlayan, <em className="italic text-clay-deep">sakin</em> dersler
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-2">
          Dört ders formatını inceleyin, paketlere göz atın, sonra tercihlerinizi seçip tek dokunuşla yazın.
        </p>
      </header>
      <ClassTypes />
      <Packages />
      <DersPlanner variant="page" />
    </main>
  );
}
