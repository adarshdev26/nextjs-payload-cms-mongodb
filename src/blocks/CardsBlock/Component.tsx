"use client"
import React from 'react'

type Card = {
  icon?: {
    url?: string
    alt?: string
  }
  title: string
  description?: string
}

type CardsBlockProps = {
  heading: string
  cards: Card[]
  cta?: {
    text?: string
    link?: string
  }
  backgroundColor?: string
  textColor?: string
  columns?: string
}

export const CardsBlock: React.FC<CardsBlockProps> = ({
  heading,
  cards,
  cta,
  backgroundColor,
  textColor,
  columns = '3', // fallback to '3' if not provided
}) => {
  const columnClassMap: Record<string, string> = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-2',
    '3': 'grid-cols-3',
    '4': 'grid-cols-4',
  }

  const responsiveGridClass = columnClassMap[columns] || 'grid-cols-3'

  return (
    <section className="py-11" style={{ background: backgroundColor || '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="mb-12 text-[48px] font-medium" style={{ color: textColor }}>
          {heading}
        </h2>
        <div className={`grid gap-8  md:${responsiveGridClass} sm:grid-cols-1 lg:grid-cols-3`}>
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#fff] w-full max-w-[500px] px-8 py-6 rounded-xl shadow-lg hover:shadow-xl text-center flex flex-col items-center justify-start h-full hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            >
              {card.icon?.url && (
                <img
                  src={card.icon.url}
                  alt={card.icon.alt || card.title}
                  className="w-16 h-16 object-contain mb-4"
                />
              )}
              <h3 className="text-[20px]  text-[#0963a4] mb-[15px] font-medium">{card.title}</h3>
              <p className="text-[#000000] font-[400] text-[15px] leading-[28px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        {cta?.link && (
          <div className="mt-12">
            <a
              href={cta?.link}
              className="bg-gradient-to-br from-[#0963a4] to-[#33a5df] w-fit uppercase hover:from-[#0963a4] hover:to-[#0963a4] text-white rounded-[50px] px-4 py-3 transition-all duration-500 ease-in-out"
            >
              MORE SERVICES
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
