import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { COMPANY_INFO } from '../data/verticals'
import { HiOutlineLocationMarker, HiOutlineClock, HiOutlineCube } from 'react-icons/hi'

export default function About() {
  return (
    <>
      <SEO
        title="About CoreForge | 360° Digital Marketing & Software Engineering Bengaluru"
        description="CoreForge is a Bengaluru digital growth and software engineering firm established in October 2024, delivering 360° digital marketing, brand strategy, and custom software systems."
        keywords="About CoreForge, digital marketing agency Bengaluru, software engineering firm Bangalore, Peenya tech company"
        canonicalUrl="https://www.coreforgeindia.com/about"
      />

      {/* Header (100dvh Full Viewport Fitting) */}
      <section className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 pattern-conic text-white border-b-4 border-black dark:border-white">
        <div className="section-shell">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-1 border border-white bg-black/60 font-bold mb-4 inline-block text-white">
              BENGALURU HEADQUARTERS
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-6">
              360° Digital Marketing & Custom Software Engineering
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Founded in October 2024, CoreForge is an engineering firm headquartered in Bengaluru, built to deliver high-velocity digital marketing systems and custom software platforms without agency overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Facility Details */}
      <section className="py-20 sm:py-24 border-b-4 border-black dark:border-white bg-white dark:bg-neutral-950 transition-colors" aria-label="Core Facts">
        <div className="section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-mono text-xs font-bold text-neutral-500 dark:text-neutral-400 block mb-2 uppercase tracking-wider">
                CORE PHILOSOPHY
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white mb-6">
                Direct Technical Authorship Over Agency Bloat
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                <p>
                  CoreForge was founded on a simple premise: marketing and software should be engineered with measurable precision, not treated as superficial creative experiments.
                </p>
                <p>
                  Our digital practice crafts unified brand identities, conversion-focused landing experiences, and multi-channel acquisition funnels that drive verified pipeline. Concurrently, our engineering team architects clean, maintainable web apps, cross-platform mobile apps, and scalable cloud APIs without technical debt.
                </p>
                <p>
                  Additionally, we maintain a dedicated product supply unit providing industrial-grade communication antennas and RF passives for enterprise networks.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Start an Engagement
                </Link>
                <Link to="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Quick Fact Cards */}
            <div className="space-y-6">
              <div className="border-2 border-black dark:border-white p-6 bg-[#fbfbfa] dark:bg-neutral-900 flex items-start gap-4 shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                <div className="p-3 border-2 border-black dark:border-white bg-white dark:bg-neutral-800 text-black dark:text-white">
                  <HiOutlineClock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-neutral-950 dark:text-white mb-1">
                    Founded October 2024
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    MSME-registered technology firm headquartered in Bengaluru, Karnataka, delivering client-focused execution across India and global markets.
                  </p>
                </div>
              </div>

              <div className="border-2 border-black dark:border-white p-6 bg-[#fbfbfa] dark:bg-neutral-900 flex items-start gap-4 shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                <div className="p-3 border-2 border-black dark:border-white bg-white dark:bg-neutral-800 text-black dark:text-white">
                  <HiOutlineLocationMarker className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-neutral-950 dark:text-white mb-1">
                    Bengaluru Headquarters
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    Located at 352, 4th Cross Rd, Rajagopala Nagar, Peenya, Bengaluru 560058, positioned in Karnataka's primary manufacturing and technology corridor.
                  </p>
                </div>
              </div>

              <div className="border-2 border-black dark:border-white p-6 bg-[#fbfbfa] dark:bg-neutral-900 flex items-start gap-4 shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]">
                <div className="p-3 border-2 border-black dark:border-white bg-white dark:bg-neutral-800 text-black dark:text-white">
                  <HiOutlineCube className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-neutral-950 dark:text-white mb-1">
                    Primary Practice: 360° Digital & Software
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    Dedicated focus on Brand Strategy, Performance Marketing, Custom Web & Mobile Apps, plus complementary RF hardware product distribution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-20 bg-black text-white dark:bg-neutral-900 border-b-4 border-black dark:border-white">
        <div className="section-shell text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl font-extrabold mb-4">
            Ready to Engineer Your Brand or Software Platform?
          </h2>
          <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
            Connect directly with our technical leads in Bengaluru to discuss your project requirements, scope, and delivery milestones.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact Us Directly
            </Link>
            <Link to="/products" className="btn-secondary">
              View RF Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
