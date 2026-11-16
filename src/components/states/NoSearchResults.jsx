import { motion as Motion } from 'framer-motion'
import { HiOutlineSearch } from 'react-icons/hi'

export default function NoSearchResults({ query = '', onClear }) {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-4">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center border border-black/10 bg-white">
          <HiOutlineSearch className="h-8 w-8 text-black" />
        </div>
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-neutral-900">No results found</h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-neutral-600">
          {query ? `We could not find anything matching "${query}". Try adjusting your keywords.` : 'No results match your search criteria.'}
        </p>
        {onClear && (
          <button onClick={onClear} className="mt-6 border border-black bg-black px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-neutral-800">
            Clear Search
          </button>
        )}
      </Motion.div>
    </div>
  )
}
