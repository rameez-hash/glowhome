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
  {
    slug: "smart-home-automation-in-pakistan",
    title: "Smart Home Automation in Pakistan: Benefits, Features & Solutions",
    excerpt:
      "Discover smart home automation in Pakistan, including intelligent lighting, smart switches, automated controls, and modern solutions for luxury homes.",
    metaTitle: "Smart Home Automation in Pakistan | Glow Home",
    metaDescription:
      "Discover smart home automation in Pakistan, including intelligent lighting, smart switches, automated controls, and modern solutions for luxury homes.",
    focusKeyword: "Smart Home Automation in Pakistan",
    keywords: [
      "Smart Home Automation in Pakistan",
      "Smart Lighting Pakistan",
      "Smart Switches",
      "Home Automation Karachi",
      "Automated Lighting Control",
      "Smart Home Solutions Pakistan",
      "Intelligent Lighting",
    ],
    publishedAt: "2026-10-31",
    updatedAt: "2026-10-31",
    readingMinutes: 7,
    image: "/media/blog-smart-home-automation-pakistan.jpg",
    imageAlt:
      "Smart home app controlling living room lighting and scenes in a luxury Pakistani residence",
  },
  {
    slug: "best-led-lights-in-pakistan",
    title: "Best LED Lights in Pakistan: Types, Buying Guide & Room Ideas",
    excerpt:
      "Discover the best LED lights in Pakistan for homes and interiors, including downlights, ceiling lights, LED strips, spotlights, and practical buying tips from Glow Home.",
    metaTitle: "Best LED Lights in Pakistan | Glow Home",
    metaDescription:
      "Find the best LED lights in Pakistan for living rooms, bedrooms, kitchens and offices. Compare LED types, color temperature tips and buy quality lighting at Glow Home.",
    focusKeyword: "Best LED Lights in Pakistan",
    keywords: [
      "Best LED Lights in Pakistan",
      "Pakistan best LED Lights",
      "FIAM LED Lights",
      "FIAM Lighting Pakistan",
      "LED Lights Pakistan",
      "LED Lights Price in Pakistan",
      "Buy LED Lights Pakistan",
      "LED Ceiling Lights",
      "LED Downlights",
      "LED Strip Lights",
      "LED Lighting Store Pakistan",
    ],
    publishedAt: "2026-10-31",
    updatedAt: "2026-10-31",
    readingMinutes: 8,
    image: "/media/blog-best-led-lights-pakistan.jpg",
    imageAlt:
      "Modern hallway with recessed LED spotlights and warm cove lighting",
  },
] as const satisfies readonly BlogPost[];

export type BlogSlug = (typeof blogPosts)[number]["slug"];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
