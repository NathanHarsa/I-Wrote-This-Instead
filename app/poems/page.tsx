import { Container } from "@/components/Container";
import { PoemCard } from "@/components/PoemCard";
import { getPublishedPoems } from "@/lib/poems";

import styles from "./page.module.css";

export const metadata = {
  title: "Poems | I Wrote This Instead",
  description: "A collection of published poems.",
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
