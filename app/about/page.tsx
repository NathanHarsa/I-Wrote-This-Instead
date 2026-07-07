import { Container } from "@/components/Container";

import styles from "./page.module.css";

export const metadata = {
  title: "About | I Wrote This Instead",
  description: "Learn about the author and the purpose of this poetry collection.",
};

export default function AboutPage() {
  return (
    <Container>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>About</h1>
        </header>

        <article className={styles.content}>
          <section className={styles.section}>
            <h2>Who I Am</h2>
            <p>
              I&apos;m Nathan, a writer and developer interested in the intersection of technology and 
              language. I spend my days building things on the internet and my evenings thinking 
              about the things I built and the words I didn&apos;t write.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Why I Write</h2>
            <p>
              Writing is how I understand what I think. Not before—during and after, but especially 
              during. These poems are the thoughts that wouldn&apos;t leave me alone, the observations 
              that demanded to exist somewhere, the moments that needed more than a passing thought.
            </p>
            <p>
              Some are reflections. Some are questions. Some are just the quiet observations that 
              come when you&apos;re paying attention to the small things.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Why This Website</h2>
            <p>
              I built this instead of posting on social media because I wanted a space where poems 
              could exist as they are—without algorithms, without engagement metrics, without the 
              pressure to perform. Just writing, in its simplest form, available if you choose to 
              read it.
            </p>
            <p>
              This is a collection of poems. Not a portfolio. Not a brand. Just a quiet corner of 
              the internet where I put the writing that mattered enough to keep.
            </p>
          </section>
        </article>
      </main>
    </Container>
  );
}
