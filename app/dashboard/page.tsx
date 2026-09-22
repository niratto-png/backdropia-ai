'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function Dashboard() {
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('fantasy')
  const [loading, setLoading] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) return

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
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="bg-gray-900 min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-12">AI背景生成</h1>

          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <div className="mb-6">
              <label className="block text-white mb-2">プロンプト</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full bg-gray-700 text-white rounded p-3 focus:outline-none"
                rows={4}
                placeholder="背景のイメージを入力してください"
              />
            </div>

            <div className="mb-6">
              <label className="block text-white mb-2">スタイル</label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-gray-700 text-white rounded p-3 focus:outline-none"
              >
                <option value="fantasy">ファンタジー</option>
                <option value="scifi">SF</option>
                <option value="realistic">リアル</option>
              </select>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-3 rounded-lg font-semibold transition"
            >
              {loading ? '生成中...' : '背景を生成'}
            </button>
          </div>

          {generatedImage && (
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">生成結果</h2>
              <img
                src={generatedImage}
                alt="Generated background"
                className="w-full rounded-lg"
              />
            </div>
          )}
        </div>
      </main>
    </>
  )
}
