import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "See Glow Home projects across luxury residences, decorative interiors, architectural lighting, smart homes, and commercial spaces.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Selected work in light and living"
        description="A look at residences, interiors, and commercial environments shaped by Glow Home lighting and automation."
      />
      <Projects />
    </>
  );
}
