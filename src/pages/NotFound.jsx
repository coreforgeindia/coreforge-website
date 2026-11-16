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
      <section className="flex min-h-[calc(100vh-140px)] items-center justify-center px-4 py-20 sm:px-6">
        <div className="section-shell w-full max-w-xl text-center">
          <p className="font-heading text-8xl sm:text-9xl font-bold leading-none tracking-tight text-neutral-200">
            404
          </p>
          <h1 className="-mt-4 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Page Not Found
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md mx-auto">
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
