import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Google-Extended",
  "anthropic-ai",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot-Extended",
  "Bingbot",
  "meta-externalagent",
  "Amazonbot",
  "DuckAssistBot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
