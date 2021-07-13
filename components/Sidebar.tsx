import Image from 'next/image';
import profilePic from '../public/avataaars.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';

const Sidebar = () => {

    const {theme, setTheme} = useTheme();

    const changeTheme = () => {
        setTheme(theme==='light'?'dark':'light');
    }

    return (
        <div className="flex flex-col p-5 text-center font-montserrat md:text-sm">
            <div className="w-32 h-32 mx-auto rounded-full">
                <Image 
                    src={profilePic} 
                    alt="avatar"
                />
            </div>
            <h2 className="my-4 text-3xl font-bold tracking-wider font-inconsolata">
                <span className="text-ming">Firdavs </span>
                Gafurjonov
            </h2>
            <p className="flex justify-center w-full px-2 py-1 my-3 rounded-full font-inconsolata">
                <code className="p-1 bg-white2 dark:text-black">#webDev</code>
            </p>
            <a 
                className="flex items-center justify-center px-2 py-1 my-3 text-white rounded-full bg-ming"
                href="" 
                download="CV_Firdavs_Gafurjonov"
            >
                <GiTie className="w-6 h-6"/>Download Resume
            </a>
            <div className="flex justify-around w-9/12 mx-auto my-5 transition duration-300 text-ming md:w-full">
                <a href="https://github.com/gfirik">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://www.linkedin.com/in/firdavs-gafurjonov/">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>
            <div className="flex flex-col items-center w-full ">
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Incheon, South Korea</span>
                </div>
                <p className="my-2">firdavs.gafurjonov@gmail.com</p>
            </div>
            <div className="flex flex-col items-center w-full">    
                <a 
                    className="w-8/12 p-2 my-2 text-black transition duration-300 bg-white rounded-full shadow-sm dark:hover:bg-ming dark:bg-black dark:text-white hover:shadow-none dark:shadow-darkSm hover:bg-ming hover:text-white focus:outline-none hover:outline-none"    
                    href="contact"
                >
                    Contact Me
                </a>
                <button 
                    className="w-8/12 p-2 my-2 text-black transition duration-300 bg-white rounded-full shadow-sm dark:hover:text-black dark:hover:bg-white dark:bg-black dark:text-white hover:shadow-none hover:bg-black hover:text-white focus:outline-none hover:outline-none dark:shadow-darkSm"
                    onClick={changeTheme}
                >
                    Change Mode
                </button>
            </div>
        </div>
    )
}

export default Sidebar