import { demo } from "@/content/business";

export function DemoBadge() {
  return (
    <div
      title={demo.note}
      className="pointer-events-none fixed bottom-24 left-3 z-40 rounded-full border border-line bg-snow/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-2 shadow-sm md:bottom-4 md:left-4"
    >
      {demo.label}
    </div>
  );
}
