export interface Technology {
  path: string;
  positionX: number;
  positionY: number;
}

export interface Experience {
  title: string;
  details: string;
  year: number;
}

export interface Certificate extends Experience {
  path: string;
}

export interface Settings {
  isOpen: boolean;
  path: string;
  closeModal: () => void;
}

export interface FloaterProps {
  technology: Technology;
}

export interface ExperienceProps {
  experience: Experience;
}

export interface CertificateProps {
  certificate: Certificate;
}

export interface ModalProps {
  settings: Settings;
}
