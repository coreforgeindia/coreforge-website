import { motion } from 'framer-motion'
import SectionIntro from '../components/SectionIntro'
import { fadeUp, stagger } from '../utils/motion'

const offerings = [
  {
    title: 'Hardware Design & Embedded Systems',
    items: [
      'Electronics Product Design',
      'PCB Design & Multi-Layer Boards',
      'Embedded Systems (STM32, ESP32, Arduino)',
      'Firmware & Driver Development',
      'End-to-End PCB Development',
      'Hardware Consulting & Optimization',
    ],
  },
  {
    title: 'Software & Tech Solutions',
    items: [
      'Custom ERP & CRM Systems',
      'Corporate & E-Commerce Websites',
      'Web Applications & Customer Portals',
      'Android, iOS & Cross-Platform Apps',
      'Business Intelligence & Dashboards',
      'API Integrations & Backend Systems',
    ],
  },
  {
    title: 'Workshops, Training & DIY Kits',
    items: [
      'Embedded Systems & IoT Training',
      'PCB & Electronics Design Courses',
      'Web & Mobile Development Programs',
      'Faculty Development Programs',
      'DIY Kits (IoT, Robotics, Embedded)',
      'Final Year & Competition Projects',
    ],
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="px-4 py-14 sm:px-6 sm:py-18 lg:py-24">
      <div className="section-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <SectionIntro
            eyebrow="Products & capabilities"
            title="A broad service stack, arranged like a premium system."
            description="Your website can feel minimal and powerful while still exposing the full range of what CoreForge delivers."
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {offerings.map((group) => (
            <motion.article key={group.title} variants={fadeUp} className="flex min-h-[430px] flex-col rounded-[30px] border border-white/10 bg-[#222224] p-7 text-white shadow-xl transition-transform hover:-translate-y-1">
              <p className="text-xs uppercase tracking-[0.28em] text-neutral-400">CoreForge</p>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-white">{group.title}</h3>
              <div className="mt-8 space-y-3">
                {group.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-neutral-200">
                    {item}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
