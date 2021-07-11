import { IService, ISkill } from './type';
import { FaAngular, FaLaptopCode, FaReact, FaServer } from "react-icons/fa";
import { HiAcademicCap, HiTranslate } from 'react-icons/hi';
import { SiAngular, SiJavascript, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { MdLanguage } from 'react-icons/md';

export const services:IService[] = [
    {
        Icon: FaReact,
        title: "React Development",
        about:
          "I can build a beautiful and scalable SPA using <b>React.js</b> and its features",
      },
      {
        Icon: FaAngular,
        title: "Angular Development",
        about:
          "I tend to use <b>Angular</b> framework to build my PWA applications as it's more convinient component-based comfort",
      },
      {
        Icon: FaServer,
        title: "Backend Development",
        about:
            "I can handle database, server, api using <b>Node</b>(and <b>Express</b>) & <b>Python</b>",
      },
      {
        Icon: FaLaptopCode,
        title: "Full Time Learner",
        about: "a daily learner of new techs, <b>freeCodeCamp</b> student, sophomore of <b>YouTube</b> university",
      },
      {
        Icon: HiTranslate,
        title: "Translator&Interpreter",
        about:
          "stunning translator and interpreter in <b>Korean</b> and <b>English</b> with one year experience in this industry",
      },
      {
        Icon: HiAcademicCap,
        title: "loading...",
        about:
          "want to try <b>ui&ux design</b> and <b>3d modelling</b> later on...",
      },
];

export const programmingLanguages:ISkill[] = [
  {
    Icon: SiJavascript,
    name: 'JavaScript', 
    level: '70%', 
  },
  {
    Icon: SiReact,
    name: 'React',
    level: '80%', 
  },
  {
    Icon: SiAngular,
    name: 'Angular',
    level: '80%', 
  },
  {
    Icon: SiPython,
    name: 'Python',
    level: '65%', 
  },
  {
    Icon: SiTypescript,
    name: 'TypeScript',
    level: '60%', 
  },
  {
    Icon: SiTailwindcss,
    name: 'HTML&CSS, Bootstrap, SASS, Tailwind',
    level: '90%', 
  }
];

export const languages:ISkill[] = [
  {
    Icon: MdLanguage,
    name: 'English',
    level: '80%'
  },
  {
    Icon: MdLanguage,
    name: 'Korean',
    level: '90%'
  },
  {
    Icon: MdLanguage,
    name: 'Russian',
    level: '50%'
  },
  {
    Icon: MdLanguage,
    name: 'Uzbek',
    level: '99%'
  },
];