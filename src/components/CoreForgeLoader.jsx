export default function CoreForgeLoader({ text = 'LOADING SYSTEM TELEMETRY' }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center" role="status" aria-label="Loading">
      {/* From Uiverse.io by AbanoubMagdy1 */}
      <div className="loader mb-4">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
      {text && (
        <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-neutral-500">
          {text}
        </span>
      )}
    </div>
  )
}
