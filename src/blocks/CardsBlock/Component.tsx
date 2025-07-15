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
}

export const CardsBlock: React.FC<CardsBlockProps> = ({
  heading,
  cards,
  cta,
  backgroundColor,
  textColor,
}) => {
  return (
    <section className="py-20" style={{ background: backgroundColor || '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="mb-12 text-[48px]" style={{ color: textColor }}>
          {heading}
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-[20px] text-center flex flex-col items-center justify-start h-full"
            >
              {card.icon?.url && (
                <img
                  src={card.icon.url}
                  alt={card.icon.alt || card.title}
                  className="w-16 h-16 object-contain mb-4"
                />
              )}
              <h3 className="text-[20px] font-[500] text-[#0963a4] mb-2">{card.title}</h3>
              <p className="text-[#212529] font-[400] text-[15px] leading-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        {cta?.link && (
          <div className="mt-12">
            <a
              href={cta?.link}
              className="inline-block px-6 py-3 bg-gradient-to-b from-[#0963a4] to-[#33a5df] text-white rounded-full hover:bg-blue-600"
            >
              MORE SERVICES
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
