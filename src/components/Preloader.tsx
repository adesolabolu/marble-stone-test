import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Array of critical images to preload
    const imagesToPreload = [
      '/src/assets/images/marble_texture_1786471487386.jpg',
      '/src/assets/images/granite_texture_1786471500714.jpg',
      '/src/assets/images/terrazzo_texture_1786471515129.jpg',
      '/src/assets/images/limestone_texture_1786471563558.jpg',
      '/src/assets/images/travertine_texture_1786471578831.jpg',
      '/src/assets/images/onyx_texture_1786471631015.jpg',
      '/src/assets/images/marble_floor_1786158213406.jpg',
      '/src/assets/images/limestone_facade_1786158222568.jpg',
    ]

    let loadedCount = 0

    const checkDone = () => {
      loadedCount++
      if (loadedCount === imagesToPreload.length) {
        setTimeout(() => setLoading(false), 500) // Small delay to ensure smooth transition
      }
    }

    imagesToPreload.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = checkDone
      img.onerror = checkDone // Continue even if one fails
    })

    // Fallback if images take too long (3 seconds)
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F8F9FA]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div 
              className="h-px w-32 bg-[#1A1D20]"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
            />
            <span className="font-mono2 text-xs uppercase tracking-[0.3em] text-[#1A1D20]">
              Loading
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
