import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiOutlineClock } from 'react-icons/hi'
import { fadeUp, stagger } from '../utils/motion'
import { blogPosts } from '../utils/blogData'

export default function HomeBlogSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="section-shell">
        {/* Header matching Screenshot 4 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0d9488]">
              FROM THE BLOG
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-[-0.03em] text-neutral-950 sm:text-4xl lg:text-5xl">
              Latest Insights & Guides
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-[#0d9488] transition-colors"
            >
              View All Articles
              <HiArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* 3 Blog Cards Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 md:grid-cols-3"
        >
          {blogPosts.slice(0, 3).map((post) => (
            <motion.article key={post.slug} variants={fadeUp} className="h-full">
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col justify-between h-full rounded-[24px] border border-black/8 bg-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_44px_rgba(0,0,0,0.08)]"
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

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta info */}
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

                    <h3 className="font-heading text-lg font-bold leading-snug tracking-[-0.02em] text-neutral-950 group-hover:text-black transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-6 text-neutral-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-1.5 text-sm font-bold text-neutral-950 group-hover:text-[#0d9488] transition-colors">
                    <span>Read More</span>
                    <HiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
