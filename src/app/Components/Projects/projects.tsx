import Link from "next/link";
import styles from "./projects.module.css";

import github from "@/app/assets/github-cover.png";
export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.heading}>Personal Projects</h2>
      <div className={styles.projectsGrid}>
        <Link
          href="https://github.com/YoussefKhalidAli/Blog-website"
          className={styles.projectCard}
        >
          <div className={styles.imageContainer}>
            <img src={github.src} alt="Project Image" />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>Blog Platforms</div>
            <p>
              Full-Stack MERN blog websites with user authentication and post
              management.
            </p>
          </div>
        </Link>

        <Link
          href="https://github.com/YoussefKhalidAli/expense-tracker"
          className={styles.projectCard}
        >
          <div className={styles.imageContainer}>
            <img src={github.src} alt="Project Image" />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>Expense Tracker</div>
            <p>
              A mobile app for tracking expenses using React Native, providing a
              clean and intuitive user interface.
            </p>
          </div>
        </Link>

        <Link
          href="https://github.com/YoussefKhalidAli/maid.cc_Application"
          className={styles.projectCard}
        >
          <div className={styles.imageContainer}>
            <img src={github.src} alt="Project Image" />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>Profile Finder Web App</div>
            <p>
              An Angular web app enabling users to search for and view profiles
              with advanced search functionality and a responsive design.
            </p>
          </div>
        </Link>

        <Link
          href="https://github.com/YoussefKhalidAli/meal-finder"
          className={styles.projectCard}
        >
          <div className={styles.imageContainer}>
            <img src={github.src} alt="Project Image" />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>Meal Finder</div>
            <p>
              A recipe app built with React Native, featuring navigation for a
              smooth user experience.
            </p>
          </div>
        </Link>
        <Link
          href="https://github.com/YoussefKhalidAli/mobile-todo-list"
          className={styles.projectCard}
        >
          <div className={styles.imageContainer}>
            <img src={github.src} alt="Project Image" />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>Todo List</div>
            <p>
              A todo-list app built with React Native featuring state
              management.
            </p>
          </div>
        </Link>
        <Link
          href="https://github.com/YoussefKhalidAli/BakeryLandingPage"
          className={styles.projectCard}
        >
          <div className={styles.imageContainer}>
            <img src={github.src} alt="Project Image" />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>Bakery landing page</div>
            <p>A simple Landing page for a made-up bakery.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
