import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  return (
    <section id="contact" className="px-6 py-24 md:px-10 md:py-36 border-t border-[#1A1D20]/10 bg-[#F8F9FA]">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 font-display text-[10vw] sm:text-5xl md:text-7xl font-extrabold uppercase leading-[0.85] tracking-tighter text-[#1A1D20]">
          Contact <span className="text-[#0F172A]">Us</span>
        </h2>
        <p className="mb-16 font-mono2 text-xs md:text-sm uppercase tracking-[0.1em] text-[#1A1D20]">
          Tell us about your stone, its condition, and your goals.
        </p>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-none border border-[#0F172A]/30 bg-[#0F172A]/10 p-12 text-center"
          >
            <h3 className="mb-3 font-display text-2xl font-extrabold uppercase tracking-tight text-[#0F172A]">
              Inquiry Received
            </h3>
            <p className="font-mono2 text-xs uppercase tracking-widest text-[#1A1D20]">
              We'll be in touch within 24 hours.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-4">
                <Label htmlFor="name" className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">
                  Name
                </Label>
                <Input
                  id="name"
                  required
                  placeholder="Jane Doe"
                  className="rounded-none border-0 border-b border-[#1A1D20]/20 bg-transparent px-0 py-3 font-sans text-base text-[#1A1D20] placeholder:text-[#1A1D20]/20 focus-visible:border-[#0F172A] focus-visible:ring-0 focus-visible:outline-none"
                />
              </div>
              <div className="space-y-4">
                <Label htmlFor="email" className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="rounded-none border-0 border-b border-[#1A1D20]/20 bg-transparent px-0 py-3 font-sans text-base text-[#1A1D20] placeholder:text-[#1A1D20]/20 focus-visible:border-[#0F172A] focus-visible:ring-0 focus-visible:outline-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="details" className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">
                Project Details
              </Label>
              <Textarea
                id="details"
                required
                placeholder="What surface needs restoration?"
                className="min-h-[140px] resize-none rounded-none border-0 border-b border-[#1A1D20]/20 bg-transparent px-0 py-3 font-sans text-base text-[#1A1D20] placeholder:text-[#1A1D20]/20 focus-visible:border-[#0F172A] focus-visible:ring-0 focus-visible:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              data-hover
              className="group relative inline-flex items-center gap-4 overflow-hidden border border-[#1A1D20]/20 px-8 py-5 font-mono2 text-xs uppercase tracking-[0.2em] text-[#1A1D20] transition-colors hover:border-[#0F172A] disabled:opacity-50"
            >
              <span className="relative z-10 transition-colors group-hover:text-[#F8F9FA]">
                {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
              </span>
              <div className="absolute inset-0 z-0 -translate-x-full bg-[#0F172A] transition-transform duration-500 ease-out group-hover:translate-x-0" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
