import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Process } from "@/components/sections/Process";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Lighting Project Process",
  description:
    "How Glow Home delivers lighting consultation, design, installation and ongoing support for home lighting, smart lighting and commercial lighting projects in Pakistan.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="From consultation to seamless living"
        description="A clear path from first conversation to finished system, designed around your space, lifestyle, and performance goals."
      />
      <Process />
    </>
  );
}
