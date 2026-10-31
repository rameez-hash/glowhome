import Link from "next/link";
import type { ReactNode } from "react";

function ProductLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-brass-soft underline decoration-brass/30 underline-offset-4 transition-colors hover:text-brass hover:decoration-brass"
    >
      {children}
    </Link>
  );
}

export function SmartHomeAutomationGuide() {
  return (
    <div className="prose-glow space-y-10 text-base leading-relaxed text-ink-muted md:text-[1.05rem]">
      <p>
        Modern homes are becoming more intelligent, convenient, and
        energy-efficient. With the growing popularity of{" "}
        <strong className="font-medium text-ink">
          smart home automation in Pakistan
        </strong>
        , homeowners are discovering new ways to control their lighting, improve
        comfort, and create personalized living environments.
      </p>
      <p>
        From automated lighting systems to intelligent switches and customizable
        lighting scenes, smart home technology is transforming how people
        interact with their homes.
      </p>
      <p>
        At <ProductLink href="/">Glow Home</ProductLink>, we believe that modern
        lighting should combine elegant design with innovative technology to
        create spaces that are both beautiful and functional.
      </p>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          What Is Smart Home Automation?
        </h2>
        <p>
          Smart home automation refers to the use of connected devices and
          intelligent control systems to manage different functions within a
          home. These systems can allow homeowners to control compatible
          lighting, appliances, curtains, and other connected devices through
          smartphones, voice assistants, or centralized control panels.
        </p>
        <p>
          Instead of manually operating individual switches, homeowners can
          create customized settings that match their daily routines.
        </p>
        <p>
          For example, a single command can dim the living room lights, activate
          decorative lighting, and create a relaxing atmosphere for the evening.
          Explore Glow Home{" "}
          <ProductLink href="/automation">automation</ProductLink> and{" "}
          <ProductLink href="/products">lighting collections</ProductLink> to
          plan a system that fits your space.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          Key Benefits of Smart Home Automation
        </h2>

        <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink md:text-2xl">
          1. Convenient Lighting Control
        </h3>
        <p>
          Smart lighting systems allow homeowners to control compatible lights
          from their smartphones or smart switches. Whether relaxing in the
          living room or preparing for bedtime, lighting can be adjusted without
          operating multiple switches.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink md:text-2xl">
          2. Improved Energy Efficiency
        </h3>
        <p>
          Smart lighting can help reduce unnecessary electricity consumption
          through scheduling, dimming, and occupancy-based controls. Actual
          savings depend on the equipment, lighting usage, and system
          configuration.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink md:text-2xl">
          3. Personalized Lighting Experiences
        </h3>
        <p>
          Different activities require different lighting conditions. Smart
          automation makes it possible to create personalized lighting scenes
          for reading, dining, entertaining guests, or watching movies. Pair
          scenes with{" "}
          <ProductLink href="/products/chandeliers">chandeliers</ProductLink>,{" "}
          <ProductLink href="/products/pendant-lights">pendant lights</ProductLink>
          , and{" "}
          <ProductLink href="/products/led-strips">LED strips</ProductLink> for a
          complete design.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink md:text-2xl">
          4. Modern Interior Aesthetics
        </h3>
        <p>
          Smart switches, architectural lighting, and concealed LED systems can
          complement contemporary interior designs. They help create clean,
          elegant spaces while providing convenient control. See our{" "}
          <ProductLink href="/solutions">residential and commercial solutions</ProductLink>{" "}
          for inspiration.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink md:text-2xl">
          5. Enhanced Home Security
        </h3>
        <p>
          Compatible automation systems can support security routines through
          scheduled lighting, motion sensors, and integration with other smart
          devices.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          Popular Smart Home Automation Features
        </h2>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong className="text-ink">Smart Lighting Control:</strong> Adjust
            brightness, schedules, and compatible lighting zones through an app
            or control panel.
          </li>
          <li>
            <strong className="text-ink">Smart Switches:</strong> Replace
            conventional controls with modern touch-enabled or connected
            switches.
          </li>
          <li>
            <strong className="text-ink">Motion Sensor Lighting:</strong>{" "}
            Automatically activate lights when movement is detected, making them
            useful for hallways, staircases, and selected outdoor spaces.
          </li>
          <li>
            <strong className="text-ink">Automated Lighting Scenes:</strong> Set
            up predefined lighting combinations for different occasions.
          </li>
          <li>
            <strong className="text-ink">Voice Control Integration:</strong>{" "}
            Compatible systems may support voice assistants, allowing hands-free
            lighting adjustments.
          </li>
        </ul>
        <p>
          For fixture selection that works well with smart control, start with{" "}
          <ProductLink href="/products/ceiling-lights">ceiling lights</ProductLink>
          ,{" "}
          <ProductLink href="/products/downlights">downlights</ProductLink>, and{" "}
          <ProductLink href="/products/wall-lights">wall lights</ProductLink>.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          Smart Home Automation for Pakistani Homes
        </h2>
        <p>
          In cities such as Karachi, Lahore, and Islamabad, homeowners are
          increasingly exploring modern lighting and automation solutions for
          apartments, villas, and newly constructed homes.
        </p>
        <p>
          When planning an automation system, it is important to consider wiring
          requirements, internet connectivity, device compatibility, and future
          expansion.
        </p>
        <p>
          A well-planned solution should be easy to operate, reliable, and
          suitable for the home&apos;s existing electrical infrastructure. Visit
          Glow Home showrooms in{" "}
          <ProductLink href="/contact">DHA Phase 8 and Clifton, Karachi</ProductLink>{" "}
          to discuss options for your project.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          How to Choose the Right Smart Home Solution
        </h2>
        <p>Before investing in smart automation, consider the following factors:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Identify which rooms or functions need automation.</li>
          <li>Choose devices compatible with your preferred control system.</li>
          <li>
            Consider whether the solution requires new wiring or can be
            retrofitted.
          </li>
          <li>
            Select lighting products that support the intended dimming and
            control features.
          </li>
          <li>
            Work with qualified professionals for electrical installation and
            system configuration.
          </li>
        </ul>
        <p>
          For room-by-room lighting planning, read our guide on{" "}
          <ProductLink href="/blog/how-to-choose-perfect-home-lighting">
            how to choose perfect home lighting
          </ProductLink>
          .
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          Transform Your Home with Glow Home
        </h2>
        <p>
          Smart home automation brings together convenience, technology, and
          modern interior design. Whether you are planning a new home or
          upgrading an existing space, thoughtful lighting choices can make
          everyday living more comfortable.
        </p>
        <p>
          Explore modern lighting and smart home solutions with Glow Home and
          discover how intelligent lighting can elevate your living environment.
          Contact Glow Home to discuss lighting and automation options suitable
          for your home.
        </p>
      </section>
    </div>
  );
}
