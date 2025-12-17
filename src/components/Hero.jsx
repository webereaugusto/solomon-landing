import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section id="inicio" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
          alt="Loteamento"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-32 left-0 w-1/3 h-px bg-gradient-to-r from-gold/60 to-transparent" />
      <div className="absolute bottom-32 right-0 w-1/3 h-px bg-gradient-to-l from-gold/60 to-transparent" />

      {/* Content with scroll animation */}
      <motion.div 
        style={{ opacity, y }}
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-20"
      >
        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/30 
                         text-gold/80 text-xs tracking-[0.25em] uppercase font-sans
                         backdrop-blur-sm bg-navy/30 rounded-sm">
            <Sparkles className="w-3 h-3" />
            Excelência em Loteamentos
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white 
                     leading-[1.1] tracking-tight mb-8"
        >
          <span className="block">A solidez que transforma</span>
          <span className="block">
            <span className="text-gold">terra bruta</span> em
          </span>
          <span className="block text-gold">patrimônio seguro.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 
                     leading-relaxed"
        >
          Especialistas em loteamentos e regularização fundiária. Segurança jurídica 
          e execução técnica para proprietários de terras que valorizam a solidez 
          acima de tudo.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gold text-navy 
                       font-sans font-semibold text-sm tracking-wider uppercase
                       transition-all duration-300 hover:bg-bronze rounded-sm
                       shadow-lg shadow-gold/20"
          >
            Agendar Reunião
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8"
        >
          {['Compliance Total', 'Segurança Jurídica', 'Execução Técnica'].map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 text-white/60 text-xs tracking-widest uppercase font-sans"
            >
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gold/50">
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
