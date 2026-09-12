import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import AboutSection from '../sections/AboutSection'
import ClientLogosSection from '../sections/ClientLogosSection'

export default function About() {
  return (
    <>
      <SEO
        title="About CoreForge | Engineering Company & Technology Partner Bengaluru"
        description="Learn about CoreForge's mission, engineering team, and capabilities in multi-layer PCB design, embedded firmware development, custom software, and technical education in Bengaluru."
        keywords="About CoreForge, MSME tech company India, engineering firm Bangalore, electronics startup Bengaluru, CoreForge team"
        canonicalUrl="https://coreforgeindia.com/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About CoreForge',
          url: 'https://coreforgeindia.com/about',
          description: 'CoreForge is an MSME-registered engineering technology partner specializing in practical hardware, PCB design, embedded systems, custom software, and technical training.',
          publisher: {
            '@type': 'Organization',
            name: 'CoreForge',
            url: 'https://coreforgeindia.com',
          },
        }}
      />
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
