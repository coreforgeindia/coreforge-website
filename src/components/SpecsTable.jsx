import { Link } from 'react-router-dom'
import { HiOutlineInformationCircle } from 'react-icons/hi'

export default function SpecsTable({ specs, productName, verticalSlug }) {
  if (!specs || Object.keys(specs).length === 0) return null

  const specLabels = {
    frequencyRange: 'Frequency Range',
    gain: 'Gain',
    vswr: 'VSWR',
    impedance: 'Impedance',
    connector: 'Connector Type',
    polarization: 'Polarization',
    maxPower: 'Max Input Power',
    dimensions: 'Dimensions',
    weight: 'Weight',
    operatingTemp: 'Operating Temperature',
  }

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-[var(--color-border)] bg-neutral-50 flex items-center justify-between flex-wrap gap-2">
        <div>
          <h3 className="font-heading text-lg font-bold text-neutral-950">
            Technical Specifications: {productName}
          </h3>
          <p className="text-xs text-neutral-500">
            Values marked with [Add: ...] represent standard design targets subject to customization.
          </p>
        </div>
        <Link
          to={`/contact?vertical=${encodeURIComponent(verticalSlug)}&item=${encodeURIComponent(productName)}`}
          className="btn-primary text-xs py-2 px-4"
        >
          Request Quote for Specs
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border)] bg-neutral-100/50">
              <th className="py-3 px-6 font-bold text-neutral-700 w-1/3">Parameter</th>
              <th className="py-3 px-6 font-bold text-neutral-700">Specification Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)]">
            {Object.entries(specs).map(([key, val]) => {
              const isPlaceholder = typeof val === 'string' && val.includes('[Add:')
              return (
                <tr key={key} className="hover:bg-neutral-50/75 transition-colors">
                  <td className="py-3 px-6 font-semibold text-neutral-800">
                    {specLabels[key] || key}
                  </td>
                  <td className="py-3 px-6 text-neutral-700">
                    {isPlaceholder ? (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200/60 font-mono text-xs">
                        <HiOutlineInformationCircle className="h-3.5 w-3.5 flex-shrink-0" />
                        {val}
                      </span>
                    ) : (
                      <span>{val}</span>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
