import heroImg from './assets/coachjvlogo.webp'
import './App.css'
import Baseline from './baseline'
import Freedom from './freedom'
import Header from './header'
import { motion, useInView } from 'framer-motion' // eslint-disable-line no-unused-vars
import { useRef } from 'react'

export default function App() {
  return (
    <main className="min-h-screen bg-[#070a11] text-white">
      <Header />
      <HeroSection />
      <BaselineSection />
      <FreedomSection />
    </main>
  )
}

function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden hero-bg flex flex-col items-center m-auto justify-center"
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/90" />
      <div className="relative mt-5 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center gap-5 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-24 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl text-white text-center lg:text-left w-full"
        >
          <h1 className="text-xl font-semibold leading-tight tracking-tight sm:text-3xl p-4 rounded-lg">
            <span className="block text-white text-5xl max-md:text-4xl max-sm:text-3xl">JV Mastery Program</span>
            <span className="block text-2xl text-red-500 max-sm:text-lg max-sm:mt-2">Coach Jv Academy</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 text-lg leading-relaxed text-white/80"
          >
            <span className="font-bold text-white-500">
              Ready to take your future into your own hands?
            </span>{' '} <br />
            Dive into the proven process for reaching the peak of personal and
            financial freedom with the Warrior Academy.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#BE0101] px-10 py-2 text-lg font-semibold shadow-lg shadow-red-600/40 transition hover:bg-red-700"
          >
            Sign Up Today
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex w-full max-w-sm items-center justify-center lg:max-w-md"
        >
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-red-600/20 via-black/30 to-black/80 blur-3xl" />
          <img
            className="relative max-sm:w-[220px] w-[320px] max-w-full rounded-3xl shadow-[0_24px_80px_-20px_rgba(0,0,0,0.6)]"
            src={heroImg}
            alt="Warrior Academy logo"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

function BaselineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="program"
    >
      <Baseline />
    </motion.div>
  )
}

function FreedomSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="about"
    >
      <Freedom />
    </motion.div>
  )
}
