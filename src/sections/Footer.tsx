import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1D20]/10 px-6 pb-8 pt-24 md:px-10 md:pt-36">
      <p className="mb-8 font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#0F172A]">
        ( Got a project? )
      </p>

      <motion.a
        href="mailto:hello@lithos.stone"
        data-hover
        className="group block select-none"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="font-display text-[14vw] font-extrabold uppercase leading-[0.85] tracking-tighter transition-colors duration-500 group-hover:text-[#0F172A] md:text-[11vw]">
          Let's
        </span>
        <span className="block font-display text-[14vw] font-extrabold uppercase leading-[0.85] tracking-tighter text-[#0F172A] transition-colors duration-500 group-hover:text-[#1A1D20] md:text-[11vw]">
          Restore ↗
        </span>
      </motion.a>

      <div className="mt-20 grid gap-10 border-t border-[#1A1D20]/10 pt-10 md:grid-cols-4">
        <div>
          <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">New York</p>
          <p className="mt-2 text-sm text-[#1A1D20]">120 Marble Way<br />New York, NY 10012</p>
        </div>
        <div>
          <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">London</p>
          <p className="mt-2 text-sm text-[#1A1D20]">45 Artisan Close<br />London, W1D 4EB</p>
        </div>
        <div>
          <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">Contact</p>
          <a href="mailto:hello@lithos.stone" data-hover className="link-sweep mt-2 inline-block text-sm text-[#1A1D20]">
            hello@lithos.stone
          </a>
        </div>
        <div>
          <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">Socials</p>
          <div className="mt-2 flex gap-4 text-sm text-[#1A1D20]">
            {['IG', 'LI', 'PIN', 'FB'].map((s) => (
              <a key={s} href="#contact" onClick={(e) => e.preventDefault()} data-hover className="link-sweep">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-between font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">
        <span>© 2026 LITHOS® Stone</span>
        <a
          href="#top"
          data-hover
          className="link-sweep"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
