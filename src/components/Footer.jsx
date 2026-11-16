import { Link } from 'react-router-dom'
import { serviceCategories, productCategories, COMPANY_INFO } from '../data/verticals'

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" ry="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  )
}

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/coreforge-india/', icon: LinkedInIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/coreforgeindiaofficial/', icon: InstagramIcon },
  { label: 'WhatsApp', href: 'https://wa.me/919380841227', icon: WhatsAppIcon },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-16 border-t border-neutral-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        CoreForge Footer
      </h2>
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1.2fr_0.9fr]">
          {/* Col 1: Identity & Positioning */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="font-heading text-2xl font-black tracking-tight text-white">
                CoreForge
              </span>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-neutral-400 max-w-sm">
              A digital marketing and software engineering firm founded in October 2024 in Bengaluru, India. We architect high-conversion digital branding, performance acquisition campaigns, and custom enterprise software platforms.
            </p>
            <p className="mt-3 text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
              Peenya, Bengaluru, Karnataka 560058
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-white hover:bg-white hover:text-black transition-colors"
                >
                  {item.icon()}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Services
            </p>
            <nav className="space-y-2 text-xs text-neutral-400" aria-label="Services Navigation">
              <Link to="/services" className="block font-bold text-white hover:underline">
                All Engineering Services →
              </Link>
              {serviceCategories.map((c) => (
                <Link
                  key={c.slug}
                  to={`/services/${c.slug}`}
                  className="block hover:text-white transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Products */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">
              RF & Antenna Products
            </p>
            <nav className="space-y-2 text-xs text-neutral-400" aria-label="Products Navigation">
              <Link to="/products" className="block font-bold text-white hover:underline">
                All Products & Specifications →
              </Link>
              {productCategories.map((c) => (
                <Link
                  key={c.slug}
                  to={`/products/${c.slug}`}
                  className="block hover:text-white transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4: Quick Links & Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Inquiries & Facility
            </p>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <p>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-white hover:underline">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </p>
              <div className="pt-2">
                <Link to="/about" className="block hover:text-white py-0.5">About Us</Link>
                <Link to="/faqs" className="block hover:text-white py-0.5">Technical FAQs</Link>
                <Link to="/blog" className="block hover:text-white py-0.5">Engineering Blog</Link>
                <Link to="/contact" className="block hover:text-white py-0.5">Request a Quote</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          <p>© 2026 CoreForge. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-neutral-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-neutral-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
