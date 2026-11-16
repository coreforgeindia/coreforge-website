import { motion as Motion } from 'framer-motion'
import { HiOutlineInbox } from 'react-icons/hi'

export default function EmptyState({ title = 'Nothing here yet', message = 'There is no content to display at the moment.', action, actionLabel = 'Go Home' }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center border border-black/10 bg-white">
          <HiOutlineInbox className="h-8 w-8 text-black" />
        </div>
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-neutral-900">{title}</h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-neutral-600">{message}</p>
        {action && (
          <button onClick={action} className="mt-6 border border-black bg-black px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-neutral-800">
            {actionLabel}
          </button>
        )}
      </Motion.div>
    </div>
  )
}
