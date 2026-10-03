import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Glow Home",
    short_name: "Glow Home",
    description:
      "Smart home automation and premium lighting solutions for modern living.",
    start_url: "/",
    display: "standalone",
    background_color: "#0E0E0C",
    theme_color: "#0E0E0C",
    icons: [
      {
        src: "/media/glow-home-brand-logo.png",
        sizes: "704x1020",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
