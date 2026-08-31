'use client'
import Navbar from '@/components/Navbar'

export default function FeaturesPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">Powerful Features</h1>
          <p className="text-xl text-gray-300">Everything you need to create amazing game backgrounds</p>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: '🎨',
                title: 'Multiple Art Styles',
                description: 'Fantasy, Cyberpunk, Sci-Fi, Pixel Art, Anime, Realistic, and more. Mix and match to create your unique aesthetic.',
              },
              {
                icon: '⚡',
                title: 'Lightning-Fast Generation',
                description: 'Generate professional backgrounds in 30 seconds. No more waiting weeks for custom art.',
              },
              {
                icon: '🎯',
                title: 'Detailed Prompts',
                description: 'Describe exactly what you want. Advanced AI understands complex scene descriptions.',
              },
              {
                icon: '📦',
                title: 'High Resolution Output',
                description: '1920x1080 resolution perfect for modern games. Ready to use immediately.',
              },
              {
                icon: '💼',
                title: 'Commercial License',
                description: 'All assets are yours to use commercially. No royalties, no restrictions.',
              },
              {
                icon: '🔧',
                title: 'API Access',
                description: 'Integrate Backdropia directly into your game development pipeline (Pro/Studio).',
              },
              {
                icon: '📊',
                title: 'Batch Generation',
                description: 'Create multiple backgrounds at once. Perfect for large game projects.',
              },
              {
                icon: '♻️',
                title: 'Unlimited Regeneration',
                description: 'Regenerate as many times as you need until you get the perfect result.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Styles Section */}
        <div className="max-w-6xl mx-auto px-4 py-12 mt-8">
          <h2 className="text-3xl font-bold text-white mb-8">Available Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Fantasy', emoji: '🏰' },
              { name: 'Cyberpunk', emoji: '🌃' },
              { name: 'Sci-Fi', emoji: '🚀' },
              { name: 'Pixel Art', emoji: '📦' },
              { name: 'Anime', emoji: '🎌' },
              { name: 'Realistic', emoji: '📸' },
            ].map((style, idx) => (
              <div key={idx} className="bg-gray-800 p-8 rounded-lg text-center border border-gray-700">
                <div className="text-5xl mb-4">{style.emoji}</div>
                <h3 className="text-xl font-semibold text-white">{style.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="max-w-6xl mx-auto px-4 py-12 mt-8">
          <h2 className="text-3xl font-bold text-white mb-8">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Indie Game Developers',
                description: 'Create professional backgrounds without hiring an artist. Focus on gameplay.',
              },
              {
                title: 'Game Studios',
                description: 'Speed up production pipelines. Generate variants and alternatives in seconds.',
              },
              {
                title: 'Mobile Games',
                description: 'Quick iterations for mobile game development. Test designs rapidly.',
              },
              {
                title: 'Jam Games',
                description: 'Game jams move fast. Generate assets on the fly without art bottlenecks.',
              },
            ].map((useCase, idx) => (
              <div key={idx} className="bg-blue-900 bg-opacity-30 p-8 rounded-lg border border-blue-500 border-opacity-50">
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto px-4 py-12 mt-8 mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Experience the Power</h2>
            
              href="/dashboard"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Try Free for 7 Days
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
