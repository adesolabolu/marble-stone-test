import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    serviceArea: '',
    details: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.inquiryType) newErrors.inquiryType = 'Inquiry type is required'
    if (!formData.serviceArea.trim()) newErrors.serviceArea = 'Service area is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
    if (errors[e.target.id]) {
      setErrors(prev => ({ ...prev, [e.target.id]: '' }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) {
      toast.error('Please fix the errors in the form')
      return
    }

    setStatus('submitting')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      toast.success('Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        serviceArea: '',
        details: ''
      })
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
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Doe"
                  className={`rounded-none border-0 border-b bg-transparent px-0 py-3 font-sans text-base placeholder:text-[#1A1D20]/20 focus-visible:ring-0 focus-visible:outline-none ${errors.name ? 'border-red-500 focus-visible:border-red-500 text-red-500' : 'border-[#1A1D20]/20 text-[#1A1D20] focus-visible:border-[#0F172A]'}`}
                />
                {errors.name && <p className="text-red-500 text-[10px] uppercase font-mono2 tracking-widest">{errors.name}</p>}
              </div>
              <div className="space-y-4">
                <Label htmlFor="email" className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@example.com"
                  className={`rounded-none border-0 border-b bg-transparent px-0 py-3 font-sans text-base placeholder:text-[#1A1D20]/20 focus-visible:ring-0 focus-visible:outline-none ${errors.email ? 'border-red-500 focus-visible:border-red-500 text-red-500' : 'border-[#1A1D20]/20 text-[#1A1D20] focus-visible:border-[#0F172A]'}`}
                />
                {errors.email && <p className="text-red-500 text-[10px] uppercase font-mono2 tracking-widest">{errors.email}</p>}
              </div>
              <div className="space-y-4">
                <Label htmlFor="phone" className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
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
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-none border-0 border-b bg-transparent px-0 py-3 font-sans text-base focus-visible:ring-0 focus-visible:outline-none ${errors.inquiryType ? 'border-red-500 focus-visible:border-red-500 text-red-500' : 'border-[#1A1D20]/20 text-[#1A1D20] focus-visible:border-[#0F172A]'}`}
                >
                  <option value="" disabled>Select an inquiry type...</option>
                  <option value="restoration">Restoration</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="cleaning">Deep Cleaning & Stain Removal</option>
                  <option value="quote">General Quote</option>
                </select>
                {errors.inquiryType && <p className="text-red-500 text-[10px] uppercase font-mono2 tracking-widest">{errors.inquiryType}</p>}
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

            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-4">
                <Label htmlFor="serviceArea" className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">
                  Service Area / Zip Code
                </Label>
                <Input
                  id="serviceArea"
                  value={formData.serviceArea}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 10012 or Manhattan"
                  className={`rounded-none border-0 border-b bg-transparent px-0 py-3 font-sans text-base placeholder:text-[#1A1D20]/20 focus-visible:ring-0 focus-visible:outline-none ${errors.serviceArea ? 'border-red-500 focus-visible:border-red-500 text-red-500' : 'border-[#1A1D20]/20 text-[#1A1D20] focus-visible:border-[#0F172A]'}`}
                />
                {errors.serviceArea && <p className="text-red-500 text-[10px] uppercase font-mono2 tracking-widest">{errors.serviceArea}</p>}
              </div>
              <div className="space-y-4">
                <Label htmlFor="photos" className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">
                  Upload Photos/Video of Damage
                </Label>
                <Input
                  id="photos"
                  type="file"
                  accept="image/*,video/*"
                  multiple
                  className="rounded-none border-0 border-b border-[#1A1D20]/20 bg-transparent px-0 py-2.5 font-sans text-sm text-[#1A1D20] file:mr-4 file:border-0 file:bg-[#1A1D20]/5 file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-wider file:text-[#1A1D20] hover:file:bg-[#1A1D20]/10 focus-visible:border-[#0F172A] focus-visible:ring-0 focus-visible:outline-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="details" className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">
                Project Details (Optional)
              </Label>
              <Textarea
                id="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Tell us a little bit more about your project..."
                className="min-h-[120px] resize-none rounded-none border-0 border-b border-[#1A1D20]/20 bg-transparent px-0 py-3 font-sans text-base text-[#1A1D20] placeholder:text-[#1A1D20]/20 focus-visible:border-[#0F172A] focus-visible:ring-0 focus-visible:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              data-umami-event="marble-stone - contact-form-submit"
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
