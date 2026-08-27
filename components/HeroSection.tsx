'use client'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Studio-Quality Game Backgrounds
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          AI-powered backgrounds and UI assets. Generated in 30 seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
            Try Free for 7 Days
          </button>
          <button className="border border-gray-400 hover:border-white text-white px-8 py-3 rounded-lg font-semibold">
            Watch Demo
          </button>
        </div>
        <div className="mt-16 bg-gray-700 rounded-lg h-64 flex items-center justify-center text-gray-400">
          [Hero Image or Video]
        </div>
      </div>
    </section>
  )
}
