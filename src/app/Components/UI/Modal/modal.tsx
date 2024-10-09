// Imported Styles
import styles from "./modal.module.css";

// Imported Types
import { ModalProps } from "@/app/Types/types";

export default function ModalComponent({ settings }: ModalProps) {
  return (
    <div className={styles.overlay} onClick={() => settings.closeModal()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <p>{settings.details}</p>
        <img src={settings.path} className={styles.image} />
      </div>
    </div>
  );
}
