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
            <h2 className="my-4 text-3x1 font-medium tracking-wider font-inconsolata">
                <span>Firdavs </span>
                Gafurjonov
            </h2>
            <p className="my-3 py-1 px-2 bg-gray-200 rounded-full">Web Dev</p>
            <a 
                className="my-3 py-1 px-2 bg-gray-200 rounded-full flex items-center justify-center"
                href="" 
                download="CV_Firdavs_Gafurjonov"
            >
                <GiTie className="w-6 h-6"/>Download Resume
            </a>
            <div className="flex justify-around my-5 text-green-500 w-9/12 md:w-full mx-auto">
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
            <button className="bg-gradient-to-r from-green-600 to-blue-500 w-8/12 rounded-full py-2 px-5 text-white my-2">Email Me</button>
            <button className="bg-gradient-to-r from-green-600 to-blue-500 w-8/12 rounded-full py-2 px-5 text-white my-2">Dark Mode</button>
        </div>
    )
}

export default Sidebar
