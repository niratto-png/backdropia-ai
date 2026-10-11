'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import LandingNav from '@/components/landing/LandingNav'

const perks = [
  'Backgrounds in about 30 seconds',
  'Keep every style consistent across your game',
  'Commercial license on Pro and Studio',
]

export default function AuthPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleAuth = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // TODO: Supabase auth integration (not connected yet).
      // For now this only waits briefly and goes to the dashboard.
      await new Promise((resolve) => setTimeout(resolve, 800))
      router.push('/dashboard')
    } catch {
      setError('Authentication failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15'

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <LandingNav />

      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-300/40 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 -right-40 h-[460px] w-[460px] rounded-full bg-sky-300/40 blur-3xl animate-float-slow" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pt-28 pb-16 lg:grid-cols-2">
        {/* left: brand panel */}
        <section className="hidden lg:block">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-12 text-white shadow-2xl shadow-blue-600/30 animate-grad-shift bg-[length:200%_200%]">
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/20 blur-3xl animate-float" />
            <p className="relative text-sm font-semibold uppercase tracking-widest text-blue-100">Backdropia AI</p>
            <h2 className="relative mt-4 text-5xl font-bold leading-tight tracking-tight">
              Make your next world
            </h2>
            <ul className="relative mt-10 space-y-4">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-blue-50">
                  <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-white/20">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5 9-10" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* right: form */}
        <section className="mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-white bg-white p-8 shadow-2xl shadow-slate-900/10 md:p-10">
            <h1 className="text-3xl font-bold tracking-tight">{isSignUp ? 'Create account' : 'Welcome back'}</h1>
            <p className="mt-2 text-slate-500">
              {isSignUp ? 'Start generating backgrounds today.' : 'Sign in to continue to Backdropia.'}
            </p>

            {error && (
              <div className="mt-6 rounded-xl bg-red-50 p-3 text-sm text-red-700 ring-1 ring-red-200">{error}</div>
            )}

            <form onSubmit={handleAuth} className="mt-8 space-y-5">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={inputClass}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full overflow-hidden rounded-full bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
                <span className="relative">
                  {loading ? 'Loading...' : isSignUp ? 'Create account' : 'Sign in'}
                </span>
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-semibold text-blue-600 transition hover:text-blue-800"
              >
                {isSignUp ? 'Sign in' : 'Sign up'}
              </button>
            </p>
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">🎨 Backdropia AI · Studio-Quality Game Backgrounds</p>
        </section>
      </div>
    </main>
  )
}
