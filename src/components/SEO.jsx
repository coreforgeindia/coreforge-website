import { useEffect } from 'react'

const SITE_BASE = import.meta.env.VITE_SITE_URL || 'https://www.coreforgeindia.com'

export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://www.coreforgeindia.com/og-image.jpg',
  noindex = false,
  jsonLd,
}) {
  useEffect(() => {
    const fullTitle = title
      ? title.includes('CoreForge')
        ? title
        : `${title} | CoreForge`
      : 'CoreForge | Digital Growth, Software Development & RF Products'

    document.title = fullTitle

    // Auto-generate self-referencing canonical from current path if not explicitly provided
    const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
    const selfCanonical =
      canonicalUrl || `${SITE_BASE}${pathname === '/' ? '/' : pathname}`

    const updateMeta = (selector, attribute, value) => {
      if (!value) return
      let element = document.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        const match = selector.match(/\[(.*?)="(.*?)"\]/)
        if (match) {
          element.setAttribute(match[1], match[2])
        }
        document.head.appendChild(element)
      }
      element.setAttribute(attribute, value)
    }

    const updateLink = (rel, href) => {
      if (!href) return
      let element = document.querySelector(`link[rel="${rel}"]`)
      if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', rel)
        document.head.appendChild(element)
      }
      element.setAttribute('href', href)
    }

    // Primary Meta Tags
    updateMeta('meta[name="title"]', 'content', fullTitle)
    if (description) updateMeta('meta[name="description"]', 'content', description)
    if (keywords) updateMeta('meta[name="keywords"]', 'content', keywords)

    // Robots / Indexing
    if (noindex) {
      updateMeta('meta[name="robots"]', 'content', 'noindex, nofollow')
    } else {
      updateMeta('meta[name="robots"]', 'content', 'index, follow')
    }

    // OpenGraph
    updateMeta('meta[property="og:site_name"]', 'content', 'CoreForge')
    updateMeta('meta[property="og:title"]', 'content', fullTitle)
    if (description) updateMeta('meta[property="og:description"]', 'content', description)
    updateMeta('meta[property="og:url"]', 'content', selfCanonical)
    updateMeta('meta[property="og:type"]', 'content', ogType)
    if (ogImage) updateMeta('meta[property="og:image"]', 'content', ogImage)

    // Twitter / X
    updateMeta('meta[name="twitter:card"]', 'content', 'summary_large_image')
    updateMeta('meta[property="twitter:title"]', 'content', fullTitle)
    if (description) updateMeta('meta[property="twitter:description"]', 'content', description)
    updateMeta('meta[property="twitter:url"]', 'content', selfCanonical)
    if (ogImage) updateMeta('meta[property="twitter:image"]', 'content', ogImage)

    // Canonical Link
    updateLink('canonical', selfCanonical)

    // Dynamic JSON-LD Structured Data
    let scriptTag = document.getElementById('dynamic-jsonld')
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.id = 'dynamic-jsonld'
        scriptTag.type = 'application/ld+json'
        document.head.appendChild(scriptTag)
      }
      scriptTag.textContent = JSON.stringify(jsonLd)
    } else if (scriptTag) {
      scriptTag.remove()
    }
  }, [title, description, keywords, canonicalUrl, ogType, ogImage, noindex, jsonLd])

  return null
}
