import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp } from '../utils/motion'
import heroLogo from '../assets/hero.png'
import vtLogo from '../assets/VT Logo/VyomTronic_logo_no_BG.png'

export default function Products() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-20 sm:px-6">
      <div className="section-shell w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="rounded-[36px] border border-black/8 bg-white shadow-[0_28px_90px_rgba(17,17,17,0.08)] p-12 sm:p-16 flex flex-col items-center justify-center text-center"
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex h-24 w-24 items-center justify-center rounded-[24px] border border-black/10 bg-neutral-50">
              <img src={heroLogo} alt="CoreForge logo" className="h-14 w-14 object-contain" />
            </div>
            <span className="text-4xl font-light text-neutral-300">×</span>
            <div className="flex h-24 w-24 items-center justify-center rounded-[24px] border border-black/10 bg-neutral-50">
              <img src={vtLogo} alt="VyomTronics logo" className="h-14 w-14 object-contain" />
            </div>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
            CoreForge × VyomTronics
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-[-0.06em] text-neutral-950 sm:text-6xl">
            Launching Soon
          </h1>
          <p className="mt-5 max-w-lg text-base leading-8 text-neutral-500">
            A collaboration between CoreForge and VyomTronics bringing new engineering products and solutions to the market. Stay tuned.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-semibold !text-white transition hover:bg-neutral-800 hover:!text-white"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
