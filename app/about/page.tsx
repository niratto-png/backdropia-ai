'use client'
import Navbar from '@/components/Navbar'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold mb-6">About Backdropia AI</h1>
          <p className="text-xl text-gray-300 mb-8">
            AI-powered game background generation for modern game developers
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Backdropia AI is revolutionizing game asset creation by using artificial intelligence to generate studio-quality backgrounds in seconds.
          </p>
          <h2 className="text-3xl font-bold mb-6 mt-12">Why Choose Us?</h2>
          <ul className="text-lg text-gray-300 space-y-4">
            <li>⚡ Generate backgrounds in 30 seconds</li>
            <li>🎨 Multiple art styles (Fantasy, Cyberpunk, Sci-Fi, etc.)</li>
            <li>💼 Commercial license included</li>
            <li>📦 High resolution (1920x1080)</li>
            <li>🔧 API access for Pro/Studio plans</li>
          </ul>
        </div>
      </div>
    </>
  )
}
