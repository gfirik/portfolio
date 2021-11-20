import Bar from "../components/Bar";
import { languages, programmingLanguages } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";
import Head from "next/head";

const resume = () => {
    return (
        <motion.div className="px-6 py-2"
            variants={routeAnimation} initial="initial" animate="animate" exit="exit"
        >
            <Head>
                <link rel="icon" href="/iconLogo.png" />
                <title>Resume | Firdavs | Portfolio</title>
            </Head>
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h4 className="my-3 text-2xl font-bold">Education</h4>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Business Administration</h5>
                        <p className="font-semibold">Inha University, South Korea(since March, 2020)</p>
                        <p className="my-3">
                            I am currently pursuing my Bachelors degree in Business Administration from Inha University
                        </p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h4 className="my-3 text-2xl font-bold">Experience</h4>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Freelance Web Developer</h5>
                        <p className="font-semibold">esefGroup(December, 2020 ~ July, 2021)</p>
                        <p className="my-3">
                            Developed several landing pages and web applications for small business companies located in my hometown Bukhara.
                        </p>
                    </div>
                </motion.div>
            </div>
        
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className="my-2">
                        {programmingLanguages.map(planguage=>(
                            <Bar data={planguage} key={planguage.name}/>
                        ))}
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">World Languages</h5>
                    <div className="my-2">
                        {languages.map(language=>(
                            <Bar data={language} key={language.name}/>
                        ))}
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default resume
