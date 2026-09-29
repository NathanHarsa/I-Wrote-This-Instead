import Link from "next/link";

import { Container } from "@/components/Container";

import styles from "./not-found.module.css";

export const metadata = {
  title: "Page Not Found | I Wrote This Instead",
};

export default function NotFound() {
  return (
    <Container>
      <main className={styles.main}>
        <h1 className={styles.title}>Nothing here.</h1>
        <p className={styles.message}>
          This page doesn&apos;t exist, or the poem you&apos;re looking for has
          been moved or taken down.
        </p>
        <Link href="/" className={styles.link}>
          ← Back to Poems
        </Link>
      </main>
    </Container>
  );
}
