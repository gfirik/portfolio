import { projects as projectsData } from "../data"
import ProjectCard from "../components/ProjectCard"
import ProjectsNavbar from "../components/ProjectsNavbar"
import { useState } from "react"
import { Category } from "../types"

const Projects = () => {

    const[projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");
    
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
        <div className="px-6 py-4 overflow-y-scroll" style={{height:'55vh'}}>
            <ProjectsNavbar handlerFilterCategory={handlerFilterCategory}/>

            <div className="relative grid grid-cols-12 gap-4 my-3">
                {projects.map((project) => (
                    <div className="p-2 bg-white shadow-sm col-space-12 sm:col-span-6 lg:col-span-4 dark:bg-black2 dark:shadow-darkSm">
                        <ProjectCard project={project} key={project.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
