// components/cards/ServiceCard.tsx
import Image from 'next/image'
export const ServiceCard = ({ service }: { service: any }) => {
  return (
    <div className="border rounded-2xl p-8 shadow-2xl text-center ">
      {/* {typeof service.logo === 'object' && ( */}
      {service.logo?.url && (
        <Image
          src={service.logo.url}
          alt={service.name}
          className="h-20 mx-auto mb-3 object-contain"
        />
      )}
      <h3 className="text-2xl font-normal mb-2 p-3 text-[#0963A4]">{service.name}</h3>
      <p className="text-sm/7 text-[#000000] p-3 line">{service.description}</p>
      <button className="mt-4 bg-[#63a7d7] text-white px-6 py-2 rounded-full hover:bg-[#074a7b] transition-colors">
        Read More
      </button>
    </div>
  )
}
