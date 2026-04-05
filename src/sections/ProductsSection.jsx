import { motion } from 'framer-motion'
import SectionIntro from '../components/SectionIntro'
import { fadeUp, stagger } from '../utils/motion'

const offerings = [
  {
    title: 'Core Engineering Services',
    items: [
      'Embedded Systems Development',
      'PCB Design & Prototyping',
      'Custom Hardware Development',
      'IoT Product Development',
      'Firmware Development',
    ],
  },
  {
    title: 'Project & Innovation Services',
    items: [
      'Engineering Project Development',
      'Final Year Project Solutions',
      'Project Ideation & Consulting',
      'Technical Mentorship',
      'Rapid Prototyping Support',
    ],
  },
  {
    title: 'Web, Software & App Services',
    items: [
      'Static and Dynamic Website Development',
      'Business Websites with Analytics',
      'Lead Generation Websites with CRM + Forms',
      'Web Application Development',
      'Dashboard, Admin Panel, and API Integration',
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
            <motion.article key={group.title} variants={fadeUp} className="flex min-h-[430px] flex-col rounded-[30px] border border-black/8 bg-black p-7 text-white">
              <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">CoreForge</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">{group.title}</h3>
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
