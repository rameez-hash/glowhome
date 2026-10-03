import {
  breadcrumbJsonLd,
  faqJsonLd,
  organizationJsonLd,
  serviceJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export function JsonLd() {
  const graph = [
    organizationJsonLd(),
    websiteJsonLd(),
    faqJsonLd(),
    breadcrumbJsonLd(),
    ...serviceJsonLd(),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
