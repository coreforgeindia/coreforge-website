import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { serviceCategories } from '../data/verticals'
import { HiOutlineSparkles, HiOutlineCode } from 'react-icons/hi'

// Distinct sub-service images
import brandImg from '../assets/services/brand-strategy.jpg'
import webImg from '../assets/services/web-development.jpg'
import adsImg from '../assets/services/paid-advertising.jpg'
import customWebImg from '../assets/services/custom-webapp.jpg'
import mobileImg from '../assets/services/mobile-app.jpg'
import marketingDefaultImg from '../assets/services/service-marketing.jpg'
import softwareDefaultImg from '../assets/services/service-software.jpg'

const serviceThumbnails = {
  'brand-strategy-identity': brandImg,
  'website-design-development': webImg,
  'digital-marketing-advertising': adsImg,
  'social-media-management': adsImg,
  'creative-design-graphic-designing': brandImg,
  'video-production-content-creation': webImg,
  'search-engine-optimisation': adsImg,
  'influencer-pr-marketing': brandImg,
  'marketing-automation': adsImg,
  'analytics-conversion-tracking': adsImg,

  'custom-web-applications': customWebImg,
  'mobile-application-development': mobileImg,
  'api-microservices-engineering': customWebImg,
  'cloud-infrastructure-devops': customWebImg,
  'database-architecture-optimisation': customWebImg,
  'ui-ux-design-systems': webImg,
  'legacy-application-modernisation': customWebImg,
  'automated-testing-qa-engineering': customWebImg,
  'iot-embedded-software-integration': mobileImg,
  'software-maintenance-sla-support': customWebImg,
}

