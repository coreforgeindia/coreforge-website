import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiChevronDown, HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import logoImg from '../assets/logos/FInal Logo (9).png'
import { serviceCategories, productCategories } from '../data/verticals'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()
  const [prevPath, setPrevPath] = useState(location.pathname)

  const servicesTriggerRef = useRef(null)
  const servicesMenuRef = useRef(null)
  const productsTriggerRef = useRef(null)
  const productsMenuRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const hamburgerButtonRef = useRef(null)

  // Close menus on route change during render
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname)
    setMobileOpen(false)
    setServicesDropdownOpen(false)
    setProductsDropdownOpen(false)
    setMobileAccordion(null)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Desktop Dropdown keyboard & click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(e.target) &&
        servicesTriggerRef.current &&
        !servicesTriggerRef.current.contains(e.target)
      ) {
        setServicesDropdownOpen(false)
      }
      if (
        productsMenuRef.current &&
        !productsMenuRef.current.contains(e.target) &&
        productsTriggerRef.current &&
        !productsTriggerRef.current.contains(e.target)
      ) {
        setProductsDropdownOpen(false)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (servicesDropdownOpen) {
          setServicesDropdownOpen(false)
          servicesTriggerRef.current?.focus()
        }
        if (productsDropdownOpen) {
          setProductsDropdownOpen(false)
          productsTriggerRef.current?.focus()
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [servicesDropdownOpen, productsDropdownOpen])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-50 w-full h-16 border-b transition-colors duration-200 glass-surface ${
          scrolled ? 'border-neutral-300 shadow-sm' : 'border-neutral-200'
        }`}
      >
        <div className="section-shell h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 flex-shrink-0"
            aria-label="CoreForge Home"
          >
            <img
              src={logoImg}
              alt="CoreForge logo"
              className="h-8 w-8 object-contain"
              width="32"
              height="32"
            />
            <div className="flex flex-col">
              <span className="font-heading text-lg font-extrabold tracking-tight text-black dark:text-white leading-none">
                CoreForge
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500 mt-0.5">
                ENGINEERING LAB
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8"
            aria-label="Primary Navigation"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-bold tracking-wide transition-colors py-1 border-b-2 ${
                  isActive
                    ? 'text-black dark:text-white border-black dark:border-white'
                    : 'text-neutral-600 dark:text-neutral-300 border-transparent hover:text-black dark:hover:text-white hover:border-neutral-300'
                }`
              }
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative">
              <div className="flex items-center gap-1">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `text-sm font-bold tracking-wide transition-colors py-1 border-b-2 ${
                      isActive
                        ? 'text-black border-black'
                        : 'text-neutral-600 border-transparent hover:text-black hover:border-neutral-300'
                    }`
                  }
                  aria-current={location.pathname.startsWith('/services') ? 'page' : undefined}
                >
                  Services
                </NavLink>
                <button
                  ref={servicesTriggerRef}
                  type="button"
                  onClick={() => {
                    setServicesDropdownOpen((p) => !p)
                    setProductsDropdownOpen(false)
                  }}
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Services menu"
                  className="p-1 text-neutral-600 hover:text-black cursor-pointer"
                >
                  <HiChevronDown
                    className={`h-4 w-4 transition-transform duration-150 ${
                      servicesDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {servicesDropdownOpen && (
                <div
                  ref={servicesMenuRef}
                  role="menu"
                  className="absolute left-0 mt-2 w-80 rounded-sm bg-white border border-neutral-200 shadow-xl p-3 z-50 text-left"
                >
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 px-3 py-1">
                    Engineering Disciplines
                  </div>
                  {serviceCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/services/${cat.slug}`}
                      role="menuitem"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block p-3 rounded-sm hover:bg-neutral-50 transition-colors group"
                    >
                      <p className="text-sm font-bold text-neutral-900 group-hover:text-black">
                        {cat.name}
                      </p>
                      <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
                        {cat.headline}
                      </p>
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-neutral-100 px-3">
                    <Link
                      to="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-bold text-black hover:underline"
                    >
                      View All 22 Capabilities →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative">
              <div className="flex items-center gap-1">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `text-sm font-bold tracking-wide transition-colors py-1 border-b-2 ${
                      isActive
                        ? 'text-black border-black'
                        : 'text-neutral-600 border-transparent hover:text-black hover:border-neutral-300'
                    }`
                  }
                  aria-current={location.pathname.startsWith('/products') ? 'page' : undefined}
                >
                  Products
                </NavLink>
                <button
                  ref={productsTriggerRef}
                  type="button"
                  onClick={() => {
                    setProductsDropdownOpen((p) => !p)
                    setServicesDropdownOpen(false)
                  }}
                  aria-expanded={productsDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Products menu"
                  className="p-1 text-neutral-600 hover:text-black cursor-pointer"
                >
                  <HiChevronDown
                    className={`h-4 w-4 transition-transform duration-150 ${
                      productsDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {productsDropdownOpen && (
                <div
                  ref={productsMenuRef}
                  role="menu"
                  className="absolute left-0 mt-2 w-80 rounded-sm bg-white border border-neutral-200 shadow-xl p-3 z-50 text-left"
                >
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 px-3 py-1">
                    RF & Antenna Catalogue
                  </div>
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/products/${cat.slug}`}
                      role="menuitem"
                      onClick={() => setProductsDropdownOpen(false)}
                      className="block p-3 rounded-sm hover:bg-neutral-50 transition-colors group"
                    >
                      <p className="text-sm font-bold text-neutral-900 group-hover:text-black">
                        {cat.name}
                      </p>
                      <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
                        {cat.headline}
                      </p>
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-neutral-100 px-3">
                    <Link
                      to="/products"
                      onClick={() => setProductsDropdownOpen(false)}
                      className="text-xs font-bold text-black hover:underline"
                    >
                      View All RF Hardware & Specifications →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-bold tracking-wide transition-colors py-1 border-b-2 ${
                  isActive
                    ? 'text-black dark:text-white border-black dark:border-white'
                    : 'text-neutral-600 dark:text-neutral-300 border-transparent hover:text-black dark:hover:text-white hover:border-neutral-300'
                }`
              }
              aria-current={location.pathname === '/about' ? 'page' : undefined}
            >
              About Us
            </NavLink>

            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `text-sm font-bold tracking-wide transition-colors py-1 border-b-2 ${
                  isActive
                    ? 'text-black dark:text-white border-black dark:border-white'
                    : 'text-neutral-600 dark:text-neutral-300 border-transparent hover:text-black dark:hover:text-white hover:border-neutral-300'
                }`
              }
              aria-current={location.pathname === '/faqs' ? 'page' : undefined}
            >
              FAQs
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-sm font-bold tracking-wide transition-colors py-1 border-b-2 ${
                  isActive
                    ? 'text-black dark:text-white border-black dark:border-white'
                    : 'text-neutral-600 dark:text-neutral-300 border-transparent hover:text-black dark:hover:text-white hover:border-neutral-300'
                }`
              }
              aria-current={location.pathname === '/blog' ? 'page' : undefined}
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-bold tracking-wide transition-colors py-1 border-b-2 ${
                  isActive
                    ? 'text-black dark:text-white border-black dark:border-white'
                    : 'text-neutral-600 dark:text-neutral-300 border-transparent hover:text-black dark:hover:text-white hover:border-neutral-300'
                }`
              }
              aria-current={location.pathname === '/contact' ? 'page' : undefined}
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className={`btn-primary !py-2 !px-4 text-xs font-mono uppercase tracking-wider ${
                location.pathname === '/contact'
                  ? 'ring-2 ring-black dark:ring-white ring-offset-2'
                  : ''
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              ref={hamburgerButtonRef}
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="flex items-center justify-center w-11 h-11 text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer rounded-sm"
            >
              {mobileOpen ? (
                <HiOutlineX className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiOutlineMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileOpen && (
          <div
            id="mobile-nav-panel"
            ref={mobileMenuRef}
            className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-neutral-950 border-b-2 border-black dark:border-white shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto p-5 z-50 text-left"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-3 text-base font-bold ${
                  location.pathname === '/'
                    ? 'bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white'
                }`}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="border border-neutral-200 dark:border-neutral-800 rounded-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileAccordion(mobileAccordion === 'services' ? null : 'services')}
                  className="flex items-center justify-between w-full py-3 px-3 text-base font-bold text-neutral-800 dark:text-neutral-200"
                >
                  <span>Services</span>
                  <HiChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileAccordion === 'services' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileAccordion === 'services' && (
                  <div className="bg-neutral-50 dark:bg-neutral-900 p-3 space-y-2 border-t border-neutral-200 dark:border-neutral-800">
                    <Link
                      to="/services"
                      onClick={() => setMobileOpen(false)}
                      className="block text-xs font-bold uppercase tracking-wider text-black dark:text-white pb-1 border-b border-neutral-200 dark:border-neutral-800"
                    >
                      Services Overview Page →
                    </Link>
                    {serviceCategories.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/services/${c.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 py-1"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Products Accordion */}
              <div className="border border-neutral-200 dark:border-neutral-800 rounded-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileAccordion(mobileAccordion === 'products' ? null : 'products')}
                  className="flex items-center justify-between w-full py-3 px-3 text-base font-bold text-neutral-800 dark:text-neutral-200"
                >
                  <span>Products</span>
                  <HiChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileAccordion === 'products' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileAccordion === 'products' && (
                  <div className="bg-neutral-50 dark:bg-neutral-900 p-3 space-y-2 border-t border-neutral-200 dark:border-neutral-800">
                    <Link
                      to="/products"
                      onClick={() => setMobileOpen(false)}
                      className="block text-xs font-bold uppercase tracking-wider text-black dark:text-white pb-1 border-b border-neutral-200 dark:border-neutral-800"
                    >
                      Products Overview Page →
                    </Link>
                    {productCategories.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/products/${c.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 py-1"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-3 text-base font-bold ${
                  location.pathname === '/about'
                    ? 'bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white'
                }`}
              >
                About Us
              </Link>

              <Link
                to="/faqs"
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-3 text-base font-bold ${
                  location.pathname === '/faqs'
                    ? 'bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white'
                }`}
              >
                FAQs
              </Link>

              <Link
                to="/blog"
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-3 text-base font-bold ${
                  location.pathname === '/blog'
                    ? 'bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white'
                }`}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-3 text-base font-bold ${
                  location.pathname === '/contact'
                    ? 'bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white'
                }`}
              >
                Contact Us
              </Link>

              <div className="pt-3 mt-2 border-t border-neutral-200 dark:border-neutral-800">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full text-center block"
                >
                  Get Started / Contact Us
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
