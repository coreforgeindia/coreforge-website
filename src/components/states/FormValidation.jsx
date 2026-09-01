import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineExclamationCircle, HiOutlineCheckCircle } from 'react-icons/hi'

export default function FormValidation({ errors = [], success = '' }) {
  return (
    <AnimatePresence>
      {errors.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="rounded-2xl border border-red-200/50 bg-red-50 p-4"
        >
          <div className="flex items-start gap-3">
            <HiOutlineExclamationCircle className="h-5 w-5 flex-shrink-0 text-red-500 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-800">Please fix the following:</p>
              <ul className="mt-2 space-y-1">
                {errors.map((error, idx) => (
                  <li key={idx} className="text-sm text-red-600">• {error}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {success && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="rounded-2xl border border-emerald-200/50 bg-emerald-50 p-4"
        >
          <div className="flex items-center gap-3">
            <HiOutlineCheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-500" />
            <p className="text-sm font-medium text-emerald-800">{success}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
