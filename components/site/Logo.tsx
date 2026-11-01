import Link from "next/link";
import { business } from "@/content/business";

export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" className={className}>
      <path d="M16 3v26M5.2 9.5l21.6 13M26.8 9.5 5.2 22.5" />
      <path d="M12.5 5.5 16 8.5l3.5-3M12.5 26.5l3.5-3 3.5 3" />
    </svg>
  );
}

export function Logo({ tone = "dark", asLink = true }: { tone?: "dark" | "light"; asLink?: boolean }) {
  const inner = (
    <span className={`inline-flex items-center gap-2.5 ${tone === "light" ? "text-snow" : "text-ink"}`}>
      <LogoMark className={`h-7 w-7 ${tone === "light" ? "text-blush" : "text-clay"}`} />
      <span className="font-display text-[1.45rem] leading-none tracking-tight">
        {business.name}
        <span className="ml-1.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.28em] opacity-70">Pilates</span>
      </span>
    </span>
  );
  if (!asLink) return inner;
  return (
    <Link href="/" aria-label={`${business.displayName} ana sayfa`} className="tap inline-flex items-center">
      {inner}
    </Link>
  );
}
