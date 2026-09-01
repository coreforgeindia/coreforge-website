import CoreForgeLoader from '../CoreForgeLoader'

export default function LoadingState({ message = 'Loading...' }) {
  return (
    <div className="relative">
      <CoreForgeLoader duration={3} />
      <div className="fixed inset-x-0 bottom-12 z-[10000] text-center">
        <p className="text-sm text-neutral-500">{message}</p>
      </div>
    </div>
  )
}
