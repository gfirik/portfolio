import { IService, ISkill } from './type';
import { FaAngular, FaReact } from "react-icons/fa";
import { HiAcademicCap, HiTranslate } from 'react-icons/hi';
import { SiAngular, SiJavascript, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { MdDevices, MdLanguage } from 'react-icons/md';
import { GiArchiveResearch } from 'react-icons/gi';

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
          "I use <b>Angular</b> framework to build PWA applications as it's more convinient component-based comfort",
      },
      {
        Icon: MdDevices,
        title: "Responsive Web Design",
        about:
            "I can develop responsive web application using <b>SASS</b> and <b>Bootstrap</b> & <b>Tailwind CSS</b>",
      },
      {
        Icon: GiArchiveResearch,
        title: "Full Time Learner",
        about: "a daily learner of new techs, <b>freeCodeCamp</b>, <b>Coursera</b> and <b>edX</b> student, doing master's at <b>YouTube</b> university",
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