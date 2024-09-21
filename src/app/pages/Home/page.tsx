// Imported Styles
import styles from "./homePage.module.css";

// Imported Utils
import { certs, projects, technologies } from "@/app/data/mainPageData";

// Imported Components
import HeroComponent from "../../Components/Hero/hero";
import FloaterComponent from "../../Components/Floater/floater";
import CertificatesComponent from "../../Components/Certificates/certificates";
import ProjectComponent from "@/app/Components/Projects/projects";
import CallToActionComponent from "@/app/Components/CTA/cta";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeroComponent></HeroComponent>
      {technologies.map((technology, index) => (
        <FloaterComponent
          technology={technology}
          key={index}
        ></FloaterComponent>
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
