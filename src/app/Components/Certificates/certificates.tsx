"use client";

import { useEffect, useState } from "react";
import styles from "./certificates.module.css";
import { CertificateProps } from "@/app/Types/types";
import ModalComponent from "../UI/Modal/modal";

export default function CertificatesComponent({
  certificate,
}: CertificateProps) {
  useEffect(() => {
    const certs = document.querySelectorAll(`.${styles.certificate}`);
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

    certs.forEach((card) => observer.observe(card));

    return () => {
      certs.forEach((card) => observer.unobserve(card));
    };
  }, []);

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
    <li className={`${styles.certificate} ${styles.fadeIn}`}>
      <h3 className={styles.title}>{certificate.title}</h3>
      <img src={certificate.path} onClick={() => openModal()} />
      {s.isOpen && <ModalComponent settings={s}></ModalComponent>}
    </li>
  );
}
