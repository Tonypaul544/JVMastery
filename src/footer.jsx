import { motion } from 'framer-motion'
import JvLogo from './assets/jvlogo.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { 
      category: 'Program', 
      links: [
        { label: 'Home', href: '#home' },
        { label: 'Phase 1', href: '#phase1' },
        { label: 'Phase 2', href: '#phase2' },
        { label: 'Phase 3', href: '#phase3' }
      ] 
    },
    { 
      category: 'Learn', 
      links: [
        { label: 'Asset Protection', href: '#assetProtection' },
        { label: 'Tax Mitigation', href: '#taxMitigation' },
        { label: 'Staking Security', href: '#stakingSecurity' },
        { label: 'Why Warrior', href: '#whywarrior' }
      ] 
    },
    { 
      category: 'Support', 
      links: [
        { label: 'Contact Us', href: '#contact' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' }
      ] 
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <motion.footer
      id='contact!'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="bg-[#0a0d14] border-t border-white/10 py-16 px-4 md:px-8 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Logo and Description */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-12"
        >
          {/* Brand Section */}
          <div className="md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 mb-4"
            >
              <img src={JvLogo} alt="JV Mastery Logo" className="h-10 w-auto" />
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering financial warriors to achieve complete freedom through proven strategies and professional guidance.
            </p>
            <div className="flex gap-4 mt-6">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#EF4444' }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-600/30 transition-colors"
                  aria-label={social}
                >
                  {social === 'facebook' && '📘'}
                  {social === 'twitter' && '𝕏'}
                  {social === 'instagram' && '📷'}
                  {social === 'linkedin' && '💼'}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          {footerLinks.map((section) => (
            <motion.div key={section.category} variants={itemVariants}>
              <h4 className="text-white font-semibold text-lg mb-4">{section.category}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {currentYear} JV Mastery Academy. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
