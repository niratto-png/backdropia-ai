'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function Dashboard() {
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
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Generate Background</h2>

        <div className="bg-gray-800 p-8 rounded-lg mb-8">
          <div className="mb-6">
            <label className="block text-white mb-2">Style</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full bg-gray-700 text-white p-2 rounded"
            >
              {styles.map((s) => (
                <option key={s} value={s.toLowerCase()}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-white mb-2">Describe your scene</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., Dark forest with ancient ruins, glowing purple crystals..."
              className="w-full bg-gray-700 text-white p-3 rounded h-24"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-3 rounded font-semibold"
          >
            {loading ? 'Generating...' : 'Generate Background'}
          </button>
        </div>

        {generatedImage && (
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Generated Background</h3>
            <img
              src={generatedImage}
              alt="Generated"
              className="w-full rounded mb-4"
            />
            <div className="flex gap-4">
              <a
                href={generatedImage}
                download
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded text-center"
              >
                Download
              </a>
              <button
                onClick={() => setGeneratedImage(null)}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded"
              >
                Generate Again
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
