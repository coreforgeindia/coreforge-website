import { motion } from 'framer-motion'
import { HiOutlineClock } from 'react-icons/hi'

export default function SlowNetworkState({ message = 'Your connection seems slow. Content may take longer to load.' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="fixed top-20 left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-amber-200/50 bg-amber-50 px-5 py-3 shadow-lg"
    >
      <div className="flex items-center gap-3">
        <HiOutlineClock className="h-5 w-5 flex-shrink-0 text-amber-500" />
        <p className="text-sm font-medium text-amber-800">{message}</p>
      </div>
    </motion.div>
  )
}
