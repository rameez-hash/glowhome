import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { categorySeo } from "@/lib/keywords";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  pageMetadata,
  productCategoryFaqs,
  productCategoryJsonLd,
} from "@/lib/seo";
import {
  getProductCategoryBySlug,
  getProductCategoryImages,
  productCategories,
} from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getProductCategoryBySlug(slug);
  if (!category) return { title: "Product" };

  const seo = categorySeo[category.slug];
  return pageMetadata({
    title: seo?.title ?? `${category.title} in Pakistan`,
    description: seo?.description ?? category.summary,
    path: `/products/${category.slug}`,
    keywords: seo?.keywords,
    image: category.image,
  });
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getProductCategoryBySlug(slug);
  if (!category) notFound();

  const gallery = getProductCategoryImages(category);
  const related = productCategories
    .filter((item) => item.slug !== category.slug)
    .slice(0, 4);
  const seo = categorySeo[category.slug];
  const categoryFaqs = productCategoryFaqs(category);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={category.title}
        description={category.summary}
      />

      <section className="border-b border-line bg-bg py-12 md:py-14">
        <div className="container-site">
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
            {category.highlights.map((item, index) => (
              <div
                key={item}
                className="border-t border-line pt-6 sm:border-t-0 sm:border-l sm:border-line sm:pt-0 sm:pl-8 first:sm:border-l-0 first:sm:pl-0"
              >
                <p className="font-[family-name:var(--font-display)] text-sm text-brass">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link href="/contact" className="btn !min-h-11 text-center">
              Inquire about {category.title}
            </Link>
            <Link href="/products" className="btn btn-ghost !min-h-11">
              All products
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-bg-elevated py-8 md:py-10">
        <div className="container-site">
          <p className="mb-5 text-[0.65rem] uppercase tracking-[0.2em] text-brass-soft">
            Gallery
          </p>
          <div
            className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pb-2 md:gap-4 lg:mx-0 lg:grid lg:overflow-visible lg:px-0 lg:pb-0"
            style={
              gallery.length > 1
                ? {
                    gridTemplateColumns: `repeat(${Math.min(gallery.length, 6)}, minmax(0, 1fr))`,
                  }
                : undefined
            }
          >
            {gallery.map((src, index) => (
              <div
                key={src}
                className="relative aspect-[4/5] w-[68vw] max-w-[15rem] shrink-0 snap-start overflow-hidden bg-bg md:w-[30vw] lg:w-auto lg:max-w-none"
              >
                <Image
                  src={src}
                  alt={`${category.title} by Glow Home, view ${index + 1}`}
                  fill
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 68vw, (max-width: 1024px) 30vw, 16vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bg">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">{category.title} in Pakistan</p>
            <h2 className="mt-4 display text-[clamp(1.7rem,3.6vw,2.6rem)]">
              {seo?.title.split(" | ")[1] ?? category.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
              {seo?.description ?? category.summary}
            </p>
          </div>

          <div className="space-y-3 lg:pt-10">
            {categoryFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-line bg-bg-elevated px-5 py-4 open:pb-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-[family-name:var(--font-display)] text-base tracking-tight md:text-lg">
                  {faq.question}
                  <span
                    aria-hidden
                    className="text-brass transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bg-soft">
        <div className="container-site">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">More products</p>
              <h2 className="mt-4 display text-[clamp(1.8rem,4vw,2.8rem)]">
                Explore related categories
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs uppercase tracking-[0.18em] text-brass transition-colors hover:text-brass-soft"
            >
              View all
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 md:mt-10 lg:grid-cols-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="group overflow-hidden border border-line bg-bg transition-colors hover:border-brass/50"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="px-3 py-3 sm:px-4 sm:py-4">
                  <h3 className="font-[family-name:var(--font-display)] text-base leading-tight tracking-tight sm:text-lg">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          productCategoryJsonLd(category),
          breadcrumbJsonLd([
            { name: "Products", path: "/products" },
            { name: category.title, path: `/products/${category.slug}` },
          ]),
          faqJsonLd(categoryFaqs),
        ]}
      />
    </>
  );
}
