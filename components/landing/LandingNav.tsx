'use client'

import { useEffect, useState } from 'react'

export default function LandingNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(15,23,42,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-sky-400 text-white shadow-lg shadow-blue-500/30 transition group-hover:rotate-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 17l5-6 4 4 3-3 6 7" />
              <circle cx="16" cy="7" r="2" />
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">Backdropia</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#gallery" className="transition hover:text-blue-600">Gallery</a>
          <a href="#features" className="transition hover:text-blue-600">Features</a>
          <a href="#pricing" className="transition hover:text-blue-600">Pricing</a>
          <a href="#faq" className="transition hover:text-blue-600">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="/auth" className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-900 sm:block">
            Sign in
          </a>
          <a
            href="/checkout"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/30"
          >
            Get started
          </a>
        </div>
      </nav>
    </header>
  )
}
