// Imported Styles
import styles from "./floater.module.css";

// Imported Utils
import Image from "next/image";

// Imported Types
import { FloaterProps } from "@/app/Types/types";

export default function FloaterComponent({ technology }: FloaterProps) {
  return (
    <Image
      className={styles.tech}
      src={technology.path}
      style={{
        top: `${technology.positionY}vh`,
        left: `${technology.positionX}vw`,
      }}
      width={40}
      height={40}
      alt="Technology"
    />
  );
}
