import type { MetadataRoute } from "next";

import { getPublishedPoems } from "@/lib/poems";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const poems = await getPublishedPoems();

  const staticPages: MetadataRoute.Sitemap = ["", "/poems", "/about"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
    })
  );

  const poemPages: MetadataRoute.Sitemap = poems.map((poem) => ({
    url: `${siteConfig.url}/poems/${poem.slug}`,
    lastModified: new Date(poem.date),
  }));

  return [...staticPages, ...poemPages];
}
