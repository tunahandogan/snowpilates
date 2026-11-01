/**
 * Sitenin TEK içerik kaynağı. Bileşenler işletme adı, adres, telefon ve metinleri yalnızca buradan okur.
 *
 * Kural: doğrulanmamış bilgi uydurulmaz. Bilinmeyenler "[DOLDURULACAK: …]" yer tutucusudur.
 * Kaynak (2026-11-01): Google Haritalar kaydı "Snow pilates erzurum" (Pilates Salonu, 5,0 / 134 yorum,
 * "Web sitesi ekleyin" boş). Ücret, ders programı, eğitmen adı UYDURULMAZ.
 * Sağlık iddiası yazılmaz (kilo verdirir, ağrıyı geçirir, duruşu düzeltir vb. YOK).
 */

export type Source = "google" | "dogrulanacak" | "genel";

export const business = {
  name: "Snow",
  displayName: "Snow Pilates",
  tagline: "Erzurum'da pilates stüdyosu",
  city: "Erzurum",
  district: "Yakutiye",
  address: {
    full: "Ömer Nasuhi Bilmen Mh., Ülgen Sk. No: 8/A, 25040 Yakutiye / Erzurum",
    street: "Ömer Nasuhi Bilmen Mh., Ülgen Sk. No: 8/A",
    locality: "Yakutiye",
    region: "Erzurum",
    postalCode: "25040",
    country: "TR",
    landmark: "Ömer Nasuhi Bilmen Mahallesi, Ülgen Sokak",
  },
  geo: { lat: 39.9187897, lng: 41.263008, plusCode: "W797+G6 Yakutiye, Erzurum" },
  maps: {
    placeUrl: "https://www.google.com/maps/place/Snow+pilates+erzurum/@39.9187897,41.263008,17z",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Snow+pilates+erzurum",
    embedUrl: "https://www.google.com/maps?q=39.9187897,41.263008&z=17&output=embed",
    embedTitle: "Snow Pilates konumu, Ülgen Sokak, Yakutiye",
  },
  phone: { display: "0501 101 66 25", e164: "+905011016625", source: "google" as Source },
  /** Google'daki cep numarasının WhatsApp hattı olduğu varsayıldı; göstermeden önce doğrulanmalı */
  whatsapp: "905011016625",
  whatsappVerified: false,
  whatsappMessage: "Merhaba, web sitenizden yazıyorum. Pilates dersleri hakkında bilgi almak istiyorum.",
  instagram: null as { handle: string; url: string } | null,
  /** Google'da yalnızca "Pzt 08:00 açılış" görüldü */
  hours: [
    { days: "Pazartesi – Cumartesi", time: "08:00 – [DOLDURULACAK: kapanış]" },
    { days: "Pazar", time: "[DOLDURULACAK]" },
  ],
  google: { rating: 5.0, reviewCount: 134, checkedAt: "2026-11-01" },
  website: null as string | null,
  logo: null as string | null,
} as const;

/** Ders türleri: sektör genelindeki formatlar. Stüdyoda hangilerinin olduğu teyit edilecek. */
export const classTypes = [
  {
    id: "reformer-grup",
    name: "Reformer grup dersi",
    short: "Reformer",
    text: "Yaylı reformer aletinde, küçük grupla eğitmen eşliğinde ders.",
    group: "[DOLDURULACAK: grup kaç kişi]",
    source: "dogrulanacak" as Source,
  },
  {
    id: "mat",
    name: "Mat pilates",
    short: "Mat",
    text: "Minder üzerinde, vücut ağırlığı ve küçük ekipmanlarla ders.",
    group: "[DOLDURULACAK]",
    source: "dogrulanacak" as Source,
  },
  {
    id: "birebir",
    name: "Birebir ders",
    short: "Birebir",
    text: "Yalnızca sizinle ilgilenen eğitmenle, size göre planlanan ders.",
    group: "1 kişi",
    source: "dogrulanacak" as Source,
  },
  {
    id: "duet",
    name: "Düet ders",
    short: "Düet",
    text: "Arkadaşınızla ya da eşinizle birlikte, iki kişilik ders.",
    group: "2 kişi",
    source: "dogrulanacak" as Source,
  },
];

export const frequencies = [
  { id: "1", label: "Haftada 1" },
  { id: "2", label: "Haftada 2" },
  { id: "3", label: "Haftada 3+" },
] as const;

export const levels = [
  { id: "yeni", label: "İlk kez", hint: "Hiç pilates yapmadım" },
  { id: "biraz", label: "Biraz deneyim", hint: "Daha önce birkaç ders aldım" },
  { id: "duzenli", label: "Düzenli", hint: "Bir süredir yapıyorum" },
] as const;

export const timePrefs = [
  { id: "sabah", label: "Sabah" },
  { id: "ogle", label: "Öğle" },
  { id: "aksam", label: "Akşam" },
  { id: "haftasonu", label: "Hafta sonu" },
] as const;

