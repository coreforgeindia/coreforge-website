import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp } from '../utils/motion'

const roles = [
  {
    id: 'java-fullstack',
    tag: 'Engineering',
    title: 'Java Full Stack Developer Intern',
    type: 'Paid Internship',
    mode: 'Onsite + Hybrid',
    stipend: '₹5,000 / month',
    duration: 'June – August 2026 · 3 Months',
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
    fullTimeNote: 'Based on performance, candidates may be converted to full-time employees with a package of ₹2.4 LPA – ₹3.4 LPA.',
  },
  {
    id: 'content-social',
    tag: 'Marketing',
    title: 'Content Creator / Social Media Manager Intern',
    type: 'Paid Internship',
    mode: 'Onsite + Hybrid',
    stipend: '₹5,000 / month',
    duration: 'June – August 2026 · 3 Months',
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

function RoleCard({ role }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      layout
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      className="rounded-[24px] border border-black/8 bg-white shadow-[0_4px_24px_rgba(17,17,17,0.06)] overflow-hidden"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                {role.tag}
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                {role.type}
              </span>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {role.mode}
              </span>
            </div>
            <h2 className="text-xl font-bold tracking-[-0.04em] text-neutral-950">{role.title}</h2>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-neutral-500">
              <span>{role.stipend}</span>
              <span>·</span>
              <span>{role.duration}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-neutral-600">{role.overview}</p>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Collapse' : 'Expand'}
            className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-neutral-50 transition hover:bg-black hover:text-white"
          >
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
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
              transition={{ duration: 0.3 }}
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

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:info@coreforgeindia.com?subject=Internship Application — ${role.title}`}
                  className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
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
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:bg-black hover:text-white"
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
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="section-shell">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-neutral-400">Careers at CoreForge</p>
          <h1 className="mt-4 text-[2.6rem] font-bold leading-[1] tracking-[-0.07em] text-neutral-950 sm:text-5xl">
            Build with us.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-neutral-500">
            We're a small, focused engineering lab. Every intern here works on real projects, ships real work, and grows fast. No busy work.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {roles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>

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
  )
}
