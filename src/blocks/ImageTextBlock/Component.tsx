import React from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'
import Link from 'next/link'
import defaultImage from '../../../src/assets/about2-bg1(1).png'

type ImageTextBlockProps = {
  imagePosition: 'left' | 'right'
  image: {
    url?: string
    alt?: string
  }
  heading?: string
  bulletPoints?: { point: string }[]
  description?: any
  cta?: {
    text?: string
    link?: string
  }
  variant?: 'default' | 'emphasis' | 'light'
  backgroundColor?: string
}

export const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  imagePosition,
  image,
  heading,
  bulletPoints = [],
  description,
  cta,
  variant = 'default',
  backgroundColor,
}) => {
  const isLeft = imagePosition === 'left'

  const variantClasses = {
    default: 'text-gray-900',
    emphasis: 'text-blue-800 font-semibold',
    light: 'text-gray-600',
  }

  const bgClass = backgroundColor ? backgroundColor : 'bg-transparent'
  console.log(image.url)
  return (
    <section className={`${bgClass} py-12`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4">
        <div className={`md:w-1/2 flex justify-center ${isLeft ? 'order-1' : 'order-2'}`}>
          <Image src={defaultImage} alt="Default image" width={500} height={300} />
          {/* {image?.url ? (
            <Image src={image.url} alt={image.alt || 'Image'} width={500} height={300} />
          ) : (
            <Image src={defaultImage} alt="Default image" width={500} height={300} />
          )} */}
        </div>
        <div className={`md:w-1/2 flex flex-col justify-center ${isLeft ? 'order-2' : 'order-1'}`}>
          {heading && <h2 className={`text-[48px] mb-4 ${variantClasses[variant]}`}>{heading}</h2>}

          {description && (
            <div className="mb-4">
              <RichText data={description} enableGutter={false} />
            </div>
          )}

          {bulletPoints?.length > 0 && (
            <ul className="list-disc pl-5 space-y-2 mb-4 text-[#0d6aaa] font-[600] leading-7">
              {bulletPoints.map((bp, i) => (
                <li key={i}>{bp.point}</li>
              ))}
            </ul>
          )}

          {cta?.text && cta.link && (
            <Link
              href={cta.link}
              className="bg-gradient-to-br from-[#0963a4] to-[#33a5df] py-3  px-6 w-fit rounded-2xl text-white uppercase"
            >
              {cta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
