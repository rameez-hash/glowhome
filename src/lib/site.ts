export const siteConfig = {
  name: "Glow Home",
  legalName: "Glow Home",
  domain: "https://www.glowhome.com.pk",
  url: "https://www.glowhome.com.pk",
  email: "info@glowhome.com.pk",
  phones: ["+92 321 8208116", "+92 300 2808116"],
  phoneRaw: ["+923218208116", "+923002808116"],
  locale: "en_PK",
  location: {
    country: "Pakistan",
    region: "Karachi",
    address:
      "No 92-C, Lane 1, D.H.A. Phase 8 Zulfiqar & Al Murtaza Commercial Area, Phase 8 DHA, Karachi",
  },
  locations: [
    {
      label: "DHA Phase 8",
      address:
        "No 92-C, Lane 1, D.H.A. Phase 8 Zulfiqar & Al Murtaza Commercial Area, Phase 8 DHA, Karachi",
      mapUrl:
        "https://www.google.com/maps/place/Glow+Home/data=!4m2!3m1!1s0x0:0xce3d438957dba788",
      embedUrl:
        "https://maps.google.com/maps?cid=14861108602556098440&z=16&output=embed",
    },
    {
      label: "Clifton",
      address: "Shop No.3/4 Parsa Classic, Block 9 Clifton, Karachi, 75600",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Shop+No.3%2F4+Parsa+Classic+Block+9+Clifton+Karachi+75600",
      embedUrl:
        "https://maps.google.com/maps?q=Shop+No.3%2F4+Parsa+Classic+Block+9+Clifton+Karachi+75600&z=16&output=embed",
    },
  ],
  tagline: "Beautiful light. Effortless control.",
  description:
    "Glow Home is a premium lighting store and showroom in Pakistan for chandeliers, pendant lights, ceiling lights, wall lights, LED downlights, spotlights, track lights, LED strips, floor lamps, table lamps, outdoor lights and smart lighting for homes, offices and commercial spaces.",
  longDescription:
    "Glow Home is a premium lighting store and showroom in Pakistan offering modern, luxury and decorative lights: chandeliers, pendant and hanging lights, LED ceiling lights, wall lights and sconces, LED downlights, ceiling spotlights, track and magnetic track lights, linear lights, LED strip lights and profiles, floor lamps, table lamps, outdoor and garden lights, smart lighting, commercial lighting and architectural lighting. From luxury residences to offices, retail, restaurants and hotels, our team provides expert lighting consultation, quality fixtures, smart switches and sensors, and seamless installation for clients in Karachi, Lahore, Islamabad and across Pakistan.",
  social: {
    facebook: "https://www.facebook.com/GlowLightsPk/",
    instagram: "https://www.instagram.com/glowlightspk/",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/clients", label: "Client" },
  { href: "/brands", label: "Brand" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
] as const;

export const brands = [
  {
    slug: "fiam",
    name: "FIAM",
    focus: "Commercial lighting",
    summary:
      "Commercial lighting fixtures for offices, retail, hospitality, and public spaces, performance-led luminaires with clear project specs.",
  },
  {
    slug: "macy",
    name: "MACY",
    focus: "Decorative indoor lighting",
    summary:
      "Decorative indoor lighting for homes and boutique interiors, pendants, chandeliers, and ambient pieces with refined presence.",
  },
] as const;

export type Brand = (typeof brands)[number];

export const services = [
  {
    id: "smart-automation",
    title: "Smart Home Automation",
    description:
      "Complete automation systems that unify lighting, climate, security, and scenes into one intelligent living experience.",
    keywords: ["home automation", "smart living", "scene control"],
  },
  {
    id: "architectural-lighting",
    title: "Architectural Lighting",
    description:
      "Precision lighting design that shapes space, depth, and atmosphere for residences and commercial interiors.",
    keywords: ["architectural lighting", "interior illumination"],
  },
  {
    id: "decorative-lighting",
    title: "Decorative Lighting",
    description:
      "Statement fixtures and curated décor lighting that elevate interiors with craft, material, and form.",
    keywords: ["decorative lighting", "luxury fixtures"],
  },
  {
    id: "smart-switches",
    title: "Smart Switches & Sensors",
    description:
      "Responsive switches, motion sensors, and presence detection engineered for comfort, safety, and efficiency.",
    keywords: ["smart switches", "sensors", "energy control"],
  },
  {
    id: "commercial",
    title: "Commercial Solutions",
    description:
      "Scalable lighting and automation for offices, hospitality, retail, and large-scale commercial projects.",
    keywords: ["commercial lighting", "office automation"],
  },
  {
    id: "energy",
    title: "Energy-Efficient Systems",
    description:
      "LED-first designs and intelligent controls that reduce consumption without compromising visual quality.",
    keywords: ["energy efficient lighting", "LED solutions"],
  },
] as const;

export const solutions = [
  {
    title: "Luxury Residences",
    copy: "Bespoke smart living for villas and premium homes, layered light, quiet automation, refined control.",
    image: "/media/glow-home-solution-luxury-residence.jpg",
  },
  {
    title: "Offices & Workspaces",
    copy: "Circadian-aware lighting and centralized control that support focus, wellbeing, and operational efficiency.",
    image: "/media/glow-home-solution-office-workspace.jpg",
  },
  {
    title: "Commercial Spaces",
    copy: "Showrooms, hospitality, and retail environments illuminated for brand presence and visitor experience.",
    image: "/media/glow-home-solution-commercial-space.jpg",
  },
] as const;

export const heroVideos = [
  {
    title: "Masterpiece ceilings",
    src: "/media/glow-home-modern-chandelier-ceiling.mp4",
    poster: "/media/glow-home-premium-decorative-lighting.jpg",
  },
  {
    title: "Statement light",
    src: "/media/glow-home-statement-chandelier.mp4",
    poster: "/media/glow-home-abstract-decor-lighting.jpg",
  },
  {
    title: "Golden elegance",
    src: "/media/glow-home-luxury-architectural-lighting.mp4",
    poster: "/media/glow-home-designer-light-fixture.jpg",
  },
] as const;

export const sectionVideos = {
  solutions: [
    {
      title: "Luxury Residences",
      subtitle: "Smart living",
      src: "/media/glow-home-lighting-showreel.mp4",
      poster: "/media/glow-home-solution-luxury-residence.jpg",
    },
    {
      title: "Product Systems",
      subtitle: "Switches & control",
      src: "/media/glow-home-smart-switch-demo.mp4",
      poster: "/media/glow-home-smart-switch-panel.png",
    },
    {
      title: "Commercial Light",
      subtitle: "Architectural",
      src: "/media/glow-home-lighting-showreel.mp4",
      poster: "/media/glow-home-abstract-decor-lighting.jpg",
    },
  ],
  products: [
    {
      title: "Premium Lighting",
      subtitle: "Fixtures",
      src: "/media/glow-home-lighting-showreel.mp4",
      poster: "/media/glow-home-premium-decorative-lighting.jpg",
    },
    {
      title: "Smart Controls",
      subtitle: "Automation",
      src: "/media/glow-home-smart-switch-demo.mp4",
      poster: "/media/glow-home-home-automation-control.png",
    },
    {
      title: "Designer Atmospheres",
      subtitle: "Interiors",
      src: "/media/glow-home-lighting-showreel.mp4",
      poster: "/media/glow-home-designer-light-fixture.jpg",
    },
  ],
  projects: [
    {
      title: "Residence Walkthrough",
      subtitle: "Luxury living",
      src: "/media/glow-home-lighting-showreel.mp4",
      poster: "/media/glow-home-private-residence-lighting.jpg",
    },
    {
      title: "Switch Experience",
      subtitle: "Smart home",
      src: "/media/glow-home-smart-switch-demo.mp4",
      poster: "/media/glow-home-gallery-interior-lighting.jpg",
    },
    {
      title: "Showroom Mood",
      subtitle: "Commercial",
      src: "/media/glow-home-lighting-showreel.mp4",
      poster: "/media/glow-home-architectural-material-lighting.jpg",
    },
  ],
} as const;

export const productCategories = [
  {
    slug: "ceiling-lights",
    title: "Ceiling Lights",
    summary:
      "Flush and semi-flush ceiling fixtures that deliver clean ambient light for bedrooms, corridors, and everyday living spaces.",
    image: "/media/products/ceiling-lights-v3.jpg",
    images: [
      "/media/products/ceiling-lights-v3.jpg",
      "/media/products/ceiling-lights-v2.jpg",
      "/media/products/ceiling-lights.jpg",
    ],
    highlights: [
      "Soft ambient coverage that keeps bedrooms, corridors, and living areas evenly lit for everyday comfort.",
      "Modern finishes and proportions chosen to sit cleanly in residential interiors without visual clutter.",
      "Works with smart dimming and scene control so brightness can shift from day to evening with ease.",
    ],
  },
  {
    slug: "pendant-lights",
    title: "Pendant Lights",
    summary:
      "Statement pendants for islands, dining tables, and feature zones, sculptural form with purposeful illumination.",
    image: "/media/products/pendant-lights-v2.jpg",
    images: [
      "/media/products/pendant-lights-v2.jpg",
      "/media/products/pendant-lights.jpg",
    ],
    highlights: [
      "Creates a clear focal point above dining tables, kitchen islands, and feature seating zones.",
      "Height and scale options help layer light without overwhelming the architecture of the room.",
      "Designer silhouettes with warm, purposeful output that elevates both form and atmosphere.",
    ],
  },
  {
    slug: "wall-lights",
    title: "Wall Lights",
    summary:
      "Sconces and wall fixtures that add depth, accent, and guidance along hallways, staircases, and feature walls.",
    image: "/media/products/wall-lights-v2.jpg",
    images: [
      "/media/products/wall-lights-v2.jpg",
      "/media/products/wall-lights.jpg",
    ],
    highlights: [
      "Adds accent and pathway light along corridors, stairs, and feature walls with quiet presence.",
      "Elegant profiles that guide movement while deepening texture and shadow on vertical surfaces.",
      "Warm ambience that supports ceiling light without crowding the room with visual noise.",
    ],
  },
  {
    slug: "ceiling-spotlights",
    title: "Ceiling Spotlights",
    summary:
      "Directed ceiling spots for art, shelving, and task zones, precise beams with architectural clarity.",
    image: "/media/products/ceiling-spotlights-v2.jpg",
    images: [
      "/media/products/ceiling-spotlights-v2.jpg",
      "/media/products/ceiling-spotlights.jpg",
    ],
    highlights: [
      "Adjustable beams highlight art, shelving, and display moments with precise control.",
      "Delivers crisp task light exactly where you need clarity, worktops, niches, and reading zones.",
      "Keeps ceiling lines clean and architectural while remaining flexible as layouts evolve.",
    ],
  },
  {
    slug: "floor-lamps",
    title: "Floor Lamps",
    summary:
      "Freestanding floor lamps that shape lounge corners and reading nooks with portable, layered light.",
    image: "/media/products/floor-lamps-v2.jpg",
    images: [
      "/media/products/floor-lamps-v2.jpg",
      "/media/products/floor-lamps.jpg",
    ],
    highlights: [
      "Flexible lounge and reading light you can place where the room needs warmth and focus.",
      "Sculptural presence that completes living rooms and corners without fixed ceiling work.",
      "Layers easily with overhead fixtures for a balanced day-to-evening lighting scheme.",
    ],
  },
  {
    slug: "table-lamps",
    title: "Table Lamps",
    summary:
      "Table lamps for bedside, desks, and consoles, intimate glow that completes a room’s atmosphere.",
    image: "/media/products/table-lamps-v2.jpg",
    images: [
      "/media/products/table-lamps-v2.jpg",
      "/media/products/table-lamps.jpg",
    ],
    highlights: [
      "Intimate glow for bedside tables, desks, and consoles where soft local light matters most.",
      "Decorative evening ambience that makes rooms feel finished, calm, and lived-in.",
      "Finishes curated to complement furniture, fabrics, and the wider interior palette.",
    ],
  },
  {
    slug: "chandeliers",
    title: "Chandeliers",
    summary:
      "Statement chandeliers for double-height foyers, dining halls, and luxury residences, presence with polish.",
    image: "/media/products/chandeliers-v2.jpg",
    images: [
      "/media/products/chandeliers-v2.jpg",
      "/media/products/chandeliers.jpg",
    ],
    highlights: [
      "Hero pieces designed for double-height foyers, dining halls, and luxury residences.",
      "Crystal, glass, and modern metal options to match both classic and contemporary interiors.",
      "Balanced scale and presence so the fixture commands attention without overwhelming the space.",
    ],
  },
  {
    slug: "downlights",
    title: "Downlights",
    summary:
      "Recessed downlights for seamless ceilings, even coverage with a refined, minimal architectural look.",
    image: "/media/products/downlights-v2.jpg",
    images: [
      "/media/products/downlights-v2.jpg",
      "/media/products/downlights.jpg",
    ],
    highlights: [
      "Recessed sources stay visually quiet while delivering refined, high-quality illumination.",
      "Even coverage across rooms for a calm, continuous light field in modern interiors.",
      "Ideal for false ceilings where clean architecture and minimal fixture presence are essential.",
    ],
  },
  {
    slug: "track-lighting",
    title: "Track Lighting",
    summary:
      "Track systems for galleries, retail, and flexible interiors, aimable heads that adapt as spaces change.",
    image: "/media/products/track-lighting-v2.jpg",
    images: [
      "/media/products/track-lighting-v2.jpg",
      "/media/products/track-lighting.jpg",
    ],
    highlights: [
      "Aimable heads adapt easily for galleries, retail displays, and changing interior layouts.",
      "Modular tracks and heads let you reposition light as products, art, or furniture move.",
      "Strong visibility for merchandise and displays without locking the space into a fixed plan.",
    ],
  },
  {
    slug: "lamp-shades",
    title: "Lamp Shades",
    summary:
      "Curated shades that soften glare and refine fixture character, texture, tone, and proportion considered.",
    image: "/media/products/lamp-shades-v2.jpg",
    images: [
      "/media/products/lamp-shades-v2.jpg",
      "/media/products/lamp-shades.jpg",
    ],
    highlights: [
      "Soft diffusion that reduces glare and makes lamp light more comfortable for evening use.",
      "Materials and tones chosen to elevate fixture character and match interior finishes.",
      "An easy refresh for existing lamps when you want a new mood without replacing the base.",
    ],
  },
  {
    slug: "led-strips",
    title: "LED Strips",
    summary:
      "Linear LED strips for coves, niches, stairs, and under-cabinet glow, continuous light with smart control.",
    image: "/media/products/led-strips-v2.jpg",
    images: [
      "/media/products/led-strips-v2.jpg",
      "/media/products/led-strips.jpg",
    ],
    highlights: [
      "Continuous lines for coves, niches, stairs, and under-cabinet glow with refined detailing.",
      "Subtle architectural drama that traces edges and volumes without visible fixture bulk.",
      "Dimmer and scene-ready options for smooth transitions from practical to atmospheric light.",
    ],
  },
  {
    slug: "decor",
    title: "Decor",
    summary:
      "Elevate your space with pieces that make every corner feel special, curated décor accents styled with light.",
    image: "/media/products/decor.jpg",
    images: [
      "/media/products/decor-01.jpg",
      "/media/products/decor-02.jpg",
      "/media/products/decor-03.jpg",
      "/media/products/decor-04.jpg",
      "/media/products/decor-05.jpg",
      "/media/products/decor-06.jpg",
    ],
    highlights: [
      "Accent décor for living and dining spaces, vessels, candles, and details that complete the room.",
      "Pieces styled to sit naturally with ambient lighting so every corner feels considered and warm.",
      "Finished looks for modern interiors where light and décor work together as one composition.",
    ],
  },
] as const;

export type ProductCategory = (typeof productCategories)[number];

export function getProductCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductCategoryImages(category: ProductCategory) {
  return [...category.images];
}

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We study your space, lifestyle, and goals to define the right lighting and automation strategy.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Our team crafts layouts, fixture selections, and control logic tailored to architecture and use.",
  },
  {
    step: "03",
    title: "Integration",
    description:
      "Professional installation and seamless system integration across lighting, switches, and sensors.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "Ongoing guidance, tuning, and support so your smart environment performs beautifully every day.",
  },
] as const;

