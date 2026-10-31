import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts } from "@/lib/blog";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Lighting Blog & Home Lighting Ideas",
  description:
    "Read Glow Home guides on home lighting ideas, room-by-room fixture selection, color temperature tips, and elegant lighting design for modern interiors in Pakistan.",
  path: "/blog",
  keywords: [
    "Home Lighting Ideas",
    "Lighting Blog Pakistan",
    "Interior Lighting Guide",
    "Room Lighting Tips",
  ],
});

export default function BlogIndexPage() {
  const posts = [...blogPosts].reverse();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Home lighting ideas and design guides"
        description="Practical lighting advice for every room, written for homes across Pakistan and curated by the Glow Home team."
      />

      <section className="section bg-bg">
        <div className="container-site grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden border border-line bg-bg-elevated"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="relative aspect-[16/10] overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  quality={70}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-brass-soft">
                  {post.focusKeyword}
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-tight text-ink transition-colors group-hover:text-brass-soft">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between gap-3 text-[0.65rem] uppercase tracking-[0.16em] text-ink-dim">
                  <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-brass transition-colors hover:text-brass-soft"
                  >
                    Read guide →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd([{ name: "Blog", path: "/blog" }])} />
    </>
  );
}
