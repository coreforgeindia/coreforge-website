import ProductsSection from '../sections/ProductsSection'
import PageHero from '../components/PageHero'
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products & capabilities"
        title="Brands and offerings under CoreForge."
        description="This page is where CoreForge can showcase special offerings and brand extensions clearly without forcing them into the hero."
      />
      <ProductsSection />
      <section className="px-4 pb-14 sm:px-6 lg:pb-20">
        <div className="section-shell">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="rounded-[30px] border border-black/8 bg-black p-8 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Featured brand</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em]">Trivonex</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300">
              Trivonex is the marketing-focused brand under CoreForge, built for digital visibility, content positioning, and business growth execution.
            </p>
            <a
              href="https://trivonex.coreforgeindia.info/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold !text-black"
            >
              Visit Trivonex
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
