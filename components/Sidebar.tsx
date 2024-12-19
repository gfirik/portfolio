import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

export const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex flex-col px-4 py-2 font-medium text-center font-montserrat md:text-sm">
      <div className="w-32 h-32 mx-auto rounded-full">
        <h4 className="font-medium text-8xl text-ming dark:bg-black">FG</h4>
      </div>
      <h2 className="my-3 text-3xl font-bold tracking-wider font-inconsolata">
        <span className="text-ming">Firdavs </span>
        Gafurjonov
      </h2>
      <p className="flex justify-center w-full my-3 text-lg font-inconsolata">
        <code className="px-2 py-1 bg-white2 dark:text-white dark:bg-black2">
          #softwareDeveloper
        </code>
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-2 text-white rounded-full bg-ming"
        href="./assets/Firdavs_Resume.pdf"
        download="Firdavs_Resume.pdf"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      <div className="flex justify-center w-9/12 mx-auto my-6 transition duration-300 text-ming md:w-full dark:text-white">
        <a
          target="_blank"
          href="https://github.com/gfirik"
          rel="noopener noreferrer"
          className="transition duration-100 transform hover:-translate-y-1"
        >
          <AiFillGithub className="w-10 h-10 mx-4 cursor-pointer" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/firdavs-gafurjonov/"
          rel="noopener noreferrer"
          className="transition duration-100 transform hover:-translate-y-1"
        >
          <AiFillLinkedin className="w-10 h-10 mx-4 cursor-pointer" />
        </a>
      </div>
      <div className="flex flex-col items-center w-full my-4">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Incheon, South Korea</span>
        </div>
        <p className="my-2">firdavs.gafurjonov@gmail.com</p>
      </div>
      <div className="flex flex-col items-center w-full">
        <button
          className="w-8/12 p-2 my-2 text-black transition duration-300 bg-white rounded-full shadow-sm dark:hover:bg-ming dark:bg-black dark:text-white hover:shadow-none dark:shadow-darkSm hover:bg-ming hover:text-white focus:outline-none hover:outline-none"
          onClick={() =>
            window.open(
              "mailto:firdavs.gafurjonov@gmail.com?subject=Mail from Porfolio"
            )
          }
        >
          Contact Me
        </button>
        <button
          className="w-8/12 p-2 my-2 text-black transition duration-300 bg-white rounded-full shadow-sm dark:hover:text-black dark:hover:bg-white dark:bg-black dark:text-white hover:shadow-none hover:bg-black hover:text-white focus:outline-none hover:outline-none dark:shadow-darkSm"
          onClick={changeTheme}
        >
          Change Mode
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
