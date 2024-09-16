// Imported Styles
import styles from "./homePage.module.css";

// Imported Types
import { Technology } from "../../Types/types";

// Imported Components
import HeroComponent from "../../Components/Hero/hero";
import FloaterComponent from "../../Components/Floater/floater";

// Imported Assets
import react from "@/app/assets/technologies/react-icon.png";
import next from "@/app/assets/technologies/nextjs-icon.png";
import angular from "@/app/assets/technologies/angular-icon.png";
import mongodb from "@/app/assets/technologies/mongodb-icon.png";
import redux from "@/app/assets/technologies/redux-icon.png";
import js from "@/app/assets/technologies/js-icon.png";
import ts from "@/app/assets/technologies/ts-icon.png";
import python from "@/app/assets/technologies/python-icon.webp";
import cpp from "@/app/assets/technologies/cpp-icon.png";
import node from "@/app/assets/technologies/node-icon.png";
import ProjectsSection from "../../Components/Projects/projects";
import CertificatesComponent from "../../Components/Certificates/certificates";

// Set the array of technologies
const technologies: Technology[] = [
  { path: react.src, positionX: 14, positionY: 8 },
  { path: next.src, positionX: 7, positionY: 22 },
  { path: angular.src, positionX: 18, positionY: 40 },
  { path: mongodb.src, positionX: 9.8, positionY: 57 },
  { path: redux.src, positionX: 13.7, positionY: 80 },
  { path: js.src, positionX: 84, positionY: 8 },
  { path: ts.src, positionX: 77, positionY: 22 },
  { path: python.src, positionX: 88, positionY: 40 },
  { path: cpp.src, positionX: 79.8, positionY: 57 },
  { path: node.src, positionX: 83.7, positionY: 80 },
];

import datacom from "@/app/assets/certificates/Datacom.png";
import security from "@/app/assets/certificates/Security.png";
import AICE from "@/app/assets/certificates/AICE.png";
import ExperienceComponent from "../../Components/Experience/experience";

const certs = [
  {
    title: "HCIA Data Communication",
    year: 2024,
    details:
      "This certificate is awarded by Huwaei; this certificate indicates proficiency in fundamental data communication and networking concepts, including network design, protocols, and troubleshooting.",
    path: datacom.src,
  },
  {
    title: "HCIA Network Security",
    year: 2024,
    details:
      "This certificate is awarded by Huwaei; this certificate indicates proficiency in foundational knowledge in network security principles, including implementing and managing security policies, firewalls, VPNs, and threat mitigation techniques. It demonstrates expertise in protecting network infrastructure and ensuring data integrity and confidentiality.",
    path: security.src,
  },
  {
    title: "AI Carrer Essentials",
    year: 2024,
    details:
      "This certificate is awarded by African Leadership Group; this certificate indicates proficiency foundational knowledge and practical skills in artificial intelligence. It covers key AI concepts, tools, and techniques.",
    path: AICE.src,
  },
  // Add more awards and certifications as needed
];

export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeroComponent></HeroComponent>
      {technologies.map((technology) => (
        <FloaterComponent technology={technology}></FloaterComponent>
      ))}
      <ProjectsSection></ProjectsSection>
      <section className={styles.experiencesContainer}>
        <h2 className={styles.title}>Professional Experience</h2>
        <ul className={styles.experiencesList}>
          {certs.map((exp, index) => (
            <ExperienceComponent
              experience={exp}
              key={index}
            ></ExperienceComponent>
          ))}
        </ul>
      </section>
      <section className={styles.certificatesContainer}>
        <h2 className={styles.title}>Certificates and Internships</h2>
        <ul className={styles.certificatesList}>
          {certs.map((exp, index) => (
            <CertificatesComponent
              certificate={exp}
              key={index}
            ></CertificatesComponent>
          ))}
        </ul>
      </section>
    </div>
  );
}
