import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import QuoteForm from '../components/QuoteForm'
import Accordion from '../components/Accordion'
import { getServiceBySlug, serviceCategories } from '../data/verticals'
import { comprehensiveServiceDetails } from '../data/serviceDetailsData'
import {
  HiCheck,
  HiOutlineSparkles,
  HiOutlineCode,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineCube,
  HiOutlineTerminal,
} from 'react-icons/hi'

// Import 100% unique sub-service images for every capability
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

const serviceImages = {
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

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const isMarketing =
    service.categorySlug === 'digital-marketing-branding' ||
    service.slug === 'digital-marketing-branding'

  const heroImage =
    serviceImages[service.slug] ||
    (isMarketing ? marketingDefaultImg : softwareDefaultImg)

  // Find deep whitepaper profile
  const whitepaper = comprehensiveServiceDetails[service.slug] || {}

  // Find related capabilities in the same category
  const parentCategory = serviceCategories.find(
    (c) => c.slug === service.categorySlug || c.slug === service.slug
  )
  const relatedItems =
    parentCategory?.items.filter((i) => i.slug !== service.slug).slice(0, 4) || []

  const deliverables =
    whitepaper.deliverablesDetailed ||
    service.deliverables || [
      'Comprehensive Technical Specification and Architecture Blueprint',
      'End-to-End Production Implementation in Verified Modern Stacks',
      'Quality Assurance Verification with Automated CI/CD Deployment Gates',
      '100% Unencumbered Source Code and Intellectual Property Handover',
    ]

  const roadmap = whitepaper.roadmap || [
    {
      stage: 'Phase 01',
      name: 'Discovery & Domain Modeling',
      detail:
        'Deep technical audit of operational workflows, competitive positioning, and target architecture benchmarks.',
    },
    {
      stage: 'Phase 02',
      name: 'System Architecture & Blueprints',
      detail:
        'Authoring schema definitions, API contracts, Figma design tokens, and infrastructure topologies.',
    },
    {
      stage: 'Phase 03',
      name: 'Production Engineering & CI/CD',
      detail:
        'Core development sprints, automated regression test authoring, and integration testing.',
    },
    {
      stage: 'Phase 04',
      name: 'Quality Gates & Staging Audit',
      detail:
        'Rigorous cross-platform verification, load testing, security hardening, and stakeholder sign-off.',
    },
    {
      stage: 'Phase 05',
      name: 'Production Cutover & SLA Handover',
      detail:
        'Zero-downtime production deployment, telemetry alerting setup, and 100% intellectual property transfer.',
    },
  ]

  const techStack = whitepaper.techStack || (isMarketing
    ? ['Figma Enterprise', 'Google Ads API', 'Meta Conversions API', 'TailwindCSS', 'Google Analytics 4', 'HubSpot']
    : ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'GitHub Actions'])

  const sla = whitepaper.sla || {
    uptime: isMarketing ? '100% Ad Account & Data Ownership' : '99.9% Production Uptime SLA',
    warranty: '90 Days Comprehensive Bug-Fix Warranty on Delivered Code',
    handover: '100% Intellectual Property & Source Code Transfer',
    response: 'Under 2-Hour Response Time for Critical Operational Incidents',
  }

  const faqs = whitepaper.faqs || [
    {
      question: `What is CoreForge's exact delivery model for ${service.name}?`,
      answer:
        'We operate on structured milestone-based delivery with weekly sprint demos. You have full visibility into our private Git repositories and direct communication channels with our engineering leads in Bengaluru.',
    },
    {
      question: 'Who owns the intellectual property and deliverables?',
      answer:
        'You own 100% of all code, assets, schemas, and design files upon milestone settlement. We transfer complete unencumbered commercial ownership with full legal assignment deeds.',
    },
    {
      question: 'How do you prevent project delays and scope creep?',
      answer:
        'Every project begins with a locked technical specification document defining exact acceptance criteria. Any additions follow formal change-request pricing without delaying the core delivery path.',
    },
  ]

  const accordionItems = faqs.map((f) => ({
    question: f.q || f.question,
    answer: f.a || f.answer,
  }))

  return (
    <>
      <SEO
        title={`${service.name} (Technical Architecture & Deliverables) | CoreForge Bengaluru`}
        description={
          whitepaper.overview ||
          service.shortDescription ||
          service.description
        }
        keywords={`CoreForge ${service.name}, Bengaluru engineering, ${
          isMarketing ? 'digital marketing' : 'software development'
        }, enterprise architecture Bangalore`}
        canonicalUrl={`https://www.coreforgeindia.com/services/${service.slug}`}
      />

      {/* Hero Header with Conic Pattern (100dvh Screen Fitting) */}
      <section className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center pt-24 pb-16 pattern-conic border-b-4 border-black dark:border-white">
        {/* High-legibility brutalist backdrop scrim */}
        <div className="absolute inset-0 bg-white/85 dark:bg-black/80 backdrop-blur-[1px] pointer-events-none" />

        <div className="section-shell relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-6">
            <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:text-black dark:hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-black dark:text-white font-bold">{service.name}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-neutral-600 dark:text-neutral-400 mb-3">
              {isMarketing ? (
                <HiOutlineSparkles className="h-4 w-4 text-black dark:text-white" />
              ) : (
                <HiOutlineCode className="h-4 w-4 text-black dark:text-white" />
              )}
              <span>
                {service.categoryName ||
                  (isMarketing
                    ? '360° Digital Marketing & Branding'
                    : 'Custom Software & App Development')}
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-tight mb-6">
              {service.name}
            </h1>

            <p className="text-base sm:text-xl text-neutral-800 dark:text-neutral-300 max-w-3xl leading-relaxed mb-8">
              {service.shortDescription || service.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#consultation" className="btn-primary text-xs">
                Request Scoping Proposal
              </a>
              <a href="#whitepaper" className="btn-secondary text-xs">
                View Engineering Whitepaper
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Detail Section */}
      <section
        id="whitepaper"
        className="py-20 sm:py-28 bg-[#fbfbfa] dark:bg-[#0c0c0d] border-b-4 border-black dark:border-white"
      >
        <div className="section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Deep Architectural Whitepaper (5-8 Pages Depth) */}
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

              {/* 1. Executive Architectural Overview */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                  SECTION 01 · EXECUTIVE ARCHITECTURE MANIFESTO
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase text-black dark:text-white mb-4">
                  The Engineering Thesis & Core Philosophy
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                  <p>
                    {whitepaper.overview ||
                      (isMarketing
                        ? 'In our digital marketing and brand strategy practice, we eliminate superficial vanity metrics in favor of measurable customer acquisition pipeline, clear brand defensibility, and sustained ROAS. Every visual asset, campaign parameter, and organic cluster is engineered for verified commercial velocity.'
                        : 'In our software engineering practice, we author maintainable, scalable architectures built for enterprise longevity. We eliminate third-party plugin dependencies, optimize database query latency, and establish automated deployment pipelines that keep operations scaling flawlessly.')}
                  </p>
                  {whitepaper.methodology && (
                    <div className="border-t-2 border-black/10 dark:border-white/10 pt-4 mt-4">
                      <h4 className="font-heading text-base font-bold uppercase text-black dark:text-white mb-2">
                        Methodological Architecture & Systems Protocol
                      </h4>
                      <p>{whitepaper.methodology}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* 2. Itemized Deliverables Breakdown */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                  SECTION 02 · ENTERPRISE SCOPE SPECIFICATION
                </span>
                <h2 className="font-heading text-2xl font-black uppercase text-black dark:text-white mb-6">
                  Verified Engineering Deliverables
                </h2>
                <ul className="space-y-4">
                  {deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3.5 text-sm sm:text-base text-neutral-800 dark:text-neutral-200"
                    >
                      <span className="w-5 h-5 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        <HiCheck className="h-3.5 w-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. 5-Stage Sprint Execution Roadmap */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                  SECTION 03 · SPRINT GOVERNANCE & DELIVERY TIMELINE
                </span>
                <h2 className="font-heading text-2xl font-black uppercase text-black dark:text-white mb-6">
                  5-Stage Sprint Execution Roadmap
                </h2>
                <div className="space-y-4">
                  {roadmap.map((step, idx) => (
                    <div
                      key={idx}
                      className="border-2 border-black dark:border-white p-5 bg-[#fbfbfa] dark:bg-neutral-900 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-black uppercase tracking-wider px-2 py-0.5 bg-black text-white dark:bg-white dark:text-black">
                          {step.stage}
                        </span>
                        <span className="font-mono text-xs text-neutral-500">STAGE 0{idx + 1}</span>
                      </div>
                      <h4 className="font-heading text-base font-bold uppercase text-black dark:text-white mb-2">
                        {step.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Technology Stack & Tooling Matrix */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                  SECTION 04 · PRODUCTION TOOLING & FRAMEWORKS
                </span>
                <h2 className="font-heading text-2xl font-black uppercase text-black dark:text-white mb-4">
                  Technology Stack & Tooling Ecosystem
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6 font-mono">
                  Every tool in our stack is evaluated for long-term open-source stability, zero vendor lock-in, and sub-millisecond execution profiles.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs font-bold uppercase px-3.5 py-1.5 border-2 border-black dark:border-white bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 5. Commercial SLAs & Guarantees */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                  SECTION 05 · SERVICE LEVEL COMMITMENTS & IP OWNERSHIP
                </span>
                <h2 className="font-heading text-2xl font-black uppercase text-black dark:text-white mb-6">
                  Commercial SLAs & Security Guarantees
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border-2 border-black dark:border-white p-4 bg-[#fbfbfa] dark:bg-neutral-900">
                    <div className="flex items-center gap-2 mb-2">
                      <HiOutlineShieldCheck className="h-5 w-5 text-black dark:text-white" />
                      <strong className="font-heading text-xs font-bold uppercase">100% IP Handover</strong>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {sla.ipOwnership || sla.handover || 'Full legal transfer of all intellectual property, source code, and design tokens upon final delivery.'}
                    </p>
                  </div>

                  <div className="border-2 border-black dark:border-white p-4 bg-[#fbfbfa] dark:bg-neutral-900">
                    <div className="flex items-center gap-2 mb-2">
                      <HiOutlineClock className="h-5 w-5 text-black dark:text-white" />
                      <strong className="font-heading text-xs font-bold uppercase">Rapid Response SLA</strong>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {sla.response || sla.responseTime || 'Direct access to senior engineering principals with guaranteed sub-2 hour emergency response.'}
                    </p>
                  </div>

                  <div className="border-2 border-black dark:border-white p-4 bg-[#fbfbfa] dark:bg-neutral-900">
                    <div className="flex items-center gap-2 mb-2">
                      <HiOutlineCube className="h-5 w-5 text-black dark:text-white" />
                      <strong className="font-heading text-xs font-bold uppercase">Warranty Period</strong>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {sla.warranty || sla.bugFixes || 'Comprehensive 90-day post-launch warranty covering all functional defects and browser updates.'}
                    </p>
                  </div>

                  <div className="border-2 border-black dark:border-white p-4 bg-[#fbfbfa] dark:bg-neutral-900">
                    <div className="flex items-center gap-2 mb-2">
                      <HiOutlineTerminal className="h-5 w-5 text-black dark:text-white" />
                      <strong className="font-heading text-xs font-bold uppercase">Availability SLA</strong>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {sla.uptime || sla.uptimeSla || '99.9% uptime architecture backing with automated health monitoring and failover.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. Service-Specific Technical FAQ */}
              <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                  SECTION 06 · FREQUENTLY ASKED TECHNICAL QUESTIONS
                </span>
                <h2 className="font-heading text-2xl font-black uppercase text-black dark:text-white mb-6">
                  {service.name} Technical FAQs
                </h2>
                <Accordion items={accordionItems} allowMultiple={false} />
              </div>
            </div>

            {/* Right Column: Embedded Consultation Form & Related Services */}
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
