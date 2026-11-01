# Snow Pilates — Tasarım kararları

Yön: "Kar sessizliği / nefes". Ferah, yumuşak, butik; spor salonu enerjisi yok.

## Renk (tokenlar `app/globals.css` `@theme`)
- Zemin: snow #fbfaf8; bölüm zemini oat #f1ebe3 / oat-2 #e6ddd1; çizgi line #e2d9cd.
- Metin: ink #221c19, ink-2 #4a413b, muted #7a6f66.
- Vurgu: clay #b8664a (büyük metin, italik vurgu, süs); butonlarda clay-deep #94503a (beyazla AA).
- Destek: sage #7f8f7b / sage-soft #e3e8df, blush #f3dfd6 (CTA bandı, nefes halkası).
- Koyu yüzey yalnızca footer (ink).

## Tipografi
- Başlık: Fraunces (`font-display`), hafif ağırlık (300), sıkı satır aralığı, tek kelimeye italik clay vurgu.
- Gövde: Hanken Grotesk (`font-sans`). Eyebrow: 12,5px, büyük harf, 0,2em aralık.
- Yazı tipi sınıfları `@utility` ile tanımlı (layout'ın `--font-*` değişkenleri tema adıyla çakışmasın diye).

## Boşluk ve yerleşim
- `.wrap` max 72rem, gutter 16/24/32px. `.section` mobil 72px, masaüstü 112px dikey.
- Dokunma alanı `.tap` ≥44px. Köşe: hap (buton), 2rem (bantlar), kemer (hero görseli).
- Jenerik eş kart ızgarası yok: editoryal, asimetrik, numaralı listeler.

## Hareket
- Hero başlığı kelime kelime buğudan netleşir (CSS, blur+opacity); metin SSR'da zaten DOM'da.
- Nefes halkası 8 sn döngü (4 içe / 4 dışa), etiket "nefes al / ver". Kar taneleri 16 adet, yavaş, yalnızca CSS.
- SpringDivider: kaydırmaya bağlı yay çizgisi (SVG, `useScroll`). Bölüm girişi: `Reveal`.
- `prefers-reduced-motion`: tüm animasyonlar statik, kar kapalı.

## Reddedilenler
- Mor/neon degrade, cam efekti yığını: sakin butik his için uygun değil.
- Jenerik 3'lü ikonlu kart ızgarası: şablon görünümü.
- Emoji ve "fit kadın" stok klişesi, agresif spor dili, sağlık vaadi.
- Canvas kar yağışı: CSS ile yeterli, daha hafif.
- Logo görseli: işletmenin logosu yok; metin + kar tanesi işareti kullanıldı.
