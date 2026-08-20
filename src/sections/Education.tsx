import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { articles } from '@/data/blog'

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 md:px-10 md:py-36 bg-[#1A1D20] text-[#F8F9FA]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="mb-4 font-display text-[10vw] sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.85] tracking-tighter">
              Care &amp; <span className="text-white/40">Maintenance</span> Hub
            </h2>
            <p className="font-mono2 text-xs md:text-sm uppercase tracking-[0.1em] text-white/70">
              Protect your investment. Learn from the experts.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article, idx) => (
            <Link
              key={idx}
              to={`/blog/${article.slug}`}
              className="group relative block aspect-square bg-white/5 p-8 transition-colors hover:bg-white/10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex h-full flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <span className="rounded-full border border-white/20 px-3 py-1 font-mono2 text-[10px] uppercase tracking-[0.2em] text-white/60">
                    {article.category}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/40 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                </div>
                
                <div>
                  <h3 className="mb-4 font-display text-2xl font-bold uppercase tracking-tight leading-tight md:text-3xl">
                    {article.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed transition-colors group-hover:text-white/80">
                    {article.excerpt}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