export const projects = [
  {
    title: "Private Residence",
    category: "Luxury Living",
    image: "/media/glow-home-private-residence-lighting.jpg",
  },
  {
    title: "Gallery Interior",
    category: "Decorative Light",
    image: "/media/glow-home-gallery-interior-lighting.jpg",
  },
  {
    title: "Material Study",
    category: "Architectural",
    image: "/media/glow-home-architectural-material-lighting.jpg",
  },
  {
    title: "Ambient Suite",
    category: "Smart Home",
    image: "/media/glow-home-ambient-smart-home-lighting.jpg",
  },
  {
    title: "Feature Lighting",
    category: "Commercial",
    image: "/media/glow-home-commercial-feature-lighting.jpg",
  },
  {
    title: "Curated Décor",
    category: "Lifestyle",
    image: "/media/glow-home-curated-decor-lighting.jpg",
  },
] as const;

function clientSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const clients = [
  {
    name: "BYD",
    logo: "/media/clients/logos/byd.jpg",
    category: "Automotive",
    summary:
      "Premium lighting support for BYD showrooms and brand environments, clean illumination that elevates product presence and visitor experience.",
  },
  {
    name: "Hyundai",
    logo: "/media/clients/logos/hyundai.jpg",
    category: "Automotive",
    summary:
      "Showroom and retail lighting systems designed for clarity, brand consistency, and a refined customer journey.",
  },
  {
    name: "Sync Cafe",
    logo: "/media/clients/logos/sync-cafe.jpg",
    category: "Hospitality",
    summary:
      "Warm, layered cafe lighting that shapes atmosphere, comfort, and evening ambience for guests.",
  },
  {
    name: "The Eight Marquee",
    logo: "/media/clients/logos/the-eight-marquee.jpg",
    category: "Events",
    summary:
      "Event and marquee illumination planned for presence, celebration, and memorable guest experiences.",
  },
  {
    name: "ECS",
    logo: "/media/clients/logos/ecs.jpg",
    category: "Commercial",
    summary:
      "Reliable commercial lighting solutions that support operations, brand identity, and everyday performance.",
  },
  {
    name: "Zulfikar Paracha",
    logo: "/media/clients/logos/zulfikar-paracha.jpg",
    category: "Fashion",
    summary:
      "Boutique and fashion-space lighting that highlights texture, form, and the craft of each collection.",
  },
  {
    name: "Agha Noor",
    logo: "/media/clients/logos/agha-noor.jpg",
    category: "Fashion",
    summary:
      "Elegant retail lighting for Agha Noor, balanced brightness and mood that complements couture displays.",
  },
  {
    name: "KFC",
    logo: "/media/clients/logos/kfc.jpg",
    category: "Hospitality",
    summary:
      "Consistent, high-visibility lighting for F&B environments that stay bright, welcoming, and on-brand.",
  },
  {
    name: "SPLASH",
    logo: "/media/clients/logos/splash.jpg",
    category: "Retail",
    summary:
      "Retail lighting designed to make product color, finish, and detail stand out across the store floor.",
  },
  {
    name: "Perception",
    logo: "/media/clients/logos/perception.jpg",
    category: "Architecture",
    summary:
      "Architectural lighting collaboration focused on perception, material, and spatial storytelling.",
  },
  {
    name: "Design and Depth",
    logo: "/media/clients/logos/design-and-depth.jpg",
    category: "Design",
    summary:
      "Design-led lighting for interiors where depth, shadow, and atmosphere define the space.",
  },
  {
    name: "YBM",
    logo: "/media/clients/logos/ybm.jpg",
    category: "Interiors",
    summary:
      "Interior lighting support for YBM, refined fixtures and control that complete a polished room.",
  },
  {
    name: "Contradiction",
    logo: "/media/clients/logos/contradiction.jpg",
    category: "Furniture",
    summary:
      "Showroom lighting that lets furniture materials, silhouettes, and finishes speak clearly.",
  },
  {
    name: "Dhanak",
    logo: "/media/clients/logos/dhanak.jpg",
    category: "Fashion",
    summary:
      "Fashion retail lighting tuned for fabric color accuracy and an inviting shopping mood.",
  },
  {
    name: "NOORS",
    logo: "/media/clients/logos/noors.jpg",
    category: "Lifestyle",
    summary:
      "Lifestyle brand lighting that feels soft, intentional, and true to the NOORS identity.",
  },
  {
    name: "S Abdullah",
    logo: "/media/clients/logos/s-abdullah.jpg",
    category: "Home",
    summary:
      "Home and living retail lighting that makes furniture and décor feel warm and aspirational.",
  },
  {
    name: "The Home",
    logo: "/media/clients/logos/the-home.jpg",
    category: "Home",
    summary:
      "Residential-retail lighting concepts that bring comfort, clarity, and lifestyle presence together.",
  },
  {
    name: "Next Street",
    logo: "/media/clients/logos/next-street.jpg",
    category: "Development",
    summary:
      "Project lighting for Next Street developments, practical performance with a premium finish.",
  },
  {
    name: "Emaar",
    logo: "/media/clients/logos/emaar.jpg",
    category: "Real Estate",
    summary:
      "Real-estate and sales-gallery lighting aligned with Emaar’s luxury presentation standards.",
  },
  {
    name: "Signature Homes",
    logo: "/media/clients/logos/signature-homes.jpg",
    category: "Real Estate",
    summary:
      "Signature Homes lighting for residences and galleries that need quiet luxury and strong first impressions.",
  },
  {
    name: "Irtiqa Hassan",
    logo: "/media/clients/logos/irtiqa-hassan.jpg",
    category: "Architecture",
    summary:
      "Architecture-forward lighting that respects form, proportion, and Irtiqa Hassan’s design language.",
  },
  {
    name: "Magnum Opus",
    logo: "/media/clients/logos/magnum-opus.jpg",
    category: "Design",
    summary:
      "Curated lighting for Magnum Opus projects where every detail is intentional and elevated.",
  },
  {
    name: "Gul Ahmed",
    logo: "/media/clients/logos/gul-ahmed.jpg",
    category: "Fashion",
    summary:
      "Retail lighting for Gul Ahmed spaces, crisp product visibility with a polished brand feel.",
  },
  {
    name: "Grace Fabrics",
    logo: "/media/clients/logos/grace-fabrics.jpg",
    category: "Textiles",
    summary:
      "Fabric and textile lighting that reveals texture, weave, and color with accuracy and warmth.",
  },
  {
    name: "Shaffers",
    logo: "/media/clients/logos/shaffers.jpg",
    category: "Lifestyle",
    summary:
      "Clean, refined lighting for Shaffers brand environments with a calm premium character.",
  },
  {
    name: "Amir Adnan",
    logo: "/media/clients/logos/amir-adnan.jpg",
    category: "Fashion",
    summary:
      "Fashion-house lighting that supports silhouette, fabric, and the craftsmanship of Amir Adnan.",
  },
  {
    name: "Hobnob",
    logo: "/media/clients/logos/hobnob.jpg",
    category: "Hospitality",
    summary:
      "Cafe and bakery lighting that feels inviting, appetizing, and true to Hobnob’s lively brand.",
  },
  {
    name: "CR&S",
    logo: "/media/clients/logos/crs.jpg",
    category: "Commercial",
    summary:
      "Commercial lighting partnership focused on durable performance and clear visual identity.",
  },
  {
    name: "Hashkeel",
    logo: "/media/clients/logos/hashkeel.jpg",
    category: "Design",
    summary:
      "Design-led lighting with a calligraphic sense of craft, balanced, expressive, and precise.",
  },
  {
    name: "D&L",
    logo: "/media/clients/logos/dl.jpg",
    category: "Design",
    summary:
      "D&L project lighting that pairs material richness with controlled, architectural illumination.",
  },
].map((client) => ({
  ...client,
  slug: clientSlug(client.name),
}));

