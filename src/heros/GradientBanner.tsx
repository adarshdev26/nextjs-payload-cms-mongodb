import React from 'react'
import type { Page } from '@/payload-types'
import RichText from '@/components/RichText'

export const GradientBannerHero: React.FC<Page['hero']> = ({ richText }) => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-400 py-12 text-center text-white">
      <div className="container">
        {richText && (
          <h1 className="text-4xl font-bold">
            {/* You can also use RichText if you want editable formatting */}
            {richText && (
              <RichText className="mb-6 text-2xl" data={richText} enableGutter={false} />
            )}
          </h1>
        )}
      </div>
    </div>
  )
}
