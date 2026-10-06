import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Solutions } from "@/components/sections/Solutions";
import { SolutionsInquiry } from "@/components/sections/SolutionsInquiry";
import { JsonLd } from "@/components/seo/JsonLd";
import { keywordsFor } from "@/lib/keywords";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Smart Lighting & Lighting Solutions for Homes and Offices",
  description:
    "Smart lights, home lighting, office lighting and commercial lighting solutions by Glow Home for luxury residences, workspaces, retail, restaurants and hotels across Pakistan.",
  path: "/solutions",
  keywords: keywordsFor("Smart Lighting", "Lights by Room", "Commercial & Office Lighting"),
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Spaces shaped by light and intelligence"
        description="Bespoke lighting and automation for villas, workspaces, hospitality, and commercial environments that demand presence and precision."
      />
      <Solutions />
      <SolutionsInquiry />
      <JsonLd data={breadcrumbJsonLd([{ name: "Solutions", path: "/solutions" }])} />
    </>
  );
}
