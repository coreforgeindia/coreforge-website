import PageHero from '../components/PageHero'

export default function TermsAndConditions() {
  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Clear terms for services and communication."
        description="Use this page for project engagement terms, delivery expectations, revision scope, and service conditions."
      />
      <section className="px-4 py-14 sm:px-6 lg:py-20">
        <div className="section-shell rounded-[30px] border border-black/8 bg-white/80 p-8 text-sm leading-8 text-neutral-600">
          Project scope, delivery timing, service obligations, and support conditions can be documented here in a structured legal format.
        </div>
      </section>
    </>
  )
}
