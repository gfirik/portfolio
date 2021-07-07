import { IService } from './type';
import { FaAngular, FaLaptopCode, FaReact, FaServer } from "react-icons/fa";
import { HiAcademicCap, HiTranslate } from 'react-icons/hi'

export const services:IService[] = [
    {
        Icon: FaReact,
        title: "React Development",
        about:
          "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
      },
      {
        Icon: FaAngular,
        title: "Angular Development",
        about:
          "handle database, server, api using <b>Express </b> & other popular frameworks",
      },
      {
        Icon: FaServer,
        title: "Backend Development",
        about:
            "handle database, server, api using <b>Express </b> & other popular frameworks",
      },
      {
        Icon: FaLaptopCode,
        title: "Full Time Learner",
        about: "a daily learner of new techs",
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
          "want to try ui&ux design and 3d modelling later on...",
      },
];