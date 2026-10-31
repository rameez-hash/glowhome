import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

type BlogGuidesProps = {
  excludeSlug?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  /** Latest posts to show before linking to /blog. Default 4. */
  limit?: number;
};

export function BlogGuides({
  excludeSlug,
  eyebrow = "Guides",
  title = "Lighting ideas from the Glow Home blog",
  description = "Practical guides on home lighting and smart home automation for homes across Pakistan.",
  className = "",
  limit = 4,
}: BlogGuidesProps) {
  // blogPosts is oldest → newest; reverse for latest first.
  const allPosts = [...blogPosts]
    .filter((post) => post.slug !== excludeSlug)
    .reverse();
  const posts = allPosts.slice(0, limit);
  const hasMore = allPosts.length > posts.length;

  if (posts.length === 0) return null;

  return (
    <section
      className={`border-t border-line bg-bg-soft py-14 md:py-16 ${className}`}
    >
      <div className="container-site">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.75rem)] tracking-tight text-ink">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
              {description}
            </p>
          </div>
          <Link
            href="/blog"
            className="text-[0.68rem] uppercase tracking-[0.18em] text-brass transition-colors hover:text-brass-soft"
          >
            View all guides →
          </Link>
        </div>

        <div
          className={`mt-9 grid gap-4 ${posts.length === 1 ? "md:max-w-xl" : "md:grid-cols-2"}`}
        >
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden border border-line bg-bg transition-colors hover:border-brass/35"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="grid sm:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative aspect-[16/11] sm:aspect-auto sm:min-h-full">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    quality={70}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-center p-5 md:p-6">
                  <p className="text-[0.62rem] uppercase tracking-[0.16em] text-brass-soft">
                    {post.focusKeyword}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl tracking-tight text-ink transition-colors group-hover:text-brass-soft md:text-[1.35rem]">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex text-[0.62rem] uppercase tracking-[0.16em] text-brass">
                    Read guide →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <Link href="/blog" className="btn btn-ghost !min-h-11">
              View more
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
