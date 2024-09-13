// Imported Styles
import styles from "@/app/page.module.css";

// Imported Types
import { Technology } from "../Types/Technology";

// Imported Components
import HeroComponent from "../Components/Hero/hero";
import FloaterComponent from "../Components/Floater/floater";

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

export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeroComponent></HeroComponent>
      {technologies.map((technology) => (
        <FloaterComponent technology={technology}></FloaterComponent>
      ))}
    </div>
  );
}
