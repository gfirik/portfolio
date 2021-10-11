import { IProject, IService, ISkill } from './types';
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
          "I can build a beautiful and scalable SPA using <b>React.js</b> and with its framework <b>Next.js</b>.",
      },
      {
        Icon: FaAngular,
        title: "Angular Development",
        about:
          "I use <b>Angular</b> framework to build PWA applications as it's more convinient component-based comfort.",
      },
      {
        Icon: MdDevices,
        title: "Responsive Web Design",
        about:
            "I can develop responsive web application using <b>SASS</b> and <b>Bootstrap</b> & <b>Tailwind CSS</b>.",
      },
      {
        Icon: HiAcademicCap,
        title: "Full Time Learner",
        about: "a daily learner of new techs, <b>freeCodeCamp</b>, <b>Coursera</b> and <b>edX</b> student, doing master's at <b>YouTube</b> university.",
      },
      {
        Icon: HiTranslate,
        title: "Translator&Interpreter",
        about:
          "experienced translator and interpreter in <b>Korean</b> and <b>English</b> with one year experience in this industry.",
      },
      {
        Icon: GiArchiveResearch,
        title: "loading...",
        about:
          "want to try <b>ui&ux design</b> and <b>3d modelling</b> later on...",
      },
];

export const programmingLanguages:ISkill[] = [
  {
    Icon: SiJavascript,
    name: 'JavaScript', 
    level: '100%', 
  },
  {
    Icon: SiReact,
    name: 'React(&Next.js)',
    level: '100%', 
  },
  {
    Icon: SiAngular,
    name: 'Angular',
    level: '100%', 
  },
  {
    Icon: SiPython,
    name: 'Python',
    level: '100%', 
  },
  {
    Icon: SiTypescript,
    name: 'TypeScript',
    level: '100%', 
  },
  {
    Icon: SiTailwindcss,
    name: 'Bootstrap&Tailwind',
    level: '100%', 
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

export const projects:IProject[] = [
  
  {
    id: 9,
    name: 'Share Ideas | CRUD App', 
    description: 'Share your ideas, get insights, read and post your thoughts. This app is basic social network platform where you can perform CRUD operations.',
    image_path: '/images/crud-ideas.png',
    deployed_url: 'https://share-ideas.vercel.app/',
    github_url: 'https://github.com/gfirik/crud-next-supabase',
    category: ['react'],
    key_techs: ['Next.js','Supabase', 'React', 'Tailwind']
  },
  {
    id: 8,
    name: 'Quiz App with Trivia API', 
    description: 'In this app you will be able to test your basic knowledge by answering randomly selected questions.',
    image_path: '/images/react-ts-quiz.png',
    deployed_url: 'https://quiz-react-ts.netlify.app/',
    github_url: 'https://github.com/gfirik/quiz-react-ts',
    category: ['react'],
    key_techs: ['React','TypeScript', 'Styled Components']
  },
  {
    id: 7,
    name: 'Video Game Database Application', 
    description: 'This app allows you to explore more than 350000+ video games. This app was built using Rapid API.',
    image_path: '/images/ng-game-db.png',
    deployed_url: 'https://ng-game-db.netlify.app/',
    github_url: 'https://github.com/gfirik/ng-game-db',
    category: ['angular'],
    key_techs: ['Angular','TypeScript', 'SCSS']
  },
  {
    id: 6,
    name: 'Web Page of Eduvive', 
    description: 'This webpage was created for Eduvive Education Center.',
    image_path: '/images/eduvive.png',
    deployed_url: 'https://eduvive.uz/',
    github_url: 'https://github.com/gfirik/eduvive',
    category: ['vanilla js'],
    key_techs: ['JavaScript','SCSS', 'Tilt.js', 'Swiper.js'],
  },
  {
    id: 5,
    name: 'Memory Card Game App', 
    description: 'Simple memory card game.',
    image_path: '/images/memory-game.png',
    deployed_url: 'https://memory-card-game-in-js.netlify.app/',
    github_url: 'https://github.com/gfirik/memory-game',
    category: ['vanilla js'],
    key_techs: ['JavaScript', 'SCSS']
  },
  {
    id: 4,
    name: 'Connect Four Game', 
    description: 'Connect Four is a two-player connection board game, in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid.',
    image_path: '/images/connect-four.png',
    deployed_url: 'https://connect-four-game-js.netlify.app/',
    github_url: 'https://github.com/gfirik/connect-four-game',
    category: ['vanilla js'],
    key_techs: ['JavaScript', 'SCSS']
  },
  
  {
    id: 3,
    name: 'Countdown App', 
    description: 'In this app you can see how much time left untill the time you select',
    image_path: '/images/countdown-app.png',
    deployed_url: 'https://gfirik.github.io/countdown-app/',
    github_url: 'https://github.com/gfirik/countdown-app',
    category: ['vanilla js'],
    key_techs: ['JavaScript', 'SCSS']
  },
  {
    id: 2,
    name: 'Twitter Clone', 
    description: 'This app forces you to give up your real twitter app and start to use this app with its main functionalities',
    image_path: '/images/react-ts-quiz.png',
    deployed_url: 'https://quiz-react-ts.netlify.app/',
    github_url: 'https://github.com/gfirik/quiz-react-ts',
    category: ['react'],
    key_techs: ['React','JavaScript']
  },
  {
    id: 1,
    name: 'Todo List App', 
    description: 'Simple todo list app where you can save your todos and remove them as your daily reminder',
    image_path: '/images/ng-todo-list.png',
    deployed_url: 'https://ng-todo-list-app.netlify.app/',
    github_url: 'https://github.com/gfirik/ng-todo-app',
    category: ['angular'],
    key_techs: ['Angular', 'TypeScript', 'SCSS']
  },
];