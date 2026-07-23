import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'
import { fadeUp, stagger } from '../utils/motion'

const testimonials = [
  {
    name: 'Abhishek Metri',
    role: 'Anand Technologies',
    quote: 'Working with CoreForge was seamless from start to finish. They understood our technical requirements quickly and delivered with precision. A team that truly knows their craft.',
  },
  {
    name: 'Manoj',
    role: 'CEO, Omega Cocktails',
    quote: 'CoreForge built us a clean, professional digital presence that actually reflects our brand. They handled everything: design, development, and delivery without delays.',
  },
  {
    name: 'Sujan',
    role: 'Founder, VyomTronics',
    quote: 'As an engineering startup, finding people who understand both hardware and business is rare. CoreForge does. Our collaboration was honest, straightforward, and results-driven.',
  },
  {
    name: 'Prof. Keerthi',
    role: 'Professor, GAT Bengaluru',
    quote: 'CoreForge brings a rare combination of academic depth and practical execution. Their hands-on workshops help students bridge the gap between classroom theory and real engineering.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="section-shell">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
            WHAT CLIENTS SAY
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-5xl">
            Trusted by Growing Brands
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-7 text-neutral-600">
            Real feedback from client teams, founders, and educators who build with CoreForge.
          </p>
        </motion.div>

        {/* 4 Card Grid matching Screenshot 2 */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="flex flex-col justify-between rounded-2xl border border-black/8 bg-white p-6 shadow-[0_4px_20px_rgba(17,17,17,0.03)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(17,17,17,0.07)]"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 text-black">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="h-4 w-4 text-neutral-900" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 text-xs sm:text-sm leading-6 text-neutral-700 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Strip */}
              <div className="mt-6 flex items-center gap-3 border-t border-black/5 pt-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-extrabold text-neutral-900 border border-black/10">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-extrabold text-neutral-950">{t.name}</p>
                  <p className="text-[11px] font-medium text-neutral-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
