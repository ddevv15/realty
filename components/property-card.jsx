import Link from "next/link"
import { Card } from "./ui/card"

export function PropertyCard({ property }) {
  return (
    <Link href={`/homedetails/${property.addressSlug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
        <div className="relative w-full h-48 bg-muted overflow-hidden">
          <img
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {property.type}
          </div>
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <p className="text-sm text-muted-foreground mb-1">{property.location}</p>
          <h3 className="text-lg font-semibold mb-3 line-clamp-2 text-foreground">{property.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{property.description}</p>

          <div className="flex gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <span className="font-semibold">{property.bedrooms}</span>
              <span>bed{property.bedrooms !== 1 ? "s" : ""}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold">{property.bathrooms}</span>
              <span>bath{property.bathrooms !== 1 ? "s" : ""}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold">{property.sqft.toLocaleString()}</span>
              <span>sqft</span>
            </div>
          </div>

          <div className="text-2xl font-bold text-primary mt-auto">
            ${(property.price / 1000000).toFixed(2).replace(/\.?0+$/, "")}M
          </div>
        </div>
      </Card>
    </Link>
  )
}
