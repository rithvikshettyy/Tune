import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import HowItWorks from '@/components/how-it-works'
import Integration from '@/components/integration'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen dark">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Integration />
      <Footer />
    </main>
  )
}
