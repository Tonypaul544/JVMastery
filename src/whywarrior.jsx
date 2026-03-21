
import { motion, useInView } from 'framer-motion' // eslint-disable-line no-unused-vars
import { useRef } from 'react'
import Protection from './assets/protection.png'
import TaxMitigation from './taxMitigation.jsx'
import AssetProtection from './assetProtection.jsx'
import DirectQuantum from './directQuantum.jsx'
import StakingSecurity from './stakingSecurity.jsx'

export default function whyWarrior() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="flex flex-col w-full items-center justify-center gap-10 py-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="why-warrior flex flex-col gap-6 mx-auto px-4 sm:px-8 md:px-20 items-center justify-center py-3 h-auto bg-[#070A11] rounded-2xl max-w-7xl w-full py-2"
      >
        <h1 className="!text-[#CC0000] text-3xl font-bold text-center">
          Why Become a Financial Warrior ?
        </h1>
        <p className="text-gray-300 text-lg text-center max-w-4xl">
          Digital assets have great opportunities but alongside these opportunities comes with important responsibilities related to taxation, custody, security, and long-term asset protection. <br />Many digital asset holders focus heavily on portfolio growth while overlooking the systems required to preserve that wealth. At 3T warrior Academy, we give great attention to these two things making sure our partners get great security protection while also earning passive income.
        </p>
        <p className="text-gray-300 text-lg text-center max-w-4xl">
          The goal is to help investors move beyond simply acquiring digital assets to thinking of security for both their long term and short term holdings. Whether you hold a small portfolio or a more substantial allocation we are here for you
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col gap-1 pt-0 px-10"
      >
        {/* <h1 className="text-3xl font-bold text-center !mb-5 !text-[#CC0000]">
          Purpose of This Playbook
        </h1> */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -35 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex w-full gap-5 mt-5 justify-center max-md:flex-col max-md:flex-col-reverse !w-[95vw] !py-5 items-center flex-col lg:flex-row !max-md:py-0!"
        >
          <div className="flex flex-col text-gray-800 min-w-[50%] max-w-4xl m-auto bg-gray-600/20 w-[100%] max-md:h-full max-md:py-5 h-[400px] itens-center flex flex-col justify-center rounded-2xl !px-8 justify-center">
            <h2 className="max-md:text-center !mb-[30px] !text-[#CC0000]">
              Purpose of This Playbook
              </h2>
            <ul className="list-disc pl-6 space-y-2 !max-md:h-full text-gray-300 text-lg">
              <li
              ref={ ref }
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              >Understand common tax exposures associated with digital asset activity</li>
              <li>Explore practical tax mitigation strategies</li>
              <li>Strengthen custody and wallet security practices</li>
              <li>Reduce risks related to exchanges and counterparties</li>
              <li>Access monthly profit gain while maintaining capital</li>
              <li>adopt a more structured approach to protecting digital wealth</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex w-full justify-center w-[50%] !m-auto h-[400px] itens-center flex flex-col justify-center rounded-2xl mt-[20px]"
          >
            <motion.img
              src={Protection}
              alt="financial Protection symbol"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='w-[100%] h-[300px] h-full rounded-2xl max-md:w-[100%] max-md:h-[250px] object-cover'
            />
          </motion.div>
       </motion.div>
      </motion.div>
    <TaxMitigation />
    <AssetProtection />
    <DirectQuantum />
    <StakingSecurity />
  </motion.div>
  )
}