import PageHero from '../components/PageHero'
import AboutSection from '../sections/AboutSection'
import ClientLogosSection from '../sections/ClientLogosSection'

export default function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects and partnerships that speak for themselves."
        description="A snapshot of the engineering work we've delivered: from PCB prototypes and embedded firmware to custom web platforms, mobile apps, and hands-on training programs."
      />
      <AboutSection />
      <ClientLogosSection />
    </>
  )
}
