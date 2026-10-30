import type { MetadataRoute } from "next";
import { allArticles } from "@/lib/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://loveishuman.pages.dev";
  const pages = [
    "",
    "explore",
    "articles",
    "feelings",
    "myths",
    "relationships",
    "about",
    "sources",
    "get-help",
    "privacy",
    "terms",
    "contact",
  ];
  return [
    ...pages.map((path) => ({
      url: `${base}/${path}`,
      lastModified: new Date("2026-10-30"),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...allArticles.map((a) => ({
      url: `${base}/articles/${a.slug}`,
      lastModified: new Date("2026-10-30"),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
