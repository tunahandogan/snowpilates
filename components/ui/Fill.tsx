/**
 * Metindeki "[DOLDURULACAK: …]" yer tutucularını kısa "Sorulacak" rozetine çevirir.
 * Bilgi gizlenmez: rozetin title'ında ne sorulacağı yazar. Kelime ortasından bölünmez.
 */
export function Fill({ text, tone = "light" }: { text: string; tone?: "light" | "dark" }) {
  const parts = text.split(/(\[DOLDURULACAK[^\]]*\])/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[DOLDURULACAK") ? (
          <span
            key={i}
            title={part.slice(1, -1)}
            className={`inline-block whitespace-nowrap rounded-full border border-dashed px-2 py-0.5 align-middle text-[0.75em] font-semibold ${
              tone === "dark" ? "border-white/50 text-white/85" : "border-current/40 text-current opacity-75"
            }`}
          >
            Sorulacak
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
