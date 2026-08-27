'use client'

export default function Navbar() {
  return (
    <nav className="bg-gray-950 border-b border-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          ✨ Backdropia AI
        </h1>
        <div className="flex gap-4">
          <a 
            href="#pricing" 
            className="text-gray-300 hover:text-white transition"
          >
            Pricing
          </a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  )
}
