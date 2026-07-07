import Link from "next/link";

import type { Poem } from "@/lib/markdown";
import styles from "./PreviousNext.module.css";

interface PreviousNextProps {
  readonly prev: Poem | null;
  readonly next: Poem | null;
}

export function PreviousNext({ prev, next }: PreviousNextProps) {
  return (
    <div className={styles.navigation}>
      {prev ? (
        <Link href={`/poems/${prev.slug}`} className={styles.prevLink}>
          ← {prev.title}
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link href={`/poems/${next.slug}`} className={styles.nextLink}>
          {next.title} →
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
