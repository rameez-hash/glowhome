export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  keywords: readonly string[];
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
};

export const blogPosts = [
  {
    slug: "how-to-choose-perfect-home-lighting",
    title: "How to Choose the Perfect Lighting for Every Room in Your Home",
    excerpt:
      "Discover the best home lighting ideas for living rooms, bedrooms, kitchens, bathrooms, and dining areas with Glow Home.",
    metaTitle: "How to Choose Perfect Home Lighting | Glow Home",
    metaDescription:
      "Discover the best lighting ideas for living rooms, bedrooms, kitchens, bathrooms, and dining areas. Create a stylish and comfortable home with Glow Home",
    focusKeyword: "Home Lighting Ideas",
    keywords: [
      "Home Lighting Ideas",
      "Perfect Home Lighting",
      "Living Room Lighting",
      "Bedroom Lighting",
      "Kitchen Lighting",
      "Dining Room Lighting",
      "Bathroom Lighting",
      "Lighting Store Pakistan",
    ],
    publishedAt: "2026-10-31",
    updatedAt: "2026-10-31",
    readingMinutes: 8,
    image: "/media/blog-home-lighting-ideas-living-dining.jpg",
    imageAlt:
      "Luxury living and dining room with chandelier, recessed lights, and layered home lighting",
  },
] as const satisfies readonly BlogPost[];

export type BlogSlug = (typeof blogPosts)[number]["slug"];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
