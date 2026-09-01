import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'
import { blogPosts } from '../utils/blogData'
import { HiArrowLeft, HiOutlineClock } from 'react-icons/hi'

function renderContent(content) {
  return content.split('\n').map((line, i) => {
    const trimmed = line.trim()

    if (trimmed.startsWith('### ')) {
      return (
        <h3 key={i} className="font-heading mt-8 mb-3 text-xl font-bold tracking-[-0.03em] text-neutral-950">
          {trimmed.slice(4)}
        </h3>
      )
    }
    if (trimmed.startsWith('## ')) {
      return (
        <h2 key={i} className="font-heading mt-10 mb-4 text-2xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-3xl">
          {trimmed.slice(3)}
        </h2>
      )
    }
    if (trimmed.startsWith('- **')) {
      const boldEnd = trimmed.indexOf('**', 4)
      const boldText = trimmed.slice(4, boldEnd)
      const rest = trimmed.slice(boldEnd + 2)
      return (
        <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base leading-7 text-neutral-700 ml-1 mb-2">
          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-950" />
          <span>
            <strong className="font-bold text-neutral-950">{boldText}</strong>
            {rest}
          </span>
        </li>
      )
    }
    if (trimmed.startsWith('- ')) {
      return (
        <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base leading-7 text-neutral-700 ml-1 mb-2">
          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-950" />
          <span>{trimmed.slice(2)}</span>
        </li>
      )
    }
    if (trimmed === '') return <div key={i} className="h-3" />

    // Handle inline markdown links [text](/path)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts = []
    let lastIndex = 0
    let match
    while ((match = linkRegex.exec(trimmed)) !== null) {
      if (match.index > lastIndex) {
        parts.push(trimmed.slice(lastIndex, match.index))
      }
      parts.push(
        <Link
          key={`link-${i}-${match.index}`}
          to={match[2]}
          className="font-bold text-neutral-950 underline underline-offset-4 decoration-[#0d9488] hover:text-[#0d9488]"
        >
          {match[1]}
        </Link>
      )
      lastIndex = match.index + match[0].length
    }
    if (lastIndex < trimmed.length) {
      parts.push(trimmed.slice(lastIndex))
    }

    return (
      <p key={i} className="text-sm sm:text-base leading-8 text-neutral-700 mb-3">
        {parts.length > 0 ? parts : trimmed}
      </p>
    )
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <>
      <article className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="section-shell max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            {/* Breadcrumb */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-neutral-600 mb-8 hover:text-black transition-colors"
            >
              <HiArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="rounded-full bg-black/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-800">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-neutral-400 font-medium">
                <HiOutlineClock className="h-3.5 w-3.5" />
                <span>{post.readTime}</span>
              </div>
              <span className="text-xs text-neutral-400">·</span>
              <span className="text-xs text-neutral-400">
                {new Date(post.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-[2.2rem] font-bold leading-[1.1] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-[2.8rem]">
              {post.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-8 text-neutral-600">
              {post.excerpt}
            </p>

            {/* Featured Image */}
            {post.image && (
              <div className="mt-8 overflow-hidden rounded-[24px] border border-black/8 shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full max-h-[420px] object-cover"
                />
              </div>
            )}

            {/* Author Strip */}
            <div className="mt-8 flex items-center gap-3 border-y border-black/8 py-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-xs font-black text-white">
                CF
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-950">{post.author}</p>
                <p className="text-xs text-neutral-500">CoreForge Engineering Lab</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="mt-8">
            {renderContent(post.content)}
          </div>

          {/* Bottom CTA Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-14 rounded-[28px] border border-black/10 bg-white p-8 sm:p-10 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          >
            <h3 className="font-heading text-2xl font-bold text-neutral-950">
              Have an engineering project in mind?
            </h3>
            <p className="mt-3 max-w-md mx-auto text-sm leading-7 text-neutral-600">
              Let us discuss how CoreForge can engineer, prototype, and build your hardware or software system.
            </p>
            <div className="mt-6">
              <Link to="/contact" className="btn-primary">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            author: { '@type': 'Organization', name: 'CoreForge' },
            publisher: {
              '@type': 'Organization',
              name: 'CoreForge',
              url: 'https://coreforgeindia.info',
              logo: { '@type': 'ImageObject', url: 'https://coreforgeindia.info/favicon.png' },
            },
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://coreforgeindia.info/blog/${post.slug}`,
            },
          }),
        }}
      />
    </>
  )
}
