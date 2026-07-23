import { motion } from 'framer-motion'
import { HiOutlineClock } from 'react-icons/hi'

export default function SessionExpired({ onLogin }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-50">
          <HiOutlineClock className="h-10 w-10 text-amber-500" />
        </div>
        <h2 className="mt-6 text-2xl font-bold tracking-[-0.04em] text-neutral-900">Session Expired</h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-neutral-500">
          Your session has expired for security reasons. Please refresh the page to continue.
        </p>
        <button
          onClick={onLogin || (() => window.location.reload())}
          className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Refresh Page
        </button>
      </motion.div>
    </div>
  )
}
