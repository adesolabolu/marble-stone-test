import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

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
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 font-display text-[10vw] sm:text-5xl md:text-7xl font-extrabold uppercase leading-[0.85] tracking-tighter text-[#1A1D20]">
          Contact <span className="text-[#0F172A]">Us</span>
        </h2>
        <p className="mb-16 font-mono2 text-xs md:text-sm uppercase tracking-[0.1em] text-[#1A1D20]">
          Tell us about your stone, its condition, and your goals.
        </p>

        <div className="grid gap-16 lg:grid-cols-[1fr_350px] lg:gap-20">
          {/* Left Column - Form */}
          <div>
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
                  <div className="space-y-4">
                    <Label htmlFor="phone" className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="rounded-none border-0 border-b border-[#1A1D20]/20 bg-transparent px-0 py-3 font-sans text-base text-[#1A1D20] placeholder:text-[#1A1D20]/20 focus-visible:border-[#0F172A] focus-visible:ring-0 focus-visible:outline-none"
                    />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="inquiryType" className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">
                      Inquiry Type
                    </Label>
                    <select
                      id="inquiryType"
                      required
                      defaultValue=""
                      className="w-full rounded-none border-0 border-b border-[#1A1D20]/20 bg-transparent px-0 py-3 font-sans text-base text-[#1A1D20] focus-visible:border-[#0F172A] focus-visible:ring-0 focus-visible:outline-none"
                    >
                      <option value="" disabled>Select an inquiry type...</option>
                      <option value="restoration">Restoration</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="cleaning">Deep Cleaning & Stain Removal</option>
                      <option value="quote">General Quote</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">
                    Surface Type (Select all that apply)
                  </Label>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 pt-2">
                    {['Marble', 'Granite', 'Terrazzo', 'Limestone', 'Travertine', 'Onyx'].map((surface) => (
                      <label key={surface} className="flex items-center gap-3 cursor-pointer">
                        <input 
                          type="checkbox" 
                          value={surface}
                          className="peer size-4 appearance-none border border-[#1A1D20]/30 rounded-sm checked:bg-[#0F172A] checked:border-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0F172A]/20 transition-all"
                        />
                        <span className="font-sans text-sm text-[#1A1D20] peer-checked:font-semibold">
                          {surface}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="details" className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">
                    Project Details (Optional)
                  </Label>
                  <Textarea
                    id="details"
                    placeholder="Tell us a little bit more about your project..."
                    className="min-h-[120px] resize-none rounded-none border-0 border-b border-[#1A1D20]/20 bg-transparent px-0 py-3 font-sans text-base text-[#1A1D20] placeholder:text-[#1A1D20]/20 focus-visible:border-[#0F172A] focus-visible:ring-0 focus-visible:outline-none"
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

          {/* Right Column - Info */}
          <div className="flex flex-col gap-12 border-t border-[#1A1D20]/10 pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
            <div>
              <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20] mb-6">
                Reach Out
              </p>
              <div className="flex flex-col gap-5">
                <a href="mailto:hello@lithos.stone" className="group flex items-center gap-4 text-sm text-[#1A1D20]">
                  <Mail className="h-5 w-5 opacity-60 transition-opacity group-hover:opacity-100" />
                  <span className="link-sweep font-medium">hello@lithos.stone</span>
                </a>
                <a href="tel:+15551234567" className="group flex items-center gap-4 text-sm text-[#1A1D20]">
                  <Phone className="h-5 w-5 opacity-60 transition-opacity group-hover:opacity-100" />
                  <span className="link-sweep font-medium">(555) 123-4567</span>
                </a>
              </div>
            </div>

            <div>
              <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20] mb-6">
                Our Locations
              </p>
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4 text-sm text-[#1A1D20]">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 opacity-60" />
                  <div>
                    <p className="font-bold">New York Studio</p>
                    <p className="mt-1 opacity-80 leading-relaxed">120 Marble Way<br/>New York, NY 10012</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-sm text-[#1A1D20]">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 opacity-60" />
                  <div>
                    <p className="font-bold">London Studio</p>
                    <p className="mt-1 opacity-80 leading-relaxed">45 Artisan Close<br/>London, W1D 4EB</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20] mb-6">
                Socials
              </p>
              <div className="flex items-center gap-5 text-[#1A1D20]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  data-hover
                  className="transition-transform duration-300 hover:scale-110 hover:text-[#0F172A]"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  data-hover
                  className="transition-transform duration-300 hover:scale-110 hover:text-[#0F172A]"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
