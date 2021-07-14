import React, { FunctionComponent, useState } from "react";
import { IProject } from "../types";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const ProjectCard:FunctionComponent<{
    project:IProject;
}> = ({
    project: {
        name, 
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs
    }
}) => {

    const [showDetail, setShowDetail] = useState(false);

    return (
        <div>
            <img src={image_path} alt={name} className="cursor-pointer" onClick={()=>setShowDetail(true)}/>
            <p className="my-2 text-center">{name}</p>
            {showDetail && (
                <div className="absolute left-0 z-10 grid w-full h-auto p-4 text-black bg-white shadow top-2 rounded-xl dark:shadow-dark md:grid-cols-2 gap-x-12 dark:text-white dark:bg-black">
                    <div>
                        <img src={image_path} alt={name}/>
                        <div className="flex justify-center my-4 space-x-3">
                            <a target="_blank" href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg text-white bg-ming">
                                <AiFillGithub className="w-8 h-8"/>
                                <span>Github</span>
                            </a>
                            <a target="_blank" href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg text-white bg-ming">
                                <AiFillProject className="w-8 h-8"/>
                                <span>Project</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-3 text-xl font-semibold md:text-2xl">{name}</h2>
                        <h3 className="mb-3 font-medium">{description}</h3>
                        <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                            {key_techs.map((tech)=> (
                                <span key={tech} 
                                    className="px-2 py-1 my-1 bg-white2 dark:bg-black2"
                                >{tech}</span>
                            ))}
                        </div>
                    </div>
                    <button className="absolute p-1 bg-white rounded-full shadow-sm dark:shadow-darkSm top-3 right-3 focus:outline-none dark:bg-black2" onClick={()=>setShowDetail(false)}>
                        <MdClose size={30} />            
                    </button>           
                </div>
            )}
        </div>
    )
};

export default ProjectCard;
