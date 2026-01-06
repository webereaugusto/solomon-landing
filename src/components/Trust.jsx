import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ShieldCheck, 
  Building, 
  FileCheck2, 
  Scale, 
  Lock,
  Award,
  Briefcase,
  Home,
  HeartHandshake
} from 'lucide-react'

const credentials = [
  {
    icon: Building,
    title: 'Estrutura Completa',
    description: 'Equipe multidisciplinar com engenheiros, advogados, urbanistas e gestores dedicados ao seu projeto.'
  },
  {
    icon: FileCheck2,
    title: 'Know-How Comprovado',
    description: 'Metodologia testada e aprovada em múltiplos empreendimentos, do planejamento à entrega.'
  },
  {
    icon: Scale,
    title: 'Segurança Jurídica',
    description: 'Todos os processos seguem rigorosa conformidade legal, com documentação auditável.'
  },
  {
    icon: Lock,
    title: 'Proteção Patrimonial',
    description: 'Estruturas societárias e contratuais que blindam seu patrimônio durante todo o processo.'
  }
]

const proofs = [
  {
    icon: Award,
    stat: 'AAA',
    label: 'Classificação de Risco',
    detail: 'Setor imobiliário é considerado investimento de baixo risco'
  },
  {
    icon: Home,
    stat: '87%',
    label: 'Preferência Nacional',
    detail: 'dos brasileiros consideram imóveis o investimento mais seguro'
  },
  {
    icon: Briefcase,
    stat: '50+',
    label: 'Anos de Histórico',
    detail: 'Loteamentos como modelo de negócio consolidado no Brasil'
  }
]

const Trust = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-mineral relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <ShieldCheck className="w-5 h-5 text-gold" strokeWidth={1.5} />
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans">
              Confiança & Segurança
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-6 
                       leading-tight max-w-4xl mx-auto"
          >
            A Solomon tem a <span className="text-gold">estrutura</span> e o{' '}
            <span className="text-gold">know-how</span> para transformar sua terra
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-stone text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Garantimos uma renda passiva que vai trazer tranquilidade para você e sua família 
            por gerações. Nosso compromisso é com a segurança do seu patrimônio.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-px bg-gold mx-auto mt-8"
          />
        </div>

        {/* Credentials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {credentials.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group bg-white border border-gold/15 rounded-sm p-6 
                           hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5
                           transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 
                                border border-gold/30 rounded-sm mb-5
                                group-hover:border-gold group-hover:bg-gold/5
                                transition-all duration-300">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-navy mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-stone text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Trust proof section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-navy rounded-sm p-8 lg:p-12 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="navy-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C8A15A" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#navy-grid)" />
            </svg>
          </div>

          <div className="relative">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-block text-gold text-xs tracking-[0.2em] uppercase font-sans mb-3">
                Por que loteamentos são seguros
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl text-white">
                Um investimento reconhecido e sólido
              </h3>
            </div>

            {/* Proofs grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {proofs.map((proof) => {
                const Icon = proof.icon
                return (
                  <div key={proof.label} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 
                                    border border-gold/30 rounded-full mb-4">
                      <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div className="font-serif text-4xl lg:text-5xl text-gold mb-2">
                      {proof.stat}
                    </div>
                    <div className="font-sans text-white text-sm font-medium mb-1">
                      {proof.label}
                    </div>
                    <div className="font-sans text-stone/60 text-xs">
                      {proof.detail}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Trust message */}
            <div className="max-w-3xl mx-auto text-center">
              <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <HeartHandshake className="w-6 h-6 text-gold" strokeWidth={1.5} />
                <span className="font-serif text-xl text-white">
                  Compromisso com sua Tranquilidade
                </span>
              </div>
              
              <p className="font-sans text-stone/80 leading-relaxed mb-6">
                Investir em loteamentos é escolher um dos caminhos mais seguros para construir 
                patrimônio no Brasil. Diferente de aplicações voláteis, a terra é um ativo real, 
                tangível e que historicamente só valoriza. Com a Solomon, você tem a certeza de 
                um parceiro que prioriza a <strong className="text-white">segurança jurídica</strong>, 
                a <strong className="text-white">transparência total</strong> e o{' '}
                <strong className="text-white">retorno consistente</strong>.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs 
                              text-stone/50 tracking-wider uppercase font-sans">
                {['Ativo Real', 'Baixa Volatilidade', 'Proteção Inflacionária', 'Herança Familiar'].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Family legacy message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <blockquote className="font-serif text-2xl lg:text-3xl text-navy/80 italic 
                                 max-w-3xl mx-auto leading-relaxed">
            "A maior herança não está apenas no valor da terra, mas na{' '}
            <span className="text-gold not-italic font-medium">tranquilidade</span> de um futuro seguro, 
            bem planejado e protegido de conflitos."
          </blockquote>
          <div className="mt-6 w-12 h-px bg-gold mx-auto" />
          <p className="mt-4 font-sans text-xs text-stone tracking-[0.2em] uppercase">
            Filosofia Solomon
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Trust
