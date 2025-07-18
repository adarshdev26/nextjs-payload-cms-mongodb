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
        <h2 className="mb-12 text-[48px]" style={{ color: textColor }}>
          {heading}
        </h2>
        <div className={`grid gap-8  md:${responsiveGridClass} sm:grid-cols-1 lg:grid-cols-3 `}>
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#fff] px-[50px] py-[50px] rounded-xl shadow-lg text-center flex flex-col items-center justify-start h-full "
            >
              {card.icon?.url && (
                <img
                  src={card.icon.url}
                  alt={card.icon.alt || card.title}
                  className="w-16 h-16 object-contain mb-4"
                />
              )}
              <h3 className="text-[20px]  text-[#0963a4] mb-[15px]">{card.title}</h3>
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
