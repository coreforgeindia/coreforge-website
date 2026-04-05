export default function SectionIntro({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="max-w-4xl text-[2.85rem] font-bold leading-[0.94] tracking-[-0.075em] text-neutral-950 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
        {description}
      </p>
    </div>
  )
}
