import PageHero from '../components/PageHero'

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy and cookie usage."
        description="Learn how CoreForge collects, protects, and manages personal data, contact submissions, and website analytics."
      />
      <section className="px-4 py-14 sm:px-6 lg:py-20">
        <div className="section-shell rounded-[30px] border border-black/8 bg-white/80 p-8 text-sm leading-8 text-neutral-600">
          CoreForge uses cookies to improve website usage insights and provide a better browsing experience. Contact and quotation forms only collect data you choose to submit.
        </div>
      </section>
    </>
  )
}
