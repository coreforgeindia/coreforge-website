import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'
import { trackLeadEvent } from '../utils/tracking'

const serviceOptions = [
  'IoT and Embedded Solutions',
  'PCB Design and Development',
  'Website Development',
  'App Development',
  'Workshops',
  'Tech Support',
]

const initialState = {
  name: '',
  email: '',
  phone: '',
  service: serviceOptions[0],
  details: '',
}

export default function QuoteSection() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!form.name || !form.email || !form.details) {
      setStatus({ type: 'error', message: 'Please fill in name, email, and project details.' })
      return
    }

    const endpoint = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL
    if (!endpoint) {
      setStatus({ type: 'error', message: 'Add VITE_GOOGLE_APPS_SCRIPT_URL to connect the quotation form.' })
      return
    }

    try {
      setLoading(true)
      setStatus({ type: '', message: '' })
      await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({ ...form, formType: 'quotation', sourcePage: window.location.pathname + window.location.hash }),
        headers: { 'Content-Type': 'application/json' },
      })
      trackLeadEvent('quote_submit', {
        formName: 'quotation',
        leadEmail: form.email,
        leadName: form.name,
        metadata: {
          service: form.service,
          phone: form.phone,
        },
      })
      setStatus({ type: 'success', message: 'Quotation request sent. We will reach out shortly.' })
      setForm(initialState)
    } catch {
      setStatus({ type: 'error', message: 'Unable to submit right now. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="quote" className="px-4 py-14 sm:px-6 sm:py-18 lg:py-24">
      <div className="section-shell overflow-hidden rounded-[28px] border border-black/8 bg-black px-4 py-8 text-white sm:rounded-[36px] sm:px-10 sm:py-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-neutral-500">Quotation</p>
            <h2 className="mt-5 max-w-xl text-[2.8rem] font-bold leading-[0.95] tracking-[-0.075em] text-white sm:text-6xl">
              Describe the build. We will shape the right proposal.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-300 sm:text-lg">
              Use this quote form for IoT and embedded systems, PCB work, websites, apps, workshops, and technical support.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 rounded-[24px] border border-white/10 bg-white/5 p-4 sm:rounded-[28px] sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="min-w-0 rounded-[22px] border border-white/10 bg-white/6 px-4 py-3.5 text-base text-white outline-none placeholder:text-neutral-500" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email address" className="min-w-0 rounded-[22px] border border-white/10 bg-white/6 px-4 py-3.5 text-base text-white outline-none placeholder:text-neutral-500" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" className="min-w-0 rounded-[22px] border border-white/10 bg-white/6 px-4 py-3.5 text-base text-white outline-none placeholder:text-neutral-500" />
              <select name="service" value={form.service} onChange={handleChange} className="min-w-0 rounded-[22px] border border-white/10 bg-white/6 px-4 py-3.5 pr-10 text-base text-white outline-none">
                {serviceOptions.map((option) => (
                  <option key={option} value={option} className="text-black">
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              placeholder="Tell us what you want to build, target users, and timeline."
              rows="6"
              className="min-w-0 rounded-[26px] border border-white/10 bg-white/6 px-4 py-4 text-base text-white outline-none placeholder:text-neutral-500"
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className={`text-sm ${status.type === 'error' ? 'text-red-300' : status.type === 'success' ? 'text-emerald-300' : 'text-neutral-300'}`}>{status.message}</p>
              <button type="submit" disabled={loading} className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black sm:w-auto">
                {loading ? 'Sending...' : 'Request quotation'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
