import type { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon } from "@/components/ui/ContactDetails";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you",
  description:
    "Thank you for contacting Glow Home. Our lighting team will get back to you shortly.",
  robots: { index: false, follow: true },
};

const nextSteps = [
  {
    title: "We review your request",
    text: "Our team reads your project details and prepares the right questions.",
  },
  {
    title: "We call you back",
    text: "Expect a call or email within one business day to plan a consultation.",
  },
  {
    title: "We plan your lighting",
    text: "Fixture selection, layouts, and smart control tailored to your space.",
  },
];

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden bg-bg pt-[calc(var(--header-h)+3.5rem)] pb-20 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_75%_10%,rgba(196,164,106,0.12),transparent_60%)]"
        aria-hidden
      />

      <div className="container-site relative">
        <div className="max-w-2xl">
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full border border-brass/50 text-brass"
            aria-hidden
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path
                d="m5 12.5 4.5 4.5L19 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="mt-8 eyebrow">Message sent</p>
          <h1 className="mt-5 display text-[clamp(2.4rem,6vw,4.5rem)]">
            Thank you, we&apos;ll be in{" "}
            <span className="text-brass-soft">touch</span> soon
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            Your inquiry has reached the Glow Home team. We usually respond
            within one business day. For anything urgent, call us directly.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/" className="btn">
              Back to home
            </Link>
            <Link href="/products" className="btn btn-ghost">
              Browse products
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw[0]}`}
              className="btn btn-ghost"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-brass" />
              {siteConfig.phones[0]}
            </a>
          </div>
        </div>

        <ol className="mt-16 grid gap-4 border-t border-line pt-10 sm:grid-cols-3 md:mt-20">
          {nextSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative border border-line bg-bg-elevated p-6"
            >
              <span className="text-[0.65rem] tracking-[0.2em] text-brass">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl tracking-tight">
                {step.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
