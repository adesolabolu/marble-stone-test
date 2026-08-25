import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ArrowUp, Mail, Facebook, Instagram, MessageSquare } from 'lucide-react'

export default function FloatingWidgets() {
  const [show, setShow] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past roughly the viewport height
      setShow(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname !== '/') {
      e.preventDefault()
      navigate('/')
      setTimeout(() => {
        const el = document.querySelector('#contact')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        else window.scrollTo(0, 0)
      }, 450)
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Custom Feedback Banner */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-[60] flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 bg-[#0F172A] px-4 py-3 text-[#F8F9FA] shadow-[0_-4px_20px_rgba(0,0,0,0.2)] text-[10px] md:text-xs font-mono2 uppercase tracking-widest border-t border-white/10"
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex text-center items-center flex-wrap justify-center gap-1 md:gap-2">
              <span className="opacity-70">Custom Demo Concept by aB Labs.</span>
              <span className="hidden md:inline opacity-40">|</span>
              <span className="font-bold">Like this design? Let's launch it!</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="mailto:ablabs.contact.01@gmail.com" 
                data-hover 
                className="flex items-center gap-2 bg-white text-[#0F172A] px-3 py-1.5 rounded-full font-bold hover:bg-gray-200 transition-colors"
              >
                <Mail className="h-3 w-3 md:h-3.5 md:w-3.5" />
                <span>Contact Me</span>
              </a>
              <a href="sms:+13157906716" title="Text Us" data-hover className="text-white hover:text-white/70 transition-colors">
                <MessageSquare className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/peakclipped" target="_blank" rel="noopener noreferrer" title="Facebook" data-hover className="text-white hover:text-white/70 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/ab.labs_/" target="_blank" rel="noopener noreferrer" title="Instagram" data-hover className="text-white hover:text-white/70 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Existing Floating Widgets */}
          <motion.div
            className="fixed bottom-[80px] right-6 z-50 hidden md:flex flex-col items-end gap-4"
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

            {/* Quote CTA */}
            <a
              href="#contact"
              onClick={handleQuoteClick}
              data-umami-event="marble-stone - cta-click"
              data-hover
              className="group flex h-14 items-center gap-3 rounded-full bg-[#1A1D20] px-6 text-[#F8F9FA] shadow-xl transition-all hover:scale-105 hover:bg-[#2A2D30]"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-mono2 text-xs uppercase tracking-[0.1em]">
                Get a Free Quote
              </span>
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
