import { MapPin, Mail, Phone, Award } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="contato" className="bg-navy relative overflow-hidden">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <img 
                src="/logot.png" 
                alt="Solomon Empreendimentos" 
                className="h-20 w-auto"
              />
            </a>
            <p className="font-sans text-stone/70 text-sm leading-relaxed mb-6">
              Transformando propriedades rurais em empreendimentos de alto padrão 
              com segurança jurídica absoluta.
            </p>
            <div className="flex items-center gap-2 text-gold">
              <Award className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-sans text-xs tracking-wider uppercase">
                Selo de Qualidade
              </span>
            </div>
          </div>

          {/* Column 2 - Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Contato Corporativo</h4>
            <div className="space-y-4">
              <a 
                href="mailto:diretoria@solomon.com.br" 
                className="flex items-start gap-3 text-stone/70 hover:text-gold 
                           transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 mt-0.5 text-gold/60 group-hover:text-gold" strokeWidth={1.5} />
                <span className="font-sans text-sm">diretoria@solomon.com.br</span>
              </a>
              <a 
                href="https://wa.me/5511999182008" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-stone/70 hover:text-gold 
                           transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 mt-0.5 text-gold/60 group-hover:text-gold" strokeWidth={1.5} />
                <span className="font-sans text-sm">+55 (11) 99918-2008</span>
              </a>
            </div>
          </div>

          {/* Column 3 - Address */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Endereço</h4>
            <div className="flex items-start gap-3 text-stone/70">
              <MapPin className="w-5 h-5 mt-0.5 text-gold/60 flex-shrink-0" strokeWidth={1.5} />
              <address className="font-sans text-sm not-italic leading-relaxed">
                São Paulo - SP<br />
                Brasil
              </address>
            </div>
          </div>

          {/* Column 4 - CTA */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Agende uma Reunião</h4>
            <p className="font-sans text-stone/60 text-sm mb-6 leading-relaxed">
              Nossos diretores estão disponíveis para apresentar nossas soluções.
            </p>
            <a
              href="https://wa.me/5511999182008?text=Olá! Gostaria de agendar uma reunião para conhecer as soluções da Solomon."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gold text-navy 
                         font-sans font-semibold text-sm tracking-wider uppercase
                         transition-all duration-300 hover:bg-bronze rounded-sm"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-stone/40 text-xs tracking-wide">
              © {new Date().getFullYear()} Solomon Empreendimentos Imobiliários e Participações. 
              Todos os direitos reservados.
            </p>
            <p className="font-sans text-gold/60 text-xs tracking-[0.15em] uppercase">
              Excelência em Loteamentos
            </p>
          </div>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden opacity-20">
        <div className="absolute bottom-4 right-4 w-px h-20 bg-gold" />
        <div className="absolute bottom-4 right-4 h-px w-20 bg-gold" />
      </div>
    </footer>
  )
}

export default Footer
