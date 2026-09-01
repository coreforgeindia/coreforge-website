import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  HiOutlineChip,
  HiOutlineCode,
  HiOutlineAcademicCap,
  HiArrowRight,
} from 'react-icons/hi'
import SectionIntro from '../components/SectionIntro'
import { fadeUp, stagger } from '../utils/motion'

const featuredServices = [
  {
    icon: HiOutlineChip,
    title: 'Hardware Design & Embedded Systems',
    description: 'Complete electronic product development from concept and schematic design to PCB manufacturing support, RTOS, and embedded firmware.',
    link: '/services/hardware',
  },
  {
    icon: HiOutlineCode,
    title: 'Software & Tech Solutions',
    description: 'Tailor-made software, ERP, CRM, modern web platforms, mobile apps, and business intelligence tools built specifically for your workflow.',
    link: '/services/software',
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'Workshops, Training & DIY Kits',
    description: 'Hands-on workshops, industrial training, technical bootcamps, and DIY electronics kits that prepare students and engineers for real-world execution.',
    link: '/services/training',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="section-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <SectionIntro
            eyebrow="Our Main Categories"
            title="High-value engineering services with a practical product mindset."
            description="From hardware design and embedded firmware to custom enterprise software and training, CoreForge covers the full engineering lifecycle."
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {featuredServices.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} variants={fadeUp} className="h-full">
                <Link to={service.link} className="group flex flex-col justify-between h-full rounded-[24px] border border-black/8 bg-white p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading mt-6 text-xl font-bold leading-snug tracking-[-0.03em] text-neutral-950">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-sm font-bold text-neutral-950 group-hover:text-black">
                    <span>View Service Details</span>
                    <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
