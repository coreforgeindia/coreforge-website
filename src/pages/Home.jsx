import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import QuoteForm from '../components/QuoteForm'
import { serviceCategories } from '../data/verticals'
import {
  HiArrowRight,
  HiOutlineSparkles,
  HiOutlineCode,
  HiOutlineCheck,
  HiOutlineTrendingUp,
  HiOutlineServer,
  HiOutlineShieldCheck,
} from 'react-icons/hi'
import softwareImg from '../assets/services/service-software.jpg'
import marketingImg from '../assets/services/service-marketing.jpg'
import vhfImg from '../assets/products/antenna-vhf-uhf.jpg'
import duplexerImg from '../assets/products/rf-duplexer.jpg'

export default function Home() {
  const marketingCategory = serviceCategories.find((c) => c.slug === 'digital-marketing-branding')
  const softwareCategory = serviceCategories.find((c) => c.slug === 'software-app-development')

  return (
    <>
      <SEO
        title="CoreForge | 360° Digital Marketing & Custom Software Engineering Bengaluru"
        description="CoreForge is an engineering firm in Bengaluru delivering 360° Digital Marketing & Branding for business growth, and Custom Software & App Development for mission-critical operations."
        keywords="360 digital marketing Bangalore, custom software engineering Bengaluru, React app development, brand identity agency, Google ads management Bangalore"
        canonicalUrl="https://www.coreforgeindia.com/"
      />

      {/* ── 1. Hero Section (Strict Neo-Brutalist & Premium, 100dvh Full Viewport) ── */}
      <section className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center pt-24 pb-16 border-b-4 border-black dark:border-white pattern-grid" aria-labelledby="hero-title">
        <div className="section-shell relative z-10 text-center max-w-4xl mx-auto">
          {/* Main H1 in Space Grotesk */}
          <h1
            id="hero-title"
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-[1.06] mb-8"
          >
            360° Digital Marketing & Custom Software Engineering
          </h1>

          {/* Genuine, Direct Positioning */}
          <p className="text-base sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-10">
            We partner with growing enterprises to engineer two essential pillars: <strong>360° Digital Marketing & Branding</strong> to drive customer acquisition and commercial growth, and <strong>Custom Software Platforms</strong> to keep operations running flawlessly and scale business to greater heights.
          </p>

          {/* Uiverse-styled Brutalist Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link to="/services" className="btn-primary">
              <span>Explore All Services</span>
              <HiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href="#quote" className="btn-secondary">
              <span>Request Direct Proposal</span>
            </a>
          </div>

          {/* Subtle Footnote on Product Catalogue */}
          <div className="mt-12 pt-6 border-t border-black/10 dark:border-white/10 text-xs text-neutral-500 font-mono">
            <span>Also supplying: </span>
            <Link to="/products" className="text-black dark:text-white font-bold underline hover:opacity-80">
              Industrial Antenna & RF Communication Products Catalogue →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Psychological Credibility & Verified Metrics ── */}
      <section className="py-16 sm:py-20 border-b-4 border-black dark:border-white bg-black text-white" aria-label="Verified Numbers">
        <div className="section-shell">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="border-r-0 lg:border-r border-neutral-800 p-4">
              <span className="font-heading text-4xl sm:text-6xl font-black block mb-2 text-white">
                20+
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block font-bold">
                Active Client Accounts
              </span>
              <span className="text-[11px] text-neutral-500 mt-1 block">
                360° Branding & Marketing
              </span>
            </div>

            <div className="border-r-0 lg:border-r border-neutral-800 p-4">
              <span className="font-heading text-4xl sm:text-6xl font-black block mb-2 text-white">
                ₹85,000+
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block font-bold">
                Ad Spend Managed
              </span>
              <span className="text-[11px] text-neutral-500 mt-1 block">
                Google Ads & Meta Ads Certified
              </span>
            </div>

            <div className="border-r-0 lg:border-r border-neutral-800 p-4">
              <span className="font-heading text-4xl sm:text-6xl font-black block mb-2 text-white">
                15+
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block font-bold">
                Production Platforms
              </span>
              <span className="text-[11px] text-neutral-500 mt-1 block">
                Custom Web & Mobile Apps
              </span>
            </div>

            <div className="p-4">
              <span className="font-heading text-4xl sm:text-6xl font-black block mb-2 text-white">
                99.9%
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block font-bold">
                Uptime Architecture
              </span>
              <span className="text-[11px] text-neutral-500 mt-1 block">
                Zero-Downtime SLA Standards
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Division 1: 360° Digital Marketing & Branding (Deep-Dive) ── */}
      <section className="py-20 sm:py-28 border-b-4 border-black dark:border-white bg-[#fbfbfa] dark:bg-[#0c0c0d]" aria-labelledby="marketing-heading">
        <div className="section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-neutral-500 mb-2">
                <HiOutlineSparkles className="h-4 w-4 text-black dark:text-white" />
                <span>PRACTICE 01 · BUSINESS BRANDING & GROWTH ENGINE</span>
              </div>
              <h2 id="marketing-heading" className="font-heading text-3xl sm:text-5xl font-black uppercase text-black dark:text-white mb-6">
                360° Digital Marketing & Branding
              </h2>
              <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                We take complete ownership of your brand presence and commercial trajectory. From formulating an authoritative visual identity and high-converting web presence to running precision Google Ads, Meta Ads, and technical organic SEO that consistently brings in verified paying customers.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
                <span className="px-2.5 py-1 border border-black dark:border-white bg-white dark:bg-neutral-900">
                  Google Search & Display Ads
                </span>
                <span className="px-2.5 py-1 border border-black dark:border-white bg-white dark:bg-neutral-900">
                  Meta (Instagram/FB) Funnels
                </span>
                <span className="px-2.5 py-1 border border-black dark:border-white bg-white dark:bg-neutral-900">
                  High-Impact Brand Identity
                </span>
                <span className="px-2.5 py-1 border border-black dark:border-white bg-white dark:bg-neutral-900">
                  Technical On-Page SEO
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border-4 border-black dark:border-white overflow-hidden bg-neutral-900 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <img
                  src={marketingImg}
                  alt="360 Digital Marketing Studio"
                  className="w-full h-72 object-cover filter contrast-110"
                  loading="lazy"
                />
                <div className="p-3 bg-black text-white text-xs font-mono flex justify-between">
                  <span>20+ ACTIVE CLIENTS</span>
                  <span>10 CORE CAPABILITIES</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cards for Marketing Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingCategory?.items.slice(0, 6).map((item) => (
              <div key={item.slug} className="brutalist-card">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-neutral-400 uppercase">
                      BRAND & GROWTH
                    </span>
                    <HiOutlineTrendingUp className="h-4 w-4 text-black dark:text-white" />
                  </div>
                  <span className="brutalist-card__title">
                    {item.name}
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-black dark:border-white flex items-center justify-between">
                  <Link
                    to={`/services/${item.slug}`}
                    className="font-mono text-xs font-bold text-black dark:text-white uppercase tracking-wider hover:underline"
                  >
                    Explore Capability →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-secondary">
              <span>Inspect All 10 Marketing & Branding Services</span>
              <HiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Division 2: Custom Software & App Development (Deep-Dive) ── */}
      <section className="py-20 sm:py-28 border-b-4 border-black dark:border-white bg-white dark:bg-[#151516]" aria-labelledby="software-heading">
        <div className="section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="border-4 border-black dark:border-white overflow-hidden bg-neutral-900 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
                <img
                  src={softwareImg}
                  alt="Custom Software & Application Engineering"
                  className="w-full h-72 object-cover filter contrast-110"
                  loading="lazy"
                />
                <div className="p-3 bg-black text-white text-xs font-mono flex justify-between">
                  <span>99.9% UPTIME ARCHITECTURE</span>
                  <span>10 PRODUCTION MODULES</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-neutral-500 mb-2">
                <HiOutlineCode className="h-4 w-4 text-black dark:text-white" />
                <span>PRACTICE 02 · ENTERPRISE SOFTWARE BACKBONE</span>
              </div>
              <h2 id="software-heading" className="font-heading text-3xl sm:text-5xl font-black uppercase text-black dark:text-white mb-6">
                Custom Software & App Development
              </h2>
              <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                We build the reliable digital infrastructure that keeps your business running smoothly every single day, while engineering custom features that take your organization to new heights. We architect custom React web platforms, mobile apps for iOS and Android, cloud APIs, and high-performance database architectures without technical debt.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
                <span className="px-2.5 py-1 border border-black dark:border-white bg-[#fbfbfa] dark:bg-neutral-900">
                  Custom Web Platforms (React / Node)
                </span>
                <span className="px-2.5 py-1 border border-black dark:border-white bg-[#fbfbfa] dark:bg-neutral-900">
                  Mobile Apps (iOS & Android)
                </span>
                <span className="px-2.5 py-1 border border-black dark:border-white bg-[#fbfbfa] dark:bg-neutral-900">
                  Microservices & Cloud APIs
                </span>
                <span className="px-2.5 py-1 border border-black dark:border-white bg-[#fbfbfa] dark:bg-neutral-900">
                  Database Optimization
                </span>
              </div>
            </div>
          </div>

          {/* Cards for Software Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareCategory?.items.slice(0, 6).map((item) => (
              <div key={item.slug} className="brutalist-card">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-neutral-400 uppercase">
                      SYSTEM ARCHITECTURE
                    </span>
                    <HiOutlineServer className="h-4 w-4 text-black dark:text-white" />
                  </div>
                  <span className="brutalist-card__title">
                    {item.name}
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-black dark:border-white flex items-center justify-between">
                  <Link
                    to={`/services/${item.slug}`}
                    className="font-mono text-xs font-bold text-black dark:text-white uppercase tracking-wider hover:underline"
                  >
                    Explore Capability →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-secondary">
              <span>Inspect All 10 Software Development Frameworks</span>
              <HiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Why Businesses Trust CoreForge (Psychological Genuine Value) ── */}
      <section className="py-20 sm:py-28 border-b-4 border-black dark:border-white bg-[#fbfbfa] dark:bg-[#0c0c0d]" aria-label="Why CoreForge">
        <div className="section-shell">
          <div className="max-w-3xl mb-16">
            <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-black dark:text-white mb-4">
              Why Companies Trust CoreForge
            </h2>
            <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Most agencies hide behind layers of non-technical middlemen, bloated WordPress templates, and vanity metrics. We operate with direct senior technical authorship: you communicate directly with the engineers and brand strategists executing your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="brutalist-card">
              <span className="font-mono text-3xl font-black block mb-4">01</span>
              <span className="brutalist-card__title">Direct Authorship</span>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                No junior account managers or offshore passing-off. Direct access to the developers and brand directors who write the code and design the collateral.
              </p>
              <div className="pt-4 border-t border-black/10 dark:border-white/10 text-xs font-mono text-neutral-500">
                Transparent weekly updates & live staging environments
              </div>
            </div>

            <div className="brutalist-card">
              <span className="font-mono text-3xl font-black block mb-4">02</span>
              <span className="brutalist-card__title">Zero Vendor Lock-in</span>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                You receive 100% ownership of your Git repositories, Figma design files, cloud deployment accounts, and Google/Meta ad accounts.
              </p>
              <div className="pt-4 border-t border-black/10 dark:border-white/10 text-xs font-mono text-neutral-500">
                Complete intellectual property transfer upon delivery
              </div>
            </div>

            <div className="brutalist-card">
              <span className="font-mono text-3xl font-black block mb-4">03</span>
              <span className="brutalist-card__title">Verified Commercial ROI</span>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                Whether it is sub-second page performance, 99.9% server uptime, or qualified lead volume through paid media, everything is quantified against commercial goals.
              </p>
              <div className="pt-4 border-t border-black/10 dark:border-white/10 text-xs font-mono text-neutral-500">
                Conversion API attribution and verified ROAS metrics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Auxiliary Hardware Supply (Compact Mention) ── */}
      <section className="py-16 sm:py-20 border-b-4 border-black dark:border-white bg-[#f3f3f1] dark:bg-[#1a1a1d]" aria-label="Hardware Products">
        <div className="section-shell">
          <div className="border-4 border-black dark:border-white bg-white dark:bg-[#151516] p-8 sm:p-12 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="font-mono text-xs font-bold uppercase text-neutral-500 block mb-2">
                  AUXILIARY PRODUCT SUPPLY LINE
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-black dark:text-white mb-3">
                  Industrial Antenna & RF Hardware Products
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl mb-6">
                  Alongside our primary digital and software practices, CoreForge supplies an industrial-grade portfolio of communication antennas, cavity duplexers, and coaxial cable assemblies for mission-critical wireless networks.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link to="/products" className="btn-secondary text-xs">
                    <span>Browse Product Catalogue</span>
                    <HiArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="font-mono text-xs text-neutral-500">
                    VHF/UHF · GSM/LTE · Wi-Fi · GPS · Duplexers · Low-Loss RF Cables
                  </span>
                </div>
              </div>

              {/* Hardware Preview Thumbnails */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                <Link to="/products/vhf-uhf-antennas" className="border-2 border-black dark:border-white overflow-hidden bg-neutral-900 h-28 relative block group">
                  <img src={vhfImg} alt="VHF UHF Antenna" className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform" loading="lazy" />
                  <span className="absolute bottom-1 left-1.5 text-[9px] font-mono font-bold text-white bg-black/80 px-1 py-0.5">
                    VHF/UHF →
                  </span>
                </Link>
                <Link to="/products/rf-cavity-duplexers" className="border-2 border-black dark:border-white overflow-hidden bg-neutral-900 h-28 relative block group">
                  <img src={duplexerImg} alt="RF Cavity Duplexer" className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform" loading="lazy" />
                  <span className="absolute bottom-1 left-1.5 text-[9px] font-mono font-bold text-white bg-black/80 px-1 py-0.5">
                    DUPLEXERS →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Multi-Step Technical Proposal & Consultation Form ── */}
      <section id="quote" className="py-20 sm:py-32 bg-[#fbfbfa] dark:bg-[#0c0c0d]" aria-labelledby="quote-heading">
        <div className="section-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="quote-heading" className="font-heading text-3xl sm:text-5xl font-black uppercase text-black dark:text-white mb-4">
              Start Your Project Consultation
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
              Complete the quick 4-step consultation request below. Our technical leads respond with scoping milestones within 24 business hours.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <QuoteForm initialCategory="marketing" />
          </div>
        </div>
      </section>
    </>
  )
}
