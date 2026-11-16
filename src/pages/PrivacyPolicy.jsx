import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import { COMPANY_INFO } from '../data/verticals'

export default function PrivacyPolicy() {
  const lastUpdated = 'November 16, 2026'

  return (
    <>
      <SEO
        title="Privacy Policy | CoreForge"
        description="Comprehensive privacy statement detailing how CoreForge collects, protects, stores, and governs personal, corporate, and technical data in accordance with the Indian Information Technology Act and DPDP Act 2023."
        canonicalUrl="https://www.coreforgeindia.com/privacy"
        keywords="CoreForge privacy policy, data protection, DPDP Act compliance, cookies policy, Bengaluru engineering firm data governance"
      />
      <PageHero
        eyebrow="Legal & Governance"
        title="Privacy Policy"
        description="Our comprehensive commitment to safeguarding personal, technical, and commercial data across our 360° digital marketing, software engineering, and RF hardware operations."
      />

      <section className="px-4 py-14 sm:px-6 lg:py-20">
        <div className="section-shell max-w-4xl space-y-12">
          {/* Metadata pill */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black/10 pb-6 dark:border-white/20">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Effective Date: {lastUpdated}
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Location: Bengaluru, Karnataka, India
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              1. Introduction & Statutory Framework
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              CoreForge (&quot;CoreForge&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a digital marketing, brand engineering, custom software development, and industrial RF communications provider headquartered in Peenya Industrial Area, Bengaluru, Karnataka, India. This Privacy Policy outlines our standards and protocols regarding the collection, handling, storage, transfer, and safeguarding of information gathered through our website (<a href="https://www.coreforgeindia.com" className="font-semibold underline">https://www.coreforgeindia.com</a>), quotation portals, client communication channels, and associated professional service agreements.
            </p>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              We govern data in full adherence to the Information Technology Act, 2000 (as amended), the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (&quot;SPDI Rules&quot;), and the foundational mandates of the Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;). For international enterprise clients and site visitors, our controls align with globally recognized security and privacy benchmarks including the European Union General Data Protection Regulation (GDPR).
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              2. Data Fiduciary Identity & Contact Details
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              Under relevant privacy legislation, the Data Fiduciary (or Data Controller) accountable for the governance of your information is:
            </p>
            <div className="border border-black/10 bg-neutral-50 p-6 dark:border-white/20 dark:bg-neutral-900/50">
              <p className="font-bold text-neutral-950 dark:text-neutral-50">{COMPANY_INFO.legalName}</p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {COMPANY_INFO.address.street}, {COMPANY_INFO.address.locality}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.postalCode}, India
              </p>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Direct Contact: <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold underline">{COMPANY_INFO.email}</a> | Phone: {COMPANY_INFO.phoneFormatted}
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              3. Information We Collect
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              We strictly collect information necessary to fulfill contractual inquiries, engineering quotations, and technical service execution. The categories of data we process include:
            </p>
            <ul className="space-y-3 pl-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
              <li className="list-disc">
                <strong className="text-neutral-950 dark:text-neutral-50">Business & Contact Identifiers:</strong> Name, professional corporate email address, mobile/telephone number, company name, department, and physical billing/shipping address submitted through contact or quotation forms.
              </li>
              <li className="list-disc">
                <strong className="text-neutral-950 dark:text-neutral-50">Technical Project Specifications:</strong> Project briefs, architectural requirements, source code parameters, marketing objectives, target budgets, and RF antenna frequency/duplexer engineering requirements provided during project discovery.
              </li>
              <li className="list-disc">
                <strong className="text-neutral-950 dark:text-neutral-50">Commercial & Transactional Records:</strong> Purchase orders, Statements of Work (SOW), invoice records, GST identification numbers (GSTIN), and corporate transaction histories. (Note: We do not store raw credit card or net-banking authentication credentials on our servers; payments are routed via authorized payment gateways).
              </li>
              <li className="list-disc">
                <strong className="text-neutral-950 dark:text-neutral-50">Automated System Telemetry & Logs:</strong> Internet Protocol (IP) addresses, browser classification, operating system details, device type, referring URLs, access timestamps, and page interaction events recorded via secure server diagnostics.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              4. Legal Grounds & Purposes of Processing
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              We process personal and corporate data under explicit, lawful grounds, including:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-black/10 p-5 dark:border-white/20">
                <h3 className="font-bold text-neutral-950 dark:text-neutral-50">Contractual Performance</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Executing statements of work, custom software builds, advertising campaign orchestration, milestone deliverables, and RF hardware shipments.
                </p>
              </div>
              <div className="border border-black/10 p-5 dark:border-white/20">
                <h3 className="font-bold text-neutral-950 dark:text-neutral-50">Consent</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Processing inquiries sent via our contact forms, responding to RFQ submissions, and operating client-consented analytics cookies.
                </p>
              </div>
              <div className="border border-black/10 p-5 dark:border-white/20">
                <h3 className="font-bold text-neutral-950 dark:text-neutral-50">Legitimate Interests</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Hardening web server security, thwarting malicious cyber attacks, optimizing site responsiveness, and diagnosing platform health.
                </p>
              </div>
              <div className="border border-black/10 p-5 dark:border-white/20">
                <h3 className="font-bold text-neutral-950 dark:text-neutral-50">Statutory Compliance</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Complying with Indian corporate tax frameworks, Goods and Services Tax (GST) audit mandates, and legal court orders from competent jurisdictions.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              5. Cookie Governance & Consent
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              CoreForge utilizes local browser cookies and session tokens to maintain application state and monitor traffic performance:
            </p>
            <ul className="space-y-2 pl-4 text-sm text-neutral-700 dark:text-neutral-300 sm:text-base">
              <li>
                <strong>Strictly Essential Cookies:</strong> Required to preserve user theme preferences (light/dark mode toggle) and track cookie consent states. These cannot be deactivated as they are required for basic site rendering.
              </li>
              <li>
                <strong>Operational & Analytics Cookies:</strong> Measure aggregate page views, dwell duration, bounce patterns, and screen viewport dimensions to maintain fast render speeds across mobile and desktop devices.
              </li>
            </ul>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              You can adjust, reject, or reset cookie permissions at any time through our interactive Cookie Consent banner or directly via your web browser&apos;s security configuration.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              6. Information Security & Technical Safeguards
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              In accordance with Section 43A of the Information Technology Act and the SPDI Rules, CoreForge enforces robust physical, managerial, and technological security controls:
            </p>
            <ul className="space-y-2 pl-4 text-sm text-neutral-700 dark:text-neutral-300 sm:text-base">
              <li className="list-disc">Mandatory Transport Layer Security (TLS 1.3) cryptographic protocols for all data in transit across public networks.</li>
              <li className="list-disc">Zero monetization: CoreForge never sells, rents, leases, or trades commercial or personal user data to third-party data brokers.</li>
              <li className="list-disc">Role-based access controls (RBAC) restricting technical project specifications exclusively to engineers assigned to the relevant client engagement.</li>
              <li className="list-disc">Continuous automated dependency auditing and vulnerability mitigation.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              7. Data Retention & Erasure Protocols
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              Client contact information and quotation submissions are retained for as long as necessary to facilitate ongoing commercial dialogue or fulfill active engineering contracts. Financial invoices, delivery notes, and tax records are preserved for a period of eight (8) statutory years in compliance with the Indian Companies Act and GST mandates. When data exceeds its retention window or upon a verified erasure request, files are securely purged using industry-standard digital sanitization standards.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              8. Rights of Data Principals
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              As a Data Principal under Indian and international privacy legislation, you maintain enforceable rights concerning your information:
            </p>
            <div className="grid gap-3 sm:grid-cols-2 text-sm text-neutral-700 dark:text-neutral-300">
              <div className="border border-black/10 p-4 dark:border-white/20">
                <strong>Right to Access:</strong> Request a summary of personal information we process concerning you.
              </div>
              <div className="border border-black/10 p-4 dark:border-white/20">
                <strong>Right to Rectification:</strong> Request correction of obsolete, misleading, or inaccurate records.
              </div>
              <div className="border border-black/10 p-4 dark:border-white/20">
                <strong>Right to Erasure:</strong> Request the deletion of non-statutory records when no longer necessary.
              </div>
              <div className="border border-black/10 p-4 dark:border-white/20">
                <strong>Right to Withdraw Consent:</strong> Revoke authorization for marketing or communication updates at any time.
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              9. Grievance Officer & Statutory Redressal
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              In accordance with Rule 5(9) of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the DPDP Act, the designated Grievance Officer for CoreForge is:
            </p>
            <div className="border-2 border-black bg-white p-6 dark:border-white dark:bg-neutral-950">
              <p className="font-bold text-neutral-950 dark:text-neutral-50">Grievance Officer: Legal & Compliance Operations</p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">CoreForge Headquarters</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                352, 4th Cross Rd, Rajagopala Nagar, Peenya Industrial Area, Bengaluru, Karnataka 560058, India
              </p>
              <p className="mt-3 text-sm font-mono text-neutral-950 dark:text-neutral-50">
                Email: <a href="mailto:info@coreforgeindia.com" className="underline">info@coreforgeindia.com</a>
              </p>
              <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                Response SLA: All grievances submitted in writing will be investigated and acknowledged within 48 hours and redressed within thirty (30) business days from receipt.
              </p>
            </div>
          </div>

          {/* Quick links footer */}
          <div className="pt-8 border-t border-black/10 dark:border-white/20 flex flex-wrap gap-4 text-sm font-bold">
            <Link to="/terms" className="underline hover:text-neutral-600 dark:hover:text-neutral-300">Review Terms & Conditions</Link>
            <span className="text-neutral-400">•</span>
            <Link to="/contact" className="underline hover:text-neutral-600 dark:hover:text-neutral-300">Contact Engineering Office</Link>
          </div>
        </div>
      </section>
    </>
  )
}
