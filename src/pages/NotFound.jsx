import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { HiArrowLeft } from 'react-icons/hi'

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 Page Not Found | CoreForge Bengaluru"
        description="The requested page could not be found. Explore CoreForge's engineering disciplines, software platforms, and antenna RF products."
        noindex={true}
      />
      <section className="min-h-[100dvh] flex flex-col justify-center items-center px-4 pt-24 pb-16 sm:px-6 bg-white dark:bg-neutral-950 transition-colors">
        <div className="section-shell w-full max-w-xl text-center">
          <p className="font-heading text-8xl sm:text-9xl font-black leading-none tracking-tight text-neutral-200 dark:text-neutral-800">
            404
          </p>
          <h1 className="-mt-4 font-heading text-3xl sm:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
            Page Not Found
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md mx-auto">
            The resource you requested does not exist or may have been relocated. Return to the homepage or explore our core disciplines.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="btn-primary">
              <HiArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
