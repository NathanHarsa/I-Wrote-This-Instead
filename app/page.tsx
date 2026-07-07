import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>I Wrote This Instead</h1>
        <p className={styles.subtitle}>A quiet place for poems.</p>
      </header>

      <section className={styles.contentSection}>
        <p>
          Welcome. This is a collection of writing—thoughts that needed somewhere to exist.
        </p>
      </section>
    </main>
  );
}