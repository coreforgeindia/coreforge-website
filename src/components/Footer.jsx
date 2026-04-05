import { Link } from 'react-router-dom'
import heroLogo from '../assets/hero1.png'

export default function Footer() {
  return (
    <footer className="bg-black px-4 py-16 text-white sm:px-6">
      <div className="section-shell">
        <div className="grid gap-8 sm:hidden">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <img src={heroLogo} alt="CoreForge logo" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-[-0.05em]">CoreForge</p>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Build With Precision</p>
              </div>
            </div>
            <p className="max-w-md text-lg leading-8 text-neutral-300">
              Premium engineering, product development, and modern digital systems for teams that want reliable execution.
            </p>
          </div>

          <div className="grid gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">Navigation</p>
              <div className="grid gap-3 text-neutral-300">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">Reach Us</p>
            <div className="grid gap-3 text-neutral-300">
              <p>coreforge.in@gmail.com</p>
              <p>+91 93808 41227</p>
              <p>Bengaluru, Karnataka</p>
              <a href="https://www.instagram.com/core.forge.in/" target="_blank" rel="noreferrer" className="text-cyan-400 transition hover:text-cyan-300">
                Instagram: @core.forge.in
              </a>
              <a href="https://www.linkedin.com/company/coreforge-india/" target="_blank" rel="noreferrer" className="text-cyan-400 transition hover:text-cyan-300">
                LinkedIn: CoreForge
              </a>
              <Link to="/contact#quote" className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black">
                Request Quote
              </Link>
            </div>
          </div>
          </div>
        </div>

        <div className="hidden border-t border-white/10 pt-12 sm:grid sm:gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <img src={heroLogo} alt="CoreForge logo" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-[-0.05em]">CoreForge</p>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Build With Precision</p>
              </div>
            </div>
            <p className="max-w-md text-lg leading-8 text-neutral-300">
              Premium engineering, product development, and modern digital systems for teams that want reliable execution.
            </p>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">Navigation</p>
            <div className="grid gap-3 text-neutral-300">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/products">Products</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">Reach Us</p>
            <div className="grid gap-3 text-neutral-300">
              <p>coreforge.in@gmail.com</p>
              <p>+91 93808 41227</p>
              <p>Bengaluru, Karnataka</p>
              <a href="https://www.instagram.com/core.forge.in/" target="_blank" rel="noreferrer" className="text-cyan-400 transition hover:text-cyan-300">
                Instagram: @core.forge.in
              </a>
              <a href="https://www.linkedin.com/company/coreforge-india/" target="_blank" rel="noreferrer" className="text-cyan-400 transition hover:text-cyan-300">
                LinkedIn: CoreForge
              </a>
              <Link to="/contact#quote" className="mt-3 inline-flex w-fit rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
