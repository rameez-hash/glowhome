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

export function HomeLightingGuide() {
  return (
    <div className="prose-glow space-y-10 text-base leading-relaxed text-ink-muted md:text-[1.05rem]">
      <p>
        Lighting plays an essential role in creating a beautiful, comfortable,
        and functional home. The right lighting enhances interior design,
        highlights architectural details, and creates the perfect atmosphere for
        everyday living.
      </p>
      <p>
        Whether you are designing a new home or renovating an existing space,
        choosing the right lighting fixtures can completely transform your
        interiors. Thoughtful{" "}
        <ProductLink href="/products">home lighting ideas</ProductLink> turn
        each room into a more welcoming, practical, and stylish space.
      </p>
      <p>
        At{" "}
        <ProductLink href="/">Glow Home</ProductLink>, we understand that every
        room has unique lighting requirements. From elegant{" "}
        <ProductLink href="/products/chandeliers">chandeliers</ProductLink> to
        modern{" "}
        <ProductLink href="/products/led-strips">LED solutions</ProductLink>,
        thoughtful lighting design helps bring every space to life.
      </p>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          Understanding the Three Main Types of Lighting
        </h2>
        <p>
          Before selecting lighting fixtures, it is important to understand the
          three primary types of lighting used in interior design.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink md:text-2xl">
          Ambient Lighting
        </h3>
        <p>
          Ambient lighting provides general illumination throughout a room.{" "}
          <ProductLink href="/products/ceiling-lights">Ceiling lights</ProductLink>
          ,{" "}
          <ProductLink href="/products/downlights">recessed downlights</ProductLink>
          , and chandeliers are commonly used to create a comfortable overall
          lighting level.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink md:text-2xl">
          Task Lighting
        </h3>
        <p>
          Task lighting provides focused illumination for activities such as
          reading, cooking, working, and grooming. Examples include{" "}
          <ProductLink href="/products/table-lamps">desk lamps</ProductLink>,
          under-cabinet lights, and bedside reading lights.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink md:text-2xl">
          Accent Lighting
        </h3>
        <p>
          Accent lighting highlights decorative features, artwork, architectural
          details, and statement furniture.{" "}
          <ProductLink href="/products/wall-lights">Wall lights</ProductLink>,{" "}
          <ProductLink href="/products/ceiling-spotlights">spotlights</ProductLink>
          , and LED strips can create depth and visual interest.
        </p>
        <p>
          Combining all three types creates a balanced and visually appealing
          lighting arrangement.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          1. Living Room Lighting: Create a Welcoming Atmosphere
        </h2>
        <p>
          The living room is often the centerpiece of a home, making lighting an
          important part of its overall design.
        </p>
        <p>
          A statement chandelier can serve as a decorative focal point, while
          recessed ceiling lights provide general illumination. Wall lights and
          LED strip lighting can add warmth and dimension.
        </p>
        <p className="font-medium text-ink">Recommended lighting options:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Modern{" "}
            <ProductLink href="/products/chandeliers">chandeliers</ProductLink>
          </li>
          <li>
            Decorative{" "}
            <ProductLink href="/products/wall-lights">wall lights</ProductLink>
          </li>
          <li>
            Recessed{" "}
            <ProductLink href="/products/downlights">LED downlights</ProductLink>
          </li>
          <li>
            Cove and{" "}
            <ProductLink href="/products/led-strips">strip lighting</ProductLink>
          </li>
          <li>
            Adjustable{" "}
            <ProductLink href="/products/ceiling-spotlights">spotlights</ProductLink>
          </li>
        </ul>
        <p>
          Choose warm or neutral lighting depending on the room&apos;s color
          palette and intended atmosphere.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          2. Bedroom Lighting: Focus on Comfort and Relaxation
        </h2>
        <p>
          Bedrooms require softer lighting that promotes comfort and relaxation.
        </p>
        <p>
          Warm white lighting is often preferred because it creates a calm
          atmosphere. Bedside lamps or wall-mounted reading lights provide
          focused illumination without making the entire room overly bright.
        </p>
        <p className="font-medium text-ink">Recommended lighting options:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Warm white{" "}
            <ProductLink href="/products/ceiling-lights">ceiling lights</ProductLink>
          </li>
          <li>Bedside wall lights</li>
          <li>
            Decorative{" "}
            <ProductLink href="/products/pendant-lights">pendant lights</ProductLink>
          </li>
          <li>Concealed LED strip lighting</li>
          <li>Dimmable lighting fixtures</li>
        </ul>
        <p>
          Using dimmable lights can help create different lighting moods
          throughout the day.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          3. Kitchen Lighting: Combine Style with Functionality
        </h2>
        <p>
          Kitchen lighting should prioritize visibility and practicality while
          complementing the overall interior design.
        </p>
        <p>
          Under-cabinet LED strips illuminate countertops, while pendant lights
          can provide both task lighting and decorative appeal above kitchen
          islands.
        </p>
        <p className="font-medium text-ink">Recommended lighting options:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Under-cabinet{" "}
            <ProductLink href="/products/led-strips">LED strips</ProductLink>
          </li>
          <li>
            <ProductLink href="/products/pendant-lights">Pendant lights</ProductLink>
          </li>
          <li>Recessed ceiling lights</li>
          <li>Focused task lighting</li>
        </ul>
        <p>
          Pay particular attention to food preparation areas, where clear and
          consistent illumination is important.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          4. Dining Room Lighting: Make Every Meal Special
        </h2>
        <p>
          Dining areas benefit from lighting that creates an inviting
          atmosphere.
        </p>
        <p>
          A chandelier or a set of pendant lights positioned above the dining
          table can establish a striking focal point.
        </p>
        <p>
          For a balanced design, select a fixture that complements the size and
          shape of the dining table.
        </p>
        <p className="font-medium text-ink">Recommended lighting options:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Crystal chandeliers</li>
          <li>Modern pendant lights</li>
          <li>
            Linear{" "}
            <ProductLink href="/products/track-lighting">suspension and track lights</ProductLink>
          </li>
          <li>Dimmable decorative fixtures</li>
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          5. Bathroom Lighting: Balance Brightness and Design
        </h2>
        <p>
          Bathrooms require practical illumination, particularly around mirrors
          and vanity areas.
        </p>
        <p>
          Wall-mounted vanity lights can provide more even facial illumination,
          while recessed ceiling lights support general visibility.
        </p>
        <p className="font-medium text-ink">Recommended lighting options:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Vanity mirror lights</li>
          <li>Recessed downlights</li>
          <li>Moisture-rated LED fixtures</li>
          <li>Decorative wall lights</li>
        </ul>
        <p>
          Always select fixtures with appropriate moisture protection and
          electrical safety ratings for their installation location.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          6. Hallway and Staircase Lighting: Enhance Safety and Elegance
        </h2>
        <p>
          Hallways and staircases are often overlooked when planning interior
          lighting.
        </p>
        <p>
          Recessed lights, wall fixtures, and LED step lighting can improve
          visibility while enhancing architectural details.
        </p>
        <p>
          Motion sensors can also provide convenient automatic illumination in
          frequently used passageways. Explore Glow Home{" "}
          <ProductLink href="/automation">smart automation</ProductLink>{" "}
          options as they become available.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          Choosing the Right Lighting Color Temperature
        </h2>
        <p>Color temperature influences the appearance and atmosphere of a room.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-ink">Warm White (2700K–3000K):</strong>{" "}
            Suitable for bedrooms, living rooms, and relaxing spaces.
          </li>
          <li>
            <strong className="text-ink">Neutral White (3500K–4000K):</strong>{" "}
            Often suitable for kitchens, bathrooms, and general-purpose areas.
          </li>
          <li>
            <strong className="text-ink">Cool White (5000K–6500K):</strong> Useful
            for selected task-oriented spaces where a cooler appearance is
            preferred.
          </li>
        </ul>
        <p>
          These are general recommendations; personal preferences and interior
          finishes should also guide your choice.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          Common Home Lighting Mistakes to Avoid
        </h2>
        <p>
          One common mistake is relying on a single ceiling light for an entire
          room. This can create uneven illumination and limit flexibility.
        </p>
        <p>
          Other mistakes include choosing oversized fixtures for small rooms,
          ignoring glare, selecting unsuitable color temperatures, and
          overlooking task lighting.
        </p>
        <p>
          A thoughtful lighting plan should consider room dimensions, ceiling
          height, furniture placement, and the activities performed in each
          space. Browse{" "}
          <ProductLink href="/solutions">Glow Home solutions</ProductLink> for
          residences and commercial interiors, or visit our{" "}
          <ProductLink href="/products">lighting collections</ProductLink> for
          product inspiration.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          Illuminate Your Home with Glow Home
        </h2>
        <p>
          The perfect lighting design combines functionality, comfort, and
          visual elegance.
        </p>
        <p>
          From luxurious chandeliers and decorative wall lights to contemporary
          architectural lighting, choosing the right fixtures can enhance the
          beauty of every room.
        </p>
        <p>
          Discover elegant lighting solutions at Glow Home and bring your
          interior design vision to life. Explore our collections and find
          inspiration for your next home improvement project.           For LED-focused buying advice, read{" "}
          <ProductLink href="/blog/best-led-lights-in-pakistan">
            best LED lights in Pakistan
          </ProductLink>
          . For connected lighting control, also see our guide to{" "}
          <ProductLink href="/blog/smart-home-automation-in-pakistan">
            smart home automation in Pakistan
          </ProductLink>
          .
        </p>
      </section>
    </div>
  );
}
