import Bar from "../components/Bar";
import { languages, programmingLanguages } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";
import Head from "next/head";

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <link rel="icon" href="/iconLogo.png" />
        <title>Resume | Firdavs | Portfolio</title>
      </Head>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="col-span-1 gap-6">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h4 className="my-3 text-2xl font-bold">Education</h4>
            <div>
              <h5 className="my-2 text-xl font-bold">
                Business Administration
              </h5>
              <p className="font-semibold">
                Inha University, South Korea (expected December, 2023)
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h4 className="my-3 text-2xl font-bold">Experience</h4>
            <div>
              <h5 className="my-2 text-xl font-bold">
                ---- Web3 Frontend Engineer
              </h5>
              <p className="font-semibold italic">
                T7T Blockchain Lab (September, 2022 ~ present)
              </p>
              <p className="my-3">
                Initially focused on front-end, using React.js, eCharts library
                to develop user home dashboard and analytics panel. Contributed
                to our back-end services for database, models and controllers
                built in Node.js (Express) with MongoDB.
              </p>
            </div>
            <div>
              <h5 className="my-2 text-xl font-bold">
                ---- React Developer Intern
              </h5>
              <p className="font-semibold italic">
                Vernora Limited (July, 2022 ~ August, 2022)
              </p>
              <p className="my-3">
                Participated in building the Front End development of an ongoing
                marketplace platform using React.js. Translated UIs into dynamic
                applications using React.js.
              </p>
            </div>
            <div>
              <h5 className="my-2 text-xl font-bold">
                ---- Junior Software Engineer
              </h5>
              <p className="font-semibold italic">
                SLEXN (April, 2022 ~ June, 2022)
              </p>
              <p className="my-3">
                Built monitoring apps using Codebeamer AML integration with
                Grafana & Loki and Retool. Developed full-stack application
                using MERN stack.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="col-span-1 gap-6">
          <div>
            <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
            <div className="my-2">
              {programmingLanguages.map((planguage) => (
                <Bar data={planguage} key={planguage.name} />
              ))}
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold">World Languages</h5>
            <div className="my-2">
              {languages.map((language) => (
                <Bar data={language} key={language.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
