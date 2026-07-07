import Link from "next/link";

import { Container } from "@/components/Container";
import { getPublishedPoems } from "@/lib/poems";

import styles from "./page.module.css";

export const metadata = {
  title: "I Wrote This Instead",
  description: "A collection of poems.",
};

export default async function HomePage() {
  const allPoems = await getPublishedPoems();
  const recentPoems = allPoems.slice(0, 5);

  return (
    <Container>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>I Wrote This Instead</h1>
          <p className={styles.byline}>by Nathan</p>
          <p className={styles.tagline}>A collection of poems.</p>
        </header>

        <section className={styles.intro}>
          <Link href="/poems" className={styles.browseButton}>
            Browse Poems
          </Link>
        </section>

        {recentPoems.length > 0 && (
          <section className={styles.recentSection}>
            <h2 className={styles.recentTitle}>Recent Poems</h2>
            <div className={styles.recentList}>
              {recentPoems.map((poem) => (
                <article key={poem.slug} className={styles.recentPoem}>
                  <Link
                    href={`/poems/${poem.slug}`}
                    className={styles.recentPoemLink}
                  >
                    <h3 className={styles.recentPoemTitle}>{poem.title}</h3>
                  </Link>
                  <time dateTime={poem.date} className={styles.recentPoemDate}>
                    {new Date(poem.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </Container>
  );
}