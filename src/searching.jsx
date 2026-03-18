import { motion } from "framer-motion";
import portfolio from './assets/portfolio.png'
import jvlive from './assets/jvlive2.png'

export default function Searching() {
  return (
    <motion.section className="section w-full my-10 mx-auto px-4 sm:px-8 md:px-20 py-10 items-center justify-center max-w-7xl bg-[#180707] items-center">
      <h2 className="flex leading-none text-center mt-10! mb-5 items-center justify-center">The education community and support you've been searching for</h2>
      <p className="flex mt-0 w-full text-center! m-auto justify-center">Join the JV Academy and get exclusive access to a wealth of resources designed to accelerate your transformation.</p>

      <div className="flex flex-col w-full mt-10 items-center justify-center gap-5">
        <p><b className="text-[#CC0000]! font-bolder text-xl text-center justify-center flex mt-10">Included</b></p>
        <h1 className="">Coach JV's Professional portfolio</h1>
        <p className="">We believe in transparency. Get Instant access to CJV's personal investment portfolio. We share what's working, not theory</p>
        <br />
        <img src={portfolio} alt="Coach JV's Portfolio" className="w-100 h-130 mt-[-120px]" />
      </div>

      <div className="flex flex-col w-full mt-10 items-center justify-center gap-5">
        <p><b className="text-[#CC0000]! font-bolder text-xl text-center justify-center flex mt-10">Included</b></p>
        <h1 className="">Daily livestreams with Coach JV</h1>
        <p className="">Engage with our leaders and fellow members during live interactive training events & workshops.</p>
        <br />
        <img src={jvlive} alt="Coach JV's Portfolio" className="w-150 h-100 mt-[-50px]" />
      </div>
      <motion.button className="flex button bg-[#9F0000] hover:bg-red-600 text-white font-bold py-2 px-4 rounded m-auto! justify-center! w-[90%] mt-10! mx-auto items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Get Started Now!
      </motion.button>
    </motion.section>
  )
}