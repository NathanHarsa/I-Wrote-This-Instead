import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { BackButton } from "@/components/BackButton";
import { PreviousNext } from "@/components/PreviousNext";
import { getPublishedPoems, getPoemBySlug, getAdjacentPoems } from "@/lib/poems";
import { baseOpenGraph, siteConfig } from "@/lib/site";

import styles from "./page.module.css";

interface PoemPageProps {
  readonly params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const poems = await getPublishedPoems();
  return poems.map((poem) => ({
    slug: poem.slug,
  }));
}

export async function generateMetadata({
  params,
}: PoemPageProps): Promise<Metadata> {
  const { slug } = await params;
  const poem = await getPoemBySlug(slug);

  if (!poem || !poem.published) {
    return {
      title: "Poem Not Found",
      robots: { index: false },
    };
  }

  const description =
    poem.description || poem.excerpt || "A poem from I Wrote This Instead.";
  const url = `/poems/${poem.slug}`;

  return {
    title: poem.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...baseOpenGraph,
      type: "article",
      title: poem.title,
      description,
      url,
      publishedTime: new Date(poem.date).toISOString(),
      authors: [siteConfig.author],
      tags: poem.tags ? [...poem.tags] : undefined,
    },
    twitter: {
      card: "summary",
      title: poem.title,
      description,
    },
  };
}

export default async function PoemPage({ params }: PoemPageProps) {
  const { slug } = await params;
  const poem = await getPoemBySlug(slug);

  if (!poem || !poem.published) {
    return (
      <Container>
        <main className={styles.main}>
          <p>Poem not found.</p>
        </main>
      </Container>
    );
  }

  const { prev, next } = await getAdjacentPoems(slug);

  return (
    <Container>
      <main className={styles.main}>
        <BackButton />

        <article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.title}>{poem.title}</h1>
            <time dateTime={poem.date} className={styles.date}>
              {new Date(poem.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </header>

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: poem.html }}
          />
        </article>

        <PreviousNext prev={prev} next={next} />
      </main>
    </Container>
  );
}
