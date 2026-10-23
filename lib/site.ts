/**
 * Site-wide configuration used for metadata, the sitemap and robots.txt.
 *
 * The production URL comes from NEXT_PUBLIC_SITE_URL when set, then from
 * Vercel's production domain, and finally falls back to localhost.
 */
function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return "http://localhost:3000";
}

export const siteConfig = {
  name: "I Wrote This Instead",
  description: "A minimalist poetry archive.",
  author: "Nathan",
  url: getSiteUrl(),
} as const;

/**
 * Open Graph fields shared by every page. Next.js replaces the layout's
 * openGraph object when a page sets its own, so pages spread these in.
 */
export const baseOpenGraph = {
  siteName: siteConfig.name,
  locale: "en_US",
  type: "website",
} as const;
