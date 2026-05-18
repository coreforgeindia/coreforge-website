import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { fadeUp } from '../utils/motion'

const faqItems = [
  ['What does CoreForge build?', 'CoreForge works across embedded systems, PCB design, custom hardware, IoT products, websites, web apps, admin panels, and API integrations.'],
  ['Do you take IoT and embedded product work from idea to implementation?', 'Yes. CoreForge can support the full path from concept discussion and architecture planning to firmware development, embedded programming, testing, and practical implementation support.'],
  ['Do you provide PCB design and prototype support?', 'Yes. We handle schematic design, PCB layout, board refinement, fabrication-ready files, and prototype-stage guidance so the board is not just designed, but prepared for actual use.'],
  ['What kind of websites can CoreForge build for businesses?', 'We build static websites, dynamic websites, websites with forms, lead-generation sites, analytics-enabled business websites, dashboards, and web systems designed around clear business goals.'],
  ['Can you build apps or full digital systems along with the website?', 'Yes. Along with websites, CoreForge can build web apps, internal tools, admin panels, integrated forms, and connected digital systems that support business workflows.'],
  ['Do you support student, academic, or final-year engineering projects?', 'Yes. We support project ideation, implementation, debugging, mentoring, prototype guidance, and practical development help for students who need real execution support.'],
  ['Do you offer workshops and technical mentoring?', 'Yes. CoreForge offers workshops, technical mentoring, and hands-on support intended to make engineering concepts more practical and execution-focused.'],
  ['How do quotations and project discussions work?', 'You can reach out through our contact form with your idea, required features, timeline, or use case. From there, CoreForge reviews the requirement and responds with the right scope, discussion flow, or next steps.'],
  ['Do you also provide technical support after delivery?', 'Yes. Support can include troubleshooting, implementation help, technical coordination, improvements, and follow-up guidance depending on the type of project.'],
  ['Do you support academic and final year projects?', 'Yes. We support final year project solutions, engineering project execution, technical mentorship, and prototype guidance.'],
  ['Can you build business websites with forms and analytics?', 'Yes. We offer static, dynamic, analytics-enabled, and lead-generation websites with CRM and form integration.'],
  ['Will the website be mobile responsive?', 'Yes. The site structure is designed for mobile, tablet, and desktop layouts with a consistent premium feel.'],
]

export default function FAQ() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(null)

  const filtered = useMemo(() => {
    if (!query.trim()) return faqItems
    return faqItems.filter(([q, a]) =>
      `${q} ${a}`.toLowerCase().includes(query.toLowerCase()),
    )
  }, [query])

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-18 lg:py-24">
      <div className="section-shell">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-neutral-400">FAQ</p>
          <h1 className="mt-4 text-[2.6rem] font-bold leading-[0.95] tracking-[-0.07em] text-neutral-950 sm:text-5xl">
            Frequently asked questions.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-600">
            Find answers about our services, processes, and how CoreForge can help you build.
          </p>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mt-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-[22px] border border-black/10 bg-white px-5 py-4 text-sm outline-none placeholder:text-neutral-400 focus:border-black/20 shadow-[0_4px_16px_rgba(17,17,17,0.06)]"
          />
        </motion.div>

        <div className="mt-6 grid gap-3">
          {filtered.length === 0 && (
            <p className="py-10 text-center text-sm text-neutral-500">No results for "{query}"</p>
          )}
          {filtered.map(([question, answer], index) => {
            const active = open === index
            return (
              <div key={question} className="overflow-hidden rounded-[22px] border border-black/8 bg-white/80">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  onClick={() => setOpen(active ? null : index)}
                >
                  <span className="text-base font-semibold tracking-[-0.02em] text-neutral-950">{question}</span>
                  <HiChevronDown className={`h-5 w-5 shrink-0 text-neutral-400 transition duration-200 ${active ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-7 text-neutral-600">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
