'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import PricingTable from '@/components/PricingTable'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Simple, Powerful Pricing
          </h2>
          <PricingTable />
        </div>
      </section>
      <footer className="bg-gray-950 py-8 text-center text-gray-400">
        <p>&copy; 2024 Backdropia AI. All rights reserved.</p>
      </footer>
    </main>
  )
}
