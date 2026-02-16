'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for fade-up animations on scroll
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection observer threshold (0-1)
 * @param {number} options.delay - Animation delay in milliseconds
 * @returns {Object} - ref and isVisible state
 */
export function useAppear(options = {}) {
  const { threshold = 0.2, delay = 0 } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, delay])

  return { ref, isVisible }
}
