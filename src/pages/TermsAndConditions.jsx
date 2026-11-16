import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import { COMPANY_INFO } from '../data/verticals'

export default function TermsAndConditions() {
  const lastUpdated = 'November 16, 2026'

  return (
    <>
      <SEO
        title="Terms & Conditions | CoreForge"
        description="Official commercial terms, service level agreements, intellectual property ownership, milestone deliveries, and hardware supply policies governing CoreForge client engagements."
        canonicalUrl="https://www.coreforgeindia.com/terms"
        keywords="CoreForge terms and conditions, engineering service agreement, software development contract, RF antenna supply terms, Bengaluru jurisdiction"
      />
      <PageHero
        eyebrow="Commercial & Legal Terms"
        title="Terms & Conditions"
        description="Standard commercial conditions, intellectual property provisions, delivery standards, and service obligations governing CoreForge professional solutions."
      />

      <section className="px-4 py-14 sm:px-6 lg:py-20">
        <div className="section-shell max-w-4xl space-y-12">
          {/* Metadata banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black/10 pb-6 dark:border-white/20">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Effective Date: {lastUpdated}
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Jurisdiction: Bengaluru, Karnataka, India
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              1. Acceptance of Terms & Engagement Scope
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              These Terms & Conditions (&quot;Terms&quot;) constitute a legally binding contractual agreement between CoreForge (&quot;CoreForge&quot;, &quot;Company&quot;, &quot;we&quot;, or &quot;us&quot;) and the client entity, business, or individual (&quot;Client&quot;, &quot;you&quot;) engaging our professional services or purchasing hardware products. By executing a Statement of Work (&quot;SOW&quot;), issuing an approved Purchase Order (&quot;PO&quot;), making an advance milestone payment, or browsing this website (<a href="https://www.coreforgeindia.com" className="font-semibold underline">https://www.coreforgeindia.com</a>), you unconditionally agree to be bound by these Terms.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              2. Professional Services & Statements of Work
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              All engineering and marketing engagements are defined through mutual Statements of Work (SOW) or formal written quotations detailing:
            </p>
            <ul className="space-y-2 pl-4 text-sm text-neutral-700 dark:text-neutral-300 sm:text-base">
              <li className="list-disc">
                <strong className="text-neutral-950 dark:text-neutral-50">Deliverable Specifications:</strong> Exact functional scope, platform architecture, system integrations, and measurable milestones.
              </li>
              <li className="list-disc">
                <strong className="text-neutral-950 dark:text-neutral-50">Timeline Estimates:</strong> Estimated project durations and target phase completion dates, contingent upon prompt client approvals and asset provisioning.
              </li>
              <li className="list-disc">
                <strong className="text-neutral-950 dark:text-neutral-50">Commercial Pricing & Milestones:</strong> Structured payment milestones, initial booking commitments, and final acceptance criteria.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              3. 360° Digital Marketing & Performance Advertising Terms
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              For engagements involving brand strategy, search engine optimization (SEO/AEO/GEO), meta advertising, Google Ads, and content production:
            </p>
            <div className="space-y-3 rounded-lg border border-black/10 bg-neutral-50 p-6 text-sm text-neutral-700 dark:border-white/20 dark:bg-neutral-900/50 dark:text-neutral-300">
              <p>
                <strong>Ad Spend Management:</strong> Media budgets (e.g., Google Ads, Meta Ads, LinkedIn Ads) are paid directly by the Client to the respective ad platform or pre-funded via separate ad budget invoices. CoreForge service fees encompass campaign architecture, conversion tracking, creative development, and bid optimization only.
              </p>
              <p>
                <strong>Platform Account Ownership:</strong> Client retains 100% legal ownership of their advertising accounts, domain registrations, and analytics properties.
              </p>
              <p>
                <strong>Performance Disclaimers:</strong> While CoreForge applies rigorous data-driven methodologies and performance optimization, organic search algorithms (Google, Bing), generative AI answers, and third-party advertising auction dynamics are subject to external platform updates beyond our direct control. CoreForge provides no warranty of specific organic rankings or fixed return-on-ad-spend (ROAS) figures.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              4. Custom Software Engineering & Source Code Ownership
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              For custom web platforms, cloud architectures, REST APIs, enterprise automation portals, and cross-platform mobile applications:
            </p>
            <ul className="space-y-3 pl-4 text-sm text-neutral-700 dark:text-neutral-300 sm:text-base">
              <li className="list-disc">
                <strong className="text-neutral-950 dark:text-neutral-50">Complete Source Code Transfer:</strong> Upon receipt of 100% of agreed project payments, CoreForge transfers full, exclusive intellectual property ownership of the custom application source code, database schemas, and tailored assets to the Client.
              </li>
              <li className="list-disc">
                <strong className="text-neutral-950 dark:text-neutral-50">Pre-Existing Frameworks & Open Source:</strong> Any proprietary CoreForge scaffolding libraries, standard utility functions, or open-source software (MIT, Apache 2.0, BSD) incorporated into the solution remain subject to their respective licenses.
              </li>
              <li className="list-disc">
                <strong className="text-neutral-950 dark:text-neutral-50">Warranty & Post-Launch Grace Period:</strong> CoreForge provides a standard thirty (30) calendar day warranty following production launch to rectify any functional defects or reproducible bugs conflicting with the agreed SOW at zero additional labor cost. Post-warranty updates, feature expansions, or third-party API deprecations are executed under monthly maintenance agreements or separate change orders.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              5. RF Products, Antennas & Hardware Supply
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              For orders of industrial RF communication hardware (VHF/UHF antennas, cavity duplexers, GSM/LTE base station antennas, GPS/GNSS antennas, coaxial cable assemblies):
            </p>
            <ul className="space-y-2 pl-4 text-sm text-neutral-700 dark:text-neutral-300 sm:text-base">
              <li className="list-disc">
                <strong>VNA Factory Calibration:</strong> All duplexers and antennas are tested and tuned on calibrated Vector Network Analyzers (VNA) in Bengaluru prior to packaging to meet stated VSWR, isolation, and insertion loss benchmarks.
              </li>
              <li className="list-disc">
                <strong>Inspection & Transit Claims:</strong> The Client must inspect shipments within seven (7) business days of physical receipt. Discrepancies, physical transit damage, or parameter deviations must be reported in writing within this period.
              </li>
              <li className="list-disc">
                <strong>Hardware Warranty:</strong> Antennas and RF hardware carry a standard 12-month manufacturer defect warranty from invoice date, covering structural integrity and RF tuning against workmanship defects. Warranty is void if equipment has been subjected to lightning strike without arrestor, physical dropping, unauthorized mechanical disassembly, or operational over-powering beyond ratings.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              6. Payment Terms, Taxes & Milestones
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              Invoices are issued in Indian National Rupees (INR) or agreed foreign currencies for international accounts:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 text-sm text-neutral-700 dark:text-neutral-300">
              <div className="border border-black/10 p-5 dark:border-white/20">
                <h3 className="font-bold text-neutral-950 dark:text-neutral-50">Milestone Invoicing</h3>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                  Payments are billed against predetermined milestone approvals. Standard terms require an advance mobilization deposit prior to commencement of engineering work.
                </p>
              </div>
              <div className="border border-black/10 p-5 dark:border-white/20">
                <h3 className="font-bold text-neutral-950 dark:text-neutral-50">Taxation (GST)</h3>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                  Applicable Goods and Services Tax (GST at 18%) or relevant statutory levies are charged in addition to stated service quotations for domestic Indian transactions.
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Invoices are due within fifteen (15) calendar days from receipt unless otherwise agreed in writing. Payments overdue beyond thirty (30) days may accrue interest at 1.5% per month or the statutory maximum rate.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              7. Confidentiality & Non-Disclosure
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              Both CoreForge and the Client agree to treat all business plans, customer records, database architecture, trade secrets, and technical documentation exchanged during the engagement as strictly Confidential Information. Neither party shall disclose such data to third parties without prior written consent, maintaining such obligations for three (3) years post engagement termination.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              8. Limitation of Liability
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              To the maximum extent permitted by applicable Indian law, in no event shall CoreForge, its founders, directors, employees, or contractors be liable for any indirect, punitive, special, incidental, or consequential damages (including loss of profits, business interruption, or data corruption) arising out of or related to our services or hardware products. CoreForge&apos;s cumulative total liability under any claim shall not exceed the total fees actually received by CoreForge for the specific service milestone or product order in dispute.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              9. Governing Law & Dispute Resolution
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              These Terms, all Statements of Work, and commercial transactions shall be governed by and construed in accordance with the substantive laws of the Republic of India.
            </p>
            <div className="border-2 border-black bg-white p-6 dark:border-white dark:bg-neutral-950">
              <h3 className="font-bold text-neutral-950 dark:text-neutral-50">
                Exclusive Jurisdiction & Arbitration (Bengaluru, India)
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Any dispute, controversy, or claim arising out of or relating to this agreement shall first be subject to good-faith executive negotiation. If unresolved within thirty (30) days, the matter shall be referred to and finally resolved by binding arbitration in accordance with the Indian Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be Bengaluru, Karnataka, India. The arbitration shall be conducted by a sole arbitrator mutually appointed by the parties in the English language. Subject to arbitration, the courts situated in Bengaluru, Karnataka, shall have exclusive jurisdiction.
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              10. Contact Information
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              For commercial clarifications, legal inquiries, or formal contractual notices regarding these Terms, please contact:
            </p>
            <div className="border border-black/10 bg-neutral-50 p-6 dark:border-white/20 dark:bg-neutral-900/50">
              <p className="font-bold text-neutral-950 dark:text-neutral-50">{COMPANY_INFO.legalName}</p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Attention: Legal & Contracts Management
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {COMPANY_INFO.address.street}, {COMPANY_INFO.address.locality}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.postalCode}, India
              </p>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Email: <a href="mailto:info@coreforgeindia.com" className="font-bold underline">info@coreforgeindia.com</a> | Phone: {COMPANY_INFO.phoneFormatted}
              </p>
            </div>
          </div>

          {/* Quick links footer */}
          <div className="pt-8 border-t border-black/10 dark:border-white/20 flex flex-wrap gap-4 text-sm font-bold">
            <Link to="/privacy" className="underline hover:text-neutral-600 dark:hover:text-neutral-300">Review Privacy Policy</Link>
            <span className="text-neutral-400">•</span>
            <Link to="/contact" className="underline hover:text-neutral-600 dark:hover:text-neutral-300">Contact Engineering Office</Link>
          </div>
        </div>
      </section>
    </>
  )
}
