import React from 'react'
import { cn } from '@/utilities/ui'
import { Card } from '@/components/Card'
import { ServiceCard } from '../Card/ServiceCard'
import { PortfolioCard } from '../Card/PortfolioCard'
import { TestimonialCard } from '../Card/TestimonialCard'

type Props = {
  items: any[]
  relationTo: 'posts' | 'services' | 'portfolio' | 'testimonials' // add more as needed
}

export const CollectionArchive: React.FC<Props> = ({ items, relationTo }) => {
  return (
    <div className={cn('container')}>
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
        {items.map((item, index) => {
          if (typeof item !== 'object' || !item) return null

          return (
            <div className="col-span-4" key={index}>
              {relationTo === 'posts' && (
                <Card className="h-full" doc={item} relationTo="posts" showCategories />
              )}

              {relationTo === 'services' && <ServiceCard service={item} />}

              {relationTo === 'portfolio' && <PortfolioCard portfolio={item} />}

              {relationTo === 'testimonials' && <TestimonialCard testimonial={item} />}

              {/* Add more cases if you have portfolio, team, etc. */}
            </div>
          )
        })}
      </div>
    </div>
  )
}
