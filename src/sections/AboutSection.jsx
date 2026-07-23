import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiOutlineCheckCircle, HiArrowRight } from 'react-icons/hi'
import { fadeUp, stagger } from '../utils/motion'

const stats = [
  { value: '5+', label: 'Years Field Experience', desc: 'Key engineering specialists' },
  { value: '20+', label: 'Cliental & Partners', desc: 'Businesses & institutions served' },
  { value: '3+', label: 'Years CoreForge Service', desc: 'Practical engineering execution' },
  { value: '50+', label: 'Solutions Delivered', desc: 'Hardware, software & IoT systems' },
]

const principles = [
  {
    title: 'Measurement & execution drive every decision',
    desc: 'If we cannot measure or test an outcome, we do not ship it. Every hardware, PCB, or software engagement comes with clear performance metrics.',
  },
  {
    title: 'Your goals are our north star',
    desc: 'System architectures and service strategies are designed around your exact operational objectives, not rigid preset templates.',
  },
  {
    title: 'We surface technical issues before they become problems',
    desc: 'Proactive testing and design rule checks are built into our workflow to eliminate failure modes early in the development lifecycle.',
  },
  {
    title: 'You work directly with core experts',
    desc: 'No middle managers or intermediaries. The embedded specialists, PCB engineers, and developers building your solution are in direct communication.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="section-shell space-y-20">
        {/* Top Hero Layout: Text left, Stat cards right */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          {/* Left Column */}
          <motion.div variants={fadeUp}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
              About CoreForge
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-[2.8rem] lg:leading-[1.15]">
              Building Intelligent Hardware & Strategic Software for <span className="bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-500 bg-clip-text text-transparent">Modern Teams.</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-7 text-neutral-600 max-w-xl">
              CoreForge is a Bengaluru-based technology partner combining hardware design, embedded systems, custom software, and practical engineering education. We help businesses, startups, and students turn theory into scalable, production-ready systems.
            </p>
            <div className="mt-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold !text-white transition-all hover:bg-neutral-800 hover:!text-white hover:gap-3"
              >
                Explore Our Solutions
                <HiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Stat Cards Grid */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-black/8 bg-white p-5 shadow-[0_4px_20px_rgba(17,17,17,0.03)] transition-all hover:shadow-[0_8px_30px_rgba(17,17,17,0.07)]"
              >
                <p className="text-3xl font-extrabold text-black sm:text-4xl">{s.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-neutral-900">{s.label}</p>
                <p className="mt-1 text-xs text-neutral-500">{s.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Principles Grid Layout */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">Core Values</p>
            <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-neutral-950 sm:text-3xl lg:text-4xl">
              Our Principles. Why Clients Stay With CoreForge Year After Year.
            </h3>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-2xl border border-black/8 bg-white p-6 shadow-[0_4px_16px_rgba(17,17,17,0.03)] transition-all hover:shadow-[0_10px_30px_rgba(17,17,17,0.06)]"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-black text-white">
                  <HiOutlineCheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-950">{p.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-neutral-600">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
