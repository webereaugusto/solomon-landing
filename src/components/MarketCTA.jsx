import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Landmark, Clock, BarChart3, ArrowUpRight, CheckCircle2 } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    value: '15%',
    label: 'Crescimento anual',
    detail: 'do setor de loteamentos'
  },
  {
    icon: Landmark,
    value: 'R$ 25 bi',
    label: 'Volume em 2024',
    detail: 'mercado brasileiro'
  },
  {
    icon: Clock,
    value: '30+',
    label: 'Anos de renda',
    detail: 'potencial de retorno'
  },
  {
    icon: BarChart3,
    value: '200%',
    label: 'Valorização média',
    detail: 'em loteamentos estruturados'
  }
]

const benefits = [
  'Renda passiva recorrente por décadas',
  'Valorização patrimonial consistente',
  'Proteção contra inflação',
  'Demanda habitacional crescente',
  'Menor volatilidade que outros investimentos',
  'Legado para próximas gerações'
]

const MarketCTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const phoneNumber = '5511999182008'
  const message = 'Olá! Tenho interesse em saber mais sobre oportunidades em loteamentos e como transformar minha propriedade em renda passiva.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="market-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C8A15A" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#market-grid)" />
        </svg>
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-gold/40 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.25em] 
                       uppercase font-sans mb-4"
          >
            <ArrowUpRight className="w-4 h-4" />
            Oportunidade de Mercado
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 
                       leading-tight max-w-4xl mx-auto"
          >
            O mercado de loteamentos está em{' '}
            <span className="text-gold">franco crescimento</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-stone text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Proprietários de terras estão transformando glebas ociosas em fontes de renda 
            passiva que perduram por décadas. A demanda por lotes urbanizados só aumenta, 
            e quem se posiciona agora colhe os frutos por gerações.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-px bg-gold mx-auto mt-8"
          />
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="text-center p-6 border border-gold/20 rounded-sm bg-navy-light/30
                           hover:border-gold/40 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 
                                border border-gold/30 rounded-sm mb-4">
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div className="font-serif text-3xl lg:text-4xl text-gold mb-1">
                  {stat.value}
                </div>
                <div className="font-sans text-white text-sm font-medium mb-1">
                  {stat.label}
                </div>
                <div className="font-sans text-stone/60 text-xs">
                  {stat.detail}
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-serif text-2xl text-white mb-8">
              Por que investir em loteamentos?
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="font-sans text-stone/90">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 border-l-2 border-gold bg-navy-light/30">
              <p className="font-serif text-lg text-white/90 italic mb-2">
                "Terrenos bem localizados são ativos finitos. A cada dia, a demanda cresce 
                e a oferta diminui."
              </p>
              <p className="font-sans text-gold text-xs tracking-wider uppercase">
                Perspectiva de Mercado
              </p>
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative"
          >
            <div className="bg-navy-light border border-gold/30 rounded-sm p-8 lg:p-10 relative">
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-24 h-24">
                <div className="absolute top-4 right-4 w-px h-12 bg-gold/40" />
                <div className="absolute top-4 right-4 h-px w-12 bg-gold/40" />
              </div>

              <span className="inline-block text-gold text-xs tracking-[0.2em] uppercase font-sans mb-4">
                Próximo Passo
              </span>

              <h3 className="font-serif text-2xl lg:text-3xl text-white mb-4">
                Sua propriedade pode gerar renda por{' '}
                <span className="text-gold">décadas</span>
              </h3>

              <p className="font-sans text-stone/80 mb-8 leading-relaxed">
                Converse com nossos especialistas e descubra o potencial da sua terra. 
                Análise inicial gratuita e sem compromisso. Transforme seu patrimônio 
                fundiário em uma fonte de renda duradoura.
              </p>

              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 w-full justify-center px-8 py-4 
                           bg-[#25D366] text-white font-sans font-semibold text-sm 
                           tracking-wider uppercase transition-all duration-300 
                           hover:bg-[#20BD5A] rounded-sm shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar com Especialista
              </a>

              <p className="text-center mt-4 font-sans text-stone/50 text-xs">
                Resposta em até 2 horas úteis
              </p>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 lg:-right-6 bg-gold text-navy px-4 py-2 
                            rounded-sm shadow-lg">
              <span className="font-sans text-xs font-bold tracking-wider uppercase">
                Análise Gratuita
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MarketCTA
