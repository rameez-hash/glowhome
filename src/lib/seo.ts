import type { Metadata } from "next";
import { categorySeo, coreCategoryStructure, seoCities } from "@/lib/keywords";
import type { BlogPost } from "@/lib/blog";
import {
  brands,
  faqs,
  productCategories,
  services,
  sharedProductGalleryImages,
  siteConfig,
  type ProductCategory,
} from "@/lib/site";

const orgId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

const absolute = (path: string) =>
  path.startsWith("http") ? path : `${siteConfig.url}${path === "/" ? "" : path}`;

const defaultOgImage = "/media/glow-home-solution-luxury-residence.jpg";

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = defaultOgImage,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  image?: string;
}): Metadata {
  const hasBrand = title.includes(siteConfig.name);
  const socialTitle = hasBrand ? title : `${title} | ${siteConfig.name}`;
  return {
    title: hasBrand ? { absolute: title } : title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: absolute(path),
      title: socialTitle,
      description,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Store", "HomeGoodsStore"],
    "@id": orgId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absolute("/media/glow-home-brand-logo.png"),
    image: absolute("/media/glow-home-showroom-exterior-transparent.png"),
    description: siteConfig.longDescription,
    slogan: siteConfig.tagline,
    email: siteConfig.email,
    telephone: siteConfig.phoneRaw[0],
    priceRange: "$$-$$$",
    currenciesAccepted: "PKR",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "No 92-C, Lane 1, Zulfiqar & Al Murtaza Commercial Area, DHA Phase 8",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    location: siteConfig.locations.map((place) => ({
      "@type": "Place",
      name: `${siteConfig.name} ${place.label}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: place.address,
        addressLocality: "Karachi",
        addressRegion: "Sindh",
        addressCountry: "PK",
      },
      hasMap: place.mapUrl,
    })),
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      ...seoCities.map((city) => ({ "@type": "City", name: city })),
    ],
    brand: brands.map((brand) => ({
      "@type": "Brand",
      name: brand.name,
      description: brand.summary,
    })),
    knowsAbout: [...coreCategoryStructure, "Smart Home Automation", "Smart Switches", "Lighting Design"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Glow Home lighting catalog",
      itemListElement: productCategories.map((category) => ({
        "@type": "OfferCatalog",
        name: category.title,
        url: absolute(`/products/${category.slug}`),
      })),
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    contactPoint: siteConfig.phoneRaw.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "sales",
      areaServed: "PK",
      availableLanguage: ["English"],
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": orgId },
    inLanguage: "en-PK",
    relatedLink: [`${siteConfig.url}/llms.txt`, `${siteConfig.url}/sitemap.xml`],
  };
}

export function serviceJsonLd() {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@id": orgId },
    areaServed: "Pakistan",
    serviceType: service.title,
  }));
}

export function faqJsonLd(items: readonly { question: string; answer: string }[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: [absolute(post.image)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absolute("/media/glow-home-brand-logo.png"),
      },
    },
    mainEntityOfPage: absolute(`/blog/${post.slug}`),
    keywords: post.keywords.join(", "),
    inLanguage: "en-PK",
  };
}

export function breadcrumbJsonLd(items: readonly { name: string; path: string }[]) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function productListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Glow Home lighting categories",
    itemListElement: productCategories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.title,
      url: absolute(`/products/${category.slug}`),
      image: absolute(category.image),
    })),
  };
}

export function productCategoryFaqs(category: ProductCategory) {
  const name = category.title.toLowerCase();
  return [
    {
      question: `Where can I buy ${name} in Pakistan?`,
      answer: `You can explore ${name} at Glow Home showrooms in DHA Phase 8 and Clifton, Karachi, or contact the team by phone at ${siteConfig.phones[0]} for projects in Karachi, Lahore, Islamabad and other cities across Pakistan.`,
    },
    {
      question: `How do I choose the right ${name} for my space?`,
      answer: `${category.highlights[0]} Glow Home offers expert consultation to match size, finish, light output and smart control to your room.`,
    },
  ];
}

export function productGalleryImageAlt(
  src: string,
  categoryTitle: string,
  index: number,
) {
  const file = src.split("/").pop()?.replace(/\.(jpe?g|webp|png)$/i, "") ?? "";
  const label = file.replace(/-/g, " ").trim();
  return `${label || categoryTitle}, luxury lighting and home décor by Glow Home Pakistan — ${categoryTitle} gallery ${index + 1}`;
}

export function productCategoryJsonLd(category: ProductCategory) {
  const seo = categorySeo[category.slug];
  const url = absolute(`/products/${category.slug}`);
  // Keep schema lean: hero + a few gallery stills (avoids repeating 40+ CDN URLs on every page).
  const galleryStillPaths = sharedProductGalleryImages.slice(0, 6);
  const primary = absolute(category.image);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#page`,
    url,
    name: seo?.title ?? category.title,
    description: seo?.description ?? category.summary,
    keywords: seo?.keywords.join(", "),
    inLanguage: "en",
    isPartOf: { "@id": websiteId },
    about: {
      "@type": "Product",
      name: category.title,
      description: category.summary,
      brand: { "@type": "Brand", name: siteConfig.name },
      category: category.title,
      image: {
        "@type": "ImageObject",
        url: primary,
        contentUrl: primary,
        name: `${category.title} by Glow Home Pakistan`,
        description: category.summary,
        caption: `${category.title} lighting at Glow Home showrooms in Karachi`,
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStoreOnly",
        priceCurrency: "PKR",
        url,
        seller: { "@id": orgId },
        areaServed: "Pakistan",
      },
    },
    provider: { "@id": orgId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: primary,
      contentUrl: primary,
      name: `${category.title} by Glow Home Pakistan`,
      description: category.summary,
    },
    image: [
      primary,
      ...galleryStillPaths.map((src) => absolute(src)),
    ],
    mainEntity: {
      "@type": "ItemList",
      name: `${category.title} lighting gallery`,
      numberOfItems: galleryStillPaths.length,
      itemListElement: galleryStillPaths.map((src, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "ImageObject",
          contentUrl: absolute(src),
          url: absolute(src),
          name: productGalleryImageAlt(src, category.title, index),
          description: productGalleryImageAlt(src, category.title, index),
        },
      })),
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".eyebrow", "section p"],
    },
  };
}
