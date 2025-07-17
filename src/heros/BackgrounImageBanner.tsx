import React from 'react'
import Image from 'next/image'
import type { Page } from '@/payload-types'
import RichText from '@/components/RichText'

export const BackgrounImageBanner: React.FC<Page['hero']> = ({ richText, media }) => {
  const imageUrl = typeof media === 'object' && media?.url ? media.url : ''

  return (
    <div className="relative w-full h-[400px] md:h-[500px] text-white">
      {/* Background Image */}
      {imageUrl && <Image src={imageUrl} alt="Background" fill priority className="object-cover" />}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        {richText && (
          <div className="max-w-3xl">
            <RichText
              className="text-white text-xl md:text-2xl mb-6"
              data={richText}
              enableGutter={false}
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition duration-200">
              Book free consultation →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
