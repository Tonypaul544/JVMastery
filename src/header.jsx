import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useState } from 'react';
import logo from './assets/coachjvlogo.webp';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Program', href: '#program' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Warrior', href: '#warrior' }
  ];

  const scrollToSection = (event, hash) => {
    event.preventDefault();
    const target = document.querySelector(hash);
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 m-auto w-[100vw]"
    >
      {/* <div className="max-w-6xll items-center justify-center mx-auto px-6 py-4 bg-red-500"> */}
        <div className="flex items-center bg-[#070a11]/80 backdrop-blur-lg border-b border-white/10 justify-between m-auto max-sm:px-4 max-sm:py-3 max-sm:mx-2 rounded-lg max-h-15 max-sm:max-h-12 px-6 py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <div className="flex m-auto items-center gap-2">
              <img
              src={logo}
              alt="JV Mastery Logo"
              className="h-7 w-auto"
            />
            <h1 className="font-bold text-white text-[22px]! ml-2">JV Mastery</h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 my-auto">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(event) => scrollToSection(event, item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + index * 0.1, duration: 0.2 }}
                whileHover={{ scale: 1.1, color: '#ef4444'}}
                className="text-white hover:text-red-500 transition-colors duration-300"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden fixed top-[30px] left-0 right-0 z-40 bg-[#070a11]/80 backdrop-blur-lg border-b border-white/10 max-sm:mx-2 rounded-b-lg"
        >
          <div className="py-4 space-y-4 flex flex-col items-center">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                onClick={(event) => scrollToSection(event, item.href)}
                className="block text-white hover:text-red-500 transition-colors duration-300 text-center w-full py-2 px-4 rounded-md hover:bg-white/10"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.nav>
      {/* </div> */}
    </motion.header>
  );
}
