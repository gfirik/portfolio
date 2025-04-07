import { IProject, IService, ISkill } from "./types";
import { FaNodeJs, FaTelegram, FaGithub } from "react-icons/fa";
import { SiReact, SiTypescript, SiMongodb, SiDocker } from "react-icons/si";
import { MdDevices, MdLanguage } from "react-icons/md";
import { GiArchiveResearch, GiStack } from "react-icons/gi";
import { IoConstruct } from "react-icons/io5";
import { PiBrain } from "react-icons/pi";
import { SiSupabase } from "react-icons/si";

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
      "Integrating <b>AI</b> into web apps and Telegram bots to automate tasks, enhance interactivity, and deliver smarter user experiences.",
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
    name: "React & Next.js",
    level: "100%",
  },
  {
    Icon: SiSupabase,
    name: "Supabase",
    level: "100%",
  },

  {
    Icon: FaNodeJs,
    name: "Node.js",
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
  {
    Icon: FaGithub,
    name: "GitHub",
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
];

export const projects: IProject[] = [
  {
    id: 9,
    name: "aviago | Travel Agency",
    description: "Platform for travel agancy.",
    image_path: "/images/aviago.png",
    deployed_url: "https://aviago.co.uz/",
    github_url: "https://github.com/gfirik/aviago-lp",
    category: ["next.js"],
    key_techs: ["Next.js", "shadcn/ui", "EmailJS", "Vercel"],
  },
  {
    id: 8,
    name: "Yemak AI | AI-Powered Food Analysis",
    description:
      "Web  App integrated with telegram bot, with seperate admin panel to manage project.",
    image_path: "/images/yemak.png",
    deployed_url: "https://yemak-ai.vercel.app/",
    github_url: "https://github.com/gfirik/kaloriax-web",
    category: ["next.js"],
    key_techs: ["Next.js", "shadcn/ui", "Gemini", "Supabase"],
  },
  {
    id: 7,
    name: "Ilm Library | Book sharing platform",
    description:
      "Web  App integrated with telegram bot, with seperate admin panel to manage project.",
    image_path: "/images/ilm-library.png",
    deployed_url: "https://library-bot.vercel.app/",
    github_url: "https://github.com/gfirik/library-client",
    category: ["next.js"],
    key_techs: ["Next.js", "shadcn/ui", "AWS", "Supabase"],
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
    category: ["next.js"],
    key_techs: ["Next.js", "Redux", "Firebase", "Tailwind"],
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
