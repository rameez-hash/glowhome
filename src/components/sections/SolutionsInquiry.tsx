import { InquiryForm } from "@/components/forms/InquiryForm";
import { Reveal } from "@/components/animations/Reveal";
import { ContactDetails } from "@/components/ui/ContactDetails";

export function SolutionsInquiry() {
  return (
    <section id="solutions-inquiry" className="section bg-bg-soft">
      <div className="container-site grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <Reveal>
          <p className="eyebrow">Inquire</p>
          <h2 className="mt-4 display text-[clamp(1.9rem,4vw,3rem)]">
            Plan your lighting solution with Glow Home
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
            Share your residence, workspace, or commercial project details, our team will guide consultation, product selection, and seamless
            integration.
          </p>

          <ContactDetails className="mt-10" />
        </Reveal>

        <Reveal delay={0.1}>
          <InquiryForm subjectLabel="Solutions inquiry" />
        </Reveal>
      </div>
    </section>
  );
}
