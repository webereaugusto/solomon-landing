import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#00192b]/95 backdrop-blur-md shadow-lg shadow-[#00192b]/30' 
          : 'bg-[#00192b]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src="/logot.png" 
              alt="Solomon" 
              className="h-16 w-auto"
            />
          </a>

          {/* CTA Button */}
          <a
            href="#contato"
            className="hidden sm:inline-flex items-center px-6 py-2.5 border border-gold text-gold 
                       font-sans text-sm tracking-wider uppercase transition-all duration-300
                       hover:bg-gold hover:text-navy rounded-sm"
          >
            Fale com a Diretoria
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="sm:hidden text-gold p-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Gold line accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </motion.header>
  )
}

export default Header
