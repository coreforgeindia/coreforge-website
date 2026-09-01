import { motion } from 'framer-motion'
import { HiOutlineExclamationCircle } from 'react-icons/hi'

export default function ErrorState({ title = 'Something went wrong', message = 'An unexpected error occurred. Please try again.', onRetry }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50">
          <HiOutlineExclamationCircle className="h-10 w-10 text-red-400" />
        </div>
        <h2 className="mt-6 text-2xl font-bold tracking-[-0.04em] text-neutral-900">{title}</h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-neutral-500">{message}</p>
        {onRetry && (
          <button onClick={onRetry} className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">
            Try Again
          </button>
        )}
      </motion.div>
    </div>
  )
}
