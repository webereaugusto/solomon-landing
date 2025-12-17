import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { PhoneCall } from 'lucide-react'

const CallToAction = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const phoneNumber = '5511999182008'
  const message = 'Olá! Quero dar o primeiro passo para transformar minha propriedade em uma fonte de renda. Podem me ajudar?'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2873&auto=format&fit=crop"
          alt="Oportunidade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-20">
        {/* Pre-headline */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-gold text-xs tracking-[0.3em] uppercase font-sans mb-6"
        >
          Não espere mais
        </motion.span>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white 
                     leading-tight mb-6"
        >
          O melhor momento para <br className="hidden md:block" />
          <span className="text-gold">transformar sua terra</span> <br className="hidden md:block" />
          é <span className="italic">agora</span>.
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 
                     leading-relaxed"
        >
          Cada dia que passa é uma oportunidade perdida. Proprietários como você já estão 
          colhendo os frutos de parcerias sólidas. <strong className="text-white">Dê o primeiro passo hoje</strong> e 
          comece a construir o futuro que sua família merece.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-24 h-px bg-gold mx-auto mb-10"
        />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-navy 
                       font-sans font-bold text-sm tracking-wider uppercase
                       transition-all duration-300 hover:bg-bronze rounded-sm
                       shadow-xl shadow-gold/30"
          >
            <PhoneCall className="w-5 h-5" strokeWidth={2} />
            Falar com Especialista Agora
          </a>
        </motion.div>

        {/* Trust text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 font-sans text-white/50 text-sm"
        >
          Atendimento personalizado • Análise gratuita • Sem compromisso
        </motion.p>
      </div>
    </section>
  )
}

export default CallToAction

