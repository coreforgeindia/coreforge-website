const avatars = [
  'CE',
  'PCB',
  'IoT',
  'R&D',
]

export default function AvatarCluster() {
  return (
    <div className="flex items-center">
      {avatars.map((label, index) => (
        <div
          key={label}
          className="-ml-3 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-700 first:ml-0"
          style={{ zIndex: avatars.length - index }}
        >
          {label}
        </div>
      ))}
    </div>
  )
}
