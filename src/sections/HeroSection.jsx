import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import {
  HiOutlineChip,
  HiOutlineCode,
  HiOutlineGlobeAlt,
  HiOutlineDeviceMobile,
  HiOutlineWifi,
  HiOutlineLightBulb,
} from 'react-icons/hi'
import { fadeUp, stagger } from '../utils/motion'
import '../styles/hero-section.css'

const services = [
  { icon: HiOutlineChip, label: 'PCB Design' },
  { icon: HiOutlineCode, label: 'Embedded Systems' },
  { icon: HiOutlineGlobeAlt, label: 'Web Development' },
  { icon: HiOutlineDeviceMobile, label: 'Mobile Apps' },
  { icon: HiOutlineWifi, label: 'IoT Solutions' },
  { icon: HiOutlineLightBulb, label: 'Tech Consulting' },
]

export default function HeroSection() {
  return (
    <section id="home" className="hero-dark px-4 sm:px-8 lg:px-12">
      {/* Ambient Blobs */}
      <div className="hero-blob hero-blob--1" />
      <div className="hero-blob hero-blob--2" />

      {/* Grid Overlay */}
      <div className="hero-grid-overlay" />

      {/* Hero Content Shell */}
      <div className="section-shell relative z-10 w-full py-6 sm:py-8 lg:py-10 flex-1 flex flex-col justify-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow Label */}
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400"
          >
            CoreForge · Engineering Lab
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-3 text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl lg:text-[4.2rem]"
          >
            Engineering Innovation
            <br />
            <span className="text-metallic">
              From Code &amp; Circuits
            </span>
            <br />
            To Real-World Solutions.
          </motion.h1>

          {/* Subtitle Text */}
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-sm leading-6 text-neutral-400 sm:text-base sm:leading-7"
          >
            Founded in October 2024, CoreForge delivers end-to-end engineering solutions:
            from hardware design and embedded systems to custom software, workshops, and
            technical consulting.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="hero-cta-primary">
              Get Started
            </Link>
            <Link to="/services" className="hero-cta-secondary">
              Explore Services
              <HiArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Interactive Service Tags */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-2">
            {services.map(({ icon: Icon, label }) => (
              <div key={label} className="hero-service-tag">
                <Icon className="h-3.5 w-3.5 text-neutral-400" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer / Trust Strip */}
      <div className="relative z-10 flex flex-col gap-2 border-t border-white/5 py-3 px-2 sm:flex-row sm:items-center sm:justify-between text-xs text-neutral-500">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {['CF', 'AT', 'VT', 'IN'].map((s) => (
              <span
                key={s}
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[9px] font-bold text-neutral-300"
              >
                {s}
              </span>
            ))}
          </div>
          <span className="text-neutral-400">
            Trusted by <strong className="font-bold text-white">20+ clients</strong>
          </span>
        </div>
        <span className="text-neutral-500">
          Practical execution from concept to deployment
        </span>
      </div>
    </section>
  )
}
