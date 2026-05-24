import { motion } from 'framer-motion'
import {
  HiOutlineAcademicCap,
  HiOutlineBeaker,
  HiOutlineCode,
  HiOutlineChip,
  HiOutlineLightBulb,
} from 'react-icons/hi'
import SectionIntro from '../components/SectionIntro'
import BorderGlow from '../components/ui/BorderGlow'
import FlowingMenu from '../components/ui/FlowingMenu'
import { fadeUp, stagger } from '../utils/motion'

const featuredServices = [
  {
    icon: HiOutlineAcademicCap,
    title: 'Workshops & Training',
    description: 'Sunday classes covering PCB basic design, IoT projects, embedded systems, end-to-end PCB design, web development, and app development — with one-on-one guidance.',
  },
  {
    icon: HiOutlineBeaker,
    title: 'DIY Kits — Hardware Products',
    description: 'Custom-designed IoT and embedded kits that bridge theory to practice. Includes Kit Exchange and Kit Upgrade Programs so your hardware grows with you.',
  },
  {
    icon: HiOutlineCode,
    title: 'Software & Tech Services',
    description: 'Brand-specialized CRM tailored to your identity, and fully custom software development — built to your exact requirements with no compromise on functionality.',
  },
  {
    icon: HiOutlineChip,
    title: 'Hardware Design Services',
    description: 'End-to-end PCB design and development — from schematic capture to fabrication-ready files, including component sourcing, prototyping, and quality verification.',
  },
  {
    icon: HiOutlineLightBulb,
    title: 'Technical Consultation',
    description: 'Expert guidance for embedded system and electronics projects, support for PCB and analog electronics design, design and performance review, and mentoring for students and startups.',
  },
]

const flowingItems = [
  { link: '/services', text: 'Workshops & Training', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80' },
  { link: '/services', text: 'DIY Kits', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80' },
  { link: '/services', text: 'Software & Tech', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80' },
  { link: '/services', text: 'Hardware Design', image: 'https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=1200&q=80' },
  { link: '/services', text: 'Technical Consultation', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80' },
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
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr"
        >
          {featuredServices.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} variants={fadeUp} className="h-full">
                <BorderGlow glowColor="30 30 30" className="h-full">
                  <div className="flex h-full flex-col rounded-[28px] bg-white/80 p-5 sm:p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold leading-[1.1] tracking-[-0.04em] text-neutral-950 sm:mt-6">{service.title}</h3>
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
          <div className="h-[560px] sm:h-[400px]">
            <FlowingMenu items={flowingItems} speed={16} />
          </div>
        </div>
      </div>
    </section>
  )
}
