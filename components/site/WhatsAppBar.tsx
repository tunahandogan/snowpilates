"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { business } from "@/content/business";
import { waLink } from "@/lib/whatsapp";

function WaGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.36A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.08.8.82-3-.2-.31a8.2 8.2 0 1 1 6.94 3.84Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.17.25-.64.8-.78.96-.14.17-.29.19-.54.06a6.7 6.7 0 0 1-3.33-2.9c-.25-.43.25-.4.72-1.33.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42h-.47c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.74 1.58.68 2.2.74 3 .62.49-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

export function WhatsAppBar() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) return;
    const io = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting), { threshold: 0.35 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const hidden = heroVisible;

  return (
    <>
      {/* Mobil: altta sabit */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-snow/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-sm transition-transform duration-300 md:hidden ${
          hidden ? "translate-y-full" : "translate-y-0"
        }`}
        aria-hidden={hidden || undefined}
        inert={hidden || undefined}
      >
        <div className="mx-auto flex max-w-md gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="tap inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-clay-deep px-4 font-semibold text-snow"
          >
            <WaGlyph className="size-5" />
            WhatsApp
          </a>
          <a
            href={`tel:${business.phone.e164}`}
            className="tap inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/20 bg-snow px-4 font-semibold text-ink"
          >
            <Phone className="size-5" aria-hidden="true" />
            Ara
          </a>
        </div>
      </div>

      {/* Masaüstü: sağ altta kapsül */}
      <div
        className={`fixed bottom-6 right-6 z-40 hidden transition-all duration-300 md:block ${
          hidden ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100"
        }`}
        aria-hidden={hidden || undefined}
        inert={hidden || undefined}
      >
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="tap inline-flex items-center gap-2 rounded-full bg-clay-deep px-5 font-semibold text-snow shadow-lg shadow-ink/15 transition-colors hover:bg-ink"
        >
          <WaGlyph className="size-5" />
          WhatsApp&apos;tan yaz
        </a>
      </div>
    </>
  );
}
