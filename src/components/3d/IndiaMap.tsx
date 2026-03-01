'use client'

import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

interface Visit {
  date: string
  title: string
  description: string
  type: 'education' | 'professional'
  students: number | null
}

interface GroupedCity {
  city: string
  state: string
  lat: number
  lng: number
  visits: Visit[]
}

interface IndiaMapProps {
  cities: GroupedCity[]
  onCityHover: (city: GroupedCity | null) => void
  onCityClick: (city: GroupedCity) => void
}

export default function IndiaMap({ cities, onCityHover, onCityClick }: IndiaMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<L.Map | null>(null)
  const markers = useRef<L.Marker[]>([])
  const [isMapReady, setIsMapReady] = useState(false)

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current) return

    // India bounds
    const bounds = L.latLngBounds(
      [6.0, 68.0],
      [38.0, 98.0]
    )

    // Create map
    const map = L.map(mapContainer.current, {
      center: [22.0, 82.0],
      zoom: 4.8,
      zoomControl: true,
      scrollWheelZoom: true,
      dragging: true,
      maxBounds: bounds,
      maxBoundsViscosity: 1.0,
      minZoom: 4.5,
      maxZoom: 8
    })

    // Add tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map)

    mapInstance.current = map
    setIsMapReady(true)

    return () => {
      map.remove()
      mapInstance.current = null
    }
  }, [])

  // Add markers when map is ready
  useEffect(() => {
    if (!isMapReady) return
    if (!mapInstance.current) return
    if (!cities || !Array.isArray(cities) || cities.length === 0) return

    // Clear existing markers
    if (markers.current.length > 0) {
      markers.current.forEach(m => {
        if (m) m.remove()
      })
      markers.current = []
    }

    // Add new markers
    cities.forEach((city) => {
      if (!city || !city.lat || !city.lng) return

      const hasEducation = city.visits?.some(v => v?.type === 'education') || false
      const markerColor = hasEducation ? '#4caf50' : '#4facfe'
      const visitCount = city.visits?.length || 1
      
      try {
        // Create marker
        const marker = L.marker([city.lat, city.lng]).addTo(mapInstance.current!)
        
        // Create popup content
        const popupContent = `
          <div style="
            background: #000;
            color: white;
            padding: 10px;
            border-radius: 8px;
            border: 2px solid ${markerColor};
            max-width: 250px;
            font-family: Arial, sans-serif;
          ">
            <h3 style="margin:0 0 5px 0; color: ${markerColor}">${city.city}, ${city.state}</h3>
            <p style="margin:0 0 5px 0; font-size: 12px; color: #aaa;">${visitCount} visit(s)</p>
            ${city.visits.map(v => `
              <div style="margin-top: 5px; padding-top: 5px; border-top: 1px solid #333;">
                <div style="font-weight: bold; font-size: 11px; color: ${v.type === 'education' ? '#4caf50' : '#4facfe'}">${v.title}</div>
                <div style="font-size: 10px; color: #aaa;">${v.date}</div>
              </div>
            `).join('')}
          </div>
        `

        // Bind popup
        marker.bindPopup(popupContent)

        // Add hover event - using arrow function to preserve context
        marker.on('mouseover', (e) => {
          const marker = e.target
          marker.openPopup()
          onCityHover(city)
        })

        marker.on('mouseout', (e) => {
          const marker = e.target
          marker.closePopup()
          onCityHover(null)
        })

        // Add click event
        marker.on('click', (e) => {
          const marker = e.target
          marker.openPopup()
          onCityClick(city)
        })

        markers.current.push(marker)
      } catch (error) {
        console.error('Error creating marker for city:', city.city, error)
      }
    })
  }, [isMapReady, cities, onCityHover, onCityClick])

  return <div ref={mapContainer} className="w-full h-full rounded-2xl" />
}