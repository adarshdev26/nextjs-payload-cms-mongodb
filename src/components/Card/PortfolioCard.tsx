// components/cards/PortfolioCard.tsx
export const PortfolioCard = ({ portfolio }: { portfolio: any }) => {
  return (
    <div className="rounded-xl border border-[#C0DBF7] p-4 shadow-md h-full flex flex-col justify-between text-center">
      {typeof portfolio.image === 'object' && (
        <div className="rounded-lg overflow-hidden mb-4">
          <img
            src={portfolio.image.url}
            alt={portfolio.name}
            className="w-full h-[200px] object-cover"
          />
        </div>
      )}

      <div className="flex flex-col gap-1">
        <h3 className="text-primary-600 font-semibold text-lg">{portfolio.name}</h3>
        <p className="text-[#3D3D3D] text-sm font-medium">
          {portfolio.subtitle || portfolio.description}
        </p>
      </div>
    </div>
  )
}
