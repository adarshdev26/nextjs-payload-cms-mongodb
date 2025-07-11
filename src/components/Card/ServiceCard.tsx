// components/cards/ServiceCard.tsx
export const ServiceCard = ({ service }: { service: any }) => {
    return (
      <div className="border rounded p-4 shadow text-center">
        {typeof service.logo === 'object' && (
          <img
            src={service.logo.url}
            alt={service.name}
            className="h-20 mx-auto mb-3 object-contain"
          />
        )}
        <h3 className="text-lg font-bold mb-2">{service.name}</h3>
        <p className="text-sm text-gray-700">{service.description}</p>
      </div>
    )
  }
  