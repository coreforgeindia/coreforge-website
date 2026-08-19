import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import logoImg from '../assets/logos/FInal Logo (9).png'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
  { href: '/faqs', label: 'FAQ' },
  { href: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30)
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const isDarkHero = isHomePage && !scrolled

  return (
    <header
      className={`sticky top-0 z-50 px-3 pt-3 pb-1 sm:px-5 transition-colors duration-300 ${
        isDarkHero ? 'bg-[#050508]' : 'bg-transparent'
      }`}
    >
      <div
        className={`mx-auto transition-all duration-300 ease-out ${
          scrolled
            ? 'max-w-4xl rounded-full border border-black/10 bg-white/90 shadow-[0_12px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl py-1.5 px-3 sm:px-4'
            : 'max-w-[88rem] rounded-[24px] border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] py-2.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/8 bg-white shadow-xs">
              <img src={logoImg} alt="CoreForge logo" className="h-6 w-6 object-contain" />
            </div>
            <div>
              <p className="text-sm font-extrabold tracking-[-0.03em] text-neutral-950 leading-tight">CoreForge</p>
              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-neutral-400 leading-tight">Engineering Lab</p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-[13px] font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-black bg-black/5 font-bold'
                      : 'text-neutral-600 hover:text-black hover:bg-black/[0.04]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link
              to="/contact"
              className="btn-primary !py-2 !px-5 !text-xs !shadow-none hover:!scale-105"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/8 bg-neutral-50 text-black md:hidden transition-all duration-200 hover:bg-black hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <HiOutlineX className="h-5 w-5" /> : <HiOutlineMenuAlt3 className="h-5 w-5" />}
          </button>
        </div>

        {/* ── Mobile Dropdown ── */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden border-t border-black/6 mt-2 pt-2 md:hidden"
            >
              <div className="flex flex-col gap-1 py-2">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-black/5 text-black font-bold'
                          : 'text-neutral-600 hover:bg-black/[0.03] hover:text-black'
                      }`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  className="btn-primary mt-2 w-full text-center"
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
