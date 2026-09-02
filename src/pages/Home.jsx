import SEO from '../components/SEO'
import HeroSection from '../sections/HeroSection'
import NumbersSection from '../sections/NumbersSection'
import AboutSection from '../sections/AboutSection'
import ServicesSection from '../sections/ServicesSection'
import ClientLogosSection from '../sections/ClientLogosSection'
import ProductsSection from '../sections/ProductsSection'
import HomeBlogSection from '../sections/HomeBlogSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import ContactSection from '../sections/ContactSection'

export default function Home() {
  return (
    <>
      <SEO
        title="CoreForge | IoT, Embedded Systems, PCB Design & Custom Software Bengaluru"
        description="CoreForge is a Bengaluru engineering firm providing PCB design, embedded systems firmware, custom software development, IoT integration, and technical workshops."
        keywords="CoreForge, IoT solutions India, PCB design Bengaluru, embedded systems firmware, custom software development Bangalore, microcontroller programming"
        canonicalUrl="https://coreforgeindia.com/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'CoreForge',
          legalName: 'CoreForge',
          url: 'https://coreforgeindia.com',
          logo: 'https://coreforgeindia.com/favicon.png',
          description: 'CoreForge provides IoT and embedded solutions, PCB design and development, custom software platforms, web and mobile apps, workshops, and technical support.',
          foundingDate: '2024-10',
          sameAs: [
            'https://www.linkedin.com/company/coreforge-india/',
            'https://www.instagram.com/core.forge.in/',
            'https://www.goodfirms.co/company/coreforge',
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: '#352, 4th Cross Rd, Rajagopala Nagar, Peenya',
            addressLocality: 'Bengaluru',
            addressRegion: 'Karnataka',
            postalCode: '560058',
            addressCountry: 'IN',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-93808-41227',
            contactType: 'Customer Service',
            email: 'info@coreforgeindia.com',
          },
        }}
      />
      <HeroSection />
      <NumbersSection />
      <AboutSection />
      <ServicesSection />
      <ClientLogosSection />
      <ProductsSection />
      <HomeBlogSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
