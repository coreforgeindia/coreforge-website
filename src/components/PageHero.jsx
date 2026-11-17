import Breadcrumbs from './Breadcrumbs'

export default function PageHero({
  breadcrumbItems = [],
  title,
  subtitle,
  description,
  children,
}) {
  return (
    <section className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 pattern-conic border-b-4 border-black dark:border-white">
      {/* High-legibility brutalist backdrop scrim */}
      <div className="absolute inset-0 bg-white/85 dark:bg-black/80 backdrop-blur-[1px] pointer-events-none" />

      <div className="section-shell relative z-10">
        {breadcrumbItems.length > 0 && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        )}

        <div className="max-w-4xl">
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-[1.12] mb-6">
            {title}
            {subtitle && (
              <span className="block text-xl sm:text-2xl lg:text-3xl font-medium text-neutral-700 dark:text-neutral-300 mt-2">
                {subtitle}
              </span>
            )}
          </h1>

          {description && (
            <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed max-w-2xl mb-8">
              {description}
            </p>
          )}

          {children && (
            <div className="flex flex-wrap items-center gap-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
