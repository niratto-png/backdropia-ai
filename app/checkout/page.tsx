'use client'

import { useState } from 'react'
import LandingNav from '@/components/landing/LandingNav'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$4.99',
    priceId: 'price_1UKmCHRqec4CQoM9caOdX1v5',
    description: 'For hobbyists',
    features: ['30 generations/month', '5 styles', 'Standard resolution', 'Web access only'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$14.99',
    priceId: 'price_1UKmCtRqec4CQoM91eAuyuy1',
    description: 'For indie developers',
    features: ['200 generations/month', '20 styles', 'High resolution', 'Commercial license', 'Batch generation'],
    popular: true,
  },
  {
    id: 'studio',
    name: 'Studio',
    price: '$49.99',
    priceId: 'price_1UKmDoRqec4CQoM9zmYFhXkj',
    description: 'For small studios',
    features: ['Unlimited generations', 'All styles', 'Premium resolution', 'API access', 'Team collaboration', 'Priority support'],
  },
]

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1].priceId)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const current = plans.find((p) => p.priceId === selectedPlan) ?? plans[1]

  const handleCheckout = async () => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: selectedPlan }),
      })

      const data = await res.json()

      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Checkout failed')
      }

      window.location.href = data.url
    } catch (err) {
      console.error(err)
      setError('Could not open the checkout page. Please try again later.')
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <LandingNav />

      <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-blue-300/40 blur-3xl animate-float" />
      <div className="pointer-events-none absolute top-40 -right-32 h-[420px] w-[420px] rounded-full bg-sky-300/40 blur-3xl animate-float-slow" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pt-32 pb-24 lg:grid-cols-5">
        {/* plans */}
        <section className="lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Checkout</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Choose a plan</h1>
          <p className="mt-3 text-slate-600">You can change or cancel your plan anytime.</p>

          <div className="mt-10 space-y-4">
            {plans.map((plan) => {
              const isSelected = selectedPlan === plan.priceId
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlan(plan.priceId)}
                  className={`group relative w-full overflow-hidden rounded-2xl border p-6 text-left transition duration-300 ${
                    isSelected
                      ? 'border-blue-500 bg-white shadow-xl shadow-blue-600/15 ring-4 ring-blue-500/10'
                      : 'border-slate-200 bg-white/70 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-slate-900/5'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 px-3 py-1 text-xs font-semibold text-white shadow">
                      Most popular
                    </span>
                  )}
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xl font-bold">{plan.name}</p>
                      <p className="text-sm text-slate-500">{plan.description}</p>
                      <p className="mt-3 text-3xl font-bold tracking-tight">
                        {plan.price}
                        <span className="text-sm font-normal text-slate-500"> /mo</span>
                      </p>
                    </div>
                    <span
                      className={`mt-1 grid h-6 w-6 flex-none place-items-center rounded-full border-2 transition ${
                        isSelected ? 'border-blue-600 bg-blue-600' : 'border-slate-300 group-hover:border-blue-400'
                      }`}
                    >
                      {isSelected && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5 9-10" />
                        </svg>
                      )}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </section>

        {/* summary */}
        <aside className="lg:col-span-2">
          <div className="sticky top-28 overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-2xl shadow-blue-600/20">
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-blue-500/30 blur-3xl animate-float" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">Order summary</p>
              <div className="mt-4 flex items-end justify-between">
                <p className="text-2xl font-bold">{current.name}</p>
                <p className="text-2xl font-bold">
                  {current.price}
                  <span className="text-sm font-normal text-slate-400"> /mo</span>
                </p>
              </div>

              <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm text-slate-300">
                {current.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-blue-500/20 text-sky-300">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5 9-10" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={handleCheckout}
                disabled={loading}
                className="group relative mt-8 w-full overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-sky-400 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
                <span className="relative">{loading ? 'Redirecting...' : 'Start subscription'}</span>
              </button>

              {error && (
                <p className="mt-4 rounded-xl bg-red-500/15 p-3 text-center text-sm text-red-200 ring-1 ring-red-400/30">
                  {error}
                </p>
              )}

              <p className="mt-6 text-center text-xs leading-relaxed text-slate-400">
                Billed monthly. Cancel anytime.
                <br />
                Payment is handled on Stripe's secure checkout page.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
