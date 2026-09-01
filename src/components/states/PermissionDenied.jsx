import { motion } from 'framer-motion'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function PermissionDenied({ message = 'You do not have permission to access this page.' }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50">
          <HiOutlineLockClosed className="h-10 w-10 text-red-400" />
        </div>
        <h2 className="mt-6 text-2xl font-bold tracking-[-0.04em] text-neutral-900">Access Denied</h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-neutral-500">{message}</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">
          Go Home
        </Link>
      </motion.div>
    </div>
  )
}
