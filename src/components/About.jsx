import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Crown, BookOpen } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left side - Dark content */}
        <div className="bg-navy py-20 lg:py-32 px-6 lg:px-16 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32">
            <div className="absolute top-8 left-8 w-px h-16 bg-gold/30" />
            <div className="absolute top-8 left-8 h-px w-16 bg-gold/30" />
          </div>

          <div className="max-w-xl relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 text-gold text-xs 
                             tracking-[0.25em] uppercase font-sans">
                <Crown className="w-4 h-4" strokeWidth={1.5} />
                O Compromisso
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-8 
                         leading-tight"
            >
              Não apenas construímos.{' '}
              <span className="text-gold">Criamos legado.</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 h-px bg-gold mb-8 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-stone text-lg leading-relaxed mb-6"
            >
              Para o proprietário de terras que valoriza a segurança acima de tudo, 
              a Solomon representa a convergência entre sabedoria estratégica e 
              execução impecável.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-stone/80 leading-relaxed mb-10"
            >
              Nossa abordagem combina a prudência do sábio com a autoridade do 
              gestor. Cada decisão é fundamentada em análise rigorosa, cada ação 
              é executada com precisão institucional.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-8"
            >
              <div>
                <div className="font-serif text-4xl text-gold mb-1">100%</div>
                <div className="font-sans text-xs text-stone/60 tracking-wider uppercase">
                  Conformidade Legal
                </div>
              </div>
              <div>
                <div className="font-serif text-4xl text-gold mb-1">Total</div>
                <div className="font-sans text-xs text-stone/60 tracking-wider uppercase">
                  Transparência
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right side - Visual */}
        <div className="bg-navy-light py-20 lg:py-32 px-6 lg:px-16 
                        relative flex items-center justify-center">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-[0.04]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="diagonals" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0" stroke="#C8A15A" strokeWidth="0.5" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonals)" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-md text-center"
          >
            {/* Archetype symbols */}
            <div className="mb-12 flex justify-center gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border border-gold/40 rounded-sm flex items-center 
                                justify-center mb-3 bg-navy/50">
                  <BookOpen className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </div>
                <span className="font-serif text-sm text-gold/80">Sábio</span>
                <span className="font-sans text-[10px] text-stone/50 tracking-wider uppercase mt-1">
                  Sabedoria
                </span>
              </div>

              <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent 
                              self-center" />

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border border-gold/40 rounded-sm flex items-center 
                                justify-center mb-3 bg-navy/50">
                  <Crown className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </div>
                <span className="font-serif text-sm text-gold/80">Governante</span>
                <span className="font-sans text-[10px] text-stone/50 tracking-wider uppercase mt-1">
                  Controle
                </span>
              </div>
            </div>

            <blockquote className="font-serif text-2xl lg:text-3xl text-white/90 italic leading-relaxed">
              "O verdadeiro patrimônio é construído sobre fundações inabaláveis."
            </blockquote>

            <div className="mt-8 w-12 h-px bg-gold mx-auto" />

            <p className="mt-6 font-sans text-xs text-stone/50 tracking-[0.2em] uppercase">
              Filosofia Solomon
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
