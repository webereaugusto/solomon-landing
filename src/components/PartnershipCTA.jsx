import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { PhoneCall, ArrowRight } from 'lucide-react'

const PartnershipCTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const phoneNumber = '5511999182008'
  const message = 'Olá! Tenho interesse em saber mais sobre como desenvolver meu loteamento com a Solomon e Grupo Angelina.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-offwhite overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Pre-headline */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-gold text-xs tracking-[0.3em] uppercase font-sans mb-6"
        >
          Oportunidade Única
        </motion.span>

        {/* Main headline - Gatilho */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-6"
        >
          Sua terra pode valer <span className="text-gold">muito mais</span> do que você imagina.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-gray text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Descubra em uma conversa gratuita o potencial de transformação 
          da sua propriedade em um empreendimento lucrativo.
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
            className="group inline-flex items-center gap-3 px-10 py-5 bg-navy text-white 
                       font-sans font-bold text-sm tracking-wider uppercase
                       transition-all duration-300 hover:bg-petrol rounded-sm
                       shadow-xl shadow-navy/20"
          >
            <PhoneCall className="w-5 h-5" strokeWidth={2} />
            Quero Avaliar Minha Propriedade
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Trust badge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 font-sans text-gray/70 text-sm"
        >
          Consultoria confidencial • Sem compromisso • Resposta em até 2 horas
        </motion.p>
      </div>
    </section>
  )
}

export default PartnershipCTA

