import type { Metadata } from "next";
import { categorySeo, coreCategoryStructure, seoCities } from "@/lib/keywords";
import {
  brands,
  faqs,
  productCategories,
  services,
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

export function productCategoryJsonLd(category: ProductCategory) {
  const seo = categorySeo[category.slug];
  const url = absolute(`/products/${category.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#page`,
    url,
    name: seo?.title ?? category.title,
    description: seo?.description ?? category.summary,
    keywords: seo?.keywords.join(", "),
    isPartOf: { "@id": websiteId },
    about: { "@type": "Thing", name: category.title },
    provider: { "@id": orgId },
    primaryImageOfPage: absolute(category.image),
    image: category.images.map((src) => absolute(src)),
  };
}
