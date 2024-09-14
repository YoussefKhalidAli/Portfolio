import styles from "./Certifications.module.css"; // Import the CSS module for styling

import datacom from "@/app/assets/certificates/Datacom.png";
import security from "@/app/assets/certificates/Security.png";
import AICE from "@/app/assets/certificates/AICE.png";
const certs = [
  {
    title: "HCIA Data Communication",
    year: "2024",
    details:
      "This certificate is awarded by Huwaei; this certificate indicates proficiency in fundamental data communication and networking concepts, including network design, protocols, and troubleshooting.",
    path: datacom.src,
  },
  {
    title: "HCIA Network Security",
    year: "2024",
    details:
      "This certificate is awarded by Huwaei; this certificate indicates proficiency in foundational knowledge in network security principles, including implementing and managing security policies, firewalls, VPNs, and threat mitigation techniques. It demonstrates expertise in protecting network infrastructure and ensuring data integrity and confidentiality.",
    path: security.src,
  },
  {
    title: "AI Carrer Essentials",
    year: "2024",
    details:
      "This certificate is awarded by African Leadership Group; this certificate indicates proficiency foundational knowledge and practical skills in artificial intelligence. It covers key AI concepts, tools, and techniques.",
    path: AICE.src,
  },
  // Add more awards and certifications as needed
];

export default function CertificationsComponent() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Certifications and Internships</h2>
      <ul className={styles.list}>
        {certs.map((cert, index) => (
          <span className={styles.itemContainer}>
            <li key={index} className={styles.item}>
              <h3 className={styles.title}>{cert.title}</h3>
              <p className={styles.year}>{cert.year}</p>
              <p className={styles.details}>{cert.details}</p>
            </li>
            <img className={styles.certificate} src={cert.path} />
          </span>
        ))}
      </ul>
    </section>
  );
}
