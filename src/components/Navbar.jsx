import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import logoImg from '../assets/logos/FInal Logo (9).png'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/faqs', label: 'FAQ' },
  { href: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const location = useLocation()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 pb-1 sm:px-5 bg-transparent">
      <motion.div
        animate={{
          maxWidth: open ? '56rem' : scrolled ? '56rem' : '88rem',
          borderRadius: open ? '24px' : scrolled ? '9999px' : '24px',
          backgroundColor: open
            ? 'rgba(255, 255, 255, 0.95)'
            : scrolled
            ? 'rgba(255, 255, 255, 0.85)'
            : 'rgba(255, 255, 255, 0)',
          backdropFilter: open || scrolled ? 'blur(20px)' : 'blur(0px)',
          boxShadow: open || scrolled
            ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
            : 'none',
          borderColor: open || scrolled ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0)',
          paddingTop: scrolled ? '6px' : '10px',
          paddingBottom: scrolled ? '6px' : '10px',
          paddingLeft: scrolled ? '12px' : '16px',
          paddingRight: scrolled ? '12px' : '16px',
          y: scrolled ? 4 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 40,
        }}
        className="mx-auto border transition-colors duration-200"
      >
        <div className="flex items-center justify-between gap-3">
          {/* Logo — no border or frame */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 relative z-20">
            <img src={logoImg} alt="CoreForge logo" className="h-7 w-7 object-contain" />
            <div>
              <p className="text-sm font-extrabold tracking-[-0.03em] text-neutral-950 leading-tight">CoreForge</p>
              <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-neutral-400 leading-tight">INNOVATE · ENGINEER · DELIVER</p>
            </div>
          </Link>

          {/* Desktop Nav Links — with hover highlight pill */}
          <nav
            className="hidden items-center gap-0.5 md:flex absolute left-1/2 -translate-x-1/2"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {navLinks.map((item, idx) => (
              <NavLink
                key={item.href}
                to={item.href}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={({ isActive }) =>
                  `relative px-3.5 py-1.5 text-[13px] font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-black font-bold'
                      : 'text-neutral-600 hover:text-black'
                  }`
                }
              >
                {hoveredIdx === idx && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 rounded-full bg-black/[0.05]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center flex-shrink-0 relative z-20">
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/8 bg-neutral-50 text-black md:hidden transition-all duration-200 hover:bg-black hover:text-white relative z-20"
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
      </motion.div>
    </header>
  )
}
