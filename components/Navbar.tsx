import Link from "next/link";

import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.title}>
          I Wrote This Instead
        </Link>

        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/poems" className={styles.link}>
            Poems
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
