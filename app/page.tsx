import Hero from '@/components/Hero'
import VideoSection from '@/components/VideoSection'
import Mission from '@/components/Mission'
import HuskyGallery from '@/components/HuskyGallery'
import Process from '@/components/Process'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoSection />
      <Mission />
      <HuskyGallery />
      <Process />
      <ContactForm />
      <FAQ />
      <Footer />
    </main>
  )
}
