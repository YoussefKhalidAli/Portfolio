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

export interface Project {
  title: string;
  details: string;
  link: string;
}

export interface Certificate extends Experience {
  path: string;
}

export interface Settings {
  isOpen: boolean;
  path: string;
  details: string;
  closeModal: () => void;
}

export interface FloaterProps {
  technology: Technology;
}

export interface ExperienceProps {
  experience: Experience;
}

export interface ProjectProps {
  project: Project;
}

export interface CertificateProps {
  certificate: Certificate;
}

export interface ModalProps {
  settings: Settings;
}

export interface MessageProps {
  message: string;
  type: string;
}
