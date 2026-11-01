import Link from "next/link";
import { business } from "@/content/business";
import { waLink } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <main id="icerik" className="wrap flex min-h-[70svh] flex-col items-start justify-center py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay-deep">404</p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-6xl">
        Aradığınız sayfayı <em className="text-clay-deep">bulamadık.</em>
      </h1>
      <p className="mt-5 max-w-md text-lg text-muted">
        Bağlantı değişmiş ya da yanlış yazılmış olabilir. Derin bir nefes alın, ana sayfadan devam edelim.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="tap inline-flex items-center rounded-full bg-clay-deep px-6 font-semibold text-white"
        >
          Ana sayfaya dön
        </Link>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="tap inline-flex items-center rounded-full border border-line px-6 font-semibold text-ink"
        >
          {business.displayName} ile WhatsApp&apos;tan yazın
        </a>
      </div>
    </main>
  );
}
