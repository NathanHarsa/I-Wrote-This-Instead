import { readdirSync } from "fs";
import { join } from "path";
import {
  parseMarkdownFile,
  getSlugFromFilename,
  getPoemsDirectory,
  type Poem,
} from "./markdown";

/**
 * Get all poems (published and unpublished)
 */
export async function getAllPoems(): Promise<Poem[]> {
  const poemsDirectory = getPoemsDirectory();
  const fileNames = readdirSync(poemsDirectory).filter((name) =>
    name.endsWith(".md")
  );

  const poems = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = getSlugFromFilename(fileName);
      const filePath = join(poemsDirectory, fileName);
      const { data, content, html } = await parseMarkdownFile(filePath);

      return {
        title: data.title,
        slug,
        date: data.date,
        content,
        html,
        published: data.published,
        description: data.description,
        excerpt: data.excerpt,
        tags: data.tags,
        readingTime: data.readingTime,
        featured: data.featured,
      } as Poem;
    })
  );

  return sortPoemsByDate(poems);
}

/**
 * Get only published poems
 */
export async function getPublishedPoems(): Promise<Poem[]> {
  const allPoems = await getAllPoems();
  return allPoems.filter((poem) => poem.published);
}

/**
 * Get a single poem by slug
 */
export async function getPoemBySlug(slug: string): Promise<Poem | null> {
  const allPoems = await getAllPoems();
  return allPoems.find((poem) => poem.slug === slug) || null;
}

/**
 * Get adjacent poems (previous and next) for navigation
 */
export async function getAdjacentPoems(
  slug: string
): Promise<{ prev: Poem | null; next: Poem | null }> {
  const publishedPoems = await getPublishedPoems();
  const currentIndex = publishedPoems.findIndex((poem) => poem.slug === slug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? publishedPoems[currentIndex - 1] : null,
    next:
      currentIndex < publishedPoems.length - 1
        ? publishedPoems[currentIndex + 1]
        : null,
  };
}

/**
 * Sort poems by date (newest first)
 */
function sortPoemsByDate(poems: Poem[]): Poem[] {
  return [...poems].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
