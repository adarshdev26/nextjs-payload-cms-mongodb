import React from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'

type ImageTextBlockProps = {
  imagePosition: 'left' | 'right'
  image: {
    url?: string
    alt?: string
  }
  heading: string
  description?: any
  cta?: {
    text?: string
    link?: string
  }
  disableInnerContainer?: boolean
}

export const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  imagePosition,
  image,
  description,
}) => {
  const isLeft = imagePosition === 'left'

  return (
    <section className="flex flex-col md:flex-row gap-8 min-h-[400px] max-w-7xl mx-auto">
      <div
        className={`md:w-1/2 flex items-center justify-center ${isLeft ? 'order-1' : 'order-2'}`}
      >
        {image?.url && (
          <Image
            width={400}
            height={200}
            src={image.url}
            alt={image.alt || 'Image'}
            className="rounded-lg w-full h-full object-cover "
          />
        )}
      </div>
      <div
        className={`md:w-1/2 flex flex-col items-center justify-center text-left px-4 ${isLeft ? 'order-2' : 'order-1'}`}
      >
        <RichText data={description} enableGutter={false} />
      </div>
    </section>
  )
}
