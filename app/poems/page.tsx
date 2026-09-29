import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { PoemCard } from "@/components/PoemCard";
import { getPublishedPoems } from "@/lib/poems";
import { baseOpenGraph } from "@/lib/site";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Poems",
  description: "A collection of published poems.",
  alternates: { canonical: "/poems" },
  openGraph: {
    ...baseOpenGraph,
    title: "Poems",
    description: "A collection of published poems.",
    url: "/poems",
  },
};

export default async function PoemsPage() {
  const poems = await getPublishedPoems();

  return (
    <Container>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Poems</h1>
        </header>

        {poems.length === 0 ? (
          <p className={styles.empty}>No poems published yet.</p>
        ) : (
          <div className={styles.poemsList}>
            {poems.map((poem) => (
              <PoemCard key={poem.slug} poem={poem} />
            ))}
          </div>
        )}
      </main>
    </Container>
  );
}
