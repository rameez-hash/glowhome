import { siteConfig, faqs, services } from "@/lib/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "HomeAndConstructionBusiness", "Electrician"],
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/media/glow-home-brand-logo.png`,
    image: `${siteConfig.url}/media/glow-home-showroom-exterior-transparent.png`,
    description: siteConfig.longDescription,
    email: siteConfig.email,
    telephone: siteConfig.phones,
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    knowsAbout: [
      "Smart home automation",
      "Architectural lighting",
      "Decorative lighting",
      "Smart switches",
      "Home sensors",
      "Energy-efficient lighting",
      "Commercial lighting solutions",
    ],
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneRaw[0],
        contactType: "sales",
        areaServed: "PK",
        availableLanguage: ["English", "Urdu"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    inLanguage: "en-PK",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceJsonLd() {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Pakistan",
    serviceType: service.title,
  }));
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  };
}
