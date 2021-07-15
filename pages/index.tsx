//import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";
import { NextPage } from "next";

const About: NextPage = () => {

  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation} initial="initial" animate="animate" exit="exit"
    >
      <h4 className="my-2 font-medium">
          <span className="font-mono text-xl font-extrabold text-ming">&lt;p&gt;</span> 
            I am high passionate self-taught web developer focused on front end development 
            with a great talent and creative experience in the field.
          <span className="text-xl font-extrabold text-ming">&lt;/p&gt;</span>
      </h4>
      <div 
        className="flex-grow p-4 mt-5 bg-ming"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem'}}
      >
        <h5 className="my-5 text-2xl tracking-wider text-white">Who I Am?</h5>
        <motion.div 
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger} 
          initial="initial" 
          animate="animate"
        >
          { services.map((service)=>(
            <motion.div 
              variants={fadeInUp}
              key={service.title} 
              className="bg-white rounded-lg dark:bg-black lg:col-span-1 dark:shadow-insetDark shadow-inset"
            >
              <ServiceCard service={service}/>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

// export const getServerSideProps = async (
//   context:GetServerSidePropsContext
// ) => {
  
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   console.log('SERVER', services);

//   return {
//     props: {
//       services: data.services,

//     }
//   }
// }

// export const getStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
  
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   console.log('SERVER', services);

//   return {
//     props: {
//       services: data.services,

//     }
//   }
// }