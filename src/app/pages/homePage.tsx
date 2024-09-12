import styles from "@/app/page.module.css";
import HeroComponent from "../Components/Hero/hero";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeroComponent></HeroComponent>
    </div>
  );
}
