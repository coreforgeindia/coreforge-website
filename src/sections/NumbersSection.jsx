import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../utils/motion'
import { HiOutlineTrendingUp, HiOutlineCode, HiOutlineUsers, HiOutlineSparkles } from 'react-icons/hi'

const stats = [
  {
    number: '50+',
    label: 'HARDWARE & IOT DEPLOYMENTS',
    desc: 'Production-ready PCB designs, firmware, and embedded IoT systems shipped across industries.',
    borderColor: 'border-[#1e3a8a]', // Navy/Dark Blue
    badgeBg: 'bg-[#1e3a8a]',
    icon: HiOutlineTrendingUp,
  },
  {
    number: '30+',
    label: 'CUSTOM SOFTWARE PLATFORMS',
    desc: 'Scalable ERP, CRM, and dynamic web applications engineered for seamless business execution.',
    borderColor: 'border-[#0d9488]', // Teal
    badgeBg: 'bg-[#0d9488]',
    icon: HiOutlineCode,
  },
  {
    number: '20+',
    label: 'CLIENTS & PARTNERS SERVED',
    desc: 'Growing startups, established businesses, and universities trusting CoreForge for core engineering.',
    borderColor: 'border-[#d97706]', // Amber
    badgeBg: 'bg-[#d97706]',
    icon: HiOutlineUsers,
  },
  {
    number: '1,500+',
    label: 'ENGINEERS & STUDENTS TRAINED',
    desc: 'Learners upskilled through hands-on technical bootcamps, DIY kits, and practical workshops.',
    borderColor: 'border-[#7c3aed]', // Purple
    badgeBg: 'bg-[#7c3aed]',
    icon: HiOutlineSparkles,
  },
]

export default function NumbersSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-24 bg-[#fbfbfa] border-y border-black/5">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0d9488]">
            BY THE NUMBERS
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Results That Compound
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className={`relative rounded-2xl bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-2 ${item.borderColor} flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)]`}
              >
                {/* Top-Right Icon Badge */}
                <div
                  className={`absolute -top-3.5 -right-3.5 flex h-9 w-9 items-center justify-center rounded-full ${item.badgeBg} text-white shadow-md`}
                >
                  <Icon className="h-4 w-4" />
                </div>

                <div>
                  <p className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-neutral-950">
                    {item.number}
                  </p>
                  <p className="mt-3 text-xs font-extrabold uppercase tracking-wider text-neutral-900">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
