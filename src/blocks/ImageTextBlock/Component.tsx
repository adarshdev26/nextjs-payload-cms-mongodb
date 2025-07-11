import React from 'react'

type ImageTextBlockProps = {
  imagePosition: 'left' | 'right'
  image: {
    url?: string
    alt?: string
  }
  heading: string
  description?: string
  cta?: {
    text?: string
    link?: string
  }
  disableInnerContainer?: boolean
}

export const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  imagePosition,
  image,
  heading,
  description,
  cta,
}) => {
  const isLeft = imagePosition === 'left'

  return (
    <section className="flex flex-col md:flex-row gap-8 min-h-[400px]">
      <div className={`md:w-1/2 flex items-center justify-center ${isLeft ? 'order-1' : 'order-2'}`}>
        {image?.url && (
          <img
            src={image.url}
            alt={image.alt || heading}
             className="rounded-lg w-full h-full object-cover "
          />
        )}
      </div>
      <div className={`md:w-1/2 flex flex-col items-center justify-center text-left px-4 ${isLeft ? 'order-2' : 'order-1'}`}>
        <h2 className="text-4xl font-normal mb-2">{heading}</h2>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {cta?.text && cta?.link && (
          <a
            href={cta.link}
            className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-700"
          >
            {cta.text}
          </a>
        )}
      </div>
    </section>
  )
}
