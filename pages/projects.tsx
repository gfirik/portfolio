import { projects as projectsData } from "../data"
import ProjectCard from "../components/ProjectCard"
import ProjectsNavbar from "../components/ProjectsNavbar"
import { useState } from "react"
import { Category } from "../types"
import { motion } from "framer-motion"
import { fadeInUp, routeAnimation, stagger } from "../animations"
import Head from "next/head";

const Projects = () => {

    const[projects, setProjects] = useState(projectsData);
    const[active, setActive] = useState("all");
    const[showDetail, setShowDetail] = useState<number | null>(null);

    const handlerFilterCategory = (category: Category | 'all') => {
        if(category==='all'){
            setProjects(projectsData);
            setActive(category);
            return;
        }

        const newArray = projectsData.filter((project)=>project.category.includes(category));
        setProjects(newArray);
        setActive(category);
    }

    return (
        <motion.div className="px-6 py-4 overflow-y-scroll" style={{height:'55vh'}}
            variants={routeAnimation} initial="initial" animate="animate" exit="exit"
        >
            <Head>
                <title>Web Developer | Project | Firdavs</title>
            </Head>
            <ProjectsNavbar 
                handlerFilterCategory={handlerFilterCategory}
                active={active}
            />

            <motion.div
                className="relative grid grid-cols-12 gap-4 my-3"
                variants={stagger} 
                initial="initial" 
                animate="animate"
            >
                {projects.map((project) => (
                    <motion.div 
                        variants={fadeInUp}
                        className="col-span-12 p-2 bg-white shadow-sm sm:col-span-6 lg:col-span-4 dark:bg-black2 dark:shadow-darkSm"
                        key={project.name}
                    >
                        <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Projects;
