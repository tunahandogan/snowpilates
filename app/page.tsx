import type { Metadata } from "next";
import { site } from "@/content/business";
import { DersPlanner } from "@/components/planner/DersPlanner";
import { ClassTypes } from "@/components/dersler/ClassTypes";
import { FirstClass } from "@/components/ilk-ders/FirstClass";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Highlights } from "@/components/home/Highlights";
import { SpringDivider } from "@/components/home/SpringDivider";
import { LocationSection } from "@/components/home/LocationSection";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
};

export default function HomePage() {
  return (
    <main id="icerik">
      <Hero />
      <TrustStrip />
      <Highlights />
      <SpringDivider />
      <ClassTypes compact />
      <DersPlanner variant="home" />
      <SpringDivider />
      <FirstClass compact />
      <Reviews />
      <Faq limit={4} />
      <LocationSection />
      <FinalCta />
    </main>
  );
}
