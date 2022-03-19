import { IProject, IService, ISkill } from './types';
import { FaAngular, FaReact, FaVuejs } from "react-icons/fa";
import { HiAcademicCap } from 'react-icons/hi';
import { SiFirebase, SiHtml5, SiNextDotJs, SiJavascript, SiRedux, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { MdDevices, MdLanguage } from 'react-icons/md';
import { GiArchiveResearch } from 'react-icons/gi';
import { GrGraphQl } from 'react-icons/gr';

export const services:IService[] = [
      {
        Icon: FaReact,
        title: "React Development",
        about:
          "I can build a beautiful, scalable and responsive SPAs and PWAs using <b>React</b> and <b>Redux</b>. And I build full stack apps with React based frameworks <b>Next.js</b> and <b>Remix.js</b>.",
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
          "want to try <b>Rust, WASM</b> and <b>Dart</b> later on...",
      },
];

export const programmingLanguages:ISkill[] = [
  {
    Icon: SiJavascript,
    name: 'JavaScript', 
    level: '100%', 
  }, 
  {
    Icon: SiHtml5,
    name: 'HTML5, CSS3',
    level: '100%',
  },
  {
    Icon: SiTailwindcss,
    name: 'Tailwind CSS',
    level: '100%', 
  },
  {
    Icon: SiReact,
    name: 'React',
    level: '100%', 
  },
  {
    Icon: SiRedux,
    name: 'Redux',
    level: '100%',
  },
  {
    Icon: SiNextDotJs,
    name: 'Next.js',
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
    Icon: SiFirebase,
    name: 'Firebase',
    level: '100%',
  },
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
    id: 8,
    name: 'Amazon.com Clone Project | E-Commerce App',
    description: 'Amazon Clone Project with Google Authentication and Stripe Payment Process. ' +
        'Users can sign in with their Google Account, add products to their basket, and proceed the payment',
    image_path: '/images/amazonclone.png',
    deployed_url: 'https://amazonclonewebsite.netlify.app/',
    github_url: 'https://github.com/gfirik/amazon-clone',
    category: ['react'],
    key_techs: ['Next.js','Redux','Firebase','Tailwind','Stripe']
  },
  {
    id: 7,
    name: 'Share Ideas | Social Media Platform | CRUD App', 
    description: 'Share your ideas, get insights, read and post your thoughts. This app is basic social network platform where you can perform CRUD operations.',
    image_path: '/images/crud-ideas.png',
    deployed_url: 'https://share-ideas.vercel.app/',
    github_url: 'https://github.com/gfirik/crud-next-supabase',
    category: ['react'],
    key_techs: ['Next.js','Supabase', 'React', 'Tailwind']
  },
  {
    id: 6,
    name: 'Kanban Board App', 
    description: 'Task manager app that you can create, edit, and delete tasks. Tasks will be saved in your browser. This app was built in Vanilla JavaScript.',
    image_path: '/images/kanban.png',
    deployed_url: 'https://kanban-project.netlify.app/',
    github_url: 'https://github.com/gfirik/kanban-board',
    category: ['vanilla js'],
    key_techs: ['JavaScript', 'SCSS']
  },
  {
    id: 5,
    name: 'Quiz App via Trivia API', 
    description: 'In this app you will be able to test your basic knowledge by answering randomly selected questions.',
    image_path: '/images/react-ts-quiz.png',
    deployed_url: 'https://quiz-react-ts.netlify.app/',
    github_url: 'https://github.com/gfirik/quiz-react-ts',
    category: ['react'],
    key_techs: ['React','TypeScript', 'Styled Components']
  },
  {
    id: 4,
    name: 'Video Game Platform Application', 
    description: 'This app allows you to explore more than 350000+ video games. This app was built using Rapid API.',
    image_path: '/images/ng-game-db.png',
    deployed_url: 'https://ng-game-db.netlify.app/',
    github_url: 'https://github.com/gfirik/ng-game-db',
    category: ['angular'],
    key_techs: ['Angular','TypeScript', 'SCSS']
  },
  {
    id: 3,
    name: 'Todo App in Nuxt.js', 
    description: 'This app allows you to create a list of tasks and delete them. This app is developed using Nuxt.js, Vuetify and Vuex.',
    image_path: '/images/nuxt-todo.png',
    deployed_url: 'https://nuxt-vuex-todo-app.netlify.app/',
    github_url: 'https://github.com/gfirik/nuxt-vuex-todo-app',
    category: ['vue'],
    key_techs: ['Nuxt.js','Vuex', 'Vuetify', 'JavaScript']
  },
  {
    id: 2,
    name: 'Snake Game', 
    description: 'Old snake game that we used to play in Nokia 3310',
    image_path: '/images/snake-game.png',
    deployed_url: 'https://nokia-snake-game-js.netlify.app/',
    github_url: 'https://github.com/gfirik/snake-game-js',
    category: ['vanilla js'],
    key_techs: ['JavaScript', 'SCSS']
  },
  {
    id: 1,
    name: 'Web Page of Eduvive', 
    description: 'This webpage was created for Eduvive Education Center.',
    image_path: '/images/eduvive.png',
    deployed_url: 'https://eduvive.uz/',
    github_url: 'https://github.com/gfirik/eduvive',
    category: ['vanilla js'],
    key_techs: ['JavaScript','SCSS', 'Tilt.js', 'Swiper.js'],
  },
];