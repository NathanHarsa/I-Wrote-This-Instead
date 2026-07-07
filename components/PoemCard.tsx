import Link from "next/link";

import type { Poem } from "@/lib/markdown";
import styles from "./PoemCard.module.css";

interface PoemCardProps {
  readonly poem: Poem;
}

export function PoemCard({ poem }: PoemCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/poems/${poem.slug}`} className={styles.titleLink}>
        <h3 className={styles.title}>{poem.title}</h3>
      </Link>

      <time dateTime={poem.date} className={styles.date}>
        {new Date(poem.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>

      {poem.tags && poem.tags.length > 0 && (
        <div className={styles.tags}>
          {poem.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
