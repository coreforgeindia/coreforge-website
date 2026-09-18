import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO'
import { fadeUp } from '../utils/motion'
import { HiOutlineBriefcase, HiOutlineAcademicCap } from 'react-icons/hi'

const tabs = [
  { id: 'jobs', label: 'Jobs' },
  { id: 'internships', label: 'Internships' },
]

export default function Careers() {
  const [activeTab, setActiveTab] = useState('internships')

  return (
    <>
      <SEO
        title="Careers & Engineering Internships | CoreForge Bengaluru"
        description="Explore career opportunities and paid engineering internships at CoreForge in Bengaluru. Open positions in embedded systems, PCB design, Java full-stack, and technical training."
        keywords="CoreForge careers, embedded engineering jobs Bangalore, PCB designer hiring Bengaluru, Java full stack internship India"
        canonicalUrl="https://www.coreforgeindia.com/careers"
      />
      <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="section-shell">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-neutral-400">Careers at CoreForge</p>
          <h1 className="mt-4 font-heading text-[2.6rem] font-bold leading-[1] tracking-[-0.04em] text-neutral-950 sm:text-5xl">
            Build with us.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-neutral-500">
            We're a small, focused engineering lab. Every team member works on real projects, ships real work, and grows fast. No busy work.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="mb-8 inline-flex rounded-full border border-black/10 bg-neutral-50 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-black text-white shadow-sm'
                  : 'text-neutral-500 hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'jobs' && (
            <motion.div
              key="jobs"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <div className="rounded-[24px] border border-black/8 bg-white px-8 py-14 text-center shadow-[0_4px_24px_rgba(17,17,17,0.03)]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 mb-5">
                  <HiOutlineBriefcase className="h-8 w-8 text-neutral-500" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-neutral-950">No open positions right now</h3>
                <p className="mt-3 max-w-md mx-auto text-sm leading-7 text-neutral-500">
                  We're always looking for talented engineers and creators. Send your resume and we'll reach out when something opens up.
                </p>
                <div className="mt-7">
                  <a
                    href="mailto:info@coreforgeindia.com?subject=Job Application: General Inquiry"
                    className="btn-primary"
                  >
                    Send Resume
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'internships' && (
            <motion.div
              key="internships"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <div className="rounded-[24px] border border-black/8 bg-white px-8 py-14 text-center shadow-[0_4px_24px_rgba(17,17,17,0.03)]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 mb-5">
                  <HiOutlineAcademicCap className="h-8 w-8 text-neutral-500" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-neutral-950">No internships available right now</h3>
                <p className="mt-3 max-w-md mx-auto text-sm leading-7 text-neutral-500">
                  Our current internship cohorts are full and we do not have active openings right now. You can send your resume or portfolio to get notified when our next cohort opens.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="mailto:info@coreforgeindia.com?subject=Internship Inquiry: Future Cohorts"
                    className="btn-primary"
                  >
                    Send Resume
                  </a>
                  <a
                    href="https://wa.me/919380841227"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 rounded-[20px] border border-black/8 bg-white px-6 py-5 text-sm text-neutral-500"
        >
          Don't see your role? Email us at{' '}
          <a href="mailto:info@coreforgeindia.com" className="font-semibold text-neutral-900 hover:underline">
            info@coreforgeindia.com
          </a>{' '}
          with your resume and what you'd like to work on.
        </motion.div>
      </div>
    </section>
    </>
  )
}
