import { motion } from 'framer-motion'
import {
  HiChip,
  HiOutlineCube,
  HiOutlineGlobeAlt,
  HiOutlineLightningBolt,
  HiOutlinePuzzle,
  HiOutlineViewGridAdd,
} from 'react-icons/hi'
import SectionIntro from '../components/SectionIntro'
import BorderGlow from '../components/ui/BorderGlow'
import FlowingMenu from '../components/ui/FlowingMenu'
import { fadeUp, stagger } from '../utils/motion'

const featuredServices = [
  {
    icon: HiChip,
    title: 'Embedded Systems Development',
    description: 'Robust device logic, firmware architecture, debugging, and optimization for production-ready embedded builds.',
  },
  {
    icon: HiOutlineCube,
    title: 'PCB Design & Prototyping',
    description: 'Schematics, layouts, fabrication-ready files, and prototype validation with precision-first workflows.',
  },
  {
    icon: HiOutlinePuzzle,
    title: 'Custom Product Development',
    description: 'Hardware-software systems that turn rough ideas into integrated, testable product experiences.',
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'IoT Solutions',
    description: 'Connected device ecosystems, telemetry workflows, and smart product integrations for business and research use cases.',
  },
  {
    icon: HiOutlineGlobeAlt,
    title: 'Web Development',
    description: 'Premium business websites, service showcases, and content-led digital systems that look sharp on every screen.',
  },
  {
    icon: HiOutlineViewGridAdd,
    title: 'Full Stack & Lead Generation Systems',
    description: 'Dashboards, APIs, CRM-connected forms, analytics-enabled funnels, and admin panels built for action.',
  },
]

const flowingItems = [
  { link: '/services', text: 'IoT & Embedded', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80' },
  { link: '/services', text: 'PCB Development', image: 'https://images.unsplash.com/photo-1563770660941-10a6360766be?auto=format&fit=crop&w=1200&q=80' },
  { link: '/services', text: 'Website Systems', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80' },
  { link: '/services', text: 'App Development', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80' },
]

export default function ServicesSection() {
  return (
    <section id="services" className="px-4 py-14 sm:px-6 sm:py-18 lg:py-24">
      <div className="section-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <SectionIntro
            eyebrow="Services"
            title="High-value engineering services with a premium product mindset."
            description="From academic support and prototyping to full production systems and conversion-oriented websites, every service is structured for clarity, speed, and polish."
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {featuredServices.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} variants={fadeUp}>
                <BorderGlow glowColor="30 30 30">
                  <div className="flex min-h-[220px] h-full flex-col rounded-[28px] bg-white/80 p-5 sm:min-h-[250px] sm:p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-[1.7rem] font-bold leading-[1.02] tracking-[-0.055em] text-neutral-950 sm:mt-6 sm:text-2xl">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-neutral-600">{service.description}</p>
                  </div>
                </BorderGlow>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-12 overflow-hidden rounded-[32px] border border-black/8">
          <div className="border-b border-black/8 bg-black px-5 py-4 text-white sm:px-6 sm:py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">Signature focus areas</p>
          </div>
          <div className="h-[280px] sm:h-[320px]">
            <FlowingMenu items={flowingItems} speed={16} />
          </div>
        </div>
      </div>
    </section>
  )
}
