import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { business, site } from "@/content/business";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppBar } from "@/components/site/WhatsAppBar";
import { DemoBadge } from "@/components/DemoBadge";
import { JsonLd } from "@/components/JsonLd";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const sans = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: site.title, template: `%s · ${business.displayName}` },
  description: site.description,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: business.displayName,
    title: site.title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-snow font-sans text-ink antialiased">
        <a
          href="#icerik"
          className="fixed left-4 top-4 z-[100] -translate-y-[200%] rounded-full bg-ink px-5 py-3 text-sm font-semibold text-snow transition-transform focus:translate-y-0"
        >
          İçeriğe geç
        </a>
        <Header />
        {children}
        <Footer />
        <WhatsAppBar />
        <DemoBadge />
        <JsonLd />
      </body>
    </html>
  );
}
