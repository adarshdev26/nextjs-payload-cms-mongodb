import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const MediumImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <div className="bg-white py-12">
      <div className="container flex flex-col-reverse md:flex-row items-center gap-8">
        
        {/* Left side - Text Content */}
        <div className="w-full md:w-1/2">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}

          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex flex-wrap gap-4">
              {links.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right side - Image */}
        {media && typeof media === 'object' && (
          <div className="w-full md:w-1/2">
            <Media
              className=""
              imgClassName="w-full h-auto object-cover rounded-lg"
              priority
              resource={media}
            />
            {media?.caption && (
              <div className="mt-3">
                <RichText data={media.caption} enableGutter={false} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
