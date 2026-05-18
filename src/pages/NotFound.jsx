import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowLeft } from 'react-icons/hi'
import { fadeUp, stagger } from '../utils/motion'

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-20 sm:px-6">
      <div className="section-shell w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-[7rem] font-bold leading-none tracking-[-0.08em] text-neutral-100 sm:text-[10rem]"
          >
            404
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="-mt-4 text-3xl font-bold tracking-[-0.05em] text-neutral-950 sm:text-4xl"
          >
            Page not found.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-md text-base leading-8 text-neutral-500"
          >
            The page you are looking for does not exist or may have been moved. Head back and find what you need.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold !text-white transition hover:bg-neutral-800 hover:!text-white"
            >
              <HiArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold !text-neutral-900 transition hover:bg-neutral-100 hover:!text-neutral-900"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500"
          >
            <Link to="/services" className="hover:text-neutral-900 transition">Services</Link>
            <span className="text-neutral-200">|</span>
            <Link to="/about" className="hover:text-neutral-900 transition">About</Link>
            <span className="text-neutral-200">|</span>
            <Link to="/products" className="hover:text-neutral-900 transition">Products</Link>
            <span className="text-neutral-200">|</span>
            <Link to="/faqs" className="hover:text-neutral-900 transition">FAQ</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
