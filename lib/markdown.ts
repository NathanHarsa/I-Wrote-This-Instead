import { readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export interface PoemMetadata {
  readonly title: string;
  readonly date: string;
  readonly published: boolean;
  readonly description?: string;
  readonly excerpt?: string;
  readonly tags?: readonly string[];
  readonly readingTime?: string;
  readonly featured?: boolean;
}

export interface Poem {
  readonly title: string;
  readonly slug: string;
  readonly date: string;
  readonly content: string;
  readonly html: string;
  readonly published: boolean;
  readonly description?: string;
  readonly excerpt?: string;
  readonly tags?: readonly string[];
  readonly readingTime?: string;
  readonly featured?: boolean;
}

const POEMS_DIRECTORY = join(process.cwd(), "poems");

/**
 * Read a markdown file and parse its frontmatter and content
 */
export async function parseMarkdownFile(
  filePath: string
): Promise<{ data: PoemMetadata; content: string; html: string }> {
  const fileContents = readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const html = await renderMarkdown(content);

  return {
    data: data as PoemMetadata,
    content,
    html,
  };
}

/**
 * Render markdown content to HTML
 */
export async function renderMarkdown(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
}

/**
 * Get the slug from a filename (remove .md extension)
 */
export function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, "");
}

/**
 * Get the poems directory path
 */
export function getPoemsDirectory(): string {
  return POEMS_DIRECTORY;
}
