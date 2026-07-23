import { motion } from 'framer-motion'
import { HiOutlineSearch } from 'react-icons/hi'

export default function NoSearchResults({ query = '', onClear }) {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-neutral-100">
          <HiOutlineSearch className="h-10 w-10 text-neutral-400" />
        </div>
        <h2 className="mt-6 text-2xl font-bold tracking-[-0.04em] text-neutral-900">No results found</h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-neutral-500">
          {query ? `We couldn't find anything matching "${query}". Try adjusting your search.` : 'No results match your search criteria.'}
        </p>
        {onClear && (
          <button onClick={onClear} className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">
            Clear Search
          </button>
        )}
      </motion.div>
    </div>
  )
}
