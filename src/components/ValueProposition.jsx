import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Building2, TrendingUp } from 'lucide-react'

const cards = [
  {
    icon: Shield,
    title: 'Credibilidade & Reputação',
    description: 'Parcerias construídas sobre a base da confiança absoluta. Atuamos com transparência total, proteção patrimonial e processos auditáveis em cada etapa.',
    accent: 'Risco Zero'
  },
  {
    icon: Building2,
    title: 'Execução & Compliance',
    description: 'Rigor técnico e conformidade legal em cada projeto. Todas as aprovações, licenças e registros conduzidos com excelência metodológica.',
    accent: 'Precisão Total'
  },
  {
    icon: TrendingUp,
    title: 'Solidez Patrimonial',
    description: 'Transformamos glebas em ativos de alto valor agregado. Estruturação que maximiza retorno e garante liquidez ao seu patrimônio.',
    accent: 'Valor Duradouro'
  }
]

const Card = ({ card, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = card.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-white border border-gold/20 rounded-sm p-8 lg:p-10
                 hover:border-gold/50 transition-all duration-300
                 hover:shadow-xl hover:shadow-gold/10"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-px h-8 bg-gold/30" />
        <div className="absolute top-0 right-0 h-px w-8 bg-gold/30" />
      </div>

      {/* Icon */}
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 
                      border border-gold/30 rounded-sm
                      group-hover:border-gold group-hover:bg-gold/5 
                      transition-all duration-300">
        <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
      </div>

      {/* Accent tag */}
      <div className="mb-4">
        <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans font-semibold">
          {card.accent}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-2xl text-navy mb-4 group-hover:text-navy-light 
                     transition-colors duration-300">
        {card.title}
      </h3>

      {/* Description */}
      <p className="font-sans text-stone leading-relaxed">
        {card.description}
      </p>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r 
                      from-transparent via-gold/30 to-transparent" />
    </motion.div>
  )
}

const ValueProposition = () => {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: '-100px' })

  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-mineral relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold text-xs tracking-[0.25em] uppercase font-sans mb-4"
          >
            Por que Solomon
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-6"
          >
            Pilares de Excelência
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-px bg-gold mx-auto"
          />
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <Card key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProposition
