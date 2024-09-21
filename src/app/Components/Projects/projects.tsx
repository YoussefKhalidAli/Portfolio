"use client";

// Imported Styles
import styles from "./projects.module.css";

// Imported Utils
import Link from "next/link";
import { useEffect } from "react";

// Imported Types
import { ProjectProps } from "@/app/Types/types";

// Imported Assets
import github from "@/app/assets/github-cover.png";

export default function ProjectComponent({ project }: ProjectProps) {
  //Trigger project animation
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.projectCard}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`${styles.visible}`);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);
  return (
    <Link
      href={project.link}
      className={`${styles.projectCard} ${styles.fadeIn}`}
    >
      <div className={styles.imageContainer}>
        <img src={github.src} alt="Project Image" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>{project.title}</div>
        <p>{project.details}</p>
      </div>
    </Link>
  );
}
