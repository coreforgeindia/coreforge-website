import { motion } from 'framer-motion'
import { HiArrowRight, HiOutlineSparkles } from 'react-icons/hi'
import AvatarCluster from '../components/AvatarCluster'
import { fadeUp, stagger } from '../utils/motion'

export default function HeroSection() {
  return (
    <section id="home" className="relative px-4 pb-8 pt-3 sm:px-6 sm:pb-12 lg:pb-14">
      <div className="section-shell">
        <div className="grid-lines relative overflow-hidden rounded-[32px] border border-black/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(237,237,233,0.92))] px-4 py-5 shadow-[0_28px_90px_rgba(17,17,17,0.10)] sm:rounded-[40px] sm:px-10 sm:py-6 lg:px-12 lg:py-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(17,17,17,0.06),transparent_32%)]" />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative grid items-start gap-6 lg:grid-cols-[1.08fr_0.92fr]"
          >
            <div className="max-w-4xl">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-600 sm:px-4 sm:text-[11px] sm:tracking-[0.28em]">
                <HiOutlineSparkles className="h-4 w-4" />
                Modern engineering systems, built for scale
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-5 max-w-4xl text-[2.85rem] font-bold leading-[0.92] tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[5.2rem]"
              >
                Modern engineering that turns theory into practical systems.
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-neutral-600 sm:mt-5 sm:text-lg sm:leading-8">
                Founded in October 2024, CoreForge was built to ensure theory meets practical execution through embedded systems, PCB development, websites, apps, workshops, and technical support.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <a href="/contact#quote" className="inline-flex min-w-[196px] items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold !text-white transition hover:bg-neutral-800 hover:!text-white sm:py-4">
                  Get Quotation
                </a>
                <a href="/services" className="inline-flex min-w-[196px] items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold !text-neutral-900 hover:bg-neutral-100 hover:!text-neutral-900 sm:py-4">
                  Explore Services
                  <HiArrowRight className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-6 border-t border-black/8 pt-5 sm:mt-7">
                <div className="flex items-center gap-4">
                  <AvatarCluster />
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">Trusted for student, startup, and business builds</p>
                    <p className="text-sm text-neutral-500">Practical execution from concept to deployment</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="relative hidden lg:block">
              <div className="glass-panel ink-shadow rounded-[36px] border border-white/60 p-3 sm:p-4">
                <div className="rounded-[30px] border border-black/8 bg-black p-4 text-white sm:p-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-neutral-400">
                    <span>Engineering stack</span>
                    <span>CoreForge</span>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      ['IoT & Embedded', 'Embedded systems, firmware, IoT products, and hardware support'],
                      ['Digital Systems', 'Static, dynamic, forms, lead funnels, dashboards, and apps'],
                      ['Training & Support', 'Workshops, mentorship, project guidance, and technical support'],
                    ].map(([title, body]) => (
                      <div key={title} className="min-h-[124px] rounded-[24px] border border-white/10 bg-white/5 p-4 sm:p-5">
                        <p className="text-lg font-semibold tracking-[-0.04em]">{title}</p>
                        <p className="mt-2 text-sm leading-7 text-neutral-300">{body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
