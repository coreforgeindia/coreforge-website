import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { HiArrowRight, HiStar, HiOutlineChip, HiOutlineCode, HiOutlineWifi } from 'react-icons/hi'
import { fadeUp, stagger } from '../utils/motion'
import '../styles/hero-section.css'

export default function HeroSection() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleQuickContact = (e) => {
    e.preventDefault()
    if (email) {
      navigate(`/contact?email=${encodeURIComponent(email)}`)
    } else {
      navigate('/contact')
    }
  }

  return (
    <section id="home" className="hero-light px-4 sm:px-8 lg:px-12 py-12 lg:py-20">
      {/* Blueprint Grid Overlay */}
      <div className="hero-light-grid" />

      <div className="section-shell relative z-10 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* ── Left Column: Headline & Action ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Availability Pill */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 shadow-xs mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-[#16a34a] animate-pulse" />
              <span className="text-xs font-bold text-neutral-800 tracking-wide">
                Available for Q3 / Q4 Projects
              </span>
            </motion.div>

            {/* Headline with Black Typography & Underline Accent */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-[2.8rem] font-black leading-[1.06] tracking-[-0.03em] text-neutral-950 sm:text-5xl lg:text-[4.2rem]"
            >
              Engineering Practical Solutions{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-neutral-950">From Code</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#eab308]/40 -rotate-1 rounded-sm -z-0" />
              </span>{' '}
              &amp; Circuits.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base sm:text-lg leading-8 text-neutral-600 max-w-xl"
            >
              Fast, reliable, and production-ready: CoreForge engineers custom IoT hardware, multi-layer PCBs, modern software platforms, and technical workshops built specifically for your workflow.
            </motion.p>

            {/* Quick Action Input / CTA Box (Matching Image 1) */}
            <motion.form
              variants={fadeUp}
              onSubmit={handleQuickContact}
              className="mt-8 flex flex-col sm:flex-row items-stretch gap-2.5 max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 rounded-full border border-black/15 bg-white px-5 py-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-black shadow-xs"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap !py-3 !px-7 shadow-md hover:shadow-lg"
              >
                Book a Demo
                <HiArrowRight className="h-4 w-4" />
              </button>
            </motion.form>

            {/* Trust Metrics Bar (Matching Image 1) */}
            <motion.div
              variants={fadeUp}
              className="mt-12 pt-8 border-t border-black/10 flex flex-wrap items-center gap-8 sm:gap-12"
            >
              <div>
                <p className="font-heading text-3xl font-black text-neutral-950">99.4%</p>
                <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-0.5">
                  On-Time Delivery
                </p>
              </div>
              <div className="h-8 w-px bg-black/10 hidden sm:block" />
              <div>
                <p className="font-heading text-3xl font-black text-neutral-950">50+ Projects</p>
                <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-0.5">
                  Shipped to Production
                </p>
              </div>
              <div className="h-8 w-px bg-black/10 hidden sm:block" />
              <div>
                <div className="flex items-center gap-1 text-neutral-950">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="h-4 w-4 fill-black" />
                  ))}
                  <span className="ml-1.5 text-sm font-black">5.0</span>
                </div>
                <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-0.5">
                  Client Trust Rating
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Isometric Line-Art UI Device Illustration (Matching Image 1 & 2) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="wireframe-container"
          >
            <div className="wireframe-card p-6 sm:p-8 relative overflow-hidden">
              
              {/* Device Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-black/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#f43f5e]" />
                  <span className="h-3 w-3 rounded-full bg-[#eab308]" />
                  <span className="h-3 w-3 rounded-full bg-[#16a34a]" />
                  <span className="ml-2 text-xs font-mono font-bold text-neutral-800">coreforge-os // v2.4</span>
                </div>
                <span className="rounded-full bg-black/5 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-neutral-700">
                  LIVE TELEMETRY
                </span>
              </div>

              {/* Mockup Line Art Body */}
              <div className="mt-5 space-y-4">
                
                {/* Floating Node 1 (Hardware / Embedded) */}
                <div className="wireframe-subcard p-4 flex items-center justify-between transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563eb] text-white">
                      <HiOutlineChip className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase text-neutral-500">MCU Node 01: STM32</p>
                      <p className="text-sm font-bold text-neutral-950">Active Firmware: 240 MHz</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#16a34a] pulse-dot" />
                    <span className="text-xs font-mono font-bold text-neutral-700">ONLINE</span>
                  </div>
                </div>

                {/* Floating Node 2 (Cloud / Web Platform) */}
                <div className="wireframe-subcard p-4 flex items-center justify-between transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0d9488] text-white">
                      <HiOutlineCode className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase text-neutral-500">Cloud Data Pipeline</p>
                      <p className="text-sm font-bold text-neutral-950">Latency: 12ms (Sync OK)</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#0d9488]/10 px-2.5 py-1 text-[11px] font-bold text-[#0d9488]">
                    99.98% SLA
                  </span>
                </div>

                {/* Floating Node 3 (IoT Gateway) */}
                <div className="wireframe-subcard p-4 flex items-center justify-between transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9333ea] text-white">
                      <HiOutlineWifi className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase text-neutral-500">RF / Mesh Gateway</p>
                      <p className="text-sm font-bold text-neutral-950">Packets: 4,820 / sec</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#9333ea]/10 px-2.5 py-1 text-[11px] font-bold text-[#9333ea]">
                    ENCRYPTED
                  </span>
                </div>

              </div>

              {/* Pantone Accent Tags Pill Strip */}
              <div className="mt-6 pt-4 border-t border-black/10 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 px-3 py-1 text-[11px] font-bold text-[#2563eb]">
                  Dazzling Blue
                </span>
                <span className="rounded-full bg-[#16a34a]/10 border border-[#16a34a]/20 px-3 py-1 text-[11px] font-bold text-[#16a34a]">
                  Island Green
                </span>
                <span className="rounded-full bg-[#9333ea]/10 border border-[#9333ea]/20 px-3 py-1 text-[11px] font-bold text-[#9333ea]">
                  Royal Lilac
                </span>
                <span className="rounded-full bg-[#eab308]/15 border border-[#eab308]/30 px-3 py-1 text-[11px] font-bold text-[#a16207]">
                  Cyber Yellow
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
