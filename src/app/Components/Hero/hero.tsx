"use client";

// Imported Styles
import mixpanel from "mixpanel-browser";
import styles from "./hero.module.css";

export default function HeroComponent() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Youssef Khalid Abdullah Ali</h1>
        <p>
          Software developer proficient in both front-end and back-end
          technologies. Adept at creating scalable, user-centric web
          applications and mobile solutions. Demonstrated expertise in software
          development lifecycle management, problem-solving, and collaborative
          teamwork. Eager to take on new challenges in dynamic development
          environments.
        </p>
        <div className={styles.ctaButtons}>
          <a href="#projects" className={styles.btnPrimary}>
            View My Work
          </a>
          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download="Youssef_Ali's_Resume.pdf"
            onClick={() => mixpanel.track("Download resume", {})}
            className={styles.btnSecondary}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
