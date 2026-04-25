import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustedBy from '@/components/TrustedBy'
import Solutions from '@/components/Solutions'
import Programs from '@/components/Programs'
import Stats from '@/components/Stats'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Solutions />
        <Programs />
        <Stats />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
