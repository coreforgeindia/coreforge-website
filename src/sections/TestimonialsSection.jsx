import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import SectionIntro from '../components/SectionIntro'
import { fadeUp } from '../utils/motion'

const testimonials = [
  {
    name: 'Prof. Keerthi',
    role: 'Professor, Global Academy of Technology',
    quote: 'CoreForge brings a rare combination of academic depth and practical execution. Their hands-on approach to embedded systems and workshops has genuinely helped students bridge the gap between classroom theory and real engineering work.',
  },
  {
    name: 'Abhishek Metri',
    role: 'Anand Technologies',
    quote: 'Working with CoreForge was seamless from start to finish. They understood our technical requirements quickly and delivered with precision. A team that truly knows their craft and communicates clearly throughout.',
  },
  {
    name: 'Manoj',
    role: 'CEO, Omega Cocktails',
    quote: 'CoreForge built us a clean, professional digital presence that actually reflects our brand. They handled everything: design, development, and delivery, without us having to chase them once. Exactly what a business needs.',
  },
  {
    name: 'Sujan',
    role: 'Founder, VyomTronics',
    quote: 'As a fellow engineering startup, I know how hard it is to find people who get both the technical and business side. CoreForge does. Our collaboration has been straightforward, honest, and results-driven.',
  },
  {
    name: 'Robert',
    role: 'General Manager, Hospitality & Brewery Group',
    quote: 'We needed a website that could handle multiple brand identities and serve different customer segments cleanly. CoreForge delivered a solution that looks premium and works reliably across all our properties.',
  },
  {
    name: 'Dhanush Satya',
    role: 'Co-Founder, V-Nurture',
    quote: 'CoreForge helped us shape our digital strategy at a critical stage. Their guidance on web systems and execution support gave us the foundation we needed to grow with confidence.',
  },
  {
    name: 'Vijay Gupta',
    role: 'Infinity Prolabs',
    quote: 'Technically sharp, delivery-focused, and easy to work with. CoreForge handled our embedded systems requirements with a level of detail and professionalism that set them apart from others we have worked with.',
  },
  {
    name: 'Madhavi Mallam',
    role: 'HOD ECE, Global Academy of Technology',
    quote: 'CoreForge has been a valuable partner in providing our students with real-world engineering exposure. Their workshops are well-structured, industry-relevant, and delivered with genuine enthusiasm for the subject.',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1)), [])
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [paused, next])

  const t = testimonials[current]

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-18 lg:py-24">
      <div className="section-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <SectionIntro
            eyebrow="Testimonials"
            title="Trusted by the people we build for."
            description="Words from clients, collaborators, and educators who have worked with CoreForge."
          />
        </motion.div>

        <div
          className="mt-12 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="rounded-[32px] border border-white/10 bg-black p-8 text-white sm:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                {current + 1} / {testimonials.length}
              </p>
              <blockquote className="mt-6 text-xl font-medium leading-[1.6] tracking-[-0.02em] text-white sm:text-2xl lg:text-[1.6rem]">
                "{t.quote}"
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg font-bold uppercase text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold tracking-[-0.03em] text-white">{t.name}</p>
                  <p className="text-sm text-neutral-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === current ? 'w-8 bg-black' : 'w-2 bg-black/20'}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:bg-black hover:text-white"
              >
                <HiArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition hover:bg-neutral-800"
              >
                <HiArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
