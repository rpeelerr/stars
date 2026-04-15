import { useRef, useEffect, useCallback } from 'react'
import * as d3 from 'd3'
import type { Star } from '../types'

// Stereographic projection centered on April midnight sky at 34°N latitude
// Center RA ~10h (meridian at midnight in April), Dec ~34°N
const CENTER_RA = 10.0  // hours
const CENTER_DEC = 34.0 // degrees

function toRadians(deg: number) { return deg * Math.PI / 180 }
function raToRad(raHours: number) { return raHours * (Math.PI / 12) }

export function projectStar(ra: number, dec: number, width: number, height: number): [number, number] {
  const scale = Math.min(width, height) * 0.42

  // Convert to radians
  const phi = toRadians(dec)
  const phi0 = toRadians(CENTER_DEC)
  const lambda = raToRad(ra)
  const lambda0 = raToRad(CENTER_RA)

  // Stereographic projection
  const cosc = Math.sin(phi0) * Math.sin(phi) + Math.cos(phi0) * Math.cos(phi) * Math.cos(lambda - lambda0)
  const k = 2 / (1 + cosc)

  const x = k * Math.cos(phi) * Math.sin(lambda - lambda0)
  const y = k * (Math.cos(phi0) * Math.sin(phi) - Math.sin(phi0) * Math.cos(phi) * Math.cos(lambda - lambda0))

  return [width / 2 - scale * x, height / 2 - scale * y]
}

// Star radius based on magnitude (lower mag = bigger/brighter)
export function starRadius(mag: number): number {
  return Math.max(0.5, 3.5 - mag * 0.5)
}

// Star opacity based on magnitude
export function starOpacity(mag: number): number {
  return Math.min(1, Math.max(0.2, 1.2 - mag * 0.15))
}

interface UseSkyMapOptions {
  width: number
  height: number
  stars: Star[]
  onConstellationClick?: (id: string) => void
  onConstellationHover?: (id: string | null) => void
}

export function useSkyMap({ width, height, stars }: UseSkyMapOptions) {
  const svgRef = useRef<SVGSVGElement>(null)

  const getProjectedStars = useCallback((): Star[] => {
    return stars.map(star => {
      const [x, y] = projectStar(star.ra, star.dec, width, height)
      return { ...star, x, y }
    })
  }, [stars, width, height])

  useEffect(() => {
    if (!svgRef.current || width === 0 || height === 0) return

    const svg = d3.select(svgRef.current)

    // Set up zoom/pan
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 8])
      .on('zoom', (event) => {
        svg.select('g.sky-content').attr('transform', event.transform.toString())
      })

    svg.call(zoom)
  }, [width, height])

  return { svgRef, getProjectedStars }
}
