import { useMemo, useState } from 'react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import Accordion from '../components/Accordion'
import { Link } from 'react-router-dom'
import { HiOutlineSearch } from 'react-icons/hi'
import { comprehensiveFaqData, FAQ_CATEGORIES } from '../data/faqData'

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    let list = comprehensiveFaqData
    if (activeCategory !== 'all') {
      list = list.filter((item) => item.category === activeCategory)
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(
        (item) =>
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q)
      )
    }
    return list
  }, [activeCategory, query])

  return (
    <>
      <SEO
        title="Frequently Asked Questions (Technical Knowledge Base) | CoreForge Bengaluru"
        description="Comprehensive technical knowledge base covering CoreForge software architectures, 360 branding, cloud engineering, RF antenna hardware, and commercial SLAs."
        keywords="CoreForge FAQs, technical knowledge base, software engineering questions Bangalore, antenna RF specifications, digital marketing FAQ"
        canonicalUrl="https://www.coreforgeindia.com/faqs"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: comprehensiveFaqData.map((item) => ({
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
        badge="TECHNICAL KNOWLEDGE BASE"
        title="Frequently Asked Questions"
        description="Comprehensive, verified engineering answers across our 360 marketing ecosystems, full-stack software architectures, and antenna RF systems."
        accentColor="#2563EB"
      />

      <section className="py-12 sm:py-20 bg-neutral-50 dark:bg-neutral-950" aria-labelledby="faq-list-heading">
        <div className="section-shell max-w-5xl">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5 mb-8 justify-center">
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-bold transition-all border-2 border-black dark:border-white ${
                    isActive
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-[3px_3px_0_#000] dark:shadow-[3px_3px_0_#fff]'
                      : 'bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff]'
                  }`}
                >
                  {cat.name}
                </button>
              )
            })}
          </div>

          {/* Search Box */}
          <div className="relative mb-6 max-w-3xl mx-auto">
            <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" aria-hidden="true" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by keyword (e.g. VHF, latency, SLA, SEO, Kubernetes, pricing)..."
              aria-label="Search frequently asked questions"
              className="w-full pl-12 pr-4 py-3.5 border-2 border-black dark:border-white bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff] font-mono"
            />
          </div>

          {/* Result Count Status */}
          <div className="flex justify-between items-center text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-6 max-w-3xl mx-auto px-1">
            <span>
              Showing {filtered.length} of {comprehensiveFaqData.length} questions
            </span>
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-red-600 dark:text-red-400 underline hover:no-underline"
              >
                Clear Search
              </button>
            )}
          </div>

          <h2 id="faq-list-heading" className="sr-only">
            Technical Questions and Answers
          </h2>

          <div className="max-w-3xl mx-auto">
            {filtered.length > 0 ? (
              <Accordion items={filtered} allowMultiple={false} />
            ) : (
              <div className="p-8 text-center border-2 border-black dark:border-white bg-white dark:bg-neutral-900 shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                <p className="text-sm font-mono text-neutral-700 dark:text-neutral-300 mb-4">
                  No matching technical questions found for "{query}".
                </p>
                <Link to="/contact" className="btn-primary inline-block">
                  Ask Our Engineering Team
                </Link>
              </div>
            )}
          </div>

          {/* Help Callout */}
          <div className="mt-16 p-8 border-2 border-black dark:border-white bg-white dark:bg-neutral-900 text-center max-w-3xl mx-auto shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#fff]">
            <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 border border-black dark:border-white bg-neutral-100 dark:bg-neutral-800 font-bold mb-3 inline-block">
              ENGINEERING CONSULTATION
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white mt-2 mb-3">
              Have a Specific Custom Architecture or RF Requirement?
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-6 max-w-lg mx-auto font-sans">
              Our engineering team in Bengaluru evaluates custom specifications, link budgets, Bill of Materials targets, and software scope directly.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Request Technical Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
