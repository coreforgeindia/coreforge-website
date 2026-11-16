import { useLocation } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import QuoteForm from '../components/QuoteForm'
import { COMPANY_INFO } from '../data/verticals'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

export default function Contact() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const initialCategory = searchParams.get('product')
    ? 'product'
    : searchParams.get('service')
    ? 'marketing'
    : searchParams.get('vertical') || 'marketing'
  const initialItemName =
    searchParams.get('product') ||
    searchParams.get('service') ||
    searchParams.get('item') ||
    ''

  return (
    <>
      <SEO
        title="Contact CoreForge | Engineering Consultation & Support Bengaluru"
        description="Connect with CoreForge in Bengaluru for 360 Branding, Custom Software, Web/Mobile Applications, and Antenna & RF Products."
        keywords="Contact CoreForge, software engineering Bangalore, antenna RF consultation Bengaluru, digital marketing Peenya"
        canonicalUrl="https://www.coreforgeindia.com/contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact CoreForge',
          url: 'https://www.coreforgeindia.com/contact',
          mainEntity: {
            '@type': 'Organization',
            name: 'CoreForge',
            telephone: COMPANY_INFO.phone,
            email: COMPANY_INFO.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: COMPANY_INFO.address.street,
              addressLocality: COMPANY_INFO.address.locality,
              addressRegion: COMPANY_INFO.address.state,
              postalCode: COMPANY_INFO.address.postalCode,
              addressCountry: COMPANY_INFO.address.country,
            },
          },
        }}
      />

      <PageHero
        breadcrumbItems={[{ label: 'Contact Us' }]}
        badge="GET IN TOUCH"
        title="Connect With Our Engineering Team"
        description="Whether you require end-to-end brand strategy, custom software platforms, or RF antenna products, our engineers are ready to review your requirements."
        accentColor="#2563EB"
      />

      <section className="py-16 sm:py-20" aria-label="Contact Details and Quote Form">
        <div className="section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12">
            {/* Contact Details Side */}
            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400 mb-2">
                  HEADQUARTERS & WORKSHOP
                </p>
                <h2 className="font-heading text-2xl font-bold text-neutral-950 mb-3">
                  CoreForge Bengaluru
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Founded in October 2024, CoreForge operates from Bengaluru's industrial corridor, serving enterprises, startups, and institutions across India and globally.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl border border-[var(--color-border)] bg-white">
                  <HiOutlineLocationMarker className="h-5 w-5 text-neutral-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Address</p>
                    <p className="text-sm text-neutral-900 font-medium mt-0.5">
                      {COMPANY_INFO.address.street}, {COMPANY_INFO.address.locality}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.postalCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl border border-[var(--color-border)] bg-white">
                  <HiOutlineMail className="h-5 w-5 text-neutral-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Email Inquiries</p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm text-neutral-900 font-medium hover:underline mt-0.5 block"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl border border-[var(--color-border)] bg-white">
                  <HiOutlinePhone className="h-5 w-5 text-neutral-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Direct Line & WhatsApp</p>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-sm text-neutral-900 font-medium hover:underline mt-0.5 block"
                    >
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3495097847226!2d77.50892427484214!3d13.013400887305787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd2395cbe3d%3A0x942135316f4f1324!2sCoreForge%20HQ!5e0!3m2!1sen!2sin!4v1784829001155!5m2!1sen!2sin"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="CoreForge Google Maps Location"
                />
              </div>
            </div>

            {/* Quote Form */}
            <div>
              <QuoteForm
                initialCategory={initialCategory}
                initialItemName={initialItemName}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
