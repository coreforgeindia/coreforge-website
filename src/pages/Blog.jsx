import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiOutlineClock } from 'react-icons/hi'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { fadeUp, stagger } from '../utils/motion'
import { blogPosts } from '../utils/blogData'

export default function Blog() {
  return (
    <>
      <SEO
        title="Engineering Insights & Tech Blog | CoreForge Bengaluru"
        description="Technical articles, modern search optimization (SEO, AEO, GEO), software architecture blueprints, and industrial RF engineering notes from CoreForge."
        keywords="CoreForge blog, SEO AEO GEO, custom software vs SaaS, cavity duplexer isolation, RF antenna engineering Bengaluru, React Native architecture"
        canonicalUrl="https://www.coreforgeindia.com/blog"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'CoreForge Engineering Blog',
          url: 'https://www.coreforgeindia.com/blog',
          description:
            'Technical articles, modern search optimization (SEO, AEO, GEO), software architecture tutorials, and industrial RF engineering guides.',
          publisher: {
            '@type': 'Organization',
            name: 'CoreForge',
            url: 'https://www.coreforgeindia.com',
          },
          blogPost: blogPosts.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            author: { '@type': 'Organization', name: post.author || 'CoreForge' },
            datePublished: post.date,
            url: `https://www.coreforgeindia.com/blog/${post.slug}`,
          })),
        }}
      />

      {/* Page Hero with standard pattern-conic */}
      <PageHero
        eyebrow="Knowledge & Editorial"
        title="Insights & Engineering Notes"
        description="First-hand technical deep-dives, search optimization frameworks (SEO, AEO, GEO), and industrial RF communications authored by the CoreForge engineering team in Bengaluru."
      />

      {/* Blog Listing Section */}
      <section className="px-4 py-14 sm:px-6 lg:py-20">
        <div className="section-shell">
          <Motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {blogPosts.map((post) => (
              <Motion.article key={post.slug} variants={fadeUp} className="h-full">
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col justify-between h-full border-2 border-black dark:border-white bg-white dark:bg-neutral-900 transition-all duration-300 hover:shadow-[6px_6px_0px_0px_#000] dark:hover:shadow-[6px_6px_0px_0px_#fff]"
                >
                  {/* Thumbnail with Category Badge */}
                  <div className="relative h-56 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-b-2 border-black dark:border-white">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover filter grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 border-2 border-white bg-black px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono mb-3">
                        <HiOutlineClock className="h-3.5 w-3.5" />
                        <span>{post.readTime}</span>
                        <span>/</span>
                        <span>
                          {new Date(post.date).toLocaleDateString('en-IN', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                      <h2 className="font-heading text-lg font-bold tracking-tight text-neutral-950 dark:text-neutral-50 leading-snug group-hover:underline underline-offset-4 decoration-2">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/20 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-950 dark:text-neutral-50">
                      <span>Read Article</span>
                      <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Motion.article>
            ))}
          </Motion.div>
        </div>
      </section>
    </>
  )
}
