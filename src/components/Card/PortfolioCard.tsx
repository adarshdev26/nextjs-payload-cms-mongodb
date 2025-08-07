// components/cards/PortfolioCard.tsx
'use client'
import { Width } from '@/blocks/Form/Width'
import { useState } from 'react'

export const PortfolioCard = ({ portfolio }: { portfolio: any }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="group relative rounded-xl
       p-4 shadow-md max-h-[600px] flex flex-col
        justify-between text-center
         bg-white hover:bg-transparent 
         transition-all duration-300
          overflow-hidden"
        onClick={() => setIsOpen(true)}
      >
        {/* Background Image with Overlay */}
        {typeof portfolio.image === 'object' && (
          <div className="relative ">
            <img
              src={portfolio.image.url}
              alt={portfolio.name}
              className=" object-cover rounded-lg transition-all duration-300  group-hover:scale-105"
            />

            {/* Blue Overlay */}
            {/* <div className="absolute inset-0 bg-[#0597d5] opacity-0 group-hover:opacity-70 transition-all duration-300 rounded-lg"></div> */}

            {/* Plus Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-white text-5xl font-bold">+</span>
            </div>
          </div>
        )}

        {/* Text Content */}
        <div className="absolute bottom-6 left-0 w-full px-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg transition-all duration-300 group-hover:bg-opacity-100">
          <h3 className="text-black font-semibold text-lg">{portfolio.name}</h3>
          <p className="text-black text-sm font-medium">
            {portfolio.subtitle || portfolio.description}
          </p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex  justify-center z-[999999] overflow-y-auto"
          style={{ width: '100%', height: '100%' }}
        >


          <div className="bg-white rounded-xl  max-w-5xl  h-fit p-6 relative shadow-xl text-center top-20">
            <h2 className="text-2xl font-semibold mb-4 text-[#0963a4]">{portfolio.name}</h2>
            <img
              src={portfolio.image.url}
              alt={portfolio.image.alt || portfolio.name}
              className="   mb-6 rounded-lg"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-6 py-2 bg-gradient-to-b from-[#0963a4] to-[#33a5df] text-white rounded-full hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
