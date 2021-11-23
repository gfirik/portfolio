import { IProject, IService, ISkill } from './types';
import { FaAngular, FaReact, FaVuejs } from "react-icons/fa";
import { HiAcademicCap } from 'react-icons/hi';
import { SiAngular, SiJavascript, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { MdDevices, MdLanguage } from 'react-icons/md';
import { GiArchiveResearch } from 'react-icons/gi';
import { GrGraphQl } from 'react-icons/gr';

export const services:IService[] = [
      {
        Icon: FaReact,
        title: "React Development",
        about:
          "I can build a beautiful, scalable and responsive SPAs and mobile apps using <b>React.js</b> and <b>React Native</b>. And I build full stack apps with React based frameworks <b>Next.js</b> and <b>Blitz.js</b>.",
      },
      {
        Icon: FaAngular,
        title: "Angular and Vue.js Development",
        about:
          "I use <b>Angular</b> and <b>Vue.js</b> frameworks to build PWA, SPA and user interfaces by utilizing their awesome built-in functions and capabilities.",
      },
      
      {
        Icon: GrGraphQl,
        title: "GraphQL Development",
        about:
          "<b>Apollo GraphQL</b> is my favourite  tool for working with APIs and storing data from server to client.",
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
        about: "a daily learner of new techs, <b>freeCodeCamp</b>, <b>Coursera</b> and <b>edX</b> student, doing master's at <b>YouTube</b> university.",
      },
      {
        Icon: GiArchiveResearch,
        title: "loading...",
        about:
          "want to try <b>Rust</b> and <b>Dart</b> later on...",
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
    name: 'React',
    level: '100%', 
  },
  {
    Icon: SiAngular,
    name: 'Angular',
    level: '100%', 
  },
  {
    Icon: FaVuejs,
    name: 'Vue.js',
    level: '100%', 
  },
  {
    Icon: GrGraphQl,
    name: 'GraphQL',
    level: '100%', 
  },
  {
    Icon: SiTypescript,
    name: 'TypeScript',
    level: '100%', 
  },
  {
    Icon: SiTailwindcss,
    name: 'Tailwind',
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
    id: 12,
    name: 'Share Ideas | CRUD App', 
    description: 'Share your ideas, get insights, read and post your thoughts. This app is basic social network platform where you can perform CRUD operations.',
    image_path: '/images/crud-ideas.png',
    deployed_url: 'https://share-ideas.vercel.app/',
    github_url: 'https://github.com/gfirik/crud-next-supabase',
    category: ['react'],
    key_techs: ['Next.js','Supabase', 'React', 'Tailwind']
  },
  {
    id: 11,
    name: 'Quiz App with Trivia API', 
    description: 'In this app you will be able to test your basic knowledge by answering randomly selected questions.',
    image_path: '/images/react-ts-quiz.png',
    deployed_url: 'https://quiz-react-ts.netlify.app/',
    github_url: 'https://github.com/gfirik/quiz-react-ts',
    category: ['react'],
    key_techs: ['React','TypeScript', 'Styled Components']
  },
  {
    id: 10,
    name: 'Video Game Database Application', 
    description: 'This app allows you to explore more than 350000+ video games. This app was built using Rapid API.',
    image_path: '/images/ng-game-db.png',
    deployed_url: 'https://ng-game-db.netlify.app/',
    github_url: 'https://github.com/gfirik/ng-game-db',
    category: ['angular'],
    key_techs: ['Angular','TypeScript', 'SCSS']
  },
  {
    id: 9,
    name: 'Todo App in Nuxt.js', 
    description: 'This app allows you to create a list of tasks and delete them. This app is developed using Nuxt.js, Vuetify and Vuex.',
    image_path: '/images/nuxt-todo.png',
    deployed_url: 'https://nuxt-vuex-todo-app.netlify.app/',
    github_url: 'https://github.com/gfirik/nuxt-vuex-todo-app',
    category: ['vue'],
    key_techs: ['Nuxt.js','Vuex', 'Vuetify', 'JavaScript']
  },
  {
    id: 8,
    name: 'Catstronauts App', 
    description: 'Full Stack app developed with Apollo GraphQL team while taking their online course.',
    image_path: '/images/catstronauts.png',
    deployed_url: 'https://client-cats-tronauts.herokuapp.com/',
    github_url: 'https://github.com/gfirik/odyssey-lift-off-part5-client',
    category: ['react'],
    key_techs: ['React', 'GraphQL', 'Node']
  },
  {
    id: 7,
    name: 'Snake Game', 
    description: 'Old snake game that we used to play in Nokia 3310',
    image_path: '/images/snake-game.png',
    deployed_url: 'https://nokia-snake-game-js.netlify.app/',
    github_url: 'https://github.com/gfirik/snake-game-js',
    category: ['vanilla js'],
    key_techs: ['JavaScript', 'SCSS']
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