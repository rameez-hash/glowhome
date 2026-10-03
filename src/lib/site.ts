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
    region: "Punjab",
  },
  tagline: "Intelligent lighting. Seamless automation.",
  description:
    "Glow Home is a leading smart home automation and lighting solutions provider offering premium lighting, smart switches, sensors, home automation systems, decorative lighting, architectural lighting, and energy-efficient solutions for homes, offices, and commercial spaces.",
  longDescription:
    "Glow Home is a leading smart home automation and lighting solutions provider offering premium lighting, smart switches, sensors, home automation systems, decorative lighting, architectural lighting, and energy-efficient solutions for homes, offices, and commercial spaces. We help clients create modern, intelligent, and beautifully illuminated environments with customized smart living solutions. From luxury residences to commercial projects, our team provides expert consultation, quality products, professional support, and seamless integration. Visit Glow Home for innovative lighting designs, smart home technology, and complete automation solutions that enhance comfort, convenience, security, and lifestyle.",
  keywords: [
    "Glow Home",
    "smart home automation Pakistan",
    "premium lighting solutions",
    "architectural lighting",
    "decorative lighting",
    "smart switches",
    "home automation systems",
    "energy efficient lighting",
    "smart sensors",
    "luxury lighting Pakistan",
    "commercial lighting",
    "smart living solutions",
    "glowhome.com.pk",
  ],
  social: {
    facebook: "https://www.facebook.com/glowhome",
    instagram: "https://www.instagram.com/glowhome",
  },
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#solutions", label: "Solutions" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

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
    copy: "Bespoke smart living for villas and premium homes — layered light, quiet automation, refined control.",
    image: "/media/glow-home-luxury-living-room-lighting.png",
    video: "/media/glow-home-lighting-showreel.mp4",
  },
  {
    title: "Offices & Workspaces",
    copy: "Circadian-aware lighting and centralized control that support focus, wellbeing, and operational efficiency.",
    image: "/media/glow-home-interior-lighting-design.png",
    video: "/media/glow-home-smart-switch-demo.mp4",
  },
  {
    title: "Commercial Spaces",
    copy: "Showrooms, hospitality, and retail environments illuminated for brand presence and visitor experience.",
    image: "/media/glow-home-abstract-decor-lighting.jpg",
    video: "/media/glow-home-lighting-showreel.mp4",
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
      poster: "/media/glow-home-luxury-living-room-lighting.png",
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

export const products = [
  {
    title: "Premium Lighting",
    image: "/media/glow-home-premium-decorative-lighting.jpg",
    alt: "Premium decorative lighting by Glow Home",
  },
  {
    title: "Smart Switches",
    image: "/media/glow-home-smart-switch-panel.png",
    alt: "Glow Home smart switch panel for home automation",
  },
  {
    title: "Designer Fixtures",
    image: "/media/glow-home-designer-light-fixture.jpg",
    alt: "Designer lighting fixture collection by Glow Home",
  },
  {
    title: "Control Systems",
    image: "/media/glow-home-home-automation-control.png",
    alt: "Glow Home smart home automation control system",
  },
  {
    title: "Architectural Pieces",
    image: "/media/glow-home-architectural-lighting-piece.jpg",
    alt: "Architectural lighting installation by Glow Home",
  },
  {
    title: "Sensor Technology",
    image: "/media/glow-home-smart-sensor-switch.png",
    alt: "Glow Home smart sensors for lighting automation",
  },
] as const;

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

export const faqs = [
  {
    question: "What services does Glow Home provide?",
    answer:
      "Glow Home provides smart home automation, premium lighting, smart switches, sensors, decorative lighting, architectural lighting, and energy-efficient solutions for homes, offices, and commercial spaces.",
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
