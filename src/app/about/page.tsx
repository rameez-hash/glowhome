import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { keywordsFor } from "@/lib/keywords";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Glow Home, Premium Lighting Showroom in Pakistan",
  description:
    "Glow Home by FIAM is a premium lighting showroom in Karachi, Pakistan for luxury, modern and decorative lights, chandeliers, LED lighting and smart living solutions.",
  path: "/about",
  keywords: [
    "Lighting Showroom Pakistan",
    "Lighting Store Karachi",
    "Best Lighting Store Pakistan",
    ...keywordsFor("Lighting"),
  ],
  image: "/media/glow-home-showroom-exterior-transparent.png",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Light for living, intelligent by design"
        description='Glow Home by FIAM, modern design without limits. Our philosophy is to provide customers with "light for living" through premium lighting, décor, and smart living solutions.'
      />
      <AboutStory />
      <FAQ />
      <JsonLd
        data={[breadcrumbJsonLd([{ name: "About", path: "/about" }]), faqJsonLd()]}
      />
    </>
  );
}
