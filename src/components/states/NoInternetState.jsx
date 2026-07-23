import { motion } from 'framer-motion'
import CoreForgeLoader from '../CoreForgeLoader'

export default function NoInternetState() {
  return (
    <div className="fixed inset-0 z-[9999] flex h-screen w-screen flex-col items-center justify-center bg-black">
      {/* CoreForge Loader animation in the background */}
      <div className="absolute inset-0 opacity-30">
        <CoreForgeLoader duration={3} />
      </div>

      {/* Content overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 text-center px-6"
      >
        {/* Offline icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
          <svg className="h-10 w-10 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />
            <line x1="3" y1="3" x2="21" y2="21" strokeLinecap="round" />
          </svg>
        </div>

        <h2 className="mt-6 text-2xl font-bold tracking-[-0.04em] text-white">No Internet Connection</h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-neutral-400">
          Please check your network connection and try again. CoreForge requires an active internet connection.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
        >
          Retry Connection
        </button>
      </motion.div>
    </div>
  )
}