export type Client = (typeof clients)[number];

export function getClientBySlug(slug: string) {
  return clients.find((client) => client.slug === slug);
}

export const aboutStory = {
  established: "Founded in 2016 · Glow Home by FIAM",
  lead: 'At Glow Home, modern design doesn\'t mean limited design, our philosophy is to provide our customers with "light for living."',
  body: [
    "Lighting is one of the easiest, quickest, and most reasonable ways to brighten a space and add comfort to your interiors. We pride ourselves in being a lighting solutions provider by offering a broad line of innovative, high-quality lighting products.",
    "Walk into our store and you'll find countless options, from the hottest new styles to perennial favourites, across price ranges that fit your lifestyle and budget. We strive to be your first choice for high-quality home décor, lighting, and design products, making great design accessible whether you want something classic and timeless or fresh and bold.",
    "Allow us to elevate your space with uplifting luxury lighting from around the world, ceiling lights, wall lights, pendants, chandeliers, outdoor lighting, commercial fixtures, and contemporary designer pieces, now also paired with smart living and seamless integration.",
  ],
  highlights: [
    {
      value: "Smart + Design",
      label: "Automation with architectural craft",
      icon: "design",
    },
    {
      value: "End-to-end",
      label: "Consultation through installation",
      icon: "process",
    },
    {
      value: "Multi-space",
      label: "Homes, offices, commercial projects",
      icon: "spaces",
    },
  ],
  pillars: [
    {
      title: "Residential Living",
      copy: "Layered lighting and quiet automation for villas and premium homes, scenes, comfort, and atmosphere tailored to daily life.",
      image: "/media/about-residential-living.jpg",
    },
    {
      title: "Commercial Environments",
      copy: "Offices, retail, and hospitality spaces illuminated for brand presence, visitor experience, and operational efficiency.",
      image: "/media/about-commercial-environments.jpg",
    },
    {
      title: "Intelligent Control",
      copy: "Smart switches, sensors, and control systems that unify lighting into one seamless, energy-aware experience.",
      image: "/media/about-intelligent-control.jpg",
    },
  ],
  values: [
    {
      title: "Light for living",
      copy: "Our philosophy is simple, lighting should feel beautiful, practical, and true to how you live, not limited by trends alone.",
    },
    {
      title: "Wide selection",
      copy: "From classic and timeless to fresh and bold, we offer a broad range of products at varying price points so there is something for everyone.",
    },
    {
      title: "Expert guidance",
      copy: "Advice on sizes, designs, light output, and fitting, so every choice works for your space, style, and budget.",
    },
    {
      title: "Luxury made easier",
      copy: "We elevate interiors with uplifting luxury lighting and thoughtful design products, delivered with friendly, knowledgeable service.",
    },
  ],
} as const;

