import Image from 'next/image'
import profilePic from '../public/avataaars.png'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {GiTie} from 'react-icons/gi';

const Sidebar = () => {
    return (
        <div>
            <div className="w-32 h-32 mx-auto rounded-full">
                <Image 
                    src={profilePic} 
                    alt="avatar"
                />
            </div>
            <h2 className="my-4 font-medium tracking-wider text-3x1 font-inconsolata">
                <span>Firdavs </span>
                Gafurjonov
            </h2>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Dev</p>
            <a 
                className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
                href="" 
                download="CV_Firdavs_Gafurjonov"
            >
                <GiTie className="w-6 h-6"/>Download Resume
            </a>
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
                <a href="https://github.com/gfirik">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://www.linkedin.com/in/firdavs-gafurjonov/">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>
            <div className="py-4 my-5 bg-gray-200" style={{marginLeft: '-1rem', marginRight:'-1rem'}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Incheon, South Korea</span>
                </div>
                <p className="my-2">firdavs.gafurjonov@gmail.com</p>
            </div>
            <button 
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-shadow-400 to-steel-600 focus:outline-none"
                onClick={() => window.open('mailto:firdavs.gafurjonov@gmail.com')}    
            >Email Me</button>
            <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-shadow-400 to-steel-600 focus:outline-none">Dark Mode</button>
        </div>
    )
}

export default Sidebar
