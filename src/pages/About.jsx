import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import BorderGlow from '../components/ui/BorderGlow'
import { fadeUp, stagger } from '../utils/motion'

const pillars = [
  ['Engineering precision', 'We design products and systems with practical execution in mind, not just presentation.'],
  ['Cross-domain capability', 'Hardware, firmware, web systems, product support, and project delivery live under one brand.'],
  ['Premium communication', 'The site and the service both aim to feel sharp, clear, minimal, and dependable.'],
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About CoreForge"
        title="Modern engineering execution with a cleaner digital face."
        description="CoreForge is positioned as a premium engineering studio, combining product thinking, technical depth, and modern presentation."
      />
      <section className="px-4 py-14 sm:px-6 lg:py-20">
        <div className="section-shell">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid gap-5 lg:grid-cols-3"
          >
            {pillars.map(([title, body]) => (
              <motion.div key={title} variants={fadeUp}>
                <BorderGlow glowColor="30 30 30">
                  <div className="rounded-[28px] p-6">
                    <h2 className="text-2xl font-semibold tracking-[-0.05em] text-neutral-950">{title}</h2>
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
