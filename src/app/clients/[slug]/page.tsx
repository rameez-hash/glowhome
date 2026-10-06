import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClientInquiryForm } from "@/components/forms/ClientInquiryForm";
import { PageHero } from "@/components/layout/PageHero";
import { ContactDetails } from "@/components/ui/ContactDetails";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { clients, getClientBySlug } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return clients.map((client) => ({ slug: client.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const client = getClientBySlug(slug);
  if (!client) return { title: "Client" };

  return pageMetadata({
    title: `${client.name} Lighting Project`,
    description: `${client.summary} ${client.category} lighting by Glow Home Pakistan.`,
    path: `/clients/${client.slug}`,
    keywords: [
      `${client.name} lighting`,
      `${client.category} Lighting`,
      "Commercial Lighting",
      "Showroom Lighting",
      "Retail Lighting",
    ],
    image: client.logo,
  });
}

export default async function ClientPage({ params }: PageProps) {
  const { slug } = await params;
  const client = getClientBySlug(slug);
  if (!client) notFound();

  const related = clients
    .filter((item) => item.slug !== client.slug)
    .slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Client"
        title={client.name}
        description={`${client.category} partner, lighting and smart living collaboration with Glow Home.`}
      />

      <section className="section bg-bg">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="border border-line bg-white p-8 md:p-12">
            <div className="relative mx-auto aspect-square max-w-sm">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                sizes="(max-width: 1024px) 80vw, 380px"
                className="object-contain p-4"
                loading="eager"
              />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-soft">
              {client.category}
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.8rem,3vw,2.6rem)] tracking-tight">
              Working with {client.name}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
              {client.summary}
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-dim">
              Glow Home supports partners with consultation, fixture selection,
              and seamless lighting integration, so every space feels considered,
              comfortable, and on-brand.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#client-contact" className="btn">
                Get in touch
              </a>
              <Link href="/clients" className="btn btn-ghost">
                All clients
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="client-contact" className="section bg-bg-soft">
        <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 display text-[clamp(1.9rem,4vw,3rem)]">
              Interested in a similar project?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
              Share a few details and our team will help you plan lighting and
              smart living solutions inspired by work like {client.name}.
            </p>
            <ContactDetails className="mt-8" />
          </div>

          <ClientInquiryForm clientName={client.name} />
        </div>
      </section>

      {related.length ? (
        <section className="border-t border-line bg-bg py-14">
          <div className="container-site">
            <p className="text-xs uppercase tracking-[0.2em] text-brass-soft">
              More clients
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/clients/${item.slug}`}
                  className="border border-line bg-white p-4 transition-transform hover:-translate-y-0.5"
                >
                  <div className="relative mx-auto aspect-[5/3] max-w-[9rem]">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      sizes="160px"
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-3 text-center text-[0.65rem] uppercase tracking-[0.12em] text-black/65">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Clients", path: "/clients" },
          { name: client.name, path: `/clients/${client.slug}` },
        ])}
      />
    </>
  );
}
