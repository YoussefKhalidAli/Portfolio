import React from "react";
import styles from "./Modal.module.css"; // Import the CSS module for styling
import { ModalProps } from "@/app/Types/types";

export default function ModalComponent({ settings }: ModalProps) {
  return (
    <div className={styles.overlay} onClick={() => settings.closeModal()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img src={settings.path} className={styles.image} />
      </div>
    </div>
  );
}
