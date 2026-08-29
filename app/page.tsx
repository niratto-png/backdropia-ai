'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('fantasy')
  const [loading, setLoading] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)

  const styles = [
    'Fantasy',
    'Cyberpunk',
    'Sci-Fi',
    'Pixel Art',
    'Anime',
    'Realistic',
  ]

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/generate/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, style }),
      })

      const data = await response.json()
      setGeneratedImage(data.imageUrl)
    } catch (error) {
      alert('Failed to generate image')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Studio-Quality Game Backgrounds
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            AI-powered backgrounds and UI assets. Generated in 30 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
              Try Free for 7 Days
            </button>
            <button className="border border-gray-400 hover:border-white text-white px-8 py-3 rounded-lg font-semibold">
              Watch Demo
            </button>
          </div>
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center text-gray-400">
            [Hero Image or Video]
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Simple, Powerful Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-gray-400 mb-4">Perfect for hobbyists</p>
              <p className="text-4xl font-bold mb-6">$4.99</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mb-6">
                Get Started
              </button>
              <ul className="space-y-2 text-gray-300">
                <li>✓ 30 generations/month</li>
                <li>✓ 5 styles</li>
                <li>✓ Standard resolution</li>
                <li>✓ Web access only</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-blue-500 bg-blue-50 bg-opacity-5">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-gray-400 mb-4">For indie developers</p>
              <p className="text-4xl font-bold mb-6">$14.99</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mb-6">
                Get Started
              </button>
              <ul className="space-y-2 text-gray-300">
                <li>✓ 200 generations/month</li>
                <li>✓ 20 styles</li>
                <li>✓ High resolution</li>
                <li>✓ Commercial license</li>
                <li>✓ Batch generation</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-2">Studio</h3>
              <p className="text-gray-400 mb-4">For small studios</p>
              <p className="text-4xl font-bold mb-6">$49.99</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mb-6">
                Get Started
              </button>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Unlimited generations</li>
                <li>✓ All styles</li>
                <li>✓ Premium resolution</li>
                <li>✓ API access</li>
                <li>✓ Team collaboration</li>
                <li>✓ Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 py-8 text-center text-gray-400">
        <p>&copy; 2024 Backdropia AI. All rights reserved.</p>
      </footer>
    </main>
  )
}
