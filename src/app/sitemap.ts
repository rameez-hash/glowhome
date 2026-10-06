import type { MetadataRoute } from "next";
import { clients, navLinks, productCategories, siteConfig } from "@/lib/site";

const url = (path: string) => `${siteConfig.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pageLinks = [
    ...navLinks.filter((link) => link.href !== "/" && !link.href.includes("#")),
    { href: "/services" },
    { href: "/process" },
  ];

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        url("/media/glow-home-solution-luxury-residence.jpg"),
        url("/media/glow-home-showroom-exterior-transparent.png"),
      ],
    },
    ...pageLinks.map((link) => ({
      url: url(link.href),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: link.href === "/products" || link.href === "/contact" ? 0.9 : 0.8,
    })),
    ...productCategories.map((category) => ({
      url: url(`/products/${category.slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
      images: category.images.map((src) => url(src)),
    })),
    ...clients.map((client) => ({
      url: url(`/clients/${client.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
      images: [url(client.logo)],
    })),
  ];
}
