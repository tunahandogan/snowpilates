import Link from "next/link";
import { nav } from "@/content/business";
import { waLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { WaIcon } from "@/components/ui/WaIcon";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-snow">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Ana menü" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="tap inline-flex items-center rounded-full px-4 text-[0.95rem] font-medium text-ink-2 transition-colors hover:bg-oat hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden md:block">
            <Button href={waLink()} external>
              <WaIcon className="h-4 w-4" /> WhatsApp&apos;tan yaz
            </Button>
          </span>
          <span className="md:hidden">
            <MobileMenu />
          </span>
        </div>
      </div>
    </header>
  );
}
