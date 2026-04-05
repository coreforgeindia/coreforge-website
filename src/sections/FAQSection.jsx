import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import SectionIntro from '../components/SectionIntro'
import GooeySearch from '../components/ui/GooeySearch'
import { fadeUp } from '../utils/motion'

const faqItems = [
  ['Do you take IoT and embedded product work from idea to implementation?', 'Yes. CoreForge can support the full path from concept discussion and architecture planning to firmware development, embedded programming, testing, and practical implementation support.'],
  ['Do you provide PCB design and prototype support?', 'Yes. We handle schematic design, PCB layout, board refinement, fabrication-ready files, and prototype-stage guidance so the board is not just designed, but prepared for actual use.'],
  ['What kind of websites can CoreForge build for businesses?', 'We build static websites, dynamic websites, websites with forms, lead-generation sites, analytics-enabled business websites, dashboards, and web systems designed around clear business goals.'],
  ['Can you build apps or full digital systems along with the website?', 'Yes. Along with websites, CoreForge can build web apps, internal tools, admin panels, integrated forms, and connected digital systems that support business workflows.'],
  ['Do you support student, academic, or final-year engineering projects?', 'Yes. We support project ideation, implementation, debugging, mentoring, prototype guidance, and practical development help for students who need real execution support.'],
  ['Do you offer workshops and technical mentoring?', 'Yes. CoreForge offers workshops, technical mentoring, and hands-on support intended to make engineering concepts more practical and execution-focused.'],
  ['How do quotations and project discussions work?', 'You can submit the quotation form with your idea, required features, timeline, or use case. From there, CoreForge reviews the requirement and responds with the right scope, discussion flow, or next steps.'],
  ['Do you also provide technical support after delivery?', 'Yes. Support can include troubleshooting, implementation help, technical coordination, improvements, and follow-up guidance depending on the type of project.'],
]

export default function FAQSection() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(0)

  const filtered = useMemo(() => {
    if (!query.trim()) return faqItems
    return faqItems.filter(([question, answer]) =>
      `${question} ${answer}`.toLowerCase().includes(query.toLowerCase()),
    )
  }, [query])

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-18 lg:py-24">
      <div className="section-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <SectionIntro
            eyebrow="FAQ"
            title="Search your way to clarity."
            description="This section uses a clean search-first interaction so visitors can find answers without scanning walls of text."
          />
        </motion.div>

        <div className="mt-10">
          <GooeySearch
            value={query}
            onChange={setQuery}
            placeholder="Search service questions, quotation flow, websites, firmware..."
          />
        </div>

        <div className="mt-8 grid gap-4">
          {filtered.map(([question, answer], index) => {
            const active = open === index
            return (
              <div key={question} className="rounded-[28px] border border-black/8 bg-white/80">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  onClick={() => setOpen(active ? -1 : index)}
                >
                  <span className="text-lg font-semibold tracking-[-0.03em] text-neutral-950">{question}</span>
                  <HiChevronDown className={`h-5 w-5 shrink-0 transition ${active ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
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
