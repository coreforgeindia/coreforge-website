import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO'
import { fadeUp } from '../utils/motion'
import { HiOutlineBriefcase } from 'react-icons/hi'

const internships = [
  {
    id: 'java-fullstack',
    tag: 'Engineering',
    title: 'Java Full Stack Developer Intern',
    type: 'Paid Internship',
    mode: 'Onsite + Hybrid',
    stipend: '₹5,000 / month',
    duration: 'June - August 2026 · 3 Months',
    overview: 'Build real-world projects with a hands-on engineering team. Exposure to full stack development, live deployments, and professional workflows.',
    requirements: [
      'Basic knowledge of Java',
      'Understanding of Full Stack Development',
      'Knowledge of HTML, CSS, JavaScript',
      'Basics of SQL / Database Handling',
      'Documentation & reporting skills',
      'Problem-solving mindset and willingness to learn',
    ],
    gains: [
      'Hands-on industry experience',
      'Live project exposure',
      'Development workflow understanding',
      'Team collaboration experience',
      'Professional mentorship',
    ],
    fullTimeNote: 'Based on performance, candidates may be converted to full-time employees with a package of ₹2.4 LPA - ₹3.4 LPA.',
  },
  {
    id: 'content-social',
    tag: 'Marketing',
    title: 'Content Creator / Social Media Manager Intern',
    type: 'Paid Internship',
    mode: 'Onsite + Hybrid',
    stipend: '₹5,000 / month',
    duration: 'June - August 2026 · 3 Months',
    overview: 'Drive CoreForge\'s social presence across Instagram and LinkedIn. Create content that resonates with engineers, students, and startups.',
    requirements: [
      'Passion for content creation and social media',
      'Basic graphic design skills (Canva / Figma)',
      'Good written and verbal communication',
      'Understanding of Instagram and LinkedIn algorithms',
      'Ability to plan and execute content calendars',
      'Willingness to learn and experiment',
    ],
    gains: [
      'Real brand building experience',
      'Content strategy skills',
      'Growth analytics exposure',
      'Creative freedom on live campaigns',
      'Professional mentorship',
    ],
    fullTimeNote: 'Based on performance, candidates may be considered for a full-time role post internship.',
  },
]

const tabs = [
  { id: 'jobs', label: 'Jobs' },
  { id: 'internships', label: 'Internships' },
]

function RoleCard({ role }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      layout
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      className="rounded-[24px] border border-black/8 bg-white shadow-[0_4px_24px_rgba(17,17,17,0.04)] overflow-hidden"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                {role.tag}
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                {role.type}
              </span>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
                {role.mode}
              </span>
            </div>
            <h2 className="font-heading text-xl font-bold tracking-[-0.04em] text-neutral-950">{role.title}</h2>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-neutral-500 font-medium">
              <span>{role.stipend}</span>
              <span>·</span>
              <span>{role.duration}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-neutral-600">{role.overview}</p>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Collapse' : 'Expand'}
            className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-neutral-50 transition-all duration-200 hover:bg-black hover:text-white"
          >
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="mt-6 grid gap-6 border-t border-black/6 pt-6 sm:grid-cols-2">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">Requirements</p>
                  <ul className="space-y-2">
                    {role.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-neutral-600">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">What You'll Gain</p>
                  <ul className="space-y-2">
                    {role.gains.map((g) => (
                      <li key={g} className="flex items-start gap-2 text-sm text-neutral-600">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded-[16px] bg-neutral-50 border border-black/6 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400 mb-1">Full-Time Opportunity</p>
                <p className="text-sm text-neutral-600">{role.fullTimeNote}</p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:info@coreforgeindia.com?subject=Internship Application: ${role.title}`}
                  className="btn-primary"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
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
                <p className="text-xs text-neutral-400 sm:ml-auto">info@coreforgeindia.com</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Careers() {
  const [activeTab, setActiveTab] = useState('internships')

  return (
    <>
      <SEO
        title="Careers & Engineering Internships | CoreForge Bengaluru"
        description="Explore career opportunities and paid engineering internships at CoreForge in Bengaluru. Open positions in embedded systems, PCB design, Java full-stack, and technical training."
        keywords="CoreForge careers, embedded engineering jobs Bangalore, PCB designer hiring Bengaluru, Java full stack internship India"
        canonicalUrl="https://coreforgeindia.com/careers"
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
              className="flex flex-col gap-5"
            >
              {internships.map((role) => (
                <RoleCard key={role.id} role={role} />
              ))}
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
