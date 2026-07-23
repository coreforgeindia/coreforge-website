import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  HiOutlineChip,
  HiOutlineCode,
  HiOutlineAcademicCap,
  HiArrowRight,
} from 'react-icons/hi'
import SectionIntro from '../components/SectionIntro'
import FlowingMenu from '../components/ui/FlowingMenu'
import { fadeUp, stagger } from '../utils/motion'

const featuredServices = [
  {
    icon: HiOutlineChip,
    title: 'Hardware Design Services & Tech Consulting',
    description: 'Complete electronic product development from concept and schematic design to PCB manufacturing support and embedded firmware. Expert consulting for hardware optimization.',
    link: '/services#hardware',
  },
  {
    icon: HiOutlineCode,
    title: 'Software & Tech Solutions',
    description: 'Tailor-made software, ERP, CRM, web development, mobile apps, and business intelligence tools built specifically for your workflow.',
    link: '/services#software',
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'Workshops, Training & DIY Kits',
    description: 'Hands-on workshops, industrial training, technical bootcamps, and DIY electronics kits that prepare students and professionals for real-world engineering.',
    link: '/services#training',
  },
]

const flowingItems = [
  { link: '/services#hardware', text: 'Hardware Design & Consulting', image: 'https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=1200&q=80' },
  { link: '/services#software', text: 'Software & Tech Solutions', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80' },
  { link: '/services#training', text: 'Workshops & Training', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80' },
]

export default function ServicesSection() {
  return (
    <section id="services" className="px-4 py-14 sm:px-6 sm:py-18 lg:py-24">
      <div className="section-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <SectionIntro
            eyebrow="Our Main Categories"
            title="High-value engineering services with a premium product mindset."
            description="From hands-on workshops and hardware design to custom software solutions, CoreForge covers the full engineering lifecycle."
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid gap-4 lg:grid-cols-3 auto-rows-fr"
        >
          {featuredServices.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} variants={fadeUp} className="h-full">
                <Link to={service.link} className="group block h-full">
                  <div className="flex h-full flex-col rounded-[28px] border border-black/8 bg-white/80 p-5 transition-shadow hover:shadow-[0_20px_60px_rgba(17,17,17,0.10)] sm:p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold leading-[1.1] tracking-[-0.04em] text-neutral-950 sm:mt-6">{service.title}</h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-neutral-600">{service.description}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-neutral-900 transition-colors group-hover:text-black">
                      Learn more
                      <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-12 overflow-hidden rounded-[32px] border border-black/8">
          <div className="border-b border-black/8 bg-black px-5 py-4 text-white sm:px-6 sm:py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">Signature focus areas</p>
          </div>
          <div className="h-[560px] sm:h-[400px]">
            <FlowingMenu items={flowingItems} speed={16} />
          </div>
        </div>
      </div>
    </section>
  )
}
