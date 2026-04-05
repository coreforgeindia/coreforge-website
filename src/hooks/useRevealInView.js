import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useRevealInView(options = { once: true, margin: '-80px' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, options)
  return { ref, isInView }
}
