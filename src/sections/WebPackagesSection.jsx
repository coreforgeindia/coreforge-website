import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiCheck, HiX, HiArrowRight, HiOutlineShieldCheck, HiOutlineSparkles } from 'react-icons/hi'
import { fadeUp, stagger } from '../utils/motion'

const packages = [
  {
    id: 'launch',
    name: 'LAUNCH',
    subtitle: 'Essential Professional Website',
    tag: 'Get Online',
    highlight: false,
    summary: 'Perfect for startups and businesses needing a clean, high-performance web presence with fundamental SEO and direct lead capture.',
    specs: [
      'Up to 5 Custom Pages (Home, About, Services, Contact, FAQ, 404)',
      '100% Responsive Desktop, Tablet, and Mobile UI/UX',
      'Basic Smooth Animations, Hover Effects, and Navigation Menus',
      'Interactive Contact Form with Form Validation & WhatsApp Chat',
      'Google Maps Embed, Social Media Links, Phone/Email Integration',
      'Basic SEO: Page Titles, Meta Descriptions, Canonical, Sitemap & Robots.txt',
      'Production Build, Domain Connection, SSL/HTTPS Setup & Testing',
      '2 Revision Rounds & 3 Months Post-Launch Support with Bug Fixes',
    ],
  },
  {
    id: 'growth',
    name: 'GROWTH',
    subtitle: 'Advanced Business Platform',
    tag: 'Grow Online',
    highlight: true,
    summary: 'Tailored for expanding companies requiring custom CMS administration, up to 30 products/services, advanced animations, and third-party integrations.',
    specs: [
      'Up to 10 Custom Pages (Includes Industries, Projects Gallery, Resources, Blog)',
      'Advanced UI/UX with Page Transitions, Micro-Interactions & Counters',
      'Full CMS & Admin Panel: Manage Products, Services, Projects, FAQs & Blogs',
      'Catalog Support for up to 30 Products/Services & 15 Projects',
      'Up to 3 Third-Party Integrations (CRM, Contact Sync, Google Services)',
      'Advanced SEO: JSON-LD Schema Markup, Search Console & Open Graph Meta',
      'Performance Optimization with Sub-Second Page Load Times',
      '3 Revision Rounds & 6 Months Post-Launch Support with Minor UI Updates',
    ],
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    subtitle: 'Full-Featured Digital Platform',
    tag: 'Scale Online',
    highlight: false,
    summary: 'Full-scale web platform featuring E-Commerce, 3D interactive visualizations, complex payment gateway integrations, and enterprise-grade security.',
    specs: [
      'Up to 15 Custom Pages (Includes Case Studies, Careers, Advanced Portal)',
      'Premium Motion Design, Parallax Storytelling & Interactive 3D Sections',
      'Complete E-Commerce: Product Catalog, Cart, Checkout, User Accounts & Gateway',
      'Advanced Multi-Role Admin Dashboard with Analytics & Lead Management',
      'Up to 5 Third-Party Integrations + 1 CRM + WhatsApp & Email Pipelines',
      'Technical SEO, Local SEO, Conversion Tracking & Analytics Overview',
      'Enterprise Security: Authentication, Protected Routes, Input Sanitization, SSL',
      '4 Revision Rounds & 12 Months Post-Launch Support with Content Updates',
    ],
  },
]

