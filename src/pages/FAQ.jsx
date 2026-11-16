import { useMemo, useState } from 'react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import Accordion from '../components/Accordion'
import { Link } from 'react-router-dom'
import { HiOutlineSearch } from 'react-icons/hi'

const faqData = [
  {
    question: 'What are CoreForge\'s three core verticals?',
    answer:
      'CoreForge operates in three specialized disciplines: 1) 360° Digital Marketing & Branding, 2) Software & App Development, and 3) Antenna & RF Communication Products. All operations are anchored from Bengaluru, Karnataka.',
  },
  {
    question: 'How do you structure custom software engineering contracts?',
    answer:
      'We work via milestone-based deliverables or dedicated sprint capacity. Each project includes clear functional specifications, automated testing gates, and 100% intellectual property transfer to your organization upon delivery.',
  },
  {
    question: 'What kind of web platforms and mobile apps do you develop?',
    answer:
      'We architect high-performance websites, custom web applications, SaaS platforms, native and cross-platform mobile apps (Android & iOS), custom ERP/CRM tools, and AI automation workflows.',
  },
  {
    question: 'Can you customize antenna frequencies and RF passives?',
    answer:
      'Yes. Our RF product vertical designs and supplies custom VHF/UHF, GSM/LTE, WiFi, GPS, and wideband antennas, alongside RF passives (couplers, duplexers, filters, attenuators) tuned to your exact operational bands.',
  },
  {
    question: 'What is included in a 360° digital marketing engagement?',
    answer:
      'Our marketing practice covers brand strategy and identity design, conversion-optimized web development, paid ad management, technical SEO, social media management, video production, and automated acquisition funnels.',
  },
  {
    question: 'Where is CoreForge located and can we visit your office?',
    answer:
      'We are headquartered at Rajagopala Nagar, Peenya, Bengaluru, Karnataka 560058. Clients are welcome to schedule in-person technical reviews or join our virtual sprint syncs.',
  },
  {
    question: 'How do I request a technical quotation?',
    answer:
      'Submit your requirements via our online quote form or email info@coreforgeindia.com. Our engineering leads evaluate your requirements and provide an itemized proposal within 24 to 48 hours.',
  },
  {
    question: 'Do you offer ongoing SLA maintenance and technical support?',
    answer:
      'Yes. We provide structured SLA support agreements covering security updates, server monitoring, bug fixes, database optimization, and continuous feature development.',
  },
]

export default function FAQ() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return faqData
    const q = query.toLowerCase()
    return faqData.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <>
      <SEO
        title="Frequently Asked Questions | CoreForge Engineering Bengaluru"
        description="Clear answers regarding CoreForge software platforms, 360 branding, and antenna & RF communication systems."
        keywords="CoreForge FAQs, software development Bangalore, antenna RF questions, digital marketing pricing"
        canonicalUrl="https://www.coreforgeindia.com/faqs"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqData.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }}
      />

      <PageHero
        breadcrumbItems={[{ label: 'FAQs' }]}
        badge="KNOWLEDGE BASE"
        title="Frequently Asked Questions"
        description="Direct, factual answers about our engineering capabilities, delivery models, RF hardware customization, and project roadmaps."
        accentColor="#2563EB"
      />

      <section className="py-16 sm:py-24" aria-labelledby="faq-list-heading">
        <div className="section-shell max-w-3xl">
          {/* Search Box */}
          <div className="relative mb-8">
            <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" aria-hidden="true" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter questions by topic (e.g. software, antenna, pricing, SLA)..."
              aria-label="Search frequently asked questions"
              className="w-full pl-12 pr-4 py-3 border-2 border-black dark:border-white bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]"
            />
          </div>

          <h2 id="faq-list-heading" className="sr-only">
            Questions and Answers List
          </h2>

          {filtered.length > 0 ? (
            <Accordion items={filtered} allowMultiple={true} />
          ) : (
            <div className="p-8 text-center rounded-2xl border border-[var(--color-border)] bg-white">
              <p className="text-sm text-neutral-600 mb-4">
                No matching questions found for "{query}".
              </p>
              <Link to="/contact" className="btn-primary">
                Ask Our Engineering Team
              </Link>
            </div>
          )}

          {/* Help Callout */}
          <div className="mt-12 p-8 rounded-2xl border border-[var(--color-border)] bg-neutral-50 text-center">
            <h3 className="font-heading text-xl font-bold text-neutral-950 mb-2">
              Have a Specific Technical Requirement?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mb-6 max-w-md mx-auto">
              Our engineering leads in Bengaluru can assess your architecture, BOM targets, or campaign strategy directly.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
