/** Çok hafif, yavaş süzülen kar taneleri. Yalnızca CSS; sunucuda sabit değerlerle üretilir (rastgelelik yok). */
const FLAKES = Array.from({ length: 16 }, (_, i) => {
  const seed = (i * 37 + 11) % 100;
  return {
    left: (i * 6.4 + (seed % 7)) % 100,
    size: 3 + (seed % 5),
    dur: 26 + (seed % 22),
    delay: -((i * 5.3) % 30),
    dx: (i % 2 ? 1 : -1) * (14 + (seed % 26)),
    tone: i % 3 === 0 ? "bg-sage/50" : "bg-oat-2",
  };
});

export function Snowfall() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {FLAKES.map((f, i) => (
        <div
          key={i}
          className="flake"
          style={{ "--dur": `${f.dur}s`, "--delay": `${f.delay}s`, "--dx": `${f.dx}px` } as React.CSSProperties}
        >
          <span
            className={`absolute top-0 rounded-full ${f.tone}`}
            style={{ left: `${f.left}%`, width: f.size, height: f.size }}
          />
        </div>
      ))}
    </div>
  );
}
