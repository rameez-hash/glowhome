import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HomeLightingGuide } from "@/components/blog/HomeLightingGuide";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts, getBlogPost } from "@/lib/blog";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  pageMetadata,
} from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const base = pageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    image: post.image,
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="bg-bg pt-[calc(var(--header-h)+2.75rem)] pb-16 md:pb-24">
        <div className="container-site">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-ink-dim"
          >
            <Link href="/" className="transition-colors hover:text-brass-soft">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link
              href="/blog"
              className="transition-colors hover:text-brass-soft"
            >
              Blog
            </Link>
            <span aria-hidden>/</span>
            <span className="text-brass-soft">Home lighting ideas</span>
          </nav>

          <header className="mx-auto mt-8 max-w-3xl text-center md:mt-10">
            <p className="eyebrow justify-center">Home Lighting Ideas</p>
            <h1 className="mt-5 display text-[clamp(2.1rem,5vw,3.75rem)]">
              {post.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              {post.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.68rem] uppercase tracking-[0.16em] text-ink-dim">
              <time dateTime={post.publishedAt}>
                Updated {post.updatedAt}
              </time>
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} min read</span>
            </div>
          </header>

          <div className="mx-auto mt-10 max-w-3xl overflow-hidden border border-line md:mt-12">
            <div className="relative aspect-[16/10]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                loading="eager"
              />
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl md:mt-12">
            {slug === "how-to-choose-perfect-home-lighting" ? (
              <HomeLightingGuide />
            ) : null}

            <div className="mt-12 border-t border-line pt-10">
              <p className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-ink md:text-3xl">
                Ready to light your space?
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
                Explore Glow Home collections or talk to our team about the
                right fixtures for every room in your home.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/products" className="btn">
                  Browse products
                </Link>
                <Link href="/contact" className="btn btn-ghost">
                  Book consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleJsonLd(post),
        ]}
      />
    </>
  );
}
