import styles from "./hero.module.css";

export default function HeroComponent() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Youssef Khalid Abdullah Ali</h1>
        <p>
          Driven and detail-oriented Computer Science student with hands-on
          experience in full-stack web development. Proficient in both front-end
          and back-end technologies, including React.js, Node.js, and MongoDB.
          Adept at creating scalable, user-centric web applications and mobile
          solutions. Demonstrated expertise in software development lifecycle
          management, problem-solving, and collaborative teamwork. Passionate
          about leveraging my technical skills to contribute to innovative
          projects and drive technological advancements. Eager to take on new
          challenges in dynamic development environments.
        </p>
        <div className={styles.ctaButtons}>
          <a href="#projects" className={styles.btnPrimary}>
            View My Work
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
