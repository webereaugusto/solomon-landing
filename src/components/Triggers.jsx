import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Eye, Shield, Lightbulb, ArrowRight } from 'lucide-react'

const triggers = [
  {
    icon: Eye,
    title: 'Descubra o Potencial Oculto',
    description: 'Sua terra pode valer muito mais do que você imagina. Proprietários ficam surpresos ao descobrir o verdadeiro potencial de valorização de suas propriedades.',
    highlight: 'Análise gratuita revela oportunidades'
  },
  {
    icon: Shield,
    title: 'Proteção Total do seu Patrimônio',
    description: 'Enquanto você dorme, sua terra pode estar gerando renda. Com a estrutura certa, seu patrimônio fica blindado e trabalhando para você e sua família.',
    highlight: 'Segurança jurídica em cada etapa'
  },
  {
    icon: Lightbulb,
    title: 'O Segredo dos Grandes Investidores',
    description: 'Os maiores patrimônios do Brasil foram construídos com terra. O que eles sabem que você ainda não descobriu? Uma conversa pode mudar sua perspectiva.',
    highlight: 'Conhecimento que transforma realidades'
  }
]

const Triggers = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const phoneNumber = '5511999182008'
  const message = 'Olá! Quero descobrir o potencial da minha propriedade. Podem me ajudar?'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/bg10.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/90" />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold text-xs tracking-[0.3em] uppercase font-sans mb-4"
          >
            Por que agir agora?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight"
          >
            3 verdades que todo proprietário <br className="hidden md:block" />
            <span className="text-gold">precisa conhecer</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-px bg-gold mx-auto"
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {triggers.map((trigger, index) => {
            const Icon = trigger.icon
            return (
              <motion.div
                key={trigger.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-gold/20 
                           rounded-sm p-8 hover:border-gold/50 hover:bg-white/10
                           transition-all duration-500"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 
                                bg-gold/10 border border-gold/30 rounded-sm
                                group-hover:bg-gold/20 group-hover:border-gold/50
                                transition-all duration-300">
                  <Icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl lg:text-2xl text-white mb-4 leading-tight">
                  {trigger.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-white/70 leading-relaxed mb-6">
                  {trigger.description}
                </p>

                {/* Highlight */}
                <div className="flex items-center gap-2 text-gold text-sm font-sans">
                  <span className="w-8 h-px bg-gold/50" />
                  <span className="tracking-wide">{trigger.highlight}</span>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-30">
                  <div className="absolute top-3 right-3 w-px h-8 bg-gold" />
                  <div className="absolute top-3 right-3 h-px w-8 bg-gold" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="font-sans text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Uma simples conversa pode revelar oportunidades que você nunca imaginou. 
            <span className="text-white"> Sem compromisso, sem pressão.</span>
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gold text-navy 
                       font-sans font-bold text-sm tracking-wider uppercase
                       transition-all duration-300 hover:bg-bronze rounded-sm
                       shadow-xl shadow-gold/20"
          >
            Quero Descobrir o Potencial da Minha Terra
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <p className="mt-6 font-sans text-white/40 text-sm">
            Consultoria confidencial • Resposta em até 2 horas
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Triggers


