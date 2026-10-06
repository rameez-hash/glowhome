const fs = require("fs");
const path = require("path");

const clients = [
  { name: "BYD", style: "wide" },
  { name: "Hyundai", style: "wide" },
  { name: "Sync Cafe", style: "serif" },
  { name: "The Eight Marquee", style: "serif" },
  { name: "ECS", style: "wide" },
  { name: "Zulfikar Paracha", style: "serif" },
  { name: "Agha Noor", style: "serif" },
  { name: "KFC", style: "wide" },
  { name: "SPLASH", style: "wide" },
  { name: "Perception", style: "serif" },
  { name: "Design and Depth", style: "serif" },
  { name: "YBM", style: "wide" },
  { name: "Contradiction", style: "serif" },
  { name: "Dhanak", style: "serif" },
  { name: "NOORS", style: "wide" },
  { name: "S Abdullah", style: "serif" },
  { name: "The Home", style: "serif" },
  { name: "Sheetal", style: "serif" },
  { name: "Next Street", style: "serif" },
  { name: "Emaar", style: "wide" },
  { name: "Signature Homes", style: "serif" },
  { name: "Identity Design Studio", style: "serif" },
  { name: "IHI Interiors", style: "serif" },
  { name: "Irtiqa Hassan", style: "serif" },
  { name: "Magnum Opus", style: "serif" },
  { name: "Steel Crete", style: "wide" },
  { name: "Gul Ahmed", style: "serif" },
  { name: "Grace Fabrics", style: "serif" },
  { name: "Shaffers", style: "serif" },
];

const outDir = path.join("d:/glow/public/media/clients/logos");
fs.mkdirSync(outDir, { recursive: true });

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function splitName(name) {
  if (name.length <= 14 || !name.includes(" ")) return [name];
  const parts = name.split(" ");
  if (parts.length === 2) return parts;
  const mid = Math.ceil(parts.length / 2);
  return [parts.slice(0, mid).join(" "), parts.slice(mid).join(" ")];
}

for (const client of clients) {
  const slug = slugify(client.name);
  const lines = splitName(client.name);
  const isWide = client.style === "wide";
  const font = isWide
    ? "Arial, Helvetica, sans-serif"
    : "Georgia, 'Times New Roman', serif";
  const tracking = isWide ? "4" : "1.5";
  const baseSize =
    lines[0].length <= 4
      ? 48
      : lines[0].length <= 8
        ? 34
        : lines[0].length <= 12
          ? 26
          : 20;
  const size = lines.length > 1 ? Math.max(18, baseSize - 4) : baseSize;
  const startY = lines.length > 1 ? 78 : 92;

  const text = lines
    .map((line, i) => {
      const display = isWide ? line.toUpperCase() : line;
      return `<text x="180" y="${startY + i * (size + 10)}" text-anchor="middle" fill="#F4F1EA" font-family="${font}" font-size="${size}" font-weight="${isWide ? 600 : 500}" letter-spacing="${tracking}">${escapeXml(display)}</text>`;
    })
    .join("\n  ");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="360" height="180" viewBox="0 0 360 180" role="img" aria-label="${escapeXml(client.name)}">
  <title>${escapeXml(client.name)}</title>
  <rect width="360" height="180" fill="none"/>
  <line x1="120" y1="148" x2="240" y2="148" stroke="#C4A46A" stroke-width="1" opacity="0.55"/>
  ${text}
</svg>
`;

  fs.writeFileSync(path.join(outDir, `${slug}.svg`), svg);
}

const data = clients.map((c) => ({
  name: c.name,
  slug: slugify(c.name),
  logo: `/media/clients/logos/${slugify(c.name)}.svg`,
}));

fs.writeFileSync(
  path.join("d:/glow/scripts/clients.json"),
  JSON.stringify(data, null, 2),
);
console.log(`Generated ${clients.length} logos`);
