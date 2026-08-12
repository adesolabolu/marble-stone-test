import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ArrowUp } from 'lucide-react'

export default function FloatingWidgets() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past roughly the viewport height
      setShow(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col items-end gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Scroll to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            data-hover
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1A1D20] text-[#F8F9FA] shadow-lg transition-transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>

          {/* Chat CTA */}
          <a
            href="mailto:hello@lithos.stone?subject=Free%20Quote%20Request"
            data-hover
            className="group flex h-14 items-center gap-3 rounded-full bg-[#0F172A] px-6 text-[#F8F9FA] shadow-xl transition-all hover:scale-105 hover:bg-[#1A1D20]"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-mono2 text-xs uppercase tracking-[0.1em]">
              Get a Free Quote
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
