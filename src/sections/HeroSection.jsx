import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { HiArrowRight, HiStar } from 'react-icons/hi'
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
    <section id="home" className="hero-light px-4 sm:px-8 lg:px-12 py-14 lg:py-24">
      <div className="section-shell relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            {/* Headline with Gradient Typography & Underline Accent */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-3xl sm:text-5xl lg:text-[4.2rem] font-black leading-[1.08] tracking-[-0.03em] text-neutral-950"
            >
              Engineering Practical Solutions{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-neutral-950">From Code</span>
                <span className="absolute bottom-1 left-0 w-full h-3.5 bg-[#eab308]/40 -rotate-1 rounded-sm -z-0" />
              </span>{' '}
              <span className="bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-500 bg-clip-text text-transparent">&amp; Circuits.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base sm:text-xl leading-8 text-neutral-600 max-w-2xl mx-auto"
            >
              Fast, reliable, and production-ready: CoreForge engineers custom IoT hardware, multi-layer PCBs, modern software platforms, and technical workshops built specifically for your workflow.
            </motion.p>

            {/* Quick Action Input / CTA Box */}
            <motion.form
              variants={fadeUp}
              onSubmit={handleQuickContact}
              className="mt-8 flex flex-col sm:flex-row items-stretch justify-center gap-2.5 w-full max-w-md mx-auto"
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

            {/* Trust Metrics Bar */}
            <motion.div
              variants={fadeUp}
              className="mt-14 pt-8 border-t border-black/10 flex flex-wrap items-center justify-center gap-8 sm:gap-14 w-full"
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
                <div className="flex items-center justify-center gap-1 text-neutral-950">
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

        </div>
      </div>
    </section>
  )
}
