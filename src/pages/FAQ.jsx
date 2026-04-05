import PageHero from '../components/PageHero'
import FAQSection from '../sections/FAQSection'

export default function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions answered without clutter."
        description="A dedicated FAQ page keeps support content easy to search and much less noisy than forcing everything onto the home page."
      />
      <FAQSection />
    </>
  )
}
