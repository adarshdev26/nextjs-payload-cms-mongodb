// components/blocks/NewsletterBlock.tsx
'use client'

import React, { useState } from 'react'

type NewsletterBlockProps = {
  headline: string
  subtext?: string
  placeholder?: string
  buttonLabel?: string
}

export const NewsletterBlock: React.FC<NewsletterBlockProps> = ({
  headline,
  subtext,
  placeholder = 'Enter your email',
  buttonLabel = 'SUBSCRIBE',
}) => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = async () => {
    if (!email) return
    // Add real API logic or form submit later
    setSubscribed(true)
  }

  return (
    <section className="bg-[#f7f7f7] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-800 mb-2">{headline}</h2>
        {subtext && <p className="text-sm text-gray-700 mb-8">{subtext}</p>}

        {!subscribed ? (
          <div className="bg-white rounded-full p-2 shadow-xl flex items-center justify-between max-w-2xl mx-auto overflow-hidden">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-6 py-3 text-gray-700 focus:outline-none text-base rounded-full"
            />
            <button
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-full px-8 py-3 transition-all"
            >
              {buttonLabel}
            </button>
          </div>
        ) : (
          <p className="text-green-600 font-medium mt-6">You’ve subscribed successfully!</p>
        )}
      </div>
    </section>
  )
}
