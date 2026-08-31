'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to email service (SendGrid, Resend, etc.)
    console.log('Contact form submitted:', { name, email, message })
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300">Have questions? We'd love to hear from you.</p>
        </div>

        {/* Contact Form & Info */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-900 bg-opacity-50 border border-green-500 text-green-100 p-4 rounded mb-6">
                  ✓ Thank you for your message! We'll get back to you soon.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                <p className="text-gray-300 mb-4">
                  Have questions about Backdropia AI? Need support or want to discuss a partnership? Reach out to us using the form or via email.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">📧 Email</h4>
                <p className="text-blue-400 hover:text-blue-300">
                  <a href="mailto:support@backdropia.com">support@backdropia.com</a>
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">🌐 Follow Us</h4>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <a href="https://twitter.com/backdropia" className="text-blue-400 hover:text-blue-300">
                      Twitter
                    </a>
                  </p>
                  <p className="text-gray-300">
                    <a href="https://discord.gg/backdropia" className="text-blue-400 hover:text-blue-300">
                      Discord Community
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">💡 FAQ</h4>
                <p className="text-gray-300">
                  Check our FAQ for common questions about features, pricing, and usage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="max-w-6xl mx-auto px-4 py-12 mt-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Other Ways to Get Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Documentation',
                description: 'Browse our guides and tutorials',
                link: '/docs',
              },
              {
                title: 'Pricing',
                description: 'Learn about our plans and pricing',
                link: '/pricing',
              },
              {
                title: 'Dashboard',
                description: 'Get started generating backgrounds',
                link: '/dashboard',
              },
            ].map((item, idx) => (
              
                key={idx}
                href={item.link}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
