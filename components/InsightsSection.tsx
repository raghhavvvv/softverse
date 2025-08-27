'use client'

import { useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'

export default function InsightsSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Mail className="w-16 h-16 mx-auto mb-6 text-primary-500" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Ahead with Our Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get exclusive insights on digital transformation, industry trends, and 
            innovative solutions delivered straight to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
              required
            />
            <button
              type="submit"
              className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        <p className="text-sm text-gray-400 mt-4">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>
  )
}
