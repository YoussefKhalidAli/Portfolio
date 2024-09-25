// Imported Styles
import styles from "./cta.module.css";

// Imported Utils
import mixpanel from "mixpanel-browser";

import Link from "next/link";

export default function CallToActionComponent() {
  const connectInitiated = () => {
    mixpanel.track("Connect Initiated", {
      button_name: "Connect",
      page: "Main",
    });
  };

  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Like What You See?</h2>
        <p className={styles.paragraph}>
          I&#39;m always open to discussing new opportunities, whether it&#39;s
          freelance, contract work, or full-time roles. Let&#39;s chat about how
          I can contribute to your team.
        </p>
        <div className={styles.buttons}>
          <Link
            href="/pages/Contact"
            className={styles.btnPrimary}
            onClick={() => connectInitiated()}
          >
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
