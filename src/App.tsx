import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Lenis from 'lenis'
import { Toaster } from 'sonner'
import ProgressBar from '@/components/ProgressBar'
import Cursor from '@/sections/Cursor'
import Nav from '@/sections/Nav'
import Hero from '@/sections/Hero'
import Marquee from '@/sections/Marquee'
import SplitScroll from '@/sections/SplitScroll'
import Services from '@/sections/Services'
import Surfaces from '@/sections/Surfaces'
import FAQ from '@/sections/FAQ'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'
import Process from '@/sections/Process'
import Education from '@/sections/Education'
import WorksPage from '@/pages/WorksPage'
import ProjectPage from '@/pages/ProjectPage'
import BlogPage from '@/pages/BlogPage'

import TestimonialsSection from '@/components/ui/testimonial-v2'
import FloatingWidgets from '@/components/FloatingWidgets'

function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <SplitScroll />
      <Services />
      <Process />
      <Surfaces />
      <TestimonialsSection />
      <Education />
      <FAQ />
      <Contact />
    </main>
  )
}

export default function App() {
  const lenisRef = useRef<Lenis | null>(null)
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 })
    lenisRef.current = lenis
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    // anchor navigation through lenis
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el as HTMLElement)
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      document.removeEventListener('click', onClick)
    }
  }, [])

  // reset scroll on route change
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="grain relative min-h-screen bg-[#F8F9FA] text-[#1A1D20]">
      <ProgressBar />
      <Toaster position="bottom-right" toastOptions={{ className: 'rounded-none border border-[#0F172A]/20 bg-[#F8F9FA] text-[#1A1D20] font-mono2 uppercase tracking-widest text-xs' }} />
      <Cursor />
      <FloatingWidgets />
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/works/:slug" element={<ProjectPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}
