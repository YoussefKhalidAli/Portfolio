// Imported Styles
import styles from "./homePage.module.css";

// Imported Components
import HeroComponent from "../../Components/Hero/hero";
import FloaterComponent from "../../Components/Floater/floater";

// Imported Assets

import CertificatesComponent from "../../Components/Certificates/certificates";
import { certs, projects, technologies } from "@/app/data/mainPageData";
import ProjectComponent from "@/app/Components/Projects/projects";
import CallToActionComponent from "@/app/Components/CTA/cta";

// Set the array of technologies

export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeroComponent></HeroComponent>
      {technologies.map((technology) => (
        <FloaterComponent technology={technology}></FloaterComponent>
      ))}
      <section className={styles.projectsSection} id="projects">
        <h2 className={styles.heading}>Personal Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectComponent project={project} key={index}></ProjectComponent>
          ))}
        </div>
        <section className={styles.certificatesContainer}>
          <h2 className={styles.heading}>
            Certificates {/* and Internships */}
          </h2>
          <ul className={styles.certificatesList}>
            {certs.map((exp, index) => (
              <CertificatesComponent
                certificate={exp}
                key={index}
              ></CertificatesComponent>
            ))}
          </ul>
        </section>
      </section>
      <CallToActionComponent></CallToActionComponent>
    </div>
  );
}
