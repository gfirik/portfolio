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
          "stunning translator and interpreter in <b>Korean</b> and <b>English</b> with one year experience in this industry.",
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
    level: '70%', 
  },
  {
    Icon: SiReact,
    name: 'React(&Next.js)',
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

export const projects:IProject[] = [
  {
    name: 'Quiz App with Trivia API', 
    description: 'In this app you will be able to test your basic knowledge by answering randomly selected questions.',
    image_path: '/images/react-ts-quiz.png',
    deployed_url: 'https://quiz-react-ts.netlify.app/',
    github_url: 'https://github.com/gfirik/quiz-react-ts',
    category: ['react'],
    key_techs: ['React','TypeScript', 'Styled Components']
  },
  {
    name: 'Video Game Database Application', 
    description: 'This app allows you to explore more than 350000+ video games. This app was built using Rapid API.',
    image_path: '/images/ng-game-db.png',
    deployed_url: 'https://ng-game-db.netlify.app/',
    github_url: 'https://github.com/gfirik/ng-game-db',
    category: ['angular'],
    key_techs: ['Angular','TypeScript', 'SCSS']
  },
  {
    name: 'Web Page of Eduvive', 
    description: 'This webpage was created for Eduvive Education Center.',
    image_path: '/images/eduvive.png',
    deployed_url: 'https://eduvive.uz/',
    github_url: 'https://github.com/gfirik/eduvive',
    category: ['vanilla js'],
    key_techs: ['JavaScript','SCSS', 'Tilt.js', 'Swiper.js'],
  },
  {
    name: 'Tic Tac Toe Game', 
    description: 'Simple Tic Tac Toe Game built in Angular',
    image_path: '/images/react-ts-quiz.png',
    deployed_url: 'https://quiz-react-ts.netlify.app/',
    github_url: 'https://github.com/gfirik/quiz-react-ts',
    category: ['angular'],
    key_techs: ['Angular','TypeScript', 'SCSS']
  },
  {
    name: 'Twitter Clone', 
    description: 'This app forces you to give up your real twitter app and start to use this app with its main functionalities',
    image_path: '/images/react-ts-quiz.png',
    deployed_url: 'https://quiz-react-ts.netlify.app/',
    github_url: 'https://github.com/gfirik/quiz-react-ts',
    category: ['react'],
    key_techs: ['React','JavaScript']
  },
  {
    name: 'Countdown App', 
    description: 'In this app you can see how much time left untill the time you select',
    image_path: '/images/countdown-app.png',
    deployed_url: 'https://gfirik.github.io/countdown-app/',
    github_url: 'https://github.com/gfirik/countdown-app',
    category: ['vanilla js'],
    key_techs: ['JavaScript', 'SCSS']
  },
  {
    name: 'Simple Quiz App', 
    description: 'I have built the app to improve my JavaScript skills and it`s beginner friendly project that can be learnt from code itself:)',
    image_path: '/images/js-quiz.png',
    deployed_url: 'https://gfirik.github.io/quiz-app/',
    github_url: 'https://github.com/gfirik/quiz-app',
    category: ['vanilla js'],
    key_techs: ['JavaScript', 'SCSS']
  },
  {
    name: 'Todo List App', 
    description: 'Simple todo list app where you can save your todos and remove them as your daily reminder',
    image_path: '/images/ng-todo-list.png',
    deployed_url: 'https://ng-todo-list-app.netlify.app/',
    github_url: 'https://github.com/gfirik/ng-todo-app',
    category: ['angular'],
    key_techs: ['JavaScript', 'SCSS']
  },
];