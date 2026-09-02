import { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { fadeUp } from '../utils/motion'
import { trackLeadEvent } from '../utils/tracking'

const serviceOptions = [
  'Hardware Design & Embedded Systems',
  'PCB Design & Prototyping',
  'Custom Software Development',
  'Web Development',
  'Mobile App Development',
  'ERP / CRM Solutions',
  'Technical Consultation',
  'Workshops & Training',
  'DIY Kits',
  'Other',
]

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: serviceOptions[0],
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submitted || loading) return
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill in name, email, and message.' })
      return
    }

    const endpoint = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL
    if (!endpoint) {
      setStatus({ type: 'error', message: 'Contact form endpoint not configured.' })
      return
    }

    try {
      setLoading(true)
      setStatus({ type: '', message: '' })
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ ...form, formType: 'contact', sourcePage: window.location.pathname }),
        headers: { 'Content-Type': 'text/plain' },
      })
      trackLeadEvent('contact_submit', {
        formName: 'contact',
        leadEmail: form.email,
        leadName: form.name,
        metadata: { service: form.service, phone: form.phone, company: form.company },
      })
      setSubmitted(true)
      setStatus({ type: 'success', message: 'Message sent. We will get back to you within 24-48 hours.' })
      setTimeout(() => {
        setForm(initialState)
        setSubmitted(false)
        setStatus({ type: '', message: '' })
      }, 4000)
    } catch {
      setStatus({ type: 'error', message: 'Unable to send right now. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEO
        title="Contact CoreForge | Engineering Consultation & Support Bengaluru"
        description="Get in touch with CoreForge for custom hardware engineering, PCB design quotes, software development inquiries, or technical consultation in Peenya, Bengaluru."
        keywords="Contact CoreForge, PCB design quote Bangalore, hardware consultation Bengaluru, embedded systems company contact"
        canonicalUrl="https://coreforgeindia.com/contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact CoreForge',
          url: 'https://coreforgeindia.com/contact',
          mainEntity: {
            '@type': 'Organization',
            name: 'CoreForge',
            telephone: '+91-93808-41227',
            email: 'info@coreforgeindia.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '#352, 4th Cross Rd, Rajagopala Nagar, Peenya',
              addressLocality: 'Bengaluru',
              addressRegion: 'Karnataka',
              postalCode: '560058',
              addressCountry: 'IN',
            },
          },
        }}
      />
      <section className="flex min-h-[calc(100vh-80px)] items-center px-4 py-14 sm:px-6">
        <div className="section-shell w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-neutral-400">Contact CoreForge</p>
              <h1 className="mt-4 text-[2.2rem] font-bold leading-[1] tracking-[-0.07em] text-neutral-950 sm:text-4xl">
                Let's build something together.
              </h1>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Reach out for projects, partnerships, workshops, technical support, or any other enquiry. We'll respond promptly.
              </p>
              <div className="mt-6 space-y-3 text-sm text-neutral-600">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">Email</p>
                  <a href="mailto:info@coreforgeindia.com" className="mt-0.5 block text-neutral-900 hover:underline">info@coreforgeindia.com</a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">Phone</p>
                  <a href="tel:+919380841227" className="mt-0.5 block text-neutral-900 hover:underline">+91 93808 41227</a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">Location</p>
                  <p className="mt-0.5 text-neutral-900">Bengaluru, Karnataka</p>
                </div>
                <a
                  href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KT2-XDnSPa47MSQTT28xNSGU&daddr=352,+4th+Cross+Rd,+Rajagopala+Nagar,+Peenya,+Bengaluru,+Karnataka+560058"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[28px] border border-black/8 bg-white/80 p-5 shadow-[0_20px_60px_rgba(17,17,17,0.08)] sm:rounded-[32px] sm:p-6"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className="rounded-[14px] border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-neutral-400 focus:border-black/20" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">Email *</label>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="rounded-[14px] border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-neutral-400 focus:border-black/20" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="rounded-[14px] border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-neutral-400 focus:border-black/20" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">Company / College</label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Organisation name" className="rounded-[14px] border border-black/10 px-3 py-2.5 text-sm outline-none placeholder:text-neutral-400 focus:border-black/20" />
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-1">
                <label className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">Service Interested In</label>
                <select name="service" value={form.service} onChange={handleChange} className="rounded-[14px] border border-black/10 px-3 py-2.5 text-sm outline-none focus:border-black/20">
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="mt-3 flex flex-col gap-1">
                <label className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Tell us what you need, your timeline, or any details that help us respond well."
                  className="rounded-[18px] border border-black/10 px-3 py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-black/20"
                />
              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                {status.message && (
                  <p className={`text-sm ${status.type === 'error' ? 'text-red-500' : 'text-emerald-600'}`}>{status.message}</p>
                )}
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="ml-auto w-full rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-50 sm:w-auto"
                >
                  {loading ? 'Sending...' : submitted ? 'Sent!' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="px-4 pb-14 sm:px-6">
        <div className="section-shell">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">Find Us</p>
            <div className="overflow-hidden rounded-[24px] sm:rounded-[32px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3495097847226!2d77.50892427484214!3d13.013400887305787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd2395cbe3d%3A0x942135316f4f1324!2sCoreForge%20HQ!5e0!3m2!1sen!2sin!4v1784829001155!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="CoreForge HQ Location"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
