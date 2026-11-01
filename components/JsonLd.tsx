import { business } from "@/content/business";

export function JsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const hoursKnown = business.hours.every((h) => !h.time.includes("[DOLDURULACAK"));
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: business.displayName,
    url: base,
    telephone: business.phone.e164,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lng },
    hasMap: business.maps.placeUrl,
  };
  if (hoursKnown) {
    data.openingHours = business.hours.map((h) => `${h.days} ${h.time}`);
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}
