type Redirect = { source: string; destination: string; permanent: boolean };

const legacyPages: Record<string, readonly string[]> = {
  "/": ["index", "home", "blog", "blogs"],
  "/about": ["about", "about-us", "aboutus"],
  "/contact": ["contact", "contact-us", "contactus"],
  "/clients": ["clients", "client", "gallery", "recent-work"],
  "/products": [
    "products",
    "product",
    "shop",
    "store",
    "homelighting",
    "home-lighting",
    "lighting",
    "fancylights",
    "fancy-lights",
    "outdoorlights",
    "outdoor-lights",
    "gardenlights",
    "garden-lights",
  ],
  "/solutions": [
    "solutions",
    "commerciallighting",
    "commercial-lighting",
    "commerciallights",
    "commercial-lights",
  ],
  "/products/decor": ["homedecor", "home-decor", "decor"],
  "/products/table-lamps": ["lamps", "tablelamp", "tablelamps", "table-lamps"],
  "/products/floor-lamps": ["floorlamp", "floorlamps", "floor-lamps"],
  "/products/chandeliers": ["chandeliers", "chandelier"],
  "/products/pendant-lights": ["pendantlights", "pendant-lights", "pendants"],
  "/products/wall-lights": ["walllights", "wall-lights", "walllamps", "wall-lamps"],
  "/products/ceiling-lights": ["ceilinglights", "ceiling-lights"],
  "/products/downlights": ["downlights"],
  "/products/ceiling-spotlights": ["spotlights", "spot-lights"],
  "/products/track-lighting": ["tracklights", "track-lights", "track-lighting"],
  "/products/led-strips": ["ledlighting", "led-lighting", "ledlights", "led-lights", "led-strips"],
};

const existingRoutes = new Set([
  "/about",
  "/contact",
  "/clients",
  "/products",
  "/solutions",
  "/services",
  "/process",
  "/projects",
  "/brands",
]);

export function legacyRedirects(): Redirect[] {
  const redirects: Redirect[] = [];

  for (const [destination, slugs] of Object.entries(legacyPages)) {
    for (const slug of slugs) {
      redirects.push({
        source: `/${slug}.html`,
        destination,
        permanent: true,
      });
      if (!existingRoutes.has(`/${slug}`)) {
        redirects.push({ source: `/${slug}`, destination, permanent: true });
      }
    }
  }

  redirects.push(
    { source: "/products/solar-lights", destination: "/products/decor", permanent: true },
    { source: "/products/solar", destination: "/products/decor", permanent: true },
    { source: "/product-category/:slug", destination: "/products/:slug", permanent: true },
    { source: "/product/:path*", destination: "/products", permanent: true },
  );

  return redirects;
}
