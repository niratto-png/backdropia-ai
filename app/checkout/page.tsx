'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/js'
import Navbar from '@/components/Navbar'

export default function Checkout() {
  const [loading, setLoading] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro' | 'studio'>('pro')

  const plans = {
    starter: { name: 'Starter', price: 499, priceId: 'price_starter' },
    pro: { name: 'Pro', price: 1499, priceId: 'price_pro' },
    studio: { name: 'Studio', price: 4999, priceId: 'price_studio' },
  }

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: plans[selectedPlan].priceId }),
      })

      const { sessionId } = await response.json()
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)
      await stripe?.redirectToCheckout({ sessionId })
    } catch (error) {
      alert('決済処理に失敗しました')
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <section className="bg-gray-900 min-h-screen py-20">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">
            7日間無料トライアル開始
          </h1>

          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">プラン選択</h2>

            <div className="space-y-4 mb-8">
              {Object.entries(plans).map(([key, plan]) => (
                <div
                  key={key}
                  onClick={() => setSelectedPlan(key as 'starter' | 'pro' | 'studio')}
                  className={`p-6 rounded-lg cursor-pointer border-2 transition ${
                    selectedPlan === key
                      ? 'border-blue-500 bg-blue-950'
                      : 'border-gray-700 bg-gray-750 hover:border-gray-600'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      <p className="text-gray-400">${(plan.price / 100).toFixed(2)}/月</p>
                    </div>
                    <div className={`w-6 h-6 rounded border-2 ${selectedPlan === key ? 'bg-blue-500 border-blue-500' : 'border-gray-500'}`} />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-3 rounded-lg font-semibold transition"
            >
              {loading ? '処理中...' : 'トライアルを開始'}
            </button>

            <p className="text-center text-gray-400 mt-4 text-sm">
              7日後に自動更新されます。いつでもキャンセル可能です。
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
