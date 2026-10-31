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

export function ChandelierSizeGuide() {
  return (
    <div className="prose-glow space-y-10 text-base leading-relaxed text-ink-muted md:text-[1.05rem]">
      <p>
        A chandelier is more than just a lighting fixture. It is a statement
        piece that adds elegance, personality, and sophistication to your living
        room. However, selecting the right{" "}
        <strong className="font-medium text-ink">
          chandelier size for living room
        </strong>{" "}
        spaces is essential to achieving a balanced and visually appealing
        interior.
      </p>
      <p>
        A chandelier that is too large can overwhelm your space, while one that
        is too small may fail to create the desired impact.
      </p>
      <p>
        At <ProductLink href="/">Glow Home</ProductLink>, we believe the perfect
        chandelier should complement your room&apos;s dimensions, ceiling
        height, furniture arrangement, and overall interior design.
      </p>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          Why Chandelier Size Matters
        </h2>
        <p>
          The size of your chandelier influences both the appearance and
          functionality of your living room.
        </p>
        <p>A properly sized chandelier can:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Create an elegant focal point.</li>
          <li>Complement your furniture and interior décor.</li>
          <li>Provide balanced illumination.</li>
          <li>Enhance the proportions of your living space.</li>
          <li>Add luxury without overwhelming the room.</li>
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          How to Calculate the Right Chandelier Diameter
        </h2>
        <p>
          A common interior design guideline is to add the room&apos;s length
          and width in feet, then use that number as the approximate chandelier
          diameter in inches.
        </p>
        <p>
          <strong className="font-medium text-ink">Example:</strong>
        </p>
        <p>For a living room measuring 14 feet by 16 feet:</p>
        <p>14 + 16 = 30</p>
        <p>
          The suggested chandelier diameter is approximately{" "}
          <strong className="font-medium text-ink">30 inches (76 cm)</strong>.
        </p>
        <p>
          This formula provides a useful starting point. The final size should
          also consider the ceiling height, furniture placement, and visual
          weight of the fixture.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          Consider Your Ceiling Height
        </h2>
        <p>
          Ceiling height plays an important role in selecting the appropriate
          chandelier.
        </p>
        <p>
          <strong className="font-medium text-ink">8-Foot Ceilings:</strong>{" "}
          Choose compact or semi-flush designs that maintain comfortable
          clearance.
        </p>
        <p>
          <strong className="font-medium text-ink">9–10-Foot Ceilings:</strong>{" "}
          Medium-sized chandeliers with moderate hanging lengths often work
          well.
        </p>
        <p>
          <strong className="font-medium text-ink">
            11-Foot Ceilings and Above:
          </strong>{" "}
          Larger statement chandeliers or multi-tier designs can complement the
          additional vertical space.
        </p>
        <p>
          In areas where people walk beneath the chandelier, aim for
          approximately 7 feet of clearance from the floor to the fixture&apos;s
          lowest point.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          Choosing the Right Chandelier Style
        </h2>
        <p>
          Different chandelier designs create different visual effects. Explore{" "}
          <ProductLink href="/products/chandeliers">
            chandeliers at Glow Home
          </ProductLink>{" "}
          to compare crystal, modern LED, ring, and multi-tier options.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink md:text-2xl">
          Crystal Chandeliers
        </h3>
        <p>
          Crystal chandeliers are ideal for luxurious and traditional interiors.
          They reflect light beautifully and create a sophisticated atmosphere.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink md:text-2xl">
          Modern LED Chandeliers
        </h3>
        <p>
          Contemporary LED chandeliers feature sleek lines, geometric forms, and
          minimalist designs. They complement modern apartments and stylish
          living rooms. Pair them with layered{" "}
          <ProductLink href="/products/led-strips">LED strips</ProductLink> or{" "}
          <ProductLink href="/products/ceiling-lights">
            ceiling lights
          </ProductLink>{" "}
          for balanced ambient light.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink md:text-2xl">
          Ring Chandeliers
        </h3>
        <p>
          Circular and multi-ring chandeliers are popular in contemporary
          interiors. Their sculptural appearance makes them an attractive choice
          for modern living spaces.
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink md:text-2xl">
          Multi-Tier Chandeliers
        </h3>
        <p>
          For double-height living rooms, multi-tier chandeliers can create a
          dramatic centerpiece while visually connecting the upper and lower
          areas.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          Where Should You Position Your Chandelier?
        </h2>
        <p>
          The ideal chandelier placement depends on your room&apos;s layout.
        </p>
        <p>
          In a symmetrical living room, a centrally positioned chandelier can
          create visual balance.
        </p>
        <p>
          For open-plan spaces, positioning the chandelier above the main
          seating arrangement can help define the living area. For broader room
          planning tips, read our guide on{" "}
          <ProductLink href="/blog/how-to-choose-perfect-home-lighting">
            how to choose perfect home lighting
          </ProductLink>
          .
        </p>
        <p>
          Avoid placing large fixtures too close to walls, tall cabinets, or
          other decorative elements.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          Common Chandelier Sizing Mistakes
        </h2>
        <p>
          One of the most common mistakes is selecting a chandelier based only
          on its appearance.
        </p>
        <p>
          Other mistakes include ignoring ceiling clearance, choosing an
          excessively heavy-looking design for a small room, and overlooking the
          relationship between the chandelier and surrounding furniture.
        </p>
        <p>
          Before purchasing, measure your room and confirm the fixture&apos;s
          diameter, height, and installation requirements.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-[family-name:var(--font-display)] text-[1.85rem] tracking-tight text-ink md:text-[2.15rem]">
          Find Your Perfect Chandelier at Glow Home
        </h2>
        <p>
          The right chandelier can transform an ordinary living room into a
          beautiful and inviting space.
        </p>
        <p>
          Whether you prefer elegant crystal designs, modern LED chandeliers, or
          dramatic statement lighting, choosing the correct proportions is the
          key to achieving a refined interior.
        </p>
        <p>
          Explore{" "}
          <ProductLink href="/products/chandeliers">
            Glow Home&apos;s chandelier collection
          </ProductLink>{" "}
          and discover lighting designs that complement your home.{" "}
          <ProductLink href="/contact">Contact Glow Home</ProductLink> for
          assistance in selecting a chandelier suitable for your living room.
        </p>
      </section>
    </div>
  );
}
