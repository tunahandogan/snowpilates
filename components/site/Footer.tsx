import Link from "next/link";
import { business, demo, nav } from "@/content/business";
import { HoursList } from "@/components/HoursList";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-16 text-snow/80 md:pb-16">
      <div className="wrap grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-snow/70">{business.tagline}</p>
          <address className="mt-5 text-sm not-italic leading-relaxed">
            {business.address.full}
            <br />
            <a href={`tel:${business.phone.e164}`} className="tap inline-flex items-center font-semibold text-snow underline-offset-4 hover:underline">
              {business.phone.display}
            </a>
          </address>
          <a href={business.maps.directionsUrl} target="_blank" rel="noopener noreferrer" className="tap mt-1 inline-flex items-center text-sm font-semibold text-blush underline-offset-4 hover:underline">
            Yol tarifi al
          </a>
        </div>
        <div>
          <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-snow/60">Çalışma saatleri</h2>
          <div className="mt-4 text-sm">
            <HoursList tone="dark" />
          </div>
        </div>
        <div>
          <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-snow/60">Sayfalar</h2>
          <ul className="mt-4 flex flex-col text-sm">
            {[{ href: "/", label: "Ana sayfa" }, ...nav].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="tap inline-flex items-center underline-offset-4 hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap mt-14 border-t border-snow/15 pt-6 text-xs leading-relaxed text-snow/60">
        <p>{demo.note}</p>
        <p className="mt-2">&copy; {business.displayName}</p>
      </div>
    </footer>
  );
}