const comparisonCategories = [
  {
    category: 'Website Structure & Pages',
    features: [
      { name: 'Number of Custom Pages', launch: 'Up to 5 pages', growth: 'Up to 10 pages', premium: 'Up to 15 pages' },
      { name: 'Core Pages (Home, About, Services, Contact, FAQ, 404)', launch: true, growth: true, premium: true },
      { name: 'Industries, Projects Gallery & Resources', launch: false, growth: true, premium: true },
      { name: 'Dedicated Blog & Insights Architecture', launch: false, growth: true, premium: true },
      { name: 'Case Studies & Careers Portal', launch: false, growth: false, premium: true },
    ],
  },
  {
    category: 'Design, UI/UX & Motion',
    features: [
      { name: 'Responsive Mobile, Tablet & Desktop Layout', launch: true, growth: true, premium: true },
      { name: 'Custom Brand UI/UX Design System', launch: true, growth: true, premium: true },
      { name: 'Advanced Motion, Page Transitions & Micro-Interactions', launch: false, growth: true, premium: true },
      { name: '3D Interactive Product Models & Sections', launch: false, growth: false, premium: true },
    ],
  },
  {
    category: 'CMS, Admin & E-Commerce',
    features: [
      { name: 'Admin Panel for Content Management', launch: false, growth: true, premium: true },
      { name: 'Catalog Limits (Products / Services)', launch: 'Basic', growth: 'Up to 30 items', premium: 'Up to 50+ items' },
      { name: 'E-Commerce Engine (Cart, Checkout, User Accounts)', launch: false, growth: false, premium: true },
      { name: 'Payment Gateway Integration', launch: false, growth: false, premium: true },
    ],
  },
  {
    category: 'SEO, Analytics & Security',
    features: [
      { name: 'Basic SEO (Titles, Meta Tags, Sitemap, Robots.txt)', launch: true, growth: true, premium: true },
      { name: 'Structured JSON-LD Schema Markup', launch: false, growth: true, premium: true },
      { name: 'Google Search Console & Conversion Tracking', launch: false, growth: true, premium: true },
      { name: 'Enterprise Security & Protected Admin Routes', launch: false, growth: false, premium: true },
    ],
  },
  {
    category: 'Support & Warranty',
    features: [
      { name: 'Revision Rounds', launch: '2 Rounds', growth: '3 Rounds', premium: '4 Rounds' },
      { name: 'Post-Launch Support Period', launch: '3 Months', growth: '6 Months', premium: '12 Months' },
      { name: 'Bug Fixes & Maintenance Included', launch: true, growth: true, premium: true },
      { name: 'Complete Source Code Ownership', launch: true, growth: true, premium: true },
    ],
  },
]

const addOnServices = [
  { item: 'Additional Custom Page', desc: 'Complete layout, styling and content integration' },
  { item: 'Additional Revision Round', desc: 'Comprehensive feedback implementation cycle' },
  { item: 'Additional Product / Project Entry', desc: 'Catalog population and image formatting' },
  { item: 'Payment Gateway Integration', desc: 'Razorpay, Stripe, Cashfree or PayPal setup' },
  { item: 'Custom CRM Pipeline Integration', desc: 'HubSpot, Zoho, or custom webhook bridge' },
  { item: 'Interactive 3D Section / Model Viewer', desc: 'Three.js / WebGL hardware visualization' },
  { item: 'Custom Analytics Dashboard', desc: 'Real-time telemetry and reporting views' },
  { item: 'Technical Content & Copywriting', desc: 'High-converting engineering and brand copy' },
]

