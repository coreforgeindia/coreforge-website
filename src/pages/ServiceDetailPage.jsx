import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import QuoteForm from '../components/QuoteForm'
import { getServiceBySlug, serviceCategories } from '../data/verticals'
import { HiCheck, HiArrowRight, HiOutlineSparkles, HiOutlineCode } from 'react-icons/hi'

// Import all unique sub-service images
import brandImg from '../assets/services/brand-strategy.jpg'
import webImg from '../assets/services/web-development.jpg'
import adsImg from '../assets/services/paid-advertising.jpg'
import customWebImg from '../assets/services/custom-webapp.jpg'
import mobileImg from '../assets/services/mobile-app.jpg'
import marketingDefaultImg from '../assets/services/service-marketing.jpg'
import softwareDefaultImg from '../assets/services/service-software.jpg'

const serviceImages = {
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

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const isMarketing = service.categorySlug === 'digital-marketing-branding' || service.slug === 'digital-marketing-branding'

  const heroImage =
    serviceImages[service.slug] ||
    (isMarketing ? marketingDefaultImg : softwareDefaultImg)

  // Find related capabilities in the same category
  const parentCategory = serviceCategories.find(
    (c) => c.slug === service.categorySlug || c.slug === service.slug
  )
  const relatedItems = parentCategory?.items.filter((i) => i.slug !== service.slug).slice(0, 3) || []

  return (
    <>
      <SEO
        title={`${service.name} | CoreForge Bengaluru`}
        description={service.shortDescription || service.description}
        keywords={`CoreForge ${service.name}, Bengaluru engineering, ${isMarketing ? 'digital marketing' : 'software development'}`}
        canonicalUrl={`https://www.coreforgeindia.com/services/${service.slug}`}
      />

      {/* Hero Header with Conic Pattern */}
      <section className="relative py-20 sm:py-28 pattern-conic text-white border-b-4 border-black dark:border-white">
        <div className="section-shell relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-white font-bold">{service.name}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-neutral-400 mb-3">
              {isMarketing ? (
                <HiOutlineSparkles className="h-4 w-4 text-white" />
              ) : (
                <HiOutlineCode className="h-4 w-4 text-white" />
              )}
              <span>{service.categoryName || (isMarketing ? '360° Digital Marketing & Branding' : 'Custom Software & App Development')}</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-6">
              {service.name}
            </h1>

            <p className="text-base sm:text-xl text-neutral-300 max-w-3xl leading-relaxed mb-8">
              {service.shortDescription || service.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#consultation" className="btn-primary text-xs">
                Request Scoping Proposal
              </a>
              <Link to="/services" className="btn-secondary text-xs">
                Back to All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Detail Section */}
      <section className="py-20 sm:py-28 bg-[#fbfbfa] dark:bg-[#0c0c0d] border-b-4 border-black dark:border-white">
        <div className="section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Deep Architectural Narrative & Deliverables */}
            <div className="lg:col-span-7 space-y-12">
              {/* Dedicated High-Res Photography */}
              <div className="border-4 border-black dark:border-white overflow-hidden bg-neutral-900 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <img
                  src={heroImage}
                  alt={service.name}
                  className="w-full h-80 sm:h-96 object-cover filter contrast-105"
                />
                <div className="p-3 bg-black text-white text-xs font-mono flex justify-between">
                  <span>DISCIPLINE: {service.name.toUpperCase()}</span>
                  <span>COREFORGE BENGALURU</span>
                </div>
              </div>

              {/* Strategic Purpose */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <h2 className="font-heading text-2xl font-black uppercase text-black dark:text-white mb-4">
                  Strategic Scope & Execution Framework
                </h2>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                  {isMarketing
                    ? 'In our marketing practice, we discard superficial vanity metrics in favor of measurable pipeline generation, clear brand positioning, and sustained ROAS. Every visual asset, campaign parameter, and organic cluster is engineered for high conversion velocity.'
                    : 'In our software engineering practice, we author maintainable, scalable architectures built for enterprise longevity. We eliminate third-party plugin dependencies, optimize database query latency, and establish automated deployment pipelines that keep your operations running flawlessly.'}
                </p>

                {/* Deliverables Checklist */}
                {service.deliverables && service.deliverables.length > 0 && (
                  <div className="border-t-2 border-black dark:border-white pt-6 mt-6">
                    <h3 className="font-heading text-lg font-bold uppercase text-black dark:text-white mb-4">
                      Verified Engineering Deliverables
                    </h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-neutral-800 dark:text-neutral-200">
                          <span className="w-5 h-5 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black flex items-center justify-center flex-shrink-0 mt-0.5">
                            <HiCheck className="h-3.5 w-3.5" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Execution Roadmap */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <h2 className="font-heading text-2xl font-black uppercase text-black dark:text-white mb-6">
                  4-Stage Execution Methodology
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border-2 border-black dark:border-white p-4">
                    <span className="font-mono text-xs font-black block mb-1">STAGE 01</span>
                    <h4 className="font-heading text-base font-bold uppercase mb-2">Discovery & Audit</h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Deep technical evaluation of existing assets, competitive positioning, and target commercial benchmarks.
                    </p>
                  </div>

                  <div className="border-2 border-black dark:border-white p-4">
                    <span className="font-mono text-xs font-black block mb-1">STAGE 02</span>
                    <h4 className="font-heading text-base font-bold uppercase mb-2">Architecture</h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      System design blueprints, Figma wireframes, tracking schemas, or cloud environment configurations.
                    </p>
                  </div>

                  <div className="border-2 border-black dark:border-white p-4">
                    <span className="font-mono text-xs font-black block mb-1">STAGE 03</span>
                    <h4 className="font-heading text-base font-bold uppercase mb-2">Build & Staging</h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Production code authoring, automated testing gates, creative iteration, and live sprint reviews.
                    </p>
                  </div>

                  <div className="border-2 border-black dark:border-white p-4">
                    <span className="font-mono text-xs font-black block mb-1">STAGE 04</span>
                    <h4 className="font-heading text-base font-bold uppercase mb-2">Deployment & Scale</h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Zero-downtime production cutover, conversion tracking verification, and ongoing SLA maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Embedded Consultation Form & Related Services */}
            <div className="lg:col-span-5 space-y-12">
              <div id="consultation">
                <QuoteForm
                  initialCategory={isMarketing ? 'marketing' : 'software'}
                  initialItemName={service.name}
                />
              </div>

              {/* Related Capabilities in this Category */}
              {relatedItems.length > 0 && (
                <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-6 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                  <h3 className="font-heading text-lg font-black uppercase text-black dark:text-white mb-4">
                    Related {parentCategory?.shortName} Capabilities
                  </h3>
                  <div className="space-y-4">
                    {relatedItems.map((rel) => (
                      <Link
                        key={rel.slug}
                        to={`/services/${rel.slug}`}
                        className="block p-4 border-2 border-black dark:border-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
                      >
                        <span className="font-heading text-sm font-bold uppercase text-black dark:text-white block group-hover:underline">
                          {rel.name}
                        </span>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">
                          {rel.shortDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
