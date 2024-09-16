"use client";

import { useState } from "react";
import styles from "./certificates.module.css";
import { CertificateProps } from "@/app/Types/types";
import ModalComponent from "../UI/Modal/modal";

export default function CertificatesComponent({
  certificate,
}: CertificateProps) {
  const [modalImage, setModalImage] = useState<string>("none");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const s = {
    isOpen: modalIsOpen,
    path: modalImage,
    closeModal: () => closeModal(),
  };

  const openModal = () => {
    setModalImage(certificate.path);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <li className={styles.certificate}>
      <h3 className={styles.title}>{certificate.title}</h3>
      <img src={certificate.path} onClick={() => openModal()} />
      {s.isOpen && <ModalComponent settings={s}></ModalComponent>}
    </li>
  );
}
