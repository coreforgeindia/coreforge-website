import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  HiOutlineChip,
  HiOutlineCode,
  HiOutlineAcademicCap,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineChatAlt2,
  HiArrowRight,
} from 'react-icons/hi'
import { fadeUp, stagger } from '../utils/motion'

const industries = [
  'Manufacturing & Industrial Automation',
  'IoT & Smart Devices',
  'Consumer Electronics',
  'Healthcare & Medical Devices',
  'Education & Research Institutions',
  'Retail & E-Commerce',
  'Logistics & Supply Chain',
  'Startups & Scaleups',
]

const differentiators = [
  {
    icon: HiOutlineLightningBolt,
    title: 'End-to-End Execution',
    desc: 'From concept and circuit design to production-ready PCBs, deployed software, and delivered kits CoreForge owns the full lifecycle.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Engineering-First Quality',
    desc: 'Every board passes DRC and testing validation. Every software build includes performance benchmarks and security hardening.',
  },
  {
    icon: HiOutlineChatAlt2,
    title: 'Direct Access to Specialists',
    desc: 'No middlemen or project managers relaying messages. You work directly with the embedded engineer, PCB designer, or developer building your system.',
  },
]

export default function HomeSEOContent() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-24 bg-white border-t border-black/5">
      <div className="section-shell space-y-20">

        {/* ── Company Introduction ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <motion.div variants={fadeUp}>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0d9488]">
              Who We Are
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-4xl">
              Practical Engineering for Real-World Impact
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-7 text-neutral-600">
              CoreForge is a Bengaluru-based engineering technology company that combines hardware design, embedded systems development, custom software engineering, and hands-on technical education under one roof. Founded in October 2024, we help businesses, startups, and educational institutions turn engineering ideas into functional, production-ready systems.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-7 text-neutral-600">
              Whether you need a multi-layer PCB prototype, STM32 firmware for an industrial controller, a custom ERP system to replace generic SaaS, or an IoT edge gateway with cloud dashboard integration CoreForge delivers practical engineering solutions designed around your exact operational requirements.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="btn-primary"
              >
                <span>Learn More About Us</span>
                <HiArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="btn-secondary"
              >
                <span>Get In Touch</span>
              </Link>
            </div>
          </motion.div>

          {/* Service Categories Quick Overview */}
          <motion.div variants={fadeUp} className="grid gap-4">
            <Link
              to="/services/hardware"
              className="group flex items-center gap-4 rounded-2xl border border-black/8 bg-[#fafafa] p-5 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <HiOutlineChip className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-neutral-950">Hardware Design & Embedded Systems</h3>
                <p className="text-xs text-neutral-500 mt-0.5">PCB design, STM32/ESP32 firmware, IoT hardware, and electronics prototyping.</p>
              </div>
              <HiArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-black transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/services/software"
              className="group flex items-center gap-4 rounded-2xl border border-black/8 bg-[#fafafa] p-5 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <HiOutlineCode className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-neutral-950">Software & Tech Solutions</h3>
                <p className="text-xs text-neutral-500 mt-0.5">Custom ERP/CRM, web platforms, mobile apps, and business intelligence dashboards.</p>
              </div>
              <HiArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-black transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/services/training"
              className="group flex items-center gap-4 rounded-2xl border border-black/8 bg-[#fafafa] p-5 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-amber-600 text-white">
                <HiOutlineAcademicCap className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-neutral-950">Workshops, Training & DIY Kits</h3>
                <p className="text-xs text-neutral-500 mt-0.5">Hands-on bootcamps, embedded training, PCB courses, and electronics kits.</p>
              </div>
              <HiArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-black transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Industries Served ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
              Industries We Serve
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-3xl">
              Engineering Solutions Across Sectors
            </h2>
            <p className="mt-3 text-sm text-neutral-600 leading-7">
              CoreForge works with clients across diverse industries from IoT-driven smart agriculture and industrial automation to healthcare device firmware, educational technology platforms, and retail analytics systems.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-black/8 bg-[#fafafa] px-4 py-2.5 text-xs font-bold text-neutral-700 shadow-xs"
              >
                {ind}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Why CoreForge / Differentiators ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
              Why Choose CoreForge
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-3xl">
              What Makes Our Engineering Different
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-black/8 bg-[#fafafa] p-6 shadow-xs transition-all hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-950">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-6 text-neutral-600">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ── Our Process (compact) ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="rounded-[28px] border border-black/8 bg-neutral-950 text-white p-6 sm:p-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0d9488]">
              Our Process
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">
              How We Engineer Your Solution
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-400">
              Every CoreForge project follows a structured engineering methodology: we start by understanding your exact requirements and constraints, then move through architecture design, iterative development with regular review cycles, rigorous testing and validation, and finally production deployment with documentation handover. This measured approach ensures zero ambiguity and maximum reliability.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/services"
                className="btn-secondary !bg-white !text-black !border-white hover:!bg-neutral-100"
              >
                <span>Explore All Services</span>
                <HiArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="btn-secondary !bg-transparent !text-white !border-white/30 hover:!bg-white/10 hover:!text-white"
              >
                <span>View Portfolio</span>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
