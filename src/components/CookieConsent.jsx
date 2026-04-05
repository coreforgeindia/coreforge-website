import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { trackLeadEvent } from '../utils/tracking'

const STORAGE_KEY = 'coreforge-cookie-preference'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) setVisible(true)
  }, [])

  const setPreference = (value) => {
    localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
    trackLeadEvent(value === 'analytics' ? 'cookie_accept' : 'cookie_essential', {
      metadata: { preference: value },
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 left-4 right-4 z-[80] sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md"
        >
          <div className="rounded-[28px] border border-black/10 bg-neutral-950 p-6 text-white shadow-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-xl">
              ●
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em]">Cookie Preferences</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-300">
              We use cookies to understand site usage and improve the experience. You can allow analytics or continue with essential cookies only.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
                onClick={() => setPreference('analytics')}
              >
                Allow analytics
              </button>
              <button
                type="button"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white"
                onClick={() => setPreference('essential')}
              >
                Essential only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
