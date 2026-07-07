import { Container } from "@/components/Container";
import { BackButton } from "@/components/BackButton";
import { PreviousNext } from "@/components/PreviousNext";
import { getPublishedPoems, getPoemBySlug, getAdjacentPoems } from "@/lib/poems";

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

export async function generateMetadata({ params }: PoemPageProps) {
  const { slug } = await params;
  const poem = await getPoemBySlug(slug);

  if (!poem) {
    return {
      title: "Poem Not Found",
    };
  }

  return {
    title: `${poem.title} | I Wrote This Instead`,
    description: poem.description || "A poem from I Wrote This Instead.",
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
