import { useEffect } from 'react'
import { useParams, Link } from 'react-router'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { articles } from '@/data/blog'

export default function BlogPage() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!article) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <Helmet>
          <title>Article Not Found | LITHOS</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <div className="text-center">
          <h1 className="mb-4 font-display text-4xl font-bold uppercase">Article Not Found</h1>
          <Link to="/" className="link-sweep font-mono2 text-xs uppercase tracking-widest text-[#1A1D20]">
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-6 py-32 md:px-10 md:py-48"
    >
      <Helmet>
        <title>{`${article.title} | LITHOS Blog`}</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={`${article.title} | LITHOS`} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="mx-auto max-w-3xl">
        <Link 
          to="/"
          className="group inline-flex items-center gap-2 mb-12 font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1A1D20] transition-opacity hover:opacity-70"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        <div className="mb-8 flex items-center gap-4">
          <span className="rounded-full border border-[#1A1D20]/20 px-3 py-1 font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#1A1D20]/60">
            {article.category}
          </span>
        </div>
        
        <h1 className="mb-8 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.85] tracking-tighter">
          {article.title}
        </h1>
        
        <p className="mb-12 font-mono2 text-sm uppercase tracking-widest text-[#1A1D20]/60 leading-relaxed">
          {article.excerpt}
        </p>

        <div className="prose prose-lg max-w-none prose-p:font-sans prose-p:text-base prose-p:leading-relaxed prose-p:text-[#1A1D20]/80 border-t border-[#1A1D20]/10 pt-12">
          <p>{article.content}</p>
        </div>
      </div>
    </motion.div>
  )
}
