import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, MessageSquare, X, Send, Sparkles, Phone, CheckCircle2, Calculator } from 'lucide-react'

export default function FloatingActions() {
  const [show, setShow] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [selectedStone, setSelectedStone] = useState('Marble')
  const [selectedService, setSelectedService] = useState('Honing & Polishing')
  const [sqft, setSqft] = useState('200-500')
  const [submitted, setSubmitted] = useState(false)
  const [clientName, setClientName] = useState('')
  const [clientContact, setClientContact] = useState('')
  const [notes, setNotes] = useState('')

  useEffect(() => {
    const checkScroll = () => {
      // Show after scrolling past hero (~450px)
      if (window.scrollY > 450) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true })
    checkScroll()

    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Simple estimate calculation
  const getEstimate = () => {
    let base = 350
    if (selectedStone === 'Terrazzo') base += 100
    if (selectedStone === 'Onyx') base += 200
    if (selectedService === 'Restoration & Repair') base += 150
    if (sqft === '500-1000') base *= 1.8
    if (sqft === '1000+') base *= 2.8
    return {
      min: Math.round(base),
      max: Math.round(base * 1.35)
    }
  }

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      // reset form after delay if needed
    }, 4000)
  }

  const estimate = getEstimate()

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
          >
            {/* Scroll to top button */}
            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Scroll to top"
              data-hover
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1A1D20] text-[#F8F9FA] shadow-xl transition-colors hover:bg-black"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>

            {/* Floating Get a Free Quote CTA */}
            <motion.button
              type="button"
              onClick={() => {
                setOpenModal(true)
                setSubmitted(false)
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              data-hover
              className="group relative flex items-center gap-2.5 rounded-full bg-[#0F172A] px-5 py-3 text-[#F8F9FA] shadow-2xl transition-all duration-300 hover:bg-black hover:shadow-black/25"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <MessageSquare className="h-4 w-4 text-emerald-400 transition-transform group-hover:scale-110" />
              <span className="font-mono2 text-xs font-bold uppercase tracking-wider">
                Get a Free Quote
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Direct Quote Chat / Request Modal */}
      <AnimatePresence>
        {openModal && (
          <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#F8F9FA] p-6 shadow-2xl text-[#1A1D20] border border-[#1A1D20]/10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1D20]/5 text-[#1A1D20] transition-colors hover:bg-[#1A1D20]/10"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header */}
              <div className="mb-5 pr-8">
                <div className="mb-2 flex items-center gap-2 text-emerald-600 font-mono2 text-[10px] uppercase tracking-[0.25em]">
                  <Sparkles className="h-3.5 w-3.5" /> Direct Client Quote Chat
                </div>
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-[#1A1D20]">
                  Get an Instant <span className="text-[#0F172A]">Estimate</span>
                </h3>
                <p className="mt-1 font-sans text-xs text-[#1A1D20]/70">
                  Select your project parameters below to get an instant range estimate or send a direct request.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="my-8 flex flex-col items-center justify-center text-center"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="font-display text-xl font-bold uppercase tracking-tight text-[#1A1D20]">
                    Quote Request Received!
                  </h4>
                  <p className="mt-2 max-w-xs font-sans text-xs leading-relaxed text-[#1A1D20]/80">
                    Thank you, <span className="font-semibold">{clientName || 'valued client'}</span>. Our master stone technician will analyze your specs and reach out shortly at{' '}
                    <span className="font-semibold">{clientContact}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpenModal(false)}
                    className="mt-6 rounded-full bg-[#0F172A] px-6 py-2.5 font-mono2 text-xs uppercase tracking-widest text-[#F8F9FA] transition-colors hover:bg-black"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSendQuote} className="space-y-4">
                  {/* Stone type selector */}
                  <div>
                    <label className="mb-1.5 block font-mono2 text-[10px] uppercase tracking-wider text-[#1A1D20]/80 font-bold">
                      1. Select Stone Type
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {['Marble', 'Limestone', 'Travertine', 'Terrazzo', 'Granite', 'Onyx'].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSelectedStone(s)}
                          className={`rounded-full px-3 py-1.5 font-mono2 text-[11px] uppercase transition-all ${
                            selectedStone === s
                              ? 'bg-[#0F172A] text-white shadow-sm'
                              : 'bg-[#1A1D20]/5 text-[#1A1D20] hover:bg-[#1A1D20]/10'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service type selector */}
                  <div>
                    <label className="mb-1.5 block font-mono2 text-[10px] uppercase tracking-wider text-[#1A1D20]/80 font-bold">
                      2. Service Needed
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {['Honing & Polishing', 'Stain & Etch Repair', 'Deep Sealing', 'Restoration & Repair'].map((serv) => (
                        <button
                          key={serv}
                          type="button"
                          onClick={() => setSelectedService(serv)}
                          className={`rounded-full px-3 py-1.5 font-mono2 text-[11px] uppercase transition-all ${
                            selectedService === serv
                              ? 'bg-[#0F172A] text-white shadow-sm'
                              : 'bg-[#1A1D20]/5 text-[#1A1D20] hover:bg-[#1A1D20]/10'
                          }`}
                        >
                          {serv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Area sq ft */}
                  <div>
                    <label className="mb-1.5 block font-mono2 text-[10px] uppercase tracking-wider text-[#1A1D20]/80 font-bold">
                      3. Approximate Area (Sq. Ft.)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['< 200', '200-500', '500-1000', '1000+'].map((sz) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => setSqft(sz)}
                          className={`rounded-lg py-1.5 text-center font-mono2 text-[11px] uppercase transition-all ${
                            sqft === sz
                              ? 'bg-[#0F172A] text-white'
                              : 'bg-[#1A1D20]/5 text-[#1A1D20] hover:bg-[#1A1D20]/10'
                          }`}
                        >
                          {sz} sq ft
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Live Estimate Box */}
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-800">
                      <Calculator className="h-4 w-4 text-emerald-600" />
                      <span className="font-mono2 text-[11px] uppercase tracking-wider font-semibold">
                        Est. Cost Range:
                      </span>
                    </div>
                    <div className="font-mono2 text-base font-bold text-emerald-700">
                      ${estimate.min} — ${estimate.max}
                    </div>
                  </div>

                  {/* Contact details */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block font-mono2 text-[10px] uppercase tracking-wider text-[#1A1D20]/70">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full rounded-lg border border-[#1A1D20]/20 bg-white px-3 py-2 text-xs focus:border-[#0F172A] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block font-mono2 text-[10px] uppercase tracking-wider text-[#1A1D20]/70">
                        Phone or Email *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="client@example.com"
                        value={clientContact}
                        onChange={(e) => setClientContact(e.target.value)}
                        className="w-full rounded-lg border border-[#1A1D20]/20 bg-white px-3 py-2 text-xs focus:border-[#0F172A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block font-mono2 text-[10px] uppercase tracking-wider text-[#1A1D20]/70">
                      Project Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Living room marble floor has etches near entry..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full rounded-lg border border-[#1A1D20]/20 bg-white px-3 py-2 text-xs focus:border-[#0F172A] focus:outline-none"
                    />
                  </div>

                  {/* Submit Button & Direct Call/WhatsApp */}
                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0F172A] py-3 font-mono2 text-xs uppercase tracking-widest text-[#F8F9FA] transition-colors hover:bg-black"
                    >
                      <Send className="h-3.5 w-3.5" /> Submit Direct Quote Request
                    </button>
                    <div className="flex items-center justify-center gap-4 pt-1 font-mono2 text-[10px] text-[#1A1D20]/70 uppercase tracking-wider">
                      <span>Or Call Direct:</span>
                      <a href="tel:+15551234567" className="flex items-center gap-1 font-bold text-[#0F172A] hover:underline">
                        <Phone className="h-3 w-3" /> +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
