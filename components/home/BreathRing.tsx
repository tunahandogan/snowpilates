/** 4 sn içe / 4 sn dışa genişleyip daralan halka. Yalnızca CSS; reduced-motion'da statik. */
export function BreathRing({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div aria-hidden="true" className="relative h-14 w-14 shrink-0">
        <span className="breath-ring-2 absolute inset-0 rounded-full bg-blush" />
        <span className="breath-ring absolute inset-2 rounded-full border border-clay/60 bg-snow/60" />
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay" />
      </div>
      <p className="relative h-5 w-28 text-sm font-medium text-ink-2" aria-hidden="true">
        <span className="breath-label-in absolute inset-0">nefes al</span>
        <span className="breath-label-out absolute inset-0">nefes ver</span>
      </p>
      <span className="sr-only">Sakinleştirici nefes animasyonu: dört saniye nefes al, dört saniye nefes ver.</span>
    </div>
  );
}
