'use client'

import { useEffect, useState } from 'react'

/**
 * Custom hook to monitor FPS and adaptively disable expensive effects
 * @param {number} fpsThreshold - FPS threshold below which quality is reduced (default: 40)
 * @returns {boolean} - Whether high quality mode is enabled
 */
export function useAdaptiveQuality(fpsThreshold = 40) {
  const [isHighQuality, setIsHighQuality] = useState(true)

  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let animationFrameId

    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()
      const elapsed = currentTime - lastTime

      // Calculate FPS every second
      if (elapsed >= 1000) {
        const fps = Math.round((frameCount * 1000) / elapsed)
        
        // If FPS drops below threshold, disable high quality
        if (fps < fpsThreshold) {
          setIsHighQuality(false)
        }

        frameCount = 0
        lastTime = currentTime
      }

      animationFrameId = requestAnimationFrame(measureFPS)
    }

    // Start measuring after 2 seconds to allow initial page load
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(measureFPS)
    }, 2000)

    return () => {
      clearTimeout(timeoutId)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [fpsThreshold])

  return isHighQuality
}
