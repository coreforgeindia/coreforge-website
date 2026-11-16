import { motion as Motion } from 'framer-motion'
import CoreForgeLoader from '../CoreForgeLoader'

export default function NoInternetState() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full mb-8">
        <CoreForgeLoader text="CONNECTION OFFLINE · CHECKING TELEMETRY" />
        <h2 className="mt-4 font-heading text-2xl font-bold text-neutral-950 dark:text-white">
          Network Connection Interrupted
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
          Showing cached preview while your connection recovers.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="btn-primary mt-6 text-xs"
        >
          Retry Connection
        </button>
      </div>

      {/* Skeleton preview of items so user gets a glimpse of content */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-75">
        {[1, 2, 3].map((n) => (
          <div key={n} className="border-4 border-black dark:border-white p-5 bg-white dark:bg-neutral-900 shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#fff]">
            <div className="skeleton-box h-36 w-full mb-4 border border-black/10 dark:border-white/10" />
            <div className="skeleton-box h-5 w-3/4 mb-2" />
            <div className="skeleton-box h-3 w-full mb-1" />
            <div className="skeleton-box h-3 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  )
}
