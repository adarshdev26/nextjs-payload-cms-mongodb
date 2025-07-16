import React from 'react'
import type { Page } from '@/payload-types'
import RichText from '@/components/RichText'

export const GradientBannerHero: React.FC<Page['hero']> = ({ richText }) => {
  return (
    <div className="bg-gradient-to-b from-[#0963a4] to-[#33a5df]  text-center text-white">
      {richText && (
        <h1 className="font-bold p-[40px]">
          {/* You can also use RichText if you want editable formatting */}
          {richText && <RichText className="mb-6 text-2xl" data={richText} enableGutter={false} />}
        </h1>
      )}
    </div>
  )
}