export default function Services() {
  const marketingCategory = serviceCategories.find((c) => c.slug === 'digital-marketing-branding')
  const softwareCategory = serviceCategories.find((c) => c.slug === 'software-app-development')

  return (
    <>
      <SEO
        title="360° Digital Marketing & Custom Software Engineering | CoreForge Bengaluru"
        description="CoreForge delivers 360° Digital Marketing & Branding for business growth, and Custom Software & App Development to keep enterprise operations scaling reliably."
        keywords="360 digital marketing Bangalore, custom software engineering, brand identity agency, mobile app development Bengaluru"
        canonicalUrl="https://www.coreforgeindia.com/services"
      />

      {/* Hero Header with Conic Pattern (Uiverse.io by csemszepp) */}
      <section className="relative py-24 sm:py-32 pattern-conic text-white border-b-4 border-black dark:border-white">
        <div className="section-shell relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-tight mb-6">
            Services Architecture
          </h1>
          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Two distinct, uncompromised disciplines: <strong>360° Digital Marketing & Branding</strong> to engineer market authority and customer acquisition, and <strong>Custom Software Development</strong> to build resilient cloud architectures that elevate enterprise performance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#marketing-division" className="btn-primary text-xs">
              Explore 360° Marketing & Branding
            </a>
            <a href="#software-division" className="btn-secondary text-xs">
              Explore Software Engineering
            </a>
          </div>
        </div>
      </section>

      {/* ── DIVISION 1: 360° DIGITAL MARKETING & BRANDING ── */}
      <section id="marketing-division" className="py-20 sm:py-28 border-b-4 border-black dark:border-white bg-[#fbfbfa] dark:bg-[#0c0c0d]">
        <div className="section-shell">
          {/* Division Header */}
          <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 sm:p-12 mb-16 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-neutral-500 mb-2">
                  <HiOutlineSparkles className="h-4 w-4 text-black dark:text-white" />
                  <span>Division 01 · Business Brand & Growth Engine</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-black dark:text-white mb-4">
                  360° Digital Marketing & Branding
                </h2>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                  Branding and market expansion are engineered to establish undeniable market authority and scale revenue. We manage complete visual identity systems, ROI-focused Google Ads and Meta Ads campaigns, technical search engine dominance, and end-to-end customer acquisition funnels.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="font-mono text-xs font-bold px-3 py-1 bg-black text-white dark:bg-white dark:text-black">
                    20+ ACTIVE CLIENTS MANAGED
                  </span>
                  <span className="font-mono text-xs font-bold px-3 py-1 border-2 border-black dark:border-white text-black dark:text-white">
                    GOOGLE & META ADS CERTIFIED
                  </span>
                </div>
              </div>

              <div className="border-4 border-black dark:border-white overflow-hidden bg-neutral-900 shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#fff]">
                <img
                  src={marketingDefaultImg}
                  alt="360 Digital Marketing & Brand Identity"
                  className="w-full h-64 sm:h-72 object-cover filter contrast-110"
                  loading="lazy"
                />
                <div className="p-3 bg-black text-white text-xs font-mono flex justify-between">
                  <span>BRAND ARCHITECTURE</span>
                  <span>10 INDIVIDUAL PAGES</span>
                </div>
              </div>
            </div>
          </div>

          {/* Individual Service Cards Grid (Links to individual sub-service pages) */}
          <div className="mb-6">
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-black dark:text-white mb-2">
              Marketing & Branding Capabilities
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-mono mb-8">
              Explore specialized marketing competencies, strategic scopes, and deliverable frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingCategory?.items.map((item, idx) => {
              const thumb = serviceThumbnails[item.slug] || marketingDefaultImg
              return (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="brutalist-card group text-left"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden border-2 border-black dark:border-white bg-neutral-100 mb-4">
                      <img
                        src={thumb}
                        alt={item.name}
                        className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute bottom-2 left-2 bg-black text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="brutalist-card__title">
                      {item.name}
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 line-clamp-3">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t-2 border-black dark:border-white flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-black dark:text-white uppercase tracking-wider group-hover:underline">
                      Explore Capability →
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      {item.deliverables?.length || 4} Deliverables
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── DIVISION 2: CUSTOM SOFTWARE & APP DEVELOPMENT ── */}
      <section id="software-division" className="py-20 sm:py-28 bg-white dark:bg-[#151516] border-b-4 border-black dark:border-white">
        <div className="section-shell">
          {/* Division Header */}
          <div className="border-4 border-black dark:border-white bg-[#fbfbfa] dark:bg-[#0c0c0d] p-8 sm:p-12 mb-16 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-neutral-500 mb-2">
                  <HiOutlineCode className="h-4 w-4 text-black dark:text-white" />
                  <span>Division 02 · Enterprise Engineering & Technology Backbone</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-black dark:text-white mb-4">
                  Software & App Development
                </h2>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                  Keeping your business running with mission-critical reliability while engineering the custom software platforms that propel it forward. From high-throughput React web portals and cross-platform mobile apps to scalable cloud APIs and database architectures.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="font-mono text-xs font-bold px-3 py-1 bg-black text-white dark:bg-white dark:text-black">
                    15+ PRODUCTION PLATFORMS
                  </span>
                  <span className="font-mono text-xs font-bold px-3 py-1 border-2 border-black dark:border-white text-black dark:text-white">
                    99.9% UPTIME ARCHITECTURES
                  </span>
                </div>
              </div>

              <div className="border-4 border-black dark:border-white overflow-hidden bg-neutral-900 shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#fff]">
                <img
                  src={softwareDefaultImg}
                  alt="Custom Software & Application Engineering"
                  className="w-full h-64 sm:h-72 object-cover filter contrast-110"
                  loading="lazy"
                />
                <div className="p-3 bg-black text-white text-xs font-mono flex justify-between">
                  <span>SYSTEM PLATFORMS</span>
                  <span>10 INDIVIDUAL PAGES</span>
                </div>
              </div>
            </div>
          </div>

          {/* Individual Service Cards Grid (Links to individual sub-service pages) */}
          <div className="mb-6">
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-black dark:text-white mb-2">
              Software Engineering Capabilities
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-mono mb-8">
              Explore custom engineering capabilities, architecture standards, and production deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareCategory?.items.map((item, idx) => {
              const thumb = serviceThumbnails[item.slug] || softwareDefaultImg
              return (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="brutalist-card group text-left"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden border-2 border-black dark:border-white bg-neutral-900 mb-4">
                      <img
                        src={thumb}
                        alt={item.name}
                        className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute bottom-2 left-2 bg-black text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="brutalist-card__title">
                      {item.name}
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 line-clamp-3">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t-2 border-black dark:border-white flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-black dark:text-white uppercase tracking-wider group-hover:underline">
                      Explore Capability →
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      {item.deliverables?.length || 4} Deliverables
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
