import Header from './components/Header'
import Hero from './components/Hero'
import ValueProposition from './components/ValueProposition'
import About from './components/About'
import Methodology from './components/Methodology'
import Trust from './components/Trust'
import CallToAction from './components/CallToAction'
import MarketCTA from './components/MarketCTA'
import Triggers from './components/Triggers'
import Success from './components/Success'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <About />
        <Methodology />
        <CallToAction />
        <Trust />
        <MarketCTA />
        <Triggers />
        <Success />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
