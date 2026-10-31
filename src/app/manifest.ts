import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Glow Home",
    short_name: "Glow Home",
    description:
      "Smart home automation and premium lighting solutions for modern living.",
    start_url: "/",
    // Normal website tab — not an installable standalone app (avoids “Install” prompts).
    display: "browser",
    background_color: "#0E0E0C",
    theme_color: "#0E0E0C",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
