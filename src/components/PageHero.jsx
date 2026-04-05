import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="px-4 pt-4 sm:px-6 lg:pt-8">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid-lines overflow-hidden rounded-[36px] border border-black/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(232,232,228,0.88))] px-5 py-8 shadow-[0_24px_80px_rgba(17,17,17,0.08)] sm:px-10 sm:py-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-neutral-500">{eyebrow}</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-[0.94] tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
