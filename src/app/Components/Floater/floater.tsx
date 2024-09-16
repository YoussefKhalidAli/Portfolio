// Imported Styles
import styles from "./floater.module.css";

// Imported Types
import { FloaterProps } from "@/app/Types/types";

export default function FloaterComponent({ technology }: FloaterProps) {
  return (
    <img
      className={styles.tech}
      src={technology.path}
      style={{
        top: `${technology.positionY}vh`,
        left: `${technology.positionX}vw`,
      }}
      alt="Technology"
    />
  );
}
