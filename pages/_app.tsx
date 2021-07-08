import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-1 md:mb-8 xl:px-32 lg:px-32 sm:px-16 md:px-24 ">
    <div className="h-full col-span-12 p-4 text-base text-center bg-white shadow lg:col-span-3 rounded-2xl">
      <Sidebar />
    </div>
    <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow rounded-2xl lg:col-span-9">
      <Navbar />
      <Component {...pageProps} />
    </div>
  </div>
}
export default MyApp
