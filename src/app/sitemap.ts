import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import {
  clients,
  navLinks,
  productCategories,
  sharedProductGalleryImages,
  siteConfig,
} from "@/lib/site";

const url = (path: string) => `${siteConfig.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pageLinks = [
    ...navLinks.filter((link) => link.href !== "/" && !link.href.includes("#")),
    { href: "/services" },
    { href: "/process" },
    { href: "/automation" },
    { href: "/blog" },
  ];

  // Image SEO without repeating the full gallery on every product URL (CDN + crawl budget).
  const productsIndexImages = [
    ...productCategories.slice(0, 4).map((category) => url(category.image)),
    ...sharedProductGalleryImages.slice(0, 8).map((src) => url(src)),
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
      ...(link.href === "/products" ? { images: productsIndexImages } : {}),
    })),
    ...blogPosts.map((post) => ({
      url: url(`/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75,
      images: [url(post.image)],
    })),
    ...productCategories.map((category) => ({
      url: url(`/products/${category.slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
      images: [url(category.image)],
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
