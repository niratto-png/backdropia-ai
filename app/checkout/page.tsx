'use client'

import { useState } from 'react'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$4.99/月',
    priceId: 'price_1UKmCHRqec4CQoM9caOdX1v5',
    description: 'For hobbyists',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$14.99/月',
    priceId: 'price_1UKmCtRqec4CQoM91eAuyuy1',
    description: 'For indie developers',
  },
  {
    id: 'studio',
    name: 'Studio',
    price: '$49.99/月',
    priceId: 'price_1UKmDoRqec4CQoM9zmYFhXkj',
    description: 'For small studios',
  },
]

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1].priceId)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

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
      setError('決済ページへの移動に失敗しました。時間をおいて再度お試しください。')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">プランを選択</h1>

        <div className="space-y-4">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.priceId
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => setSelectedPlan(plan.priceId)}
                className={`w-full text-left p-6 rounded-lg border transition ${
                  isSelected
                    ? 'border-blue-500 bg-blue-950'
                    : 'border-gray-700 bg-gray-800 hover:border-gray-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-semibold">{plan.name}</p>
                    <p className="text-sm text-gray-400">{plan.description}</p>
                    <p className="mt-2 text-lg">{plan.price}</p>
                  </div>
                  <input
                    type="radio"
                    readOnly
                    checked={isSelected}
                    className="h-5 w-5 accent-blue-500"
                  />
                </div>
              </button>
            )
          })}
        </div>

        <button
          type="button"
          onClick={handleCheckout}
          disabled={loading}
          className="mt-8 w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? '移動中...' : 'トライアルを開始'}
        </button>

        {error && <p className="mt-4 text-red-400 text-center text-sm">{error}</p>}

        <p className="mt-4 text-center text-sm text-gray-400">
          7日後に自動更新されます。いつでもキャンセル可能です。
        </p>
      </div>
    </main>
  )
}
