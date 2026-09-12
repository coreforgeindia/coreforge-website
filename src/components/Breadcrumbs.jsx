import { Link } from 'react-router-dom'
import { HiChevronRight, HiHome } from 'react-icons/hi'

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null

  // JSON-LD BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://coreforgeindia.com/',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.href ? `https://coreforgeindia.com${item.href}` : undefined,
      })),
    ],
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-neutral-500">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 transition-colors hover:text-black"
            title="CoreForge Home"
          >
            <HiHome className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.label || index} className="flex items-center gap-1.5">
              <HiChevronRight className="h-3 w-3 text-neutral-400 flex-shrink-0" />
              {isLast || !item.href ? (
                <span className="font-bold text-neutral-900 truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="transition-colors hover:text-black"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
