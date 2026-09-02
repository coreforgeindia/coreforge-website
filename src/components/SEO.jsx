import { useEffect } from 'react'

export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://coreforgeindia.com/og-image.png',
  jsonLd,
}) {
  useEffect(() => {
    const fullTitle = title
      ? title.includes('CoreForge') ? title : `${title} | CoreForge`
      : 'CoreForge | IoT, Embedded Systems, PCB Design & Custom Software'

    document.title = fullTitle

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

    // OpenGraph
    updateMeta('meta[property="og:title"]', 'content', fullTitle)
    if (description) updateMeta('meta[property="og:description"]', 'content', description)
    if (canonicalUrl) updateMeta('meta[property="og:url"]', 'content', canonicalUrl)
    updateMeta('meta[property="og:type"]', 'content', ogType)
    if (ogImage) updateMeta('meta[property="og:image"]', 'content', ogImage)

    // Twitter
    updateMeta('meta[property="twitter:title"]', 'content', fullTitle)
    if (description) updateMeta('meta[property="twitter:description"]', 'content', description)
    if (canonicalUrl) updateMeta('meta[property="twitter:url"]', 'content', canonicalUrl)
    if (ogImage) updateMeta('meta[property="twitter:image"]', 'content', ogImage)

    // Canonical Link
    if (canonicalUrl) {
      updateLink('canonical', canonicalUrl)
    }

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
  }, [title, description, keywords, canonicalUrl, ogType, ogImage, jsonLd])

  return null
}
