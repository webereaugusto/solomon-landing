import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const menuItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Mercado', href: '#mercado' },
  { label: 'Contato', href: '#contato' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

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
          <a href="#inicio" className="flex items-center gap-3">
            <img 
              src="/logot.png" 
              alt="Solomon" 
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-sm text-white/70 hover:text-gold 
                           transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <a
            href="#contato"
            className="hidden lg:inline-flex items-center px-6 py-2.5 border border-gold text-gold 
                       font-sans text-sm tracking-wider uppercase transition-all duration-300
                       hover:bg-gold hover:text-navy rounded-sm"
          >
            Fale com a Diretoria
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gold p-2"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Gold line accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#00192b] border-t border-gold/10"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="font-sans text-base text-white/80 hover:text-gold 
                               transition-colors duration-300 py-2 border-b border-white/5"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contato"
                  onClick={closeMobileMenu}
                  className="mt-4 inline-flex items-center justify-center px-6 py-3 
                             bg-gold text-navy font-sans font-semibold text-sm 
                             tracking-wider uppercase rounded-sm"
                >
                  Fale com a Diretoria
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
