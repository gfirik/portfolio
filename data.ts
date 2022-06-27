import { IProject, IService, ISkill } from "./types";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import {
  SiHtml5,
  SiJavascript,
  SiRedux,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import { MdDevices, MdLanguage } from "react-icons/md";
import { GiArchiveResearch, GiStack } from "react-icons/gi";
import { GrGraphQl } from "react-icons/gr";

export const services: IService[] = [
  {
    Icon: FaReact,
    title: "React Development",
    about:
      "I can build a beautiful, scalable and responsive UIs and web apps using <b>React</b> and <b>Redux</b>. And I build full stack apps with <b>Next.js</b> and its built-in components.",
  },
  {
    Icon: GiStack,
    title: "Full Stack Development",
    about:
      "I use <b>MERN stack</b> to build fully functioning full stack applications.",
  },
  {
    Icon: GrGraphQl,
    title: "GraphQL Development",
    about:
      "I can build full stack apps with both in server and client side using <b>Apollo GraphQL</b> and its awesome features.",
  },
  {
    Icon: MdDevices,
    title: "Responsive Web Design",
    about:
      "I can develop responsive web application for all types of screen sizes. And I use <b>Tailwind</b>, <b>SCSS</b>, <b>Bootstrap</b> and others.",
  },
  {
    Icon: HiAcademicCap,
    title: "Full Time Learner",
    about:
      "a daily learner of new techs, <b>freeCodeCamp</b>, <b>Coursera</b> and <b>edX</b> student, doing master's at <b>YouTube</b> university.",
  },
  {
    Icon: GiArchiveResearch,
    title: "loading...",
    about: "want to try <b>Rust, WASM</b> and <b>Dart</b> later on...",
  },
];

export const programmingLanguages: ISkill[] = [
  {
    Icon: SiHtml5,
    name: "HTML5, CSS3, SASS",
    level: "100%",
  },
  {
    Icon: SiTailwindcss,
    name: "Tailwind CSS",
    level: "100%",
  },
  {
    Icon: SiJavascript,
    name: "JavaScript",
    level: "100%",
  },
  {
    Icon: SiTypescript,
    name: "TypeScript",
    level: "100%",
  },
  {
    Icon: SiReact,
    name: "React & Next.js",
    level: "100%",
  },
  {
    Icon: SiRedux,
    name: "Redux",
    level: "100%",
  },
  {
    Icon: GrGraphQl,
    name: "GraphQL",
    level: "100%",
  },
  {
    Icon: FaNodeJs,
    name: "Node.js & Express",
    level: "100%",
  },
  {
    Icon: SiMongodb,
    name: "MongoDB",
    level: "100%",
  },
];

export const languages: ISkill[] = [
  {
    Icon: MdLanguage,
    name: "English",
    level: "80%",
  },
  {
    Icon: MdLanguage,
    name: "Korean",
    level: "80%",
  },
  {
    Icon: MdLanguage,
    name: "Russian",
    level: "50%",
  },
  {
    Icon: MdLanguage,
    name: "Uzbek",
    level: "99%",
  },
];

export const projects: IProject[] = [
  {
    id: 6,
    name: "PayCard | Next.js & MongoDB",
    description:
      "PayCard with real-world credit cards integration. After validation, user will be able to proceed the payment" +
      "The payment page is built with <b>Next.js</b> and <b>MongoDB</b>.",
    image_path: "/images/payment-card.png",
    deployed_url: "https://payment-receiver.vercel.app/",
    github_url: "https://github.com/gfirik/payment-receiver-client",
    category: ["react"],
    key_techs: ["Next.js", "MongoDB", "Material-UI"],
  },
  {
    id: 5,
    name: "Amazon.com Clone - eCommerce App | Next.js & Firebase",
    description:
      "Amazon Clone Project with Google Authentication and Stripe Payment Process." +
      "Users can sign in with their Google Account, add products to their basket, and proceed the payment",
    image_path: "/images/amazonclone.png",
    deployed_url: "https://amazonclonewebsite.netlify.app/",
    github_url: "https://github.com/gfirik/amazon-clone",
    category: ["react"],
    key_techs: ["Next.js", "Redux", "Firebase", "Tailwind"],
  },
  {
    id: 4,
    name: "Share Ideas - Social Media Platform | Next.js & Supabase",
    description:
      "Share your ideas, get insights, read and post your thoughts. This app is basic social network platform where you can perform sign-up and sign-in, post, read, update and delete posts.",
    image_path: "/images/crud-ideas.png",
    deployed_url: "https://share-ideas.vercel.app/",
    github_url: "https://github.com/gfirik/crud-next-supabase",
    category: ["react"],
    key_techs: ["Next.js", "Supabase", "Tailwind"],
  },
  {
    id: 3,
    name: "Kanban Board App | JavaScript",
    description:
      "Task manager app that you can create, edit, and delete tasks. Tasks will be saved in your browser. This app was built in Vanilla JavaScript.",
    image_path: "/images/kanban.png",
    deployed_url: "https://kanban-project.netlify.app/",
    github_url: "https://github.com/gfirik/kanban-board",
    category: ["javaScript"],
    key_techs: ["JavaScript", "SCSS"],
  },
  {
    id: 2,
    name: "Quiz App | React & TypeScript | Trivia API",
    description:
      "In this app you will be able to test your basic knowledge by answering randomly selected questions.",
    image_path: "/images/react-ts-quiz.png",
    deployed_url: "https://quiz-react-ts.netlify.app/",
    github_url: "https://github.com/gfirik/quiz-react-ts",
    category: ["react"],
    key_techs: ["React", "TypeScript", "Styled Components"],
  },
  {
    id: 1,
    name: "Snake Game | JavaScript",
    description: "Old snake game that we used to play in Nokia 3310",
    image_path: "/images/snake-game.png",
    deployed_url: "https://nokia-snake-game-js.netlify.app/",
    github_url: "https://github.com/gfirik/snake-game-js",
    category: ["javaScript"],
    key_techs: ["JavaScript", "SCSS"],
  },
];
