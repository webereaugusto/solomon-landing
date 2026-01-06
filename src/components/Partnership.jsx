import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Truck, Workflow, Trophy, PhoneCall } from 'lucide-react'

const Partnership = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const phoneNumber = '5511999182008'
  const message = 'Olá! Vi a parceria Solomon + Grupo Angelina e gostaria de saber mais sobre como desenvolver meu loteamento.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const cards = [
    {
      icon: Truck,
      title: 'Infraestrutura de Ponta',
      description: 'Frota moderna de escavadeiras, tratores de esteira e motoniveladoras'
    },
    {
      icon: Workflow,
      title: 'Execução Integrada',
      description: 'Do projeto à pavimentação, sem terceirizações — controle total'
    },
    {
      icon: Trophy,
      title: 'Track Record',
      description: '+250 projetos entregues com excelência em Campinas e região'
    }
  ]

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy py-20 lg:py-28">
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header with Logo */}
        <div className="text-center mb-12">
          {/* Pre-headline */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold text-xs tracking-[0.3em] uppercase font-sans mb-4"
          >
            Parceria Estratégica
          </motion.span>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4"
          >
            Parceria que <span className="text-gold">Constrói Legados</span>
          </motion.h2>

          {/* Subtitle with Angelina Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="font-sans text-gold/90 text-lg md:text-xl tracking-wide">
              Solomon + Grupo Angelina
            </span>
            <img 
              src="/logo-angelina.png" 
              alt="Logo Grupo Angelina" 
              className="h-8 md:h-10 w-auto opacity-90"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-white/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            A Solomon se une ao <strong className="text-white">Grupo Angelina</strong>, referência em infraestrutura pesada 
            com mais de <strong className="text-gold">12 anos de mercado</strong> e <strong className="text-gold">250+ projetos entregues</strong>. 
            Essa parceria estratégica garante que seu loteamento seja desenvolvido com a solidez de quem domina cada etapa.
          </motion.p>
        </div>

        {/* Image Gallery - Elegant Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-4 lg:gap-6 mb-16"
        >
          {/* Image 1 - Angelina Equipment */}
          <div className="relative group overflow-hidden rounded-sm">
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src="/angelina.webp" 
                alt="Equipamentos Grupo Angelina - Máquinas de Terraplenagem"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-sans text-white/90 text-sm font-medium">
                Frota Moderna & Equipada
              </p>
              <p className="font-sans text-white/60 text-xs mt-1">
                Escavadeiras, tratores e motoniveladoras de alta performance
              </p>
            </div>
            {/* Gold corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/50 
                            group-hover:border-gold transition-all duration-300" />
          </div>

          {/* Image 2 - Loteamento */}
          <div className="relative group overflow-hidden rounded-sm">
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src="/angelina-loteamentos.webp" 
                alt="Loteamento em Desenvolvimento - Parceria Solomon e Angelina"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-sans text-white/90 text-sm font-medium">
                Infraestrutura Completa
              </p>
              <p className="font-sans text-white/60 text-xs mt-1">
                Do projeto à entrega, com qualidade e pontualidade
              </p>
            </div>
            {/* Gold corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/50 
                            group-hover:border-gold transition-all duration-300" />
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-px bg-gold mx-auto mb-12"
        />

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group relative p-8 bg-white/5 backdrop-blur-sm border border-gold/20 
                         rounded-sm hover:border-gold/50 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gold/10 border border-gold/30 rounded-sm 
                              flex items-center justify-center mb-6 
                              group-hover:bg-gold/20 transition-all duration-300">
                <card.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl text-white mb-3">
                {card.title}
              </h3>
              <p className="font-sans text-white/70 text-sm leading-relaxed">
                {card.description}
              </p>

              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/20 
                              group-hover:border-gold/40 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA with Angelina Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
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
            Conheça Nossa Estrutura
          </a>

          <p className="mt-6 font-sans text-white/50 text-sm">
            Terraplenagem • Pavimentação • Infraestrutura Completa
          </p>

          {/* Subtle Angelina Logo at bottom */}
          <div className="mt-8 flex items-center justify-center gap-3 opacity-60">
            <span className="text-white/40 text-xs font-sans">Em parceria com</span>
            <img 
              src="/logo-angelina.png" 
              alt="Grupo Angelina" 
              className="h-6 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Partnership
