// components/cards/TestimonialCard.tsx
import Image from 'next/image'

export const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  const photoUrl =
    typeof testimonial.photo === 'object'
      ? testimonial.photo?.url || testimonial.photo?.sizes?.thumbnail?.url
      : null

  return (
    <div className="rounded-xl border border-[#C0DBF7] p-6 shadow-md h-full flex flex-col justify-between text-center bg-white">
      {photoUrl && (
        <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-4">
          <Image
            width={100}
            height={100}
            src={photoUrl}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-col gap-2">
        <p className="text-[#3D3D3D] text-sm italic">{testimonial.quote}</p>
        <h3 className="text-primary-600 font-semibold text-lg">{testimonial.name}</h3>
        {testimonial.position && <p className="text-gray-500 text-sm">{testimonial.position}</p>}
      </div>
    </div>
  )
}
