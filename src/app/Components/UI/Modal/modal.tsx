// Imported Styles
import styles from "./Modal.module.css";

// Imported Utils
import Image from "next/image";

// Imported Types
import { ModalProps } from "@/app/Types/types";

export default function ModalComponent({ settings }: ModalProps) {
  return (
    <div className={styles.overlay} onClick={() => settings.closeModal()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Image
          src={settings.path}
          className={styles.image}
          alt="Certificate"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
