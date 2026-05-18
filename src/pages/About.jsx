import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import BorderGlow from '../components/ui/BorderGlow'
import { fadeUp, stagger } from '../utils/motion'

const pillars = [
  ['Who we are', 'CoreForge is a practical engineering company founded in October 2024 to bridge the gap between theory and real-world execution.'],
  ['What we do', 'We work across embedded systems, PCB design, web and app development, IoT solutions, technical workshops, and consulting.'],
  ['Who we serve', 'We support students, startups, and businesses: from final-year projects and prototypes to full production systems and brand management.'],
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About CoreForge"
        title="A practical engineering company built around execution."
        description="Founded in October 2024, CoreForge was built to make sure theory meets practice: through embedded systems, PCB development, websites, workshops, and technical support."
      />
      <section className="px-4 py-14 sm:px-6 lg:py-20">
        <div className="section-shell">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid gap-5 lg:grid-cols-3 auto-rows-fr"
          >
            {pillars.map(([title, body]) => (
              <motion.div key={title} variants={fadeUp} className="h-full">
                <BorderGlow glowColor="30 30 30" className="h-full">
                  <div className="flex h-full flex-col rounded-[28px] p-6">
                    <h2 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">{title}</h2>
                    <p className="mt-4 text-sm leading-7 text-neutral-600">{body}</p>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
