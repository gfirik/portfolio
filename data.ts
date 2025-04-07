import { IProject, IService, ISkill } from "./types";
import { FaNodeJs, FaTelegram } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiMongodb,
  SiNestjs,
  SiDocker,
  SiPrisma,
} from "react-icons/si";
import { MdDevices, MdLanguage } from "react-icons/md";
import { GiArchiveResearch, GiStack } from "react-icons/gi";
import { GrGraphQl } from "react-icons/gr";
import { IoConstruct } from "react-icons/io5";
import { PiBrain } from "react-icons/pi";

export const services: IService[] = [
  {
    Icon: GiStack,
    title: "Full-Stack Development",
    about:
      "I build Full Stack apps via <b>JavaScript</b> based library and frameworks, such as <b>Next.js</b> and <b>MERN</b> stack.",
  },
  {
    Icon: FaTelegram,
    title: "Telegram Bots & Web Apps",
    about:
      "Can build <b>Telegram bots</b> integrated with <b>WebApps</b>. Mainly use <b>grammY</b> framework to handle bot APIs.",
  },
  {
    Icon: PiBrain,
    title: "AI-Integrated Applications",
    about:
      "Integrating <b>AI models</b> into web and Telegram apps — for example, image analysis with <b>Gemini API</b> in nutrition tools like <b>KaloriyaX</b>.",
  },
  {
    Icon: MdDevices,
    title: "Responsive Web Design",
    about:
      "I can develop responsive web applications for all types of screen sizes using <b>Tailwind</b>, <b>shadcn/ui</b>, <b>Bootstrap</b> and others.",
  },
  {
    Icon: IoConstruct,
    title: "Startup Prototyping",
    about:
      "I enjoy building and launching <b>early-stage ideas</b>, focusing on fast iterations, real user feedback, and solving real-world problems.",
  },
  {
    Icon: GiArchiveResearch,
    title: "Continuous Learning",
    about:
      "Exploring new technologies, reading, and building side projects to stay sharp.",
  },
];

export const programmingLanguages: ISkill[] = [
  {
    Icon: SiTypescript,
    name: "TypeScript",
    level: "100%",
  },
  {
    Icon: SiReact,
    name: "React & Next",
    level: "100%",
  },
  {
    Icon: GrGraphQl,
    name: "GraphQL",
    level: "100%",
  },
  {
    Icon: SiPrisma,
    name: "Prisma",
    level: "100%",
  },
  {
    Icon: FaNodeJs,
    name: "Node.js",
    level: "100%",
  },
  {
    Icon: SiNestjs,
    name: "NestJS",
    level: "100%",
  },
  {
    Icon: SiMongodb,
    name: "MongoDB",
    level: "100%",
  },
  {
    Icon: SiDocker,
    name: "Docker",
    level: "100%",
  },
  {
    Icon: FaTelegram,
    name: "Telegram Bots",
    level: "100%",
  },
];

export const languages: ISkill[] = [
  {
    Icon: MdLanguage,
    name: "Uzbek",
    level: "99%",
  },
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
];

export const projects: IProject[] = [
  {
    id: 7,
    name: "Ilm Library | Book sharing platform",
    description:
      "Web  App integrated with telegram bot, with seperate admin panel to manage project.",
    image_path: "/images/ilm-library.png",
    deployed_url: "https://library-bot.vercel.app/",
    github_url: "https://github.com/gfirik/library-client",
    category: ["react"],
    key_techs: ["Next.js", "shadcn/ui", "AWS", "Supabase"],
  },
  {
    id: 6,
    name: "PayCard | Next.js & MongoDB",
    description:
      "PayCard with real-world credit cards integration. After validation, user will be able to proceed the payment" +
      "The payment page is built with Next.js and MongoDB.",
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
