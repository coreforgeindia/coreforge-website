import { motion } from 'framer-motion'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import SectionIntro from '../components/SectionIntro'
import { fadeUp, stagger } from '../utils/motion'

const testimonials = [
  {
    name: 'James Kim',
    role: 'Engineering lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&q=80',
    quote: 'Outstanding support and smooth execution. It was refreshing to find a product-minded team that cared about both speed and delivery quality.',
  },
  {
    name: 'Ananya Rao',
    role: 'Startup founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=640&q=80',
    quote: 'CoreForge helped us shape the right build path instead of just shipping random features. The communication stayed clear from start to finish.',
  },
  {
    name: 'Rahul Dev',
    role: 'Project client',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=640&q=80',
    quote: 'The blend of engineering depth and practical guidance made the whole process feel reliable. We always knew what was happening next.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-18 lg:py-24">
      <div className="section-shell">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <SectionIntro
            eyebrow="Testimonials"
            title="What clients remember is the clarity, not the chaos."
            description="A few words that reflect the kind of calm execution and support CoreForge aims to bring into every build."
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              variants={fadeUp}
              className="rounded-[28px] border border-white/10 bg-black p-5 text-white shadow-[0_20px_60px_rgba(17,17,17,0.12)] sm:p-6"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`h-20 w-28 rounded-[18px] object-cover sm:h-24 sm:w-32 ${index === 0 ? '-rotate-3' : index === 1 ? 'rotate-2' : '-rotate-2'}`}
                />
                <div>
                  <p className="text-lg font-semibold tracking-[-0.04em]">{item.name}</p>
                  <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">{item.role}</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-neutral-300 sm:text-[0.98rem] sm:leading-8">
                {item.quote}
              </p>
              <div className="mt-6 flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">CoreForge social presence</p>
                <a
                  href="https://www.linkedin.com/company/coreforge-india/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white hover:text-black"
                  aria-label="Visit CoreForge LinkedIn"
                >
                  <HiOutlineArrowNarrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
