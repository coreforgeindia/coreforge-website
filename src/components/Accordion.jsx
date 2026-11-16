import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

export default function Accordion({ items, allowMultiple = false, className = '' }) {
  const [openIndices, setOpenIndices] = useState([0])

  const toggleIndex = (index) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      )
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]))
    }
  }

  if (!items || items.length === 0) return null

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index)
        const headingId = `accordion-heading-${index}`
        const panelId = `accordion-panel-${index}`

        return (
          <div
            key={item.question || item.title || index}
            className="border-2 border-black dark:border-white bg-white dark:bg-neutral-900 overflow-hidden transition-colors shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]"
          >
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleIndex(index)}
                className="w-full min-h-[48px] px-5 py-4 text-left flex items-center justify-between gap-4 font-heading text-base font-bold text-neutral-950 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer transition-colors"
              >
                <span>{item.question || item.title}</span>
                <HiChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-neutral-500 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-black' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headingId}
                className="px-5 pb-5 pt-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed border-t border-black/10 dark:border-white/10"
              >
                {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
