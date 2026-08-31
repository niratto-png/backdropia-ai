'use client'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">About Backdropia AI</h1>
        <p className="text-xl text-gray-300 mb-8">
          AI-powered game background generation for modern game developers
        </p>
        <p className="text-lg text-gray-400 mb-12">
          Backdropia AI revolutionizes game asset creation using artificial intelligence to generate studio-quality backgrounds in seconds.
        </p>
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="space-y-4 text-lg text-gray-300">
          <p>⚡ Generate backgrounds in 30 seconds</p>
          <p>🎨 Multiple art styles available</p>
          <p>💼 Commercial license included</p>
          <p>📦 High resolution 1920x1080</p>
        </div>
      </div>
    </div>
  )
}
