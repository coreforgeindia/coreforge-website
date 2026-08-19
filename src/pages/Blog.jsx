import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiOutlineClock } from 'react-icons/hi'
import { fadeUp, stagger } from '../utils/motion'
import { blogPosts } from '../utils/blogData'

export default function Blog() {
  return (
    <>
      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="section-shell">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#0d9488]">Blog</p>
            <h1 className="mt-4 font-heading text-[2.6rem] font-bold leading-[1] tracking-[-0.04em] text-neutral-950 sm:text-5xl">
              Insights & Engineering Notes
            </h1>
            <p className="mt-4 max-w-xl text-base leading-8 text-neutral-500">
              Technical deep-dives, project breakdowns, and engineering perspectives from the CoreForge team.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {blogPosts.map((post) => (
              <motion.article key={post.slug} variants={fadeUp} className="h-full">
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col justify-between h-full rounded-[24px] border border-black/8 bg-white overflow-hidden shadow-[0_4px_20px_rgba(17,17,17,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(17,17,17,0.08)]"
                >
                  {/* Thumbnail with Category Badge */}
                  <div className="relative h-52 w-full overflow-hidden bg-neutral-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-3.5 left-3.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-neutral-900 shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-3">
                        <HiOutlineClock className="h-3.5 w-3.5" />
                        <span>{post.readTime}</span>
                        <span>·</span>
                        <span>
                          {new Date(post.date).toLocaleDateString('en-IN', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <h2 className="font-heading text-lg font-bold tracking-[-0.02em] text-neutral-950 leading-snug group-hover:text-neutral-700 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="mt-2.5 text-xs sm:text-sm leading-6 text-neutral-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-1.5 text-sm font-bold text-neutral-950 group-hover:text-[#0d9488] transition-colors">
                      <span>Read Article</span>
                      <HiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'CoreForge Blog',
            url: 'https://coreforgeindia.info/blog',
            description:
              'Technical insights, project breakdowns, and engineering perspectives from the CoreForge team.',
            publisher: {
              '@type': 'Organization',
              name: 'CoreForge',
              url: 'https://coreforgeindia.info',
            },
            blogPost: blogPosts.map((post) => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              author: { '@type': 'Organization', name: 'CoreForge' },
              datePublished: post.date,
              url: `https://coreforgeindia.info/blog/${post.slug}`,
            })),
          }),
        }}
      />
    </>
  )
}
