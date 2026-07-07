"use client";

import { useRouter } from "next/navigation";

import styles from "./BackButton.module.css";

export function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button onClick={handleClick} className={styles.backButton}>
      ← Back to Poems
    </button>
  );
}
