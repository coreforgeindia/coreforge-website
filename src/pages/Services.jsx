import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import BorderGlow from '../components/ui/BorderGlow'
import { featuredServices, coreServices } from '../utils/siteData'
import { fadeUp, stagger } from '../utils/motion'

const webPages = [
  { to: '/services/static-website', label: 'Static Website Development' },
  { to: '/services/dynamic-website', label: 'Dynamic Website Development' },
  { to: '/services/web-analytics', label: 'Website with Analytics Integration' },
  { to: '/services/lead-capture', label: 'Lead Generation Website' },
  { to: '/services/app-development', label: 'App & Web Application Development' },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Dedicated service pages, cleaner structure, better readability."
        description="This page becomes the main index for all CoreForge offerings instead of stuffing everything onto one cluttered screen."
      />
      <section className="px-4 py-14 sm:px-6 lg:py-20">
        <div className="section-shell">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <motion.div key={service.title} variants={fadeUp}>
                <BorderGlow glowColor="32 32 32">
                  <div className="rounded-[28px] p-6">
                    <h2 className="text-2xl font-semibold tracking-[-0.05em] text-neutral-950">{service.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-neutral-600">{service.description}</p>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[30px] border border-black/8 bg-white/80 p-6">
              <h3 className="text-3xl font-semibold tracking-[-0.05em] text-neutral-950">Full service list</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {coreServices.map((item) => (
                  <div key={item} className="rounded-2xl border border-black/8 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-black/8 bg-black p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Web service pages</p>
              <div className="mt-6 grid gap-3">
                {webPages.map((item) => (
                  <Link key={item.to} to={item.to} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-neutral-200 transition hover:bg-white hover:text-black">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
