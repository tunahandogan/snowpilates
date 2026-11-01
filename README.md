# Snow Pilates demo sitesi

Erzurum'daki Snow Pilates için hazırlanmış tasarım önizlemesi (Next.js 16, Tailwind v4). İşletme tarafından henüz onaylanmamıştır.

## 15 dakikada uyarlama

Tüm içerik tek dosyada: `content/business.ts`.

1. `business` içindeki ad, adres, telefon, WhatsApp numarası ve harita bilgilerini doğrula (`whatsappVerified` değerini `true` yap).
2. `[DOLDURULACAK: …]` yer tutucularını gerçek bilgiyle değiştir: çalışma saatleri, paket fiyatları ve içerikleri, grup büyüklüğü, deneme dersi, iptal/telafi kuralı.
3. `classTypes` içinde stüdyoda olmayan dersleri sil; olanların `source` değerini `"genel"` yap.
4. İşletmenin kendi fotoğrafları gelince `public/images/` altına koy, `content/photos.ts` dosyasında `src`, `alt` ve `credit` alanlarını güncelle.
5. `instagram`, `website`, `logo` alanlarını varsa doldur.

## Yayın (Vercel)

1. Depoyu Vercel'e bağla; framework otomatik algılanır (`npm run build`).
2. Ortam değişkeni ekle: `NEXT_PUBLIC_SITE_URL=https://alan-adiniz.com` (metadataBase, OG görseli ve JSON-LD bunu kullanır).
3. Deploy sonrası `/`, `/dersler`, `/ilk-ders`, `/iletisim` sayfalarını mobilde kontrol et.

## Noindex

Demo olduğu için arama motorlarına kapalı: `app/layout.tsx` metadata `robots`, `app/robots.ts` (hepsi disallow) ve `next.config.ts` içindeki `X-Robots-Tag` header'ı. Gerçek yayında üçünü de kaldır/güncelle, ayrıca `components/DemoBadge.tsx` etiketini `app/layout.tsx` içinden çıkar.

## Görseller

İşletmenin kendi fotoğrafı ve logosu KULLANILMADI. `public/images/stok/` altındaki görseller Pexels'ten telifsiz stok fotoğraflardır (kaynak ve fotoğrafçılar `content/photos.ts` içinde). Gerçek stüdyo fotoğraflarıyla değiştirilmelidir.

## Komutlar

```
npm run dev
npm run build
npm run lint
npm run typecheck
```
