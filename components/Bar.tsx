import { FunctionComponent } from "react";
import { ISkill } from "../types";
import { motion } from "framer-motion";

const Bar:FunctionComponent<{
    data: ISkill
}> = ({data:{Icon, level, name}}) => {

    const bar_width = `${level}`;

    const variants = {
        initial: {
            width: 0,
        },
        animate: {
            width: bar_width,
            transition: {
                duration: 0.4,
                type:'string',
                damping: 40, 
                stiffness: 100,
            },
        }
    };

    return (
        <div className="my-2 rounded-full bg-white2">
            <motion.div 
                className="flex items-center px-4 py-1 text-white rounded-full bg-ming"
                style={{width: bar_width}}
                variants={variants}
                initial="initial"
                animate="animate"
            >
                <Icon className="mr-3" />
                {name}
            </motion.div>
        </div>
    )
}

export default Bar
