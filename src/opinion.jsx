import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import pfp1 from "./assets/pfp1.jpg"
import pfp4 from "./assets/pfp4.jpg"
import pfp3 from "./assets/pfp3.jpg"
import pfp5 from "./assets/pfp5.jpg"

export default function Opinion() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <div
      ref={ref}
      className="flex flex-col gap-6 py-10 mx-auto px-4 sm:px-8 md:px-20 items-center justify-center bg-[#010101] rounded-2xl max-w-7xl w-full"
    >
      {/* ===== HEADER ===== */}

      <motion.h1
        className="text-white text-3xl font-bold text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Over 12,000 financial warriors have taken the{" "}
        <b className="text-[#CC0000]">5P Framework</b> and transformed their
        financial lives.
      </motion.h1>

      <motion.p
        className="text-gray-300 text-lg text-center max-w-4xl"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Now it's your turn! Join the movement and take control of your financial
        future today!
      </motion.p>

      {/* ===== CARDS ===== */}

      <div className="flex flex-wrap w-full justify-center gap-5 items-center flex-col lg:flex-row">

        {/* Card 1 */}
        <motion.div
          className="flex flex-col w-[400px] h-[430px] gap-4 items-center justify-center text-center bg-gray-500/15 p-5 rounded-lg max-w-md"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.img
            src={pfp1}
            alt="Logan Mitchell"
            className="w-48 h-48 rounded-full object-cover max-md:w-[200px] max-md:h-[200px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          />
          <motion.h2
            className="!text-3xl !font-bold !text-[#CC0000]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Logan Mitchell
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            "I wholeheartedly support this academy and am sharing it with those who are ready to explore a place of healing. You will change the world and make planet Earth a place of love and connection over the long term."
          </motion.p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="flex flex-col w-[400px] h-[430px] gap-4 items-center justify-center text-center bg-gray-500/15 p-5 rounded-lg max-w-md"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.img
            src={pfp4}
            alt="Chloe Bennett"
            className="w-48 h-48 rounded-full object-cover max-md:w-[200px] max-md:h-[200px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          />
          <motion.h2
            className="!text-3xl !font-bold !text-[#CC0000]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Chloe Bennett
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            "Joining the #3TWarriorAcademy and the 120 Day Challenge has been one of the best decisions I've made. CJV, I can't thank you enough for changing my life and being such an inspiration to all of us."
          </motion.p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="flex flex-col w-[400px] h-[430px] gap-4 items-center justify-center text-center bg-gray-500/15 p-5 rounded-lg max-w-md"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.img
            src={pfp3}
            alt="Dylan Parker"
            className="w-48 h-48 rounded-full object-cover max-md:w-[200px] max-md:h-[200px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          />
          <motion.h2
            className="!text-3xl font-bold !text-[#CC0000]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Dylan Parker
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            "What I find most valuable in the 3T Warrior Academy is I get to meet new friends all over this world. that have similar stories and was able to rise and not give up."
          </motion.p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="flex flex-col w-[400px] h-[430px] gap-4 items-center justify-center text-center bg-gray-500/15 p-5 rounded-lg max-w-md"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.img
            src={pfp5}
            alt="Owen Carter"
            className="w-48 h-48 rounded-full object-cover max-md:w-[200px] max-md:h-[200px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          />
          <motion.h2
            className="!text-3xl font-bold !text-[#CC0000]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Owen Carter
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            "What I find most valuable in the 3T Warrior Academy is I get to meet new friends all over this world. <br />that have similar stories and was able to rise and not give up. "
          </motion.p>
        </motion.div>

      </div>
    </div>
  )
}