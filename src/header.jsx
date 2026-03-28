import { useState } from "react"
import JvLogo from "./assets/jvlogo.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Program", href: "#security" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Warrior", href: "#warrior" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999]">
      {/* ===== NAV BAR ===== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-3">
        <div
          className="flex items-center justify-between
          bg-[#070a11]/90 backdrop-blur-lg
          border border-white/10 rounded-lg
          px-6 py-3 shadow-lg"
        >
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img
              src={JvLogo}
              alt="JV Mastery Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* ===== DESKTOP NAV ===== */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-red-500 transition font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#auth"
              className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition font-medium"
            >
              Sign In
            </a>
          </nav>

          {/* ===== MOBILE BUTTON ===== */}
          <div className="flex items-center gap-4 md:hidden">
            <a
              href="#auth"
              className="text-white hover:text-red-500 transition font-medium text-sm"
            >
              Sign In
            </a>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-white text-2xl p-2"
              aria-label="Toggle navigation menu"
              type="button"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {isOpen && (
        <nav className="md:hidden bg-[#070a11]/95 backdrop-blur-lg border-b border-white/10">
          <div className="flex flex-col items-end py-6 gap-6 pr-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  // Slight delay prevents scroll cancellation on mobile
                  setTimeout(() => setIsOpen(false), 120)
                }}
                className="block py-3 px-4 text-white text-lg hover:text-red-500 transition"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#auth"
              onClick={() => {
                setTimeout(() => setIsOpen(false), 120)
              }}
              className="block py-3 px-4 text-white text-lg hover:text-red-500 transition font-medium"
            >
              Sign In
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}