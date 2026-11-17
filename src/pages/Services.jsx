import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { serviceCategories } from '../data/verticals'
import { HiOutlineSparkles, HiOutlineCode } from 'react-icons/hi'

// Distinct sub-service images for each individual capability (100% unique, zero duplicates)
import mktgBrandImg from '../assets/services/brand-strategy.jpg'
import mktgWebImg from '../assets/services/web-development.jpg'
import mktgAdsImg from '../assets/services/paid-advertising.jpg'
import mktgSocialImg from '../assets/services/mktg-social-media.jpg'
import mktgCreativeImg from '../assets/services/mktg-creative-design.jpg'
import mktgVideoImg from '../assets/services/mktg-video-production.jpg'
import mktgSeoImg from '../assets/services/mktg-seo.jpg'
import mktgInfluencerImg from '../assets/services/mktg-influencer-pr.jpg'
import mktgAutomationImg from '../assets/services/mktg-automation.jpg'
import mktgAnalyticsImg from '../assets/services/mktg-analytics.jpg'

import swCustomWebImg from '../assets/services/software-custom-web.jpg'
import swMobileImg from '../assets/services/software-mobile-app.jpg'
import swApiImg from '../assets/services/software-api-microservices.jpg'
import swCloudImg from '../assets/services/software-cloud-devops.jpg'
import swDbImg from '../assets/services/software-database-arch.jpg'
import swUiUxImg from '../assets/services/software-ui-ux.jpg'
import swLegacyImg from '../assets/services/software-legacy-modern.jpg'
import swQaImg from '../assets/services/software-testing-qa.jpg'
import swIotImg from '../assets/services/software-iot-embedded.jpg'
import swSlaImg from '../assets/services/software-sla-maintenance.jpg'

import marketingDefaultImg from '../assets/services/service-marketing.jpg'
import softwareDefaultImg from '../assets/services/service-software.jpg'

const serviceThumbnails = {
  // Marketing & Branding Capabilities (exact slugs from verticals.js)
  'brand-strategy-identity': mktgBrandImg,
  'website-design-development': mktgWebImg,
  'digital-marketing-advertising': mktgAdsImg,
  'social-media-management': mktgSocialImg,
  'creative-design-graphic-designing': mktgCreativeImg,
  'video-production-content-creation': mktgVideoImg,
  'search-engine-optimisation': mktgSeoImg,
  'influencer-pr-marketing': mktgInfluencerImg,
  'marketing-automation': mktgAutomationImg,
  'business-growth-consulting': mktgAnalyticsImg,
  'analytics-conversion-tracking': mktgAnalyticsImg,

  // Software & App Engineering Capabilities (exact slugs from verticals.js)
  'website-development': swCustomWebImg,
  'web-application-development': swCustomWebImg,
  'android-ios-app-development': swMobileImg,
  'custom-software-development': swLegacyImg,
  'erp-crm-solutions': swDbImg,
  'saas-product-development': swUiUxImg,
  'api-development-integration': swApiImg,
  'ai-business-automation': swIotImg,
  'database-management-solutions': swDbImg,
  'cloud-server-hosting-solutions': swCloudImg,
  'cybersecurity-it-solutions': swQaImg,
  'software-maintenance-technical-support': swSlaImg,

  // Backward compatibility aliases
  'custom-web-applications': swCustomWebImg,
  'mobile-application-development': swMobileImg,
  'api-microservices-engineering': swApiImg,
  'cloud-infrastructure-devops': swCloudImg,
  'database-architecture-optimisation': swDbImg,
  'ui-ux-design-systems': swUiUxImg,
  'legacy-application-modernisation': swLegacyImg,
  'automated-testing-qa-engineering': swQaImg,
  'iot-embedded-software-integration': swIotImg,
  'software-maintenance-sla-support': swSlaImg,
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

      {/* Hero Header with Conic Pattern (100dvh Screen Fitting) */}
      <section className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center pt-24 pb-16 pattern-conic border-b-4 border-black dark:border-white">
        {/* High-legibility brutalist backdrop scrim */}
        <div className="absolute inset-0 bg-white/85 dark:bg-black/80 backdrop-blur-[1px] pointer-events-none" />

        <div className="section-shell relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-tight mb-6">
            Services Architecture
          </h1>
          <p className="text-base sm:text-xl text-neutral-800 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8">
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
                  className="w-full h-64 sm:h-72 object-cover filter grayscale contrast-115"
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

          {/* Individual Service Cards Grid: 3-column mobile & desktop (3x3 grid) */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
            {marketingCategory?.items.map((item, idx) => {
              const thumb = serviceThumbnails[item.slug] || marketingDefaultImg
              return (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="group flex flex-col justify-between border-2 border-black dark:border-white bg-white dark:bg-neutral-900 p-2 sm:p-4 text-center transition-all duration-200 hover:shadow-[4px_4px_0_#000] dark:hover:shadow-[4px_4px_0_#fff] active:translate-x-0.5 active:translate-y-0.5"
                >
                  <div>
                    <div className="relative aspect-square w-full overflow-hidden border-2 border-black dark:border-white bg-white mb-2">
                      <img
                        src={thumb}
                        alt={item.name}
                        className="w-full h-full object-cover filter grayscale contrast-115 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute bottom-1 left-1 bg-black text-white text-[9px] font-mono font-bold px-1.5 py-0.5 uppercase hidden sm:block">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="font-heading text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-tight text-neutral-950 dark:text-white line-clamp-2 leading-tight group-hover:underline">
                      {item.name}
                    </span>
                  </div>

                  <div className="pt-2 sm:pt-3 border-t border-black/10 dark:border-white/10 mt-2 flex items-center justify-center">
                    <span className="font-mono text-[9px] sm:text-[11px] font-bold text-black dark:text-white uppercase tracking-wider">
                      Explore →
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
                  className="w-full h-64 sm:h-72 object-cover filter grayscale contrast-115"
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

          {/* Individual Service Cards Grid: 3-column mobile & desktop (3x3 / 3x4 grid) */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
            {softwareCategory?.items.map((item, idx) => {
              const thumb = serviceThumbnails[item.slug] || softwareDefaultImg
              return (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="group flex flex-col justify-between border-2 border-black dark:border-white bg-white dark:bg-neutral-900 p-2 sm:p-4 text-center transition-all duration-200 hover:shadow-[4px_4px_0_#000] dark:hover:shadow-[4px_4px_0_#fff] active:translate-x-0.5 active:translate-y-0.5"
                >
                  <div>
                    <div className="relative aspect-square w-full overflow-hidden border-2 border-black dark:border-white bg-white mb-2">
                      <img
                        src={thumb}
                        alt={item.name}
                        className="w-full h-full object-cover filter grayscale contrast-115 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute bottom-1 left-1 bg-black text-white text-[9px] font-mono font-bold px-1.5 py-0.5 uppercase hidden sm:block">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="font-heading text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-tight text-neutral-950 dark:text-white line-clamp-2 leading-tight group-hover:underline">
                      {item.name}
                    </span>
                  </div>

                  <div className="pt-2 sm:pt-3 border-t border-black/10 dark:border-white/10 mt-2 flex items-center justify-center">
                    <span className="font-mono text-[9px] sm:text-[11px] font-bold text-black dark:text-white uppercase tracking-wider">
                      Explore →
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
