"use client"

import { useState } from "react"

export function PropertyGallery({ images = [] }) {
  const [activeImage, setActiveImage] = useState(0)

  const galleryImages = images.length > 0 ? images : ["/images/placeholder.svg?key=property1"]

  return (
    <div className="space-y-4">
      <div className="w-full aspect-video rounded-lg overflow-hidden bg-muted">
        <img
          src={galleryImages[activeImage] || "/images/placeholder.svg"}
          alt="Property"
          className="w-full h-full object-cover"
        />
      </div>
      {galleryImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                activeImage === index ? "border-primary" : "border-border hover:border-muted-foreground"
              }`}
            >
              <img
                src={image || "/images/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
