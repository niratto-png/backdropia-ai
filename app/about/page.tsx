'use client'
import Navbar from '@/components/Navbar'

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">About Backdropia AI</h1>
          <p className="text-xl text-gray-300 mb-8">
            AI-powered game background generation for modern game developers
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-8 mb-8">
            Backdropia AI is revolutionizing game asset creation by using artificial intelligence to generate studio-quality backgrounds in seconds. We believe every game developer—from indie creators to established studios—deserves access to professional-grade assets without spending weeks on art production.
          </p>
          <p className="text-gray-300 text-lg leading-8">
            Our platform combines cutting-edge AI technology with an intuitive interface, allowing developers to focus on what matters most: creating amazing games.
          </p>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto px-4 py-12 mt-8">
          <h2 className="text-3xl font-bold text-white mb-12">Why Choose Backdropia AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Lightning Fast',
                description: 'Generate professional backgrounds in just 30 seconds. No waiting for artists, no lengthy design processes.',
              },
              {
                title: 'Multiple Styles',
                description: 'Choose from Fantasy, Cyberpunk, Sci-Fi, Pixel Art, Anime, Realistic, and more. Perfect for any game genre.',
              },
              {
                title: 'Commercial Use',
                description: 'All generated assets are yours to use commercially. Full rights included in every plan.',
              },
              {
                title: 'Affordable Pricing',
                description: 'From $4.99/month for hobbyists to $49.99/month for studios. No hidden fees.',
              },
              {
                title: 'High Resolution',
                description: '1920x1080 resolution outputs perfect for modern games. Download and use immediately.',
              },
              {
                title: 'Easy Integration',
                description: 'Simple API access available for Pro and Studio plans. Integrate directly into your workflow.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto px-4 py-12 mt-8">
          <h2 className="text-3xl font-bold text-white mb-12">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '30s', label: 'Average Generation Time' },
              { number: '1M+', label: 'Possible Style Combinations' },
              { number: '24/7', label: 'Uptime Guarantee' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-6xl mx-auto px-4 py-12 mt-8 mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Game Development?</h2>
            <p className="text-blue-100 mb-8 text-lg">Join game developers worldwide who are already using Backdropia AI.</p>
            
              href="/dashboard"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
