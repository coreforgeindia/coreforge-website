import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import BorderGlow from '../components/ui/BorderGlow'
import { featuredServices, coreServices } from '../utils/siteData'
import { fadeUp, stagger } from '../utils/motion'

const serviceDetails = {
  'Workshops & Training': [
    'PCB Basic Design & Development',
    'IoT Projects (hands-on)',
    'Embedded Systems Projects',
    'PCB End-to-End Design (advanced)',
    'Web Development',
    'App Development',
  ],
  'DIY Kits — Hardware Products': [
    'Custom-designed IoT & Embedded Kits',
    'Kit Exchange Program',
    'Kit Upgrade Program',
  ],
  'Software & Tech Services': [
    'Brand-Specialized CRM',
    'Custom Software Development',
  ],
  'Hardware Design Services': [
    'PCB Design & Development (end-to-end)',
    'Schematic to Fabrication-Ready Files',
    'Component Sourcing & Prototyping',
  ],
  'Technical Consultation': [
    'Expert Guidance for Embedded & Electronics Projects',
    'PCB & Analog Electronics Design Support',
    'Design & Performance Review',
    'Mentoring for Students & Startups',
  ],
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything we offer — built for clarity, speed, and real results."
        description="From hands-on workshops and DIY kits to custom software, hardware design, and expert consultation — CoreForge covers the full engineering lifecycle."
      />
      <section className="px-4 py-14 sm:px-6 lg:py-20">
        <div className="section-shell">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
            {featuredServices.map((service) => (
              <motion.div key={service.title} variants={fadeUp} className="h-full">
                <BorderGlow glowColor="32 32 32" className="h-full">
                  <div className="flex h-full flex-col rounded-[28px] p-6">
                    <h2 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">{service.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-neutral-600">{service.description}</p>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 rounded-[30px] border border-black/8 bg-white/80 p-6 sm:p-8">
            <h3 className="text-3xl font-semibold tracking-[-0.05em] text-neutral-950">What's included</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coreServices.map((category) => (
                <div key={category} className="rounded-2xl border border-black/8 bg-neutral-50 p-5">
                  <p className="text-sm font-semibold text-neutral-950">{category}</p>
                  {serviceDetails[category] && (
                    <ul className="mt-3 space-y-2">
                      {serviceDetails[category].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs leading-5 text-neutral-600">
                          <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
