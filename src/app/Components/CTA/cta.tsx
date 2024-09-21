import styles from "./cta.module.css";

import Link from "next/link";

export default function CallToActionComponent() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Like What You See?</h2>
        <p className={styles.paragraph}>
          I'm always open to discussing new opportunities, whether it's
          freelance, contract work, or full-time roles. Let's chat about how I
          can contribute to your team.
        </p>
        <div className={styles.buttons}>
          <Link href="/pages/Contact" className={styles.btnPrimary}>
            Connect
          </Link>
          <a
            href="https://calendly.com/yossofwd"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}
