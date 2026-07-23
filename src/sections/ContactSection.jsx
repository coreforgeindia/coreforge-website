import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionIntro from '../components/SectionIntro'
import { fadeUp } from '../utils/motion'
import { trackLeadEvent } from '../utils/tracking'

const initialState = { name: '', email: '', message: '' }

export default function ContactSection() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please complete all fields before sending.' })
      return
    }

    const endpoint = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL
    if (!endpoint) {
      setStatus({ type: 'error', message: 'Add VITE_GOOGLE_APPS_SCRIPT_URL to connect the contact form.' })
      return
    }

    try {
      setLoading(true)
      setStatus({ type: '', message: '' })
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ ...form, formType: 'contact', sourcePage: window.location.pathname + window.location.hash }),
        headers: { 'Content-Type': 'text/plain' },
      })
      trackLeadEvent('contact_submit', {
        formName: 'contact',
        leadEmail: form.email,
        leadName: form.name,
      })
      setStatus({ type: 'success', message: 'Message sent successfully. We will get back to you soon.' })
      setForm(initialState)
    } catch {
      setStatus({ type: 'error', message: 'There was a problem sending your message.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-18 lg:pt-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            <SectionIntro
              eyebrow="Contact"
              title="Ready to build something sharper?"
              description="Use the contact form for collaboration, support, product discussions, partnerships, or general project conversations."
            />
            <div className="mt-8 space-y-3 text-sm text-neutral-600">
              <p>Email: info@coreforgeindia.com</p>
              <p>Phone: +91 93808 41227</p>
              <p>Location: Bengaluru, Karnataka</p>
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="rounded-[26px] border border-black/8 bg-white/80 p-4 shadow-[0_20px_60px_rgba(17,17,17,0.08)] sm:rounded-[32px] sm:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="min-w-0 rounded-[22px] border border-black/10 px-4 py-3.5 outline-none placeholder:text-neutral-400" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email address" className="min-w-0 rounded-[22px] border border-black/10 px-4 py-3.5 outline-none placeholder:text-neutral-400" />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="7"
              placeholder="Tell us what you need."
              className="mt-4 w-full min-w-0 rounded-[26px] border border-black/10 px-4 py-4 outline-none placeholder:text-neutral-400"
            />
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className={`text-sm ${status.type === 'error' ? 'text-red-500' : 'text-neutral-500'}`}>{status.message}</p>
              <button type="submit" disabled={loading} className="w-full rounded-full bg-black px-6 py-3 text-sm font-semibold text-white sm:w-auto">
                {loading ? 'Sending...' : 'Send message'}
              </button>
            </div>
          </motion.form>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="mt-14"
        >
          <div className="overflow-hidden rounded-[24px] sm:rounded-[32px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3495097847226!2d77.50892427484214!3d13.013400887305787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd2395cbe3d%3A0x942135316f4f1324!2sCoreForge%20HQ!5e0!3m2!1sen!2sin!4v1784829001155!5m2!1sen!2sin"
              width="100%"
              height="350"
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
  )
}