/** Paketler: fiyat ve içerik stüdyodan alınacak. */
export const packages = [
  { id: "deneme", name: "Deneme dersi", detail: "[DOLDURULACAK: var mı, ücreti]", price: null as string | null },
  { id: "aylik-8", name: "Aylık 8 ders", detail: "[DOLDURULACAK: paket içeriği]", price: null as string | null },
  { id: "aylik-12", name: "Aylık 12 ders", detail: "[DOLDURULACAK: paket içeriği]", price: null as string | null },
];

/** İlk derse hazırlık: genel bilgi (sağlık iddiası içermez). */
export const firstClass = [
  { id: "kiyafet", title: "Rahat ve esnek kıyafet", text: "Vücudu saran, hareketi kısıtlamayan bir kıyafet yeterli." },
  { id: "corap", title: "Kaymaz çorap", text: "Derslerde genellikle kaymaz çorap kullanılır. Stüdyoda satış/ödünç: [DOLDURULACAK]." },
  { id: "su", title: "Su", text: "Kendi su şişenizi getirebilirsiniz." },
  { id: "erken", title: "10 dakika erken gelin", text: "İlk derste eğitmeninizle tanışmak ve aleti tanımak için zaman kalır." },
  { id: "bilgi", title: "Eğitmeninize anlatın", text: "Daha önce yaşadığınız bir sakatlık ya da özel bir durum varsa dersten önce eğitmeninize söyleyin." },
];

export const highlights = [
  { title: "Samimi ortam", text: "Yorumlarda en çok anılan şey: kendinizi rahat hissettiğiniz bir stüdyo.", source: "google" as Source },
  { title: "Temiz ve özenli stüdyo", text: "Kursiyerler stüdyonun temizliğini, aletlerini ve tasarımını öne çıkarıyor.", source: "google" as Source },
  { title: "İlgili eğitmenler", text: "Eğitmenlerin enerjisi ve ilgisi yorumlarda tekrar tekrar geçiyor.", source: "google" as Source },
];

/** Google yorumlarından kısa alıntılar (2026-11-01'de görüldü). Adlar kısaltıldı; eğitmen adı ve sağlıkla ilgili ifadeler çıkarıldı. */
export const reviews = [
  {
    initials: "B. S.",
    text: "Yaklaşık 7 aydır düzenli olarak geliyorum ve gerçekten çok memnunum. Ortamı çok samimi, kendimi rahat hissettiğim bir yer oldu. Dersler hem verimli hem de keyifli geçiyor.",
    when: "2026",
  },
  {
    initials: "T. H.",
    text: "Uzun zamandır gittiğim en keyifli ve en motive edici pilates stüdyosu diyebilirim. Derslerin enerjisi, ortamın temizliği ve profesyonellik gerçekten harika.",
    when: "2026",
  },
  {
    initials: "B. Y.",
    text: "Arkadaşlarımla katıldık, hepimiz çok memnun kaldık. Derslerimiz verimli geçti. Stüdyo ortamı, aletler ve tasarım çok hoş, ayrıca hijyenik.",
    when: "2026",
  },
];

export const faqs: { q: string; a: string; source: Source }[] = [
  { q: "Hiç pilates yapmadım, başlayabilir miyim?", a: "Evet. Mesajınızda ilk kez geleceğinizi belirtin; size uygun ders ve saati birlikte planlayalım.", source: "dogrulanacak" },
  { q: "Ders ücretleri ne kadar?", a: "[DOLDURULACAK: paket fiyatları]", source: "dogrulanacak" },
  { q: "Deneme dersi var mı?", a: "[DOLDURULACAK: deneme dersi ve ücreti]", source: "dogrulanacak" },
  { q: "Bir grupta kaç kişi oluyor?", a: "[DOLDURULACAK: grup büyüklüğü]", source: "dogrulanacak" },
  { q: "Dersi kaçırırsam telafi edebilir miyim?", a: "[DOLDURULACAK: iptal / telafi kuralı]", source: "dogrulanacak" },
  { q: "Yanımda ne getirmeliyim?", a: "Rahat bir kıyafet, kaymaz çorap ve su şişeniz yeterli.", source: "genel" },
];

export const demo = {
  label: "Demo",
  note: "Bu sayfa Snow Pilates için hazırlanmış bir tasarım önizlemesidir; henüz işletme tarafından onaylanmamıştır.",
};

export const nav = [
  { href: "/dersler", label: "Dersler" },
  { href: "/ilk-ders", label: "İlk ders" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const site = {
  title: "Snow Pilates · Erzurum pilates stüdyosu",
  description:
    "Erzurum Yakutiye'de pilates stüdyosu: reformer, mat, birebir ve düet dersler. Ders türünü ve saatini seçin, WhatsApp'tan yazın.",
};
