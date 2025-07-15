import React from 'react'
import Link from 'next/link'
import RichText from '@/components/RichText'

type CTA = {
  text?: string
  link?: string
}

type TextBlockProps = {
  heading: string
  description?: any // changed from string → any (or define a rich text type if available)
  cta?: CTA
}

export const TextBlock: React.FC<TextBlockProps> = ({ heading, description, cta }) => {
  return (
    <section className="container mx-auto px-4 py-5">
      <div className="text-center">
        {heading && <h2 className="text-[36px] mb-[20px]">{heading}</h2>}
        {description && <p className="text-center text-[15px]">{description}</p>}
        {cta?.text && cta?.link && (
          <Link
            href={cta.link}
            className="mt-6 inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition"
          >
            {cta.text}
          </Link>
        )}
      </div>
    </section>
  )
}
