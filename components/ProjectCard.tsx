import React, { FunctionComponent, useState } from "react";
import { IProject } from "../types";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

const ProjectCard:FunctionComponent<{
    project:IProject;
    showDetail: null|number,
    setShowDetail:(id:null|number) => void
}> = ({
    project: {
        name, 
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs,
        id,
    },
    showDetail, setShowDetail
}) => {

    return (
        <div>
            <Image 
                src={image_path} 
                alt={name} 
                className="cursor-pointer" 
                onClick={()=>setShowDetail(id)}
                layout='responsive'
                height='200'
                width='400'
            />
            <p className="my-2 text-center">{name}</p>
 
            {showDetail === id && (
                <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-4 text-black bg-white shadow md:p-10 rounded-xl dark:shadow-dark md:grid-cols-2 gap-x-12 dark:text-white dark:bg-black">
                    <motion.div variants={stagger} initial="initial" animate="animate">
                        <motion.div
                            variants={fadeInUp}
                            className="border-4 border-ming"
                        >
                            <Image
                                src={image_path}
                                alt={name}
                                layout="responsive"
                                height="150"    
                                width="300"
                            />
                        </motion.div>
                        <motion.div className="flex justify-center my-4 space-x-3" variants={fadeInUp}>
                            <a target="_blank" rel="noopener noreferrer" href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg text-white bg-ming">
                                <AiFillGithub className="w-8 h-8"/>
                                <span>Github</span>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg text-white bg-ming">
                                <AiFillProject className="w-8 h-8"/>
                                <span>Project</span>
                            </a>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={stagger} initial="initial" animate="animate">
                        <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-semibold md:text-2xl">{name}</motion.h2>
                        <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>
                        <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                            {key_techs.map((tech)=> (
                                <span key={tech} 
                                    className="px-2 py-1 my-1 bg-white2 dark:bg-black2"
                                >{tech}</span>
                            ))}
                        </motion.div>
                    </motion.div>
                    <button className="absolute p-1 bg-white rounded-full shadow-sm dark:shadow-darkSm top-3 right-3 focus:outline-none dark:bg-black2" 
                        onClick={()=>setShowDetail(null)}>
                        <MdClose size={30} />            
                    </button>           
                </div>
            )}
        </div>
    )
};

export default ProjectCard;