export default function WebPackagesSection() {
  const [showComparison, setShowComparison] = useState(false)

  return (
    <section id="packages" className="px-4 py-16 sm:px-6 lg:py-24 bg-[#fafafa] border-t border-black/5">
      <div className="section-shell">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0d9488]">
            DEVELOPMENT PACKAGES
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Website Development Architecture
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-7 text-neutral-600">
            Transparent package tiers and comprehensive deliverable checklists designed for businesses scaling online.
          </p>
        </motion.div>

        {/* 3 Package Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-8 lg:grid-cols-3 items-stretch"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={fadeUp}
              className={`relative rounded-[28px] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                pkg.highlight
                  ? 'bg-neutral-950 text-white shadow-2xl border-2 border-black scale-[1.02] z-10'
                  : 'bg-white text-neutral-950 border border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#16a34a] px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-extrabold uppercase tracking-widest ${pkg.highlight ? 'text-[#0d9488]' : 'text-neutral-400'}`}>
                    {pkg.tag}
                  </span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${pkg.highlight ? 'bg-white/10 text-white' : 'bg-black/5 text-neutral-800'}`}>
                    Custom Quoted
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-3">
                  {pkg.name}
                </h3>
                <p className={`text-xs font-bold uppercase tracking-wider mt-1 ${pkg.highlight ? 'text-neutral-300' : 'text-neutral-500'}`}>
                  {pkg.subtitle}
                </p>

                <p className={`mt-4 text-xs sm:text-sm leading-6 ${pkg.highlight ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {pkg.summary}
                </p>

                <div className={`my-6 border-t ${pkg.highlight ? 'border-white/15' : 'border-black/10'}`} />

                <p className={`text-xs font-extrabold uppercase tracking-wider mb-4 ${pkg.highlight ? 'text-neutral-200' : 'text-neutral-900'}`}>
                  Included Deliverables
                </p>

                <ul className="space-y-3">
                  {pkg.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm leading-5">
                      <span className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ${pkg.highlight ? 'bg-[#16a34a] text-white' : 'bg-black text-white'}`}>
                        <HiCheck className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span className={pkg.highlight ? 'text-neutral-200' : 'text-neutral-700'}>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-black/5">
                <Link
                  to={`/contact?package=${pkg.id}`}
                  className={`w-full text-center block ${
                    pkg.highlight
                      ? 'btn-primary !bg-white !text-black hover:!bg-neutral-200'
                      : 'btn-primary'
                  }`}
                >
                  Request Package Quote
                  <HiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Toggle Comparison Table Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowComparison((v) => !v)}
            className="btn-secondary"
          >
            {showComparison ? 'Hide Feature Comparison Table' : 'View Full Feature Comparison Table'}
          </button>
        </div>

        {/* Comparison Matrix Table */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-10 overflow-hidden"
            >
              <div className="rounded-[24px] border border-black/10 bg-white overflow-x-auto shadow-sm">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="border-b border-black/10 bg-neutral-100/70">
                      <th className="py-4 px-6 text-sm font-bold text-neutral-900 w-2/5">Feature / Deliverable</th>
                      <th className="py-4 px-4 text-sm font-bold text-neutral-900 text-center w-1/5">Launch</th>
                      <th className="py-4 px-4 text-sm font-bold text-neutral-900 text-center w-1/5 bg-neutral-200/50">Growth</th>
                      <th className="py-4 px-4 text-sm font-bold text-neutral-900 text-center w-1/5">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonCategories.map((group) => (
                      <tbody key={group.category}>
                        <tr className="bg-neutral-50/80 border-y border-black/5">
                          <td colSpan={4} className="py-2.5 px-6 text-xs font-black uppercase tracking-wider text-neutral-500">
                            {group.category}
                          </td>
                        </tr>
                        {group.features.map((row) => (
                          <tr key={row.name} className="border-b border-black/5 hover:bg-neutral-50/50 transition-colors">
                            <td className="py-3.5 px-6 text-xs sm:text-sm font-medium text-neutral-800">
                              {row.name}
                            </td>
                            <td className="py-3.5 px-4 text-xs sm:text-sm text-center font-semibold text-neutral-700">
                              {typeof row.launch === 'boolean' ? (
                                row.launch ? <HiCheck className="h-5 w-5 text-[#16a34a] mx-auto" /> : <HiX className="h-4 w-4 text-neutral-300 mx-auto" />
                              ) : (
                                row.launch
                              )}
                            </td>
                            <td className="py-3.5 px-4 text-xs sm:text-sm text-center font-bold text-neutral-950 bg-neutral-100/30">
                              {typeof row.growth === 'boolean' ? (
                                row.growth ? <HiCheck className="h-5 w-5 text-[#16a34a] mx-auto" /> : <HiX className="h-4 w-4 text-neutral-300 mx-auto" />
                              ) : (
                                row.growth
                              )}
                            </td>
                            <td className="py-3.5 px-4 text-xs sm:text-sm text-center font-semibold text-neutral-700">
                              {typeof row.premium === 'boolean' ? (
                                row.premium ? <HiCheck className="h-5 w-5 text-[#16a34a] mx-auto" /> : <HiX className="h-4 w-4 text-neutral-300 mx-auto" />
                              ) : (
                                row.premium
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional Services & Add-Ons Checklist */}
        <div className="mt-16 pt-12 border-t border-black/10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0d9488]">ADD-ON CAPABILITIES</span>
            <h3 className="font-heading text-2xl font-bold text-neutral-950 mt-1">Additional Services Checklist</h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Custom requirements outside standard packages quoted transparently based on project scope.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {addOnServices.map((addon) => (
              <div key={addon.item} className="rounded-2xl border border-black/8 bg-white p-5 shadow-xs">
                <p className="text-sm font-bold text-neutral-950">{addon.item}</p>
                <p className="text-xs text-neutral-500 mt-1 leading-5">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Terms & Client Responsibility Banner */}
        <div className="mt-12 rounded-[24px] border border-black/10 bg-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-black text-white">
              <HiOutlineShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-neutral-950">Guaranteed Code Ownership &amp; Project Terms</h4>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Every project includes defined scope limits, revision windows, 100% intellectual property handover, and dedicated warranty support.
              </p>
            </div>
          </div>
          <Link to="/contact" className="btn-primary flex-shrink-0">
            Consult With Us
          </Link>
        </div>

      </div>
    </section>
  )
}
