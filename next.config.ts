import type { NextConfig } from "next";
import { legacyRedirects } from "./redirects";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    // Fewer width buckets → higher CDN cache hits for gallery thumbs.
    deviceSizes: [640, 828, 1200],
    imageSizes: [128, 256, 384],
    qualities: [70, 75],
    minimumCacheTTL: 2678400,
  },
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return legacyRedirects();
  },
  async headers() {
    return [
      {
        source: "/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/llms.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
