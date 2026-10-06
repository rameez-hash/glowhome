import type { Metadata, Viewport } from "next";
import { Lora, Montserrat } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";
import { siteKeywords } from "@/lib/keywords";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "@/lib/fontawesome";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E0E0C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Glow Home | Lighting Store in Pakistan, Chandeliers & LED Lights",
    template: "%s | Glow Home",
  },
  description: siteConfig.description,
  keywords: [...siteKeywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Lighting",
  classification: "Lighting Store, Decorative Lighting and Smart Lighting Solutions",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Glow Home | Lighting Store in Pakistan, Chandeliers & LED Lights",
    description: siteConfig.description,
    images: [
      {
        url: "/media/glow-home-solution-luxury-residence.jpg",
        alt: "Luxury residence lit by Glow Home chandeliers and ambient lighting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow Home | Lighting Store in Pakistan, Chandeliers & LED Lights",
    description: siteConfig.description,
    images: ["/media/glow-home-solution-luxury-residence.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "ai-content-declaration": "human-and-ai-assisted",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${montserrat.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink antialiased">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <div className="noise" aria-hidden />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
