import heroImg from './assets/coachjvlogo.webp'
import './App.css'
import Baseline from './baseline'
import Freedom from './freedom'

export default function App() {
  return (
    <main className="min-h-screen bg-[#070a11] text-white">
      <section className="relative overflow-hidden hero-bg flex flex-col items-center m-auto justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/90" />
        <div className="relative max-sm:w-100 mt-5 max-sm:flex-col-reverse max-sm:w-auto max-sm:w-50 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center gap-5 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-24">
          <div className="max-w-xl text-white text-center lg:text-left">
            <h1 className="text-xl font-semibold leading-tight tracking-tight sm:text-3xl w-full p-4 rounded-lg">
              {/* <span className="block text-white text-5xl"></span> */}
              <span className="block text-white text-5xl max-sm:text-4xl">JV Mastery Program</span>
              <span className="block text-2xl max-sm:text-red-500! text-red-500 max-sm:text-md  max-sm:mt-2">Coach Jv Academy</span>
              {/* <span className="block text-white text-5xl">CoachJv</span>
              <span className="block text-white text-5xl">Academy</span> */}
            </h1>

            <p className="mt-10 text-lg leading-relaxed text-white/80">
              <span className="font-bold text-white-500">
                Ready to take your future into your own hands?
              </span>{' '} <br />
              Dive into the proven process for reaching the peak of personal and
              financial freedom with the Warrior Academy.
            </p>

            <button className="mt-6 inline-flex items-center justify-center rounded-xl bg-red-600 px-10 py-2 text-lg font-semibold shadow-lg shadow-red-600/40 transition hover:bg-red-700">
              Sign Up Today
            </button>
          </div>

          <div className="relative flex w-full max-w-sm items-center justify-center lg:max-w-md">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-red-600/20 via-black/30 to-black/80 blur-3xl" />
            <img
              className="relative max-sm:w-[220px] w-[320px] max-w-full rounded-3xl shadow-[0_24px_80px_-20px_rgba(0,0,0,0.6)]"
              src={heroImg}
              alt="Warrior Academy logo"
            />
          </div>
        </div>
        <Baseline />

        <Freedom />
        
      </section>
    </main>
  )
}
