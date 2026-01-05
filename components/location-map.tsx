'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icon
const icon = L.icon({
  iconUrl: '/marker-icon.png',
  iconRetinaUrl: '/marker-icon-2x.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export function LocationMap() {
  const position: [number, number] = [-26.9194, -49.0661] // Blumenau-SC coordinates

  useEffect(() => {
    // Fix for Leaflet default marker icon path
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconUrl: '/marker-icon.png',
      iconRetinaUrl: '/marker-icon-2x.png',
      shadowUrl: '/marker-shadow.png',
    })
  }, [])

  return (
    <div className="h-[400px] w-full overflow-hidden rounded-2xl ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50">
      <MapContainer
        center={position}
        zoom={13}
        className="h-full w-full"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup>
            <div className="text-center">
              <strong>Blumenau, SC</strong>
              <br />
              Brazil
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
