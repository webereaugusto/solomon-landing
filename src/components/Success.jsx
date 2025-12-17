import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Users, TrendingUp, Gem, Target, Rocket, Crown, Star } from 'lucide-react'

const stats = [
  {
    icon: Trophy,
    value: '#1',
    label: 'Setor que mais criou milionários',
    detail: 'no Brasil na última década'
  },
  {
    icon: Users,
    value: '47 mil',
    label: 'Novos milionários',
    detail: 'do setor imobiliário em 10 anos'
  },
  {
    icon: TrendingUp,
    value: '340%',
    label: 'Retorno médio',
    detail: 'em loteamentos bem estruturados'
  },
  {
    icon: Gem,
    value: 'Sólido',
    label: 'Investimento mais seguro',
    detail: 'segundo pesquisa nacional'
  }
]

const marqueeItems = [
  { icon: Star, text: 'Transforme sua terra em patrimônio' },
  { icon: Crown, text: 'Renda passiva por décadas' },
  { icon: Target, text: 'Segurança jurídica total' },
  { icon: Rocket, text: 'Valorização garantida' },
  { icon: Trophy, text: 'Milhares de casos de sucesso' },
  { icon: Gem, text: 'Legado para sua família' },
]

const Success = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const phoneNumber = '5511999182008'
  const message = 'Olá! Vi que loteamentos são o melhor investimento e quero saber como posso participar desse mercado.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-mineral relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Marquee ticker */}
      <div className="absolute top-0 left-0 right-0 bg-navy py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex items-center gap-2 mx-8">
                <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                <span className="text-white/80 text-sm font-sans tracking-wide">
                  {item.text}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Trophy className="w-5 h-5 text-gold" strokeWidth={1.5} />
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans">
              Casos de Sucesso
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-6 
                       leading-tight max-w-4xl mx-auto"
          >
            O setor de loteamentos <span className="text-gold">criou mais milionários</span> no Brasil 
            nos últimos 10 anos do que qualquer outro segmento
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-stone text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Proprietários de terras que souberam estruturar seus empreendimentos com planejamento 
            e parceiros qualificados transformaram glebas em verdadeiras máquinas de geração de riqueza. 
            <strong className="text-navy"> Você pode ser o próximo.</strong>
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
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
                className="text-center p-6 bg-white border border-gold/20 rounded-sm
                           hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5
                           transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 
                                bg-navy rounded-sm mb-4">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div className="font-serif text-3xl lg:text-4xl text-gold mb-2">
                  {stat.value}
                </div>
                <div className="font-sans text-navy text-sm font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="font-sans text-stone text-xs">
                  {stat.detail}
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-navy rounded-sm p-8 lg:p-12 text-center relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="success-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C8A15A" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#success-grid)" />
            </svg>
          </div>

          <div className="relative">
            <div className="inline-flex items-center justify-center w-16 h-16 
                            border-2 border-gold rounded-full mb-6">
              <Rocket className="w-7 h-7 text-gold" strokeWidth={1.5} />
            </div>

            <h3 className="font-serif text-2xl lg:text-3xl text-white mb-4">
              Está pronto para <span className="text-gold">fazer parte dessa história</span>?
            </h3>

            <p className="font-sans text-stone/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Nossos especialistas estão prontos para analisar sua propriedade e mostrar 
              o potencial real de transformação. O primeiro passo para mudar sua vida 
              financeira começa com uma simples conversa.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-navy 
                         font-sans font-bold text-sm tracking-wider uppercase
                         transition-all duration-300 hover:bg-bronze rounded-sm
                         shadow-lg shadow-gold/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Fale Conosco Agora
            </a>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs 
                            text-stone/50 tracking-wider uppercase font-sans">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Consultoria Gratuita
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Análise Personalizada
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Sem Compromisso
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Success

