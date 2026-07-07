import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.copyright}>
          © {currentYear} I Wrote This Instead. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
