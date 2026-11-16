import { useParams, Link, Navigate } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import SEO from '../components/SEO'
import { fadeUp } from '../utils/motion'
import { blogPosts } from '../utils/blogData'
import { HiArrowLeft, HiOutlineClock } from 'react-icons/hi'

function renderContent(content) {
  return content.split('\n').map((line, i) => {
    const trimmed = line.trim()

    if (trimmed.startsWith('### ')) {
      return (
        <h3 key={i} className="font-heading mt-8 mb-3 text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-2xl">
          {trimmed.slice(4)}
        </h3>
      )
    }
    if (trimmed.startsWith('## ')) {
      return (
        <h2 key={i} className="font-heading mt-12 mb-4 text-2xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-3xl">
          {trimmed.slice(3)}
        </h2>
      )
    }
    if (trimmed.startsWith('- **')) {
      const boldEnd = trimmed.indexOf('**', 4)
      const boldText = trimmed.slice(4, boldEnd)
      const rest = trimmed.slice(boldEnd + 2)
      return (
        <li key={i} className="flex items-start gap-3 text-sm sm:text-base leading-7 text-neutral-700 dark:text-neutral-300 ml-1 mb-2.5">
          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-black dark:bg-white" />
          <span>
            <strong className="font-bold text-neutral-950 dark:text-neutral-50">{boldText}</strong>
            {rest}
          </span>
        </li>
      )
    }
    if (trimmed.startsWith('- ')) {
      return (
        <li key={i} className="flex items-start gap-3 text-sm sm:text-base leading-7 text-neutral-700 dark:text-neutral-300 ml-1 mb-2.5">
          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 bg-black dark:bg-white" />
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
          className="font-bold text-neutral-950 dark:text-neutral-50 underline underline-offset-4 decoration-2 decoration-black dark:decoration-white hover:opacity-75"
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
      <p key={i} className="text-sm sm:text-base leading-8 text-neutral-700 dark:text-neutral-300 mb-4">
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
      <SEO
        title={`${post.title} | CoreForge`}
        description={post.excerpt}
        keywords={`${post.category}, CoreForge engineering, ${post.title}, digital marketing, software development, RF antennas`}
        canonicalUrl={`https://www.coreforgeindia.com/blog/${post.slug}`}
        ogType="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: {
            '@type': 'Organization',
            name: post.author || 'CoreForge Technical Team',
          },
          publisher: {
            '@type': 'Organization',
            name: 'CoreForge',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.coreforgeindia.com/favicon.png',
            },
          },
          mainEntityOfPage: `https://www.coreforgeindia.com/blog/${post.slug}`,
        }}
      />

      {/* Hero Header with Conic Pattern */}
      <header className="relative overflow-hidden pattern-conic text-white border-b-4 border-black dark:border-white py-14 sm:py-20 px-4 sm:px-6">
        <div className="section-shell max-w-4xl">
          <Motion.div initial="hidden" animate="visible" variants={fadeUp}>
            {/* Breadcrumb */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-300 hover:text-white transition-colors mb-6"
            >
              <HiArrowLeft className="h-4 w-4" />
              Back to All Articles
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="border-2 border-white bg-black px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-white">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-mono">
                <HiOutlineClock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <span className="text-xs text-neutral-400">/</span>
              <span className="text-xs text-neutral-300 font-mono">
                {new Date(post.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-neutral-200">
              {post.excerpt}
            </p>

            {/* Author Strip */}
            <div className="mt-8 flex items-center gap-3 pt-6 border-t border-white/20">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-white bg-white font-mono text-xs font-black text-black">
                CF
              </div>
              <div>
                <p className="text-sm font-bold text-white">{post.author || 'CoreForge Technical Team'}</p>
                <p className="text-xs text-neutral-300">CoreForge Engineering Lab, Bengaluru</p>
              </div>
            </div>
          </Motion.div>
        </div>
      </header>

      {/* Article Content Area */}
      <article className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="section-shell max-w-3xl">
          {/* Featured Image */}
          {post.image && (
            <div className="mb-10 overflow-hidden border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full max-h-[460px] object-cover filter grayscale contrast-125"
                loading="lazy"
              />
            </div>
          )}

          {/* Post Body */}
          <div className="prose max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Bottom CTA Box */}
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-14 border-2 border-black dark:border-white bg-white dark:bg-neutral-900 p-8 sm:p-10 text-center shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff]"
          >
            <h3 className="font-heading text-2xl font-black uppercase text-neutral-950 dark:text-neutral-50 sm:text-3xl">
              Ready to Accelerate Your Technology?
            </h3>
            <p className="mt-3 max-w-md mx-auto text-sm leading-7 text-neutral-600 dark:text-neutral-400">
              Consult with our engineering and growth team in Bengaluru to architect your digital marketing, web platform, or industrial RF hardware.
            </p>
            <div className="mt-6 flex justify-center">
              <Link to="/contact" className="btn-primary">
                Get In Touch
              </Link>
            </div>
          </Motion.div>
        </div>
      </article>
    </>
  )
}
