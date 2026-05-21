import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import heroLogo from '../assets/hero.png'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/faqs', label: 'FAQ' },
  { href: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className={`section-shell rounded-[28px] border transition-all duration-300 ${scrolled ? 'border-black/10 bg-white/82 shadow-[0_18px_48px_rgba(17,17,17,0.08)] backdrop-blur-xl' : 'border-transparent bg-white/50 backdrop-blur-md'}`}>
        <div className="flex items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white">
              <img src={heroLogo} alt="CoreForge logo" className="h-7 w-7 object-contain" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-[-0.04em]">CoreForge</p>
              <p className="text-[10px] uppercase tracking-[0.32em] text-neutral-500">Engineering Lab</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-black' : 'text-neutral-600 hover:text-black'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-black px-5 py-3 text-sm font-semibold !text-white transition hover:bg-neutral-800 hover:!text-white"
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <HiOutlineX className="h-5 w-5" /> : <HiOutlineMenuAlt3 className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-black/8 md:hidden"
            >
              <div className="flex flex-col gap-4 px-6 py-5">
                {navLinks.map((item) => (
                  <NavLink key={item.href} to={item.href} className="text-base font-medium text-neutral-700" onClick={() => setOpen(false)}>
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold !text-white hover:!text-white"
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
