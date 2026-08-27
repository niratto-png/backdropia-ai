import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Backdropia AI - Game Backgrounds Generator',
  description: 'AI-powered game backgrounds and UI assets in seconds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
