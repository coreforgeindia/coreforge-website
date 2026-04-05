import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import QuoteSection from '../sections/QuoteSection'
import ContactSection from '../sections/ContactSection'

export default function Contact() {
  useEffect(() => {
    if (window.location.hash === '#quote') {
      const target = document.getElementById('quote')
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Contact CoreForge"
        title="Reach out for projects, partnerships, support, or a custom quotation."
        description="This page holds both the clean contact flow and a dedicated quotation section so they are not mixed into every screen."
      />
      <QuoteSection />
      <ContactSection />
    </>
  )
}
