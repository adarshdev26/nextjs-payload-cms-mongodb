// components/blocks/CustomSoftwareSection.tsx
import Image from 'next/image'
import type { Media } from '@/payload-types'

type Props = {
  textPosition: 'left' | 'right'
  title: string
  subtitle?: string
  description?: string
  techStack: {
    label?: string
    logo: Media
    link?: string
  }[]
}

export const CustomSoftwareSection = ({
  textPosition,
  title,
  subtitle,
  description,
  techStack,
}: Props) => {
  const isLeft = textPosition === 'left'

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-14 items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
        >
          {/* Text Content */}
          <div className={`${isLeft ? 'order-1' : 'order-2'}`}>
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            {subtitle && <h3 className="text-xl font-semibold text-gray-700 mb-3">{subtitle}</h3>}
            {description && <p className="text-gray-600 leading-relaxed">{description}</p>}
          </div>

          {/* Tech Stack Icons */}
          <div className={`${isLeft ? 'order-2' : 'order-1'}`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {techStack.map((tech, idx) => (
                <>
                  <a href={tech.link}>
                    <div
                      key={idx}
                      className="border rounded p-4 shadow-md text-center hover:bg-blue-100 transition"
                    >
                      {tech.logo && typeof tech.logo === 'object' && (
                        <Image
                          src={tech.logo.url || ''}
                          alt={tech.label || 'tech'}
                          width={80}
                          height={80}
                          className="object-contain mx-auto"
                        />
                      )}
                      {tech.label && <p className="mt-2 text-sm font-medium">{tech.label}</p>}
                    </div>
                  </a>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