export const faqs = [
  {
    question: "What services does Glow Home provide?",
    answer:
      "Glow Home provides premium lighting, smart home automation, smart switches, sensors, decorative lighting, architectural lighting, and energy-efficient LED solutions for homes, offices, and commercial spaces.",
  },
  {
    question: "What types of lights can I buy from Glow Home?",
    answer:
      "Glow Home offers chandeliers, pendant and hanging lights, LED ceiling lights, wall lights and sconces, LED downlights, ceiling spotlights, track and magnetic track lights, LED strip lights and profiles, floor lamps, table lamps, lamp shades, decorative lighting and home décor.",
  },
  {
    question: "Where is the Glow Home lighting showroom?",
    answer:
      "Glow Home has showrooms at No 92-C, Lane 1, Zulfiqar & Al Murtaza Commercial Area, DHA Phase 8, Karachi, and Shop No.3/4 Parsa Classic, Block 9 Clifton, Karachi. Call +92 321 8208116. The team also supports lighting projects across Pakistan, including Lahore and Islamabad.",
  },
  {
    question: "Which lighting brands does Glow Home carry?",
    answer:
      "Glow Home works with FIAM for commercial lighting and MACY for decorative indoor lighting.",
  },
  {
    question: "Does Glow Home provide commercial and office lighting?",
    answer:
      "Yes. Glow Home supplies office lights, linear LED lights, track lighting, magnetic track systems, panel lights and downlights for offices, retail shops, showrooms, restaurants, cafes and hotels.",
  },
  {
    question: "Does Glow Home offer customized smart living solutions?",
    answer:
      "Yes. Every project begins with consultation and is designed around your architecture, lifestyle, and automation goals for a fully customized smart living experience.",
  },
  {
    question: "Can Glow Home handle both residential and commercial projects?",
    answer:
      "Absolutely. We deliver solutions for luxury residences, offices, hospitality, retail, and larger commercial environments with professional installation and support.",
  },
  {
    question: "How do smart switches and sensors improve a home?",
    answer:
      "Smart switches and sensors enable automated scenes, occupancy-based lighting, improved security awareness, and lower energy use while increasing everyday comfort and convenience.",
  },
  {
    question: "How can I start a project with Glow Home?",
    answer:
      "Contact us by phone or through the website form. We will schedule a consultation, review your requirements, and propose a tailored lighting and automation plan.",
  },
] as const;
