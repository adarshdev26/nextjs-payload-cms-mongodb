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
}

export const CardsBlock: React.FC<CardsBlockProps> = ({ heading, cards, cta }) => {
  return (
    <section className="bg-gradient-to-br from-[#0963a4] to-[#33a5df] py-20 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl text-white font-bold mb-12">{heading}</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg py-10 text-center flex flex-col items-center justify-start h-full"
            >
              {card.icon?.url && (
                <img
                  src={card.icon.url}
                  alt={card.icon.alt || card.title}
                  className="w-16 h-16 object-contain mb-4"
                />
              )}
              <h3 className="text-lg font-semibold text-blue-500 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
        {cta?.link && (
          <div className="mt-12">
            <a
              href={cta?.link}
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              More Services
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
