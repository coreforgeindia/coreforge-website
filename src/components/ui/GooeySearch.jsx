import { HiOutlineSearch } from 'react-icons/hi'

export default function GooeySearch({ value, onChange, placeholder }) {
  return (
    <div className="relative max-w-xl">
      <div className="absolute inset-0 rounded-full bg-black/10 blur-xl" />
      <div className="relative flex items-center rounded-full border border-black/10 bg-white px-5 py-3 shadow-[0_18px_48px_rgba(17,17,17,0.08)]">
        <HiOutlineSearch className="mr-3 h-5 w-5 text-neutral-400" />
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-neutral-800 outline-none placeholder:text-neutral-400"
        />
      </div>
    </div>
  )
}
