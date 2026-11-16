import { useState } from 'react'
import { serviceCategories, productCategories } from '../data/verticals'
import { trackLeadEvent } from '../utils/tracking'
import { HiArrowRight, HiArrowLeft, HiCheck } from 'react-icons/hi'

export default function QuoteForm({
  initialCategory = 'marketing',
  initialItemName = '',
  className = '',
}) {
  const [step, setStep] = useState(1)
  const [purpose, setPurpose] = useState(
    initialCategory.includes('product') ? 'product' : 'marketing'
  )
  const [selectedItem, setSelectedItem] = useState(initialItemName || '')
  const [customRequirement, setCustomRequirement] = useState('')
  const [projectScope, setProjectScope] = useState('')
  const [timeline, setTimeline] = useState('1-2 months')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    termsAgreed: false,
    honeypot: '',
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const marketingCategory = serviceCategories.find((c) => c.slug === 'digital-marketing-branding')
  const softwareCategory = serviceCategories.find((c) => c.slug === 'software-app-development')

  // Items for Step 2 based on chosen purpose
  let availableItems = []
  if (purpose === 'marketing') {
    availableItems = marketingCategory?.items || []
  } else if (purpose === 'software') {
    availableItems = softwareCategory?.items || []
  } else if (purpose === 'product') {
    availableItems = productCategories.flatMap((c) => c.items)
  }

  const handleNext = () => {
    setStatus({ type: '', message: '' })
    if (step === 1 && !purpose) {
      setStatus({ type: 'error', message: 'Please select an inquiry type to proceed.' })
      return
    }
    if (step === 2 && purpose !== 'other' && !selectedItem && !customRequirement.trim()) {
      setStatus({ type: 'error', message: 'Please choose an area of focus or enter your requirement.' })
      return
    }
    if (step === 2 && purpose === 'other' && !customRequirement.trim()) {
      setStatus({ type: 'error', message: 'Please enter your custom project or hardware requirements.' })
      return
    }
    setStep((prev) => Math.min(prev + 1, 4))
  }

  const handlePrev = () => {
    setStatus({ type: '', message: '' })
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitted || loading) return

    // Honeypot check
    if (formData.honeypot) return

    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please provide your full name.' })
      return
    }

    // Either Email OR Phone is mandatory
    const hasEmail = Boolean(formData.email.trim())
    const hasPhone = Boolean(formData.phone.trim())

    if (!hasEmail && !hasPhone) {
      setStatus({
        type: 'error',
        message: 'Please provide either a valid email address or contact phone number.',
      })
      return
    }

    if (hasEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        setStatus({ type: 'error', message: 'Please provide a valid email address format.' })
        return
      }
    }

    if (!formData.termsAgreed) {
      setStatus({
        type: 'error',
        message: 'You must acknowledge the Terms of Service & Privacy Policy before submitting.',
      })
      return
    }

    const endpoint = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL
    if (!endpoint) {
      setStatus({
        type: 'error',
        message: 'Endpoint connecting. Please email info@coreforgeindia.com or call +91 93808 41227.',
      })
      return
    }

    try {
      setLoading(true)
      setStatus({ type: '', message: '' })

      const fullMessage = [
        `INQUIRY TYPE: ${purpose.toUpperCase()}`,
        `SELECTED MODULE: ${selectedItem || customRequirement || 'General Inquiry'}`,
        `TIMELINE: ${timeline}`,
        `PROJECT SCOPE: ${projectScope || 'N/A'}`,
      ].join('\n')

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim() || 'N/A',
        phone: formData.phone.trim() || 'N/A',
        company: formData.company.trim() || 'N/A',
        service: selectedItem || `${purpose} inquiry`,
        message: fullMessage,
        source: window.location.pathname,
        submittedAt: new Date().toISOString(),
      }

      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        mode: 'no-cors',
      })

      setSubmitted(true)
      setStatus({
        type: 'success',
        message: 'Thank you. Your project inquiry has been logged directly into our engineering pipeline.',
      })

      trackLeadEvent('generate_lead', {
        event_category: 'Consultation',
        event_label: purpose,
      })
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.message || 'Transmission failed. Please reach us at info@coreforgeindia.com.',
      })
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className={`brutalist-card text-center p-8 sm:p-12 ${className}`}>
        <div className="w-16 h-16 border-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mx-auto mb-6">
          <HiCheck className="h-8 w-8" />
        </div>
        <h3 className="font-heading text-2xl font-black uppercase text-black dark:text-white mb-3">
          Inquiry Successfully Dispatched
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto mb-6">
          Our engineering leads in Bengaluru will review your technical requirements and respond within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setStep(1)
            setFormData({ name: '', email: '', phone: '', company: '', termsAgreed: false, honeypot: '' })
          }}
          className="btn-primary text-xs"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <div className={`brutalist-card ${className}`}>
      {/* Step Indicators */}
      <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-4 mb-6">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <span
              className={`w-7 h-7 flex items-center justify-center font-mono font-bold text-xs border-2 ${
                step === s
                  ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                  : step > s
                  ? 'border-black bg-neutral-200 text-black dark:border-white dark:bg-neutral-800 dark:text-white'
                  : 'border-neutral-300 text-neutral-400 dark:border-neutral-700'
              }`}
            >
              0{s}
            </span>
            <span className="hidden md:inline font-mono text-[10px] uppercase font-bold text-neutral-500">
              {s === 1 ? 'Purpose' : s === 2 ? 'Focus Area' : s === 3 ? 'Scope' : 'Contact'}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Anti-spam honeypot */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={(e) => setFormData((p) => ({ ...p, honeypot: e.target.value }))}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* ── STEP 1: Purpose Selection ── */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold uppercase text-black dark:text-white mb-2">
              Step 1: What is the primary purpose of your project?
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">
              Select the core domain you need CoreForge to execute.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPurpose('marketing')}
                className={`p-4 text-left border-2 transition-all ${
                  purpose === 'marketing'
                    ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]'
                    : 'border-neutral-300 bg-white dark:bg-neutral-900 text-black dark:text-white hover:border-black dark:hover:border-white'
                }`}
              >
                <span className="block font-heading text-sm font-bold uppercase mb-1">
                  360° Digital Marketing & Branding
                </span>
                <span className="block text-xs opacity-80">
                  Brand strategy, logo systems, SEO, Google/Meta paid ads, and customer acquisition.
                </span>
              </button>

              <button
                type="button"
                onClick={() => setPurpose('software')}
                className={`p-4 text-left border-2 transition-all ${
                  purpose === 'software'
                    ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]'
                    : 'border-neutral-300 bg-white dark:bg-neutral-900 text-black dark:text-white hover:border-black dark:hover:border-white'
                }`}
              >
                <span className="block font-heading text-sm font-bold uppercase mb-1">
                  Custom Software & App Development
                </span>
                <span className="block text-xs opacity-80">
                  Custom React web apps, iOS/Android mobile apps, cloud APIs, microservices, and databases.
                </span>
              </button>

              <button
                type="button"
                onClick={() => setPurpose('product')}
                className={`p-4 text-left border-2 transition-all ${
                  purpose === 'product'
                    ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]'
                    : 'border-neutral-300 bg-white dark:bg-neutral-900 text-black dark:text-white hover:border-black dark:hover:border-white'
                }`}
              >
                <span className="block font-heading text-sm font-bold uppercase mb-1">
                  Antenna & RF Hardware Supply
                </span>
                <span className="block text-xs opacity-80">
                  VHF/UHF antennas, cellular 4G/LTE pucks, cavity duplexers, and RF cable assemblies.
                </span>
              </button>

              <button
                type="button"
                onClick={() => setPurpose('other')}
                className={`p-4 text-left border-2 transition-all ${
                  purpose === 'other'
                    ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]'
                    : 'border-neutral-300 bg-white dark:bg-neutral-900 text-black dark:text-white hover:border-black dark:hover:border-white'
                }`}
              >
                <span className="block font-heading text-sm font-bold uppercase mb-1">
                  Other / Combined Engagement
                </span>
                <span className="block text-xs opacity-80">
                  Integrated full-spectrum enterprise architecture or custom technical consultancy.
                </span>
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 2: Focus Area Selection ── */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold uppercase text-black dark:text-white mb-2">
              Step 2: Choose your specific focus area
            </h3>

            {purpose !== 'other' ? (
              <div>
                <label className="block font-mono text-xs font-bold uppercase text-neutral-500 mb-2">
                  Select Specific Capability / Product:
                </label>
                <select
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="w-full p-3 border-2 border-black dark:border-white bg-white dark:bg-neutral-900 text-black dark:text-white font-medium text-sm mb-4"
                >
                  <option value="">-- Choose an option --</option>
                  {availableItems.map((item) => (
                    <option key={item.slug} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>

                <div className="mt-4">
                  <label className="block font-mono text-xs font-bold uppercase text-neutral-500 mb-2">
                    Or specify custom requirement:
                  </label>
                  <input
                    type="text"
                    value={customRequirement}
                    onChange={(e) => setCustomRequirement(e.target.value)}
                    placeholder="e.g., E-commerce mobile app, Full branding overhaul, 400 MHz Duplexer"
                    className="w-full p-3 border-2 border-black dark:border-white bg-white dark:bg-neutral-900 text-black dark:text-white text-sm"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block font-mono text-xs font-bold uppercase text-neutral-500 mb-2">
                  Describe what you are looking to build or procure:
                </label>
                <textarea
                  rows={4}
                  value={customRequirement}
                  onChange={(e) => setCustomRequirement(e.target.value)}
                  placeholder="Tell us about the project goals, industry domain, or custom equipment..."
                  className="w-full p-3 border-2 border-black dark:border-white bg-white dark:bg-neutral-900 text-black dark:text-white text-sm"
                />
              </div>
            )}
          </div>
        )}

        {/* ── STEP 3: Project Scope & Timeline ── */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold uppercase text-black dark:text-white mb-2">
              Step 3: Scope and Timeline
            </h3>

            <div>
              <label className="block font-mono text-xs font-bold uppercase text-neutral-500 mb-2">
                Expected Timeline:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Immediate (< 2 weeks)', '1-2 months', '3-6 months', 'Ongoing Retainer'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeline(t)}
                    className={`p-2.5 text-xs font-bold border-2 transition-all ${
                      timeline === t
                        ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                        : 'border-neutral-300 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-mono text-xs font-bold uppercase text-neutral-500 mb-2">
                Project Scope & Deliverable Notes:
              </label>
              <textarea
                rows={4}
                value={projectScope}
                onChange={(e) => setProjectScope(e.target.value)}
                placeholder="Share any background details, current tech stack, target audience, or specific deliverables..."
                className="w-full p-3 border-2 border-black dark:border-white bg-white dark:bg-neutral-900 text-black dark:text-white text-sm"
              />
            </div>
          </div>
        )}

        {/* ── STEP 4: Contact Info & T&C Checkbox ── */}
        {step === 4 && (
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold uppercase text-black dark:text-white mb-2">
              Step 4: Your Contact Details
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4">
              Name is required. Either email or phone number is mandatory so our leads can reach you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs font-bold uppercase text-neutral-500 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full p-3 border-2 border-black dark:border-white bg-white dark:bg-neutral-900 text-black dark:text-white text-sm"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-bold uppercase text-neutral-500 mb-1">
                  Company / Brand Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                  placeholder="e.g. Acme Tech Labs"
                  className="w-full p-3 border-2 border-black dark:border-white bg-white dark:bg-neutral-900 text-black dark:text-white text-sm"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-bold uppercase text-neutral-500 mb-1">
                  Email Address (Optional if phone provided)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  placeholder="name@company.com"
                  className="w-full p-3 border-2 border-black dark:border-white bg-white dark:bg-neutral-900 text-black dark:text-white text-sm"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-bold uppercase text-neutral-500 mb-1">
                  Phone Number (Optional if email provided)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                  placeholder="+91 98765 43210"
                  className="w-full p-3 border-2 border-black dark:border-white bg-white dark:bg-neutral-900 text-black dark:text-white text-sm"
                />
              </div>
            </div>

            {/* Uiverse.io Checkbox by PriyanshuGupta28 */}
            <div className="pt-4 border-t border-black/10 dark:border-white/10 mt-6">
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  className="check"
                  id="terms-check"
                  checked={formData.termsAgreed}
                  onChange={(e) => setFormData((p) => ({ ...p, termsAgreed: e.target.checked }))}
                />
                <label htmlFor="terms-check" className="label text-xs text-neutral-700 dark:text-neutral-300">
                  <svg width="34" height="34" viewBox="0 0 95 95">
                    <rect x="30" y="20" width="50" height="50" stroke="currentColor" fill="none" strokeWidth="3" />
                    <g transform="translate(0,-952.36222)">
                      <path
                        d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"
                        stroke="currentColor"
                        strokeWidth="5"
                        fill="none"
                        className="path1"
                      />
                    </g>
                  </svg>
                  <span>
                    I agree to the{' '}
                    <a href="/terms" target="_blank" className="font-bold underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" target="_blank" className="font-bold underline">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Status Error / Info */}
        {status.message && (
          <div
            className={`mt-4 p-3 border-2 font-mono text-xs ${
              status.type === 'error'
                ? 'border-red-600 bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200'
                : 'border-black bg-neutral-100 text-black'
            }`}
          >
            {status.message}
          </div>
        )}

        {/* Form Controls */}
        <div className="mt-8 pt-4 border-t-2 border-black dark:border-white flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="btn-secondary text-xs"
            >
              <HiArrowLeft className="h-3.5 w-3.5" />
              <span>Back</span>
            </button>
          ) : <div />}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn-primary text-xs"
            >
              <span>Next Step</span>
              <HiArrowRight className="h-3.5 w-3.5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="btn-primary text-xs"
            >
              {loading ? (
                <span>Dispatching...</span>
              ) : (
                <>
                  <span>Submit Technical Request</span>
                  <HiCheck className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
