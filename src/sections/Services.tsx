import { motion } from 'framer-motion'
import { Sparkles, Landmark, FlaskConical, Shield, Droplets } from 'lucide-react'

const services = [
  {
    n: '01',
    name: 'Stone Polishing',
    desc: 'Restoring high-gloss, factory-level shine to dull and scratched marble, granite, and terrazzo floors.',
    tags: ['Diamond Grinding', 'Crystallization', 'Scratch Removal'],
    icon: Sparkles,
  },
  {
    n: '02',
    name: 'Historic Preservation',
    desc: 'Gentle, period-accurate cleaning and repair for heritage masonry, statues, and facades.',
    tags: ['Poultice Cleaning', 'Micro-Abrasion', 'Lime Mortar'],
    icon: Landmark,
  },
  {
    n: '03',
    name: 'Stain & Etch Repair',
    desc: 'Extracting deep-set organic stains and repairing acidic burns on delicate natural stone surfaces.',
    tags: ['Etch Removal', 'Color Matching', 'Epoxy Fills'],
    icon: FlaskConical,
  },
  {
    n: '04',
    name: 'Sealing & Protection',
    desc: 'Applying premium impregnating sealers to protect porous stone from future water and oil-based damage.',
    tags: ['Impregnating Sealers', 'Color Enhancers', 'Anti-Slip Treatments'],
    icon: Shield,
  },
  {
    n: '05',
    name: 'Deep Cleaning & Stain Removal',
    desc: 'Specialized deep cleaning processes to remove tough stains, grime, and buildup from all stone surfaces.',
    tags: ['Steam Cleaning', 'Poultice Application', 'Grime Extraction'],
    icon: Droplets,
  },
]

export default function Services() {
  return (
    <section id="services" className="px-6 pb-28 pt-16 md:px-10 md:pb-40 md:pt-24">
      <div className="mb-8 flex flex-col items-start gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tighter md:text-7xl">
          Services
        </h2>
        <span className="whitespace-nowrap font-mono2 text-[11px] uppercase tracking-[0.3em] text-[#1A1D20]">
          ( What we do )
        </span>
      </div>

      <div className="border-t border-[#1A1D20]/15">
        {services.map((s, i) => (
          <motion.div
            key={s.n}
            data-hover
            className="group relative overflow-hidden border-b border-[#1A1D20]/15"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* hover fill */}
            <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#1A1D20] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
            
            <div className="relative grid gap-4 py-8 transition-colors duration-500 group-hover:text-[#F8F9FA] md:grid-cols-[4rem_1fr_1.2fr] md:items-center md:gap-8 md:py-12">
              <span className="font-mono2 text-[11px] tracking-[0.2em] text-[#1A1D20] transition-colors duration-500 group-hover:text-[#F8F9FA]">
                ({s.n})
              </span>
              
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1A1D20]/20 bg-transparent transition-colors duration-500 group-hover:border-[#F8F9FA]/30">
                  <s.icon className="h-5 w-5 text-[#1A1D20] transition-colors duration-500 group-hover:text-[#F8F9FA]" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight md:text-4xl lg:text-5xl">
                  {s.name}
                </h3>
              </div>
              
              <div>
                <p className="max-w-md text-sm leading-relaxed text-[#1A1D20] transition-colors duration-500 group-hover:text-[#F8F9FA]/70">
                  {s.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-[#1A1D20]/20 px-3 py-1 font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#1A1D20] transition-colors duration-500 group-hover:border-[#F8F9FA]/30 group-hover:text-[#F8F9FA]/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
