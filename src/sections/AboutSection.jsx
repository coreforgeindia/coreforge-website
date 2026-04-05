import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import SectionIntro from '../components/SectionIntro'
import BorderGlow from '../components/ui/BorderGlow'
import { fadeUp, stagger } from '../utils/motion'

const metrics = [
  ['Founder', 'Dhanush F G', 'Founder of CoreForge, focused on ensuring theory meets practical implementation.'],
  ['Co-Founder', 'Druthi A N', 'Co-founder supporting execution, development coordination, and practical delivery.'],
  ['Co-Founder', 'Shashank M', 'Co-founder contributing to implementation, development support, and project execution.'],
  ['Founded', 'October 2024', 'Built to bridge theoretical learning with hands-on engineering and real-world development.'],
]

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? metrics.length - 1 : current - 1))
  }

  const showNext = () => {
    setActiveIndex((current) => (current === metrics.length - 1 ? 0 : current + 1))
  }

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
          <div className="sm:hidden">
            <motion.div key={`${metrics[activeIndex][0]}-${metrics[activeIndex][1]}`} variants={fadeUp}>
              <BorderGlow glowColor="45 45 45">
                <div className="flex min-h-[250px] h-full flex-col rounded-[28px] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">{metrics[activeIndex][0]}</p>
                  <p className="mt-5 text-[2rem] font-bold leading-[0.98] tracking-[-0.07em] text-neutral-950">{metrics[activeIndex][1]}</p>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{metrics[activeIndex][2]}</p>
                </div>
              </BorderGlow>
            </motion.div>

            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {metrics.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show card ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition ${activeIndex === index ? 'w-8 bg-black' : 'w-2.5 bg-black/20'}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous company card"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black"
                >
                  <HiArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next company card"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black text-white"
                >
                  <HiArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="hidden items-stretch gap-4 sm:grid sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map(([eyebrow, value, copy]) => (
              <motion.div key={`${eyebrow}-${value}`} variants={fadeUp}>
                <BorderGlow glowColor="45 45 45">
                  <div className="flex min-h-[240px] h-full flex-col rounded-[28px] p-5 sm:min-h-[260px] sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">{eyebrow}</p>
                    <p className="mt-5 text-[2rem] font-bold leading-[0.98] tracking-[-0.07em] text-neutral-950 sm:text-4xl">{value}</p>
                    <p className="mt-4 text-sm leading-7 text-neutral-600">{copy}</p>
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
