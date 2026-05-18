import { motion } from 'framer-motion'
import SectionIntro from '../components/SectionIntro'
import BorderGlow from '../components/ui/BorderGlow'
import { fadeUp, stagger } from '../utils/motion'

const pillars = [
  ['Founded', 'October 2024', 'Started to bridge the gap between engineering theory and real-world practice.'],
  ['Our Focus', 'Execution First', 'We build useful systems, help teams ship, and give learners and businesses practical support.'],
  ['Our Reach', 'Bengaluru, India', 'Serving students, startups, and businesses with embedded systems, PCB, web, and technical training.'],
]

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-14 sm:px-6 sm:py-18 lg:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <SectionIntro
            eyebrow="About CoreForge"
            title="A practical engineering company built around execution."
            description="CoreForge was started in October 2024 to make sure theory meets practice. We focus on building useful systems, helping teams ship, and giving learners and businesses practical support."
          />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <div className="grid gap-4 sm:grid-cols-3 auto-rows-fr">
            {pillars.map(([eyebrow, value, copy]) => (
              <motion.div key={`${eyebrow}-${value}`} variants={fadeUp} className="h-full">
                <BorderGlow glowColor="45 45 45" className="h-full">
                  <div className="flex h-full flex-col rounded-[28px] p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">{eyebrow}</p>
                    <p className="mt-4 text-xl font-bold leading-[1.1] tracking-[-0.05em] text-neutral-950">{value}</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{copy}</p>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
