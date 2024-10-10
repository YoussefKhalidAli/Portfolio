// Imported Technology Logos
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

// Set technologies value
export const technologies: Technology[] = [
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

// Set projects value
export const projects: Project[] = [
  {
    title: "Blog Platform",
    details:
      "Full-Stack MERN blog websites with user authentication and post management.",
    link: "https://github.com/YoussefKhalidAli/Blog-website",
  },
  {
    title: "Expense Tracker",
    details:
      "A mobile app for tracking expenses using React Native, providing a clean and intuitive user interface.",
    link: "https://github.com/YoussefKhalidAli/expense-tracker",
  },
  {
    title: "Profile Finder",
    details:
      "An Angular web app enabling users to search for and view profiles with advanced search functionality and a responsive design.",
    link: "https://github.com/YoussefKhalidAli/maid.cc_Application",
  },
  {
    title: "Meal Findet",
    details:
      "A recipe app built with React Native, featuring navigation for a smooth user experience.",
    link: "https://github.com/YoussefKhalidAli/meal-finder",
  },
  {
    title: "Todo List",
    details:
      "A todo-list app built with React Native featuring state management.",
    link: "https://github.com/YoussefKhalidAli/mobile-todo-list",
  },
  {
    title: "Bakery Landing Page",
    details: "A simple landing page for a made-up bakery made using React",
    link: "https://github.com/YoussefKhalidAli/BakeryLandingPage",
  },
];

// Imported Types
import { Certificate, Project, Technology } from "../Types/types";

// Imported Certificates
import datacom from "@/app/assets/certificates/Datacom.png";
import security from "@/app/assets/certificates/Security.png";
import AICE from "@/app/assets/certificates/AICE.png";
import LEAP from "@/app/assets/certificates/LEAP.png";

// Set certificates value
export const certs: Certificate[] = [
  {
    title: "LEAP",
    year: 2024,
    details:
      "This certificate is awarded by ALEXBANK; this certificate indicates completion of the LEAP internship program.",
    path: LEAP.src,
  },
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
      "This certificate is awarded by Huwaei; this certificate indicates proficiency in foundational knowledge in network security principles, including implementing and managing security policies, firewalls, VPNs, and threat mitigation techniques.",
    path: security.src,
  },
  {
    title: "AI Carrer Essentials",
    year: 2024,
    details:
      "This certificate is awarded by African Leadership Group; this certificate indicates proficiency foundational knowledge and practical skills in artificial intelligence. It covers key AI concepts, tools, and techniques.",
    path: AICE.src,
  },
];
