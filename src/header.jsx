import { useState } from "react"
// import logo from "./assets/coachjvlogo.webp"
import JvLogo from "./assets/jvlogo.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Program", href: "#program" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Warrior", href: "#warrior" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed mt-[-5px] left-0 right-0 z-50">

      {/* ===== NAV BAR ===== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-3">

        <div className="flex items-center justify-between
          bg-[#070a11]/80 backdrop-blur-lg
          border border-white/10 rounded-lg
          px-6 py-3">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src={JvLogo} alt="JV Mastery Logo" className="h-10 w-auto" />
            {/* <img src={ JvLogo} alt="3T Warrior Logo" className="w-full h-45" /> */}
          </div>

          {/* ===== DESKTOP NAV ===== */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white !hover:text-red-500 transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* ===== MOBILE BUTTON ===== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {isOpen && (
        <nav className="md:hidden bg-[#070a11]/95 backdrop-blur-lg border-b border-white/10">

          <div className="flex flex-col items-center py-6 gap-6">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg hover:text-red-500"
              >
                {item.name}
              </a>
            ))}

          </div>
        </nav>
      )}

    </header>
  )
}