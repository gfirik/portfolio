import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <link rel="icon" href="/iconLogo.png" />
        <title>
          Firdavs Gafurjonov | Portfolio | Front End Dev | Full Stack Dev
        </title>
      </Head>
      <h4 className="my-2 font-medium">
        <span className="font-mono text-xl font-extrabold text-ming">
          &lt;p&gt; &nbsp;
        </span>
        I&apos;m a <b>Software Developer</b> from Bukhara, Uzbekistan, with 1+
        year of experience in full-stack development using <b>React</b>,{" "}
        <b>Next.js</b>, and <b>Node.js</b>. I build user-friendly apps and
        Telegram bots that solve real-world problems.
        <span className="text-xl font-extrabold text-ming">
          &nbsp;&lt;/p&gt;
        </span>
      </h4>
      <div
        className="flex-grow p-4 mt-5 bg-ming"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h5 className="my-5 text-2xl tracking-wider text-white">What I do?</h5>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              key={service.title}
              className="bg-white rounded-lg dark:bg-black lg:col-span-1 dark:shadow-insetDark shadow-inset"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
