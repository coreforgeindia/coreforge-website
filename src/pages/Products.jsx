import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp } from '../utils/motion'
import heroLogo from '../assets/hero.png'
import vtLogo from '../assets/VT Logo/VyomTronic_logo_no_BG.png'

export default function Products() {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center px-4 sm:px-6">
      <div className="section-shell w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="rounded-[36px] border border-black/8 bg-white shadow-[0_28px_90px_rgba(17,17,17,0.08)] px-10 py-10 flex flex-col items-center justify-center text-center"
        >
          <div className="flex items-center justify-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-[20px] border border-black/10 bg-neutral-50">
              <img src={heroLogo} alt="CoreForge logo" className="h-12 w-12 object-contain" />
            </div>
            <span className="text-3xl font-light text-neutral-300">×</span>
            <div className="flex h-20 w-20 items-center justify-center rounded-[20px] border border-black/10 bg-neutral-50">
              <img src={vtLogo} alt="VyomTronics logo" className="h-12 w-12 object-contain" />
            </div>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
            CoreForge × VyomTronics
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-[-0.06em] text-neutral-950 sm:text-6xl">
            Launching Soon
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-neutral-500">
            A collaboration between CoreForge and VyomTronics bringing new engineering products and solutions to the market. Stay tuned.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-semibold !text-white transition hover:bg-neutral-800 hover:!text-white"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
