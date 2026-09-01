export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-white">Backdropia AI</span>
        <div className="flex gap-4">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/dashboard" className="text-gray-300 hover:text-white">Dashboard</a>
        </div>
      </div>
    </nav>
  )
}
