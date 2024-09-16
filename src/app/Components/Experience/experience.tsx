import styles from "./experience.module.css";
import { ExperienceProps } from "@/app/Types/types";

export default function ExperienceComponent({ experience }: ExperienceProps) {
  return (
    <li className={styles.experience}>
      <h3 className={styles.title}>{experience.title}</h3>
      <p className={styles.year}>{experience.year}</p>
      <p className={styles.details}>{experience.details}</p>
    </li>
  );
}
