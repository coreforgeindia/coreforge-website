import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import AboutSection from '../sections/AboutSection'
import ClientLogosSection from '../sections/ClientLogosSection'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About CoreForge"
        title="A practical engineering company built around execution."
        description="Founded in October 2024, CoreForge was built to make sure theory meets practice: through embedded systems, PCB development, custom software, workshops, and technical support."
      />
      <AboutSection />
      <ClientLogosSection />
    </>
  )
}
