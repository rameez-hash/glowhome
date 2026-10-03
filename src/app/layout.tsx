import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope, Syne } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
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
    default: "Glow Home | Smart Home Automation & Premium Lighting",
    template: "%s | Glow Home",
  },
  description: siteConfig.longDescription,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Home Automation",
  classification: "Smart Home Automation and Lighting Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Glow Home | Smart Home Automation & Premium Lighting",
    description: siteConfig.description,
    images: [
      {
        url: "/media/glow-home-luxury-living-room-lighting.png",
        width: 1200,
        height: 630,
        alt: "Glow Home premium lighting and smart home solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow Home | Smart Home Automation & Premium Lighting",
    description: siteConfig.description,
    images: ["/media/glow-home-luxury-living-room-lighting.png"],
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
      className={`${syne.variable} ${manrope.variable} ${instrument.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink antialiased">
        <JsonLd />
        <div className="noise" aria-hidden />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
