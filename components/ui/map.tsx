'use client'

import React, { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useTheme } from 'next-themes'

export interface MapProps {
  center: [number, number] // [longitude, latitude]
  zoom?: number
  className?: string
  children?: React.ReactNode
}

export function Map({ center, zoom = 12, className = '' }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<maplibregl.Map | null>(null)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !mapContainer.current || map.current) return

    const mapStyle =
      theme === 'dark'
        ? 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
        : 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [center[0], center[1]],
      zoom: zoom,
    })

    // Add marker
    new maplibregl.Marker({ color: '#18181b' })
      .setLngLat([center[0], center[1]])
      .setPopup(
        new maplibregl.Popup({ offset: 25 }).setHTML(
          '<div style="padding: 8px;"><strong>Blumenau, SC</strong><br/>Brazil</div>',
        ),
      )
      .addTo(map.current)

    // Add navigation controls
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right')

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [center, zoom, mounted, theme])

  // Update map style when theme changes
  useEffect(() => {
    if (!map.current) return

    const mapStyle =
      theme === 'dark'
        ? 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
        : 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'

    map.current.setStyle(mapStyle)
  }, [theme])

  if (!mounted) {
    return (
      <div
        className={`h-full w-full rounded-2xl bg-zinc-100 dark:bg-zinc-900 ${className}`}
      />
    )
  }

  return <div ref={mapContainer} className={`h-full w-full ${className}`} />
}
