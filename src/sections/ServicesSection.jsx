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
    description: 'Design and development of embedded system solutions, microcontroller-based project development, and hardware and firmware interfacing.',
  },
  {
    icon: HiOutlineCube,
    title: 'PCB Design & Prototyping',
    description: 'Custom multilayer PCB design, prototyping and small batch production, component and board sourcing, bare boards or fully assembled PCB, and testing and quality verification.',
  },
  {
    icon: HiOutlineGlobeAlt,
    title: 'Web, App & Brand Management',
    description: 'End-to-end web and app development with ease of access to users, brand re-imaging and management of public image.',
  },
  {
    icon: HiOutlinePuzzle,
    title: 'Technical Consultation',
    description: 'Expert guidance for embedded system and electronics projects, support for PCB and analog electronics design, design and performance review, and mentoring for students and startups.',
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'Technical Workshops',
    description: 'Hands-on training in electronics and embedded systems, workshops on IoT, PCB design and microcontrollers, exposure to industry-standard tools, and one-on-one guidance.',
  },
  {
    icon: HiOutlineViewGridAdd,
    title: 'IoT Solutions',
    description: 'Connected device ecosystems, smart product development, IoT integration, and end-to-end IoT system deployment for business and research use cases.',
  },
]

const flowingItems = [
  { link: '/services', text: 'IoT & Embedded', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80' },
  { link: '/services', text: 'PCB Development', image: 'https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=1200&q=80' },
  { link: '/services', text: 'Website Systems', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80' },
  { link: '/services', text: 'App Development', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80' },
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
          <div className="h-[280px] sm:h-[320px]">
            <FlowingMenu items={flowingItems} speed={16} />
          </div>
        </div>
      </div>
    </section>
  )
}
