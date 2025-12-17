import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Scale, Map, FileCheck, HardHat, LineChart } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Scale,
    title: 'Análise Jurídica',
    description: 'Due diligence completa da propriedade. Verificação de matrículas, pendências e viabilidade legal do empreendimento.',
    detail: 'Segurança Documental'
  },
  {
    number: '02',
    icon: Map,
    title: 'Planejamento Urbanístico',
    description: 'Projeto técnico alinhado às diretrizes municipais. Estudos de viabilidade e desenho do loteamento.',
    detail: 'Visão Estratégica'
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Aprovação & Compliance',
    description: 'Tramitação de licenças ambientais, urbanísticas e registro do loteamento em cartório.',
    detail: 'Conformidade Total'
  },
  {
    number: '04',
    icon: HardHat,
    title: 'Execução de Obras',
    description: 'Infraestrutura completa: pavimentação, drenagem, redes de água, esgoto e energia elétrica.',
    detail: 'Excelência Técnica'
  },
  {
    number: '05',
    icon: LineChart,
    title: 'Vendas & Gestão',
    description: 'Comercialização estruturada e gestão do empreendimento até a entrega final aos compradores.',
    detail: 'Resultado Garantido'
  }
]

const Step = ({ step, index, isLast }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex gap-6 lg:gap-10"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        {/* Number circle */}
        <div className="relative z-10 w-14 h-14 lg:w-16 lg:h-16 rounded-sm border-2 border-gold 
                        bg-mineral flex items-center justify-center">
          <span className="font-serif text-lg lg:text-xl text-gold">
            {step.number}
          </span>
        </div>
        
        {/* Connecting line */}
        {!isLast && (
          <div className="w-px h-full bg-gradient-to-b from-gold via-gold/50 to-gold/20"
               style={{ minHeight: '80px' }} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12 lg:pb-16">
        <div className="group bg-white border border-gold/10 rounded-sm p-6 lg:p-8 
                        hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 
                        transition-all duration-300">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans 
                             font-semibold block mb-2">
                {step.detail}
              </span>
              <h3 className="font-serif text-xl lg:text-2xl text-navy">
                {step.title}
              </h3>
            </div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 border border-gold/20 rounded-sm 
                            flex items-center justify-center
                            group-hover:border-gold/40 group-hover:bg-gold/5 
                            transition-all duration-300">
              <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-gold" strokeWidth={1.5} />
            </div>
          </div>

          {/* Description */}
          <p className="font-sans text-stone leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const Methodology = () => {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true, margin: '-100px' })

  return (
    <section id="metodologia" className="py-24 lg:py-32 bg-mineral relative overflow-hidden">
      {/* Accent lines */}
      <div className="absolute left-0 top-1/4 w-1/3 h-px bg-gradient-to-r from-gold/20 to-transparent" />
      <div className="absolute right-0 bottom-1/4 w-1/3 h-px bg-gradient-to-l from-gold/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold text-xs tracking-[0.25em] uppercase font-sans mb-4"
          >
            Processo
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-6"
          >
            Metodologia Solomon
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-stone max-w-2xl mx-auto"
          >
            Um processo estruturado em cinco etapas que garante a transformação 
            segura do seu patrimônio fundiário.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-px bg-gold mx-auto mt-8"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {steps.map((step, index) => (
            <Step 
              key={step.number} 
              step={step} 
              index={index} 
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-3 px-10 py-4 bg-navy text-white 
                       font-sans font-semibold text-sm tracking-wider uppercase
                       transition-all duration-300 hover:bg-navy-light rounded-sm
                       shadow-lg shadow-navy/20"
          >
            Iniciar Análise do seu Projeto
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Methodology
