"use client"

import { useState } from "react"
import { Card } from "./ui/card"

export function PropertyFilter({ onFilterChange }) {
  const [priceRange, setPriceRange] = useState([0, 1500000])
  const [propertyType, setPropertyType] = useState("all")
  const [bedrooms, setBedrooms] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const handleFilterChange = () => {
    onFilterChange({
      priceRange,
      propertyType,
      bedrooms,
      searchTerm,
    })
  }

  const handleReset = () => {
    setPriceRange([0, 1500000])
    setPropertyType("all")
    setBedrooms("all")
    setSearchTerm("")
    onFilterChange({
      priceRange: [0, 1500000],
      propertyType: "all",
      bedrooms: "all",
      searchTerm: "",
    })
  }

  return (
    <Card className="p-6 bg-muted/30">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">Search</label>
          <input
            type="text"
            placeholder="Search by location or property..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              handleFilterChange()
            }}
            className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
          </label>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="1500000"
              step="50000"
              value={priceRange[1]}
              onChange={(e) => {
                const newRange = [priceRange[0], Number.parseInt(e.target.value)]
                setPriceRange(newRange)
                handleFilterChange()
              }}
              className="w-full"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">Property Type</label>
          <select
            value={propertyType}
            onChange={(e) => {
              setPropertyType(e.target.value)
              handleFilterChange()
            }}
            className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Studio">Studio</option>
            <option value="Townhouse">Townhouse</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">Bedrooms</label>
          <select
            value={bedrooms}
            onChange={(e) => {
              setBedrooms(e.target.value)
              handleFilterChange()
            }}
            className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Bedrooms</option>
            <option value="1">1+ Bedrooms</option>
            <option value="2">2+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
            <option value="5">5+ Bedrooms</option>
          </select>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleFilterChange}
            className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Apply Filters
          </button>
          <button
            onClick={handleReset}
            className="flex-1 px-4 py-2 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </Card>
  )
}
