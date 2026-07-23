import { motion } from 'framer-motion'
import { HiOutlineCheckCircle } from 'react-icons/hi'

export default function SuccessState({ title = 'Success!', message = 'Your action was completed successfully.', action, actionLabel = 'Continue' }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-50"
        >
          <HiOutlineCheckCircle className="h-10 w-10 text-emerald-500" />
        </motion.div>
        <h2 className="mt-6 text-2xl font-bold tracking-[-0.04em] text-neutral-900">{title}</h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-neutral-500">{message}</p>
        {action && (
          <button onClick={action} className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">
            {actionLabel}
          </button>
        )}
      </motion.div>
    </div>
  )
}
