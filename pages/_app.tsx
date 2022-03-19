import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute='class'>  
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48">
        <div className="h-full col-span-12 p-4 text-base text-center bg-white shadow lg:col-span-3 rounded-2xl dark:text-white dark:bg-black dark:shadow-dark">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow rounded-2xl lg:col-span-9 dark:shadow-dark dark:text-white dark:bg-black">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route}/>
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default MyApp;