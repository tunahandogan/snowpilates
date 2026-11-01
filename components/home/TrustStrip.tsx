import { Star } from "lucide-react";
import { business } from "@/content/business";

export function TrustStrip() {
  const g = business.google;
  return (
    <section aria-label="Google puanı" className="border-y border-line bg-oat/60">
      <div className="wrap flex flex-col items-center justify-center gap-x-8 gap-y-2 py-5 text-center sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-display text-3xl leading-none text-ink">{g.rating.toFixed(1).replace(".", ",")}</span>
          <span className="flex gap-0.5 text-clay" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </span>
        </div>
        <p className="text-sm text-ink-2">
          Google&apos;da {g.reviewCount} yorum ·{" "}
          <a href={business.maps.placeUrl} target="_blank" rel="noopener noreferrer" className="tap inline-flex items-center font-semibold text-clay-deep underline underline-offset-4">
            Yorumları gör
          </a>
        </p>
      </div>
    </section>
  );
}
