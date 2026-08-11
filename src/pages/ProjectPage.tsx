import { Link, useParams } from 'react-router'
import { motion } from 'framer-motion'
import { getProject, nextProject } from '@/data/content'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug ?? '')

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="font-display text-4xl font-extrabold uppercase">Project not found</h1>
        <Link to="/works" data-hover className="link-sweep mt-6 font-mono2 text-xs uppercase tracking-[0.3em] text-[#0F172A]">
          ← All works
        </Link>
      </main>
    )
  }

  const next = nextProject(project.slug)

  return (
    <main className="pt-32 md:pt-40">
      <div className="px-6 md:px-10">
        <Link to="/works" data-hover className="link-sweep font-mono2 text-[11px] uppercase tracking-[0.3em] text-[#1A1D20]">
          ← All works
        </Link>

        <motion.h1
          className="mt-8 font-display text-[9vw] font-extrabold uppercase leading-[0.9] tracking-tighter md:text-[7vw]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {project.title}
        </motion.h1>

        <motion.div
          className="mt-10 grid grid-cols-2 gap-8 border-t border-[#1A1D20]/15 pt-8 md:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div>
            <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">Client</p>
            <p className="mt-2 text-sm text-[#1A1D20]">{project.client}</p>
          </div>
          <div>
            <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">Sector</p>
            <p className="mt-2 text-sm text-[#1A1D20]">{project.category}</p>
          </div>
          <div>
            <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">Year</p>
            <p className="mt-2 text-sm text-[#1A1D20]">{project.year}</p>
          </div>
          <div>
            <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20]">Deliverables</p>
            <p className="mt-2 text-sm text-[#1A1D20]">{project.deliverables.join(', ')}</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-14 aspect-[16/9] w-full overflow-hidden"
        initial={{ clipPath: 'inset(8% 4% 8% 4%)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        transition={{ delay: 0.2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
      >
        <img src={project.img} alt={project.title} className="h-full w-full object-cover" />
      </motion.div>

      <div className="grid gap-10 px-6 py-20 md:grid-cols-[1fr_2fr] md:px-10 md:py-28">
        <p className="font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#0F172A]">
          ( The brief )
        </p>
        <div className="max-w-3xl space-y-6">
          {project.description.map((para, i) => (
            <p key={i} className="text-lg leading-relaxed text-[#1A1D20] md:text-xl">
              {para}
            </p>
          ))}
        </div>
      </div>

      <div className="grid gap-6 px-6 pb-24 md:grid-cols-2 md:px-10">
        {project.gallery.map((img, i) => (
          <motion.div
            key={i}
            className="aspect-[3/2] overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={img} alt="" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </motion.div>
        ))}
      </div>

      <Link
        to={`/works/${next.slug}`}
        data-hover
        className="group block border-t border-[#1A1D20]/15 px-6 py-16 md:px-10 md:py-24"
      >
        <p className="font-mono2 text-[11px] uppercase tracking-[0.35em] text-[#1A1D20]">
          Next project
        </p>
        <span className="mt-4 block font-display text-[9vw] font-extrabold uppercase leading-[0.9] tracking-tighter transition-colors duration-500 group-hover:text-[#0F172A] md:text-[6vw]">
          {next.title} →
        </span>
      </Link>
    </main>
  )
}
