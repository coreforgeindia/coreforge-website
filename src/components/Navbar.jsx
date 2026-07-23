import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import blackLogo from '../assets/hero1.webp'

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
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Header outer background is black on Home Page hero section, blending with the dark hero section
  const isDarkHero = isHomePage && !scrolled

  return (
    <header
      className={`sticky top-0 z-50 px-3 pt-3 pb-1 sm:px-5 transition-colors duration-300 ${
        isDarkHero ? 'bg-[#050505]' : 'bg-transparent'
      }`}
    >
      <div
        className={`section-shell rounded-[28px] border transition-all duration-300 ${
          scrolled
            ? 'border-black/10 bg-white/95 text-black shadow-[0_18px_48px_rgba(17,17,17,0.12)] backdrop-blur-xl'
            : 'border-black/10 bg-white text-black shadow-[0_12px_36px_rgba(17,17,17,0.10)] backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3.5 sm:px-6">
          {/* Logo link -> always routes to Home / */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-xs">
              <img src={blackLogo} alt="CoreForge logo" className="h-6 w-6 object-contain" />
            </div>
            <div>
              <p className="text-base font-extrabold tracking-[-0.03em] text-neutral-950">CoreForge</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-500">Engineering Lab</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-bold transition ${
                    isActive ? 'text-black font-black' : 'text-neutral-600 hover:text-black'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-xs font-extrabold !text-white transition-all hover:bg-neutral-800 hover:!text-white shadow-xs"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <HiOutlineX className="h-5 w-5" /> : <HiOutlineMenuAlt3 className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-black/8 bg-white md:hidden"
            >
              <div className="flex flex-col gap-4 px-6 py-5">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className="text-base font-bold text-neutral-800"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-bold !text-white"
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
