import React from 'react'

type MapBlockProps = {
  title?: string
  embedUrl: string
  height?: number
}

export const MapBlock: React.FC<MapBlockProps> = ({ title, embedUrl, height = 400 }) => {
  return (
    <section className="">
      {title && <h2 className="text-2xl font-semibold text-center mb-4">{title}</h2>}
      <div className="w-full">
        <iframe
          src={embedUrl}
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}
