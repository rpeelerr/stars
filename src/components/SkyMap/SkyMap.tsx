import { useState, useRef, useEffect } from 'react'
import { CONSTELLATIONS } from '../../data/constellations'
import { STARS, BACKGROUND_STARS, STARS_BY_ID } from '../../data/stars'
import { projectStar, starRadius } from '../../hooks/useSkyMap'
import { StarField } from './StarField'
import { ConstellationLines } from './ConstellationLines'
import { ConstellationLabel } from './ConstellationLabel'
import { ConstellationHitArea } from './ConstellationHitArea'
import type { Star } from '../../types'

interface SkyMapProps {
  selectedConstellation: string | null
  unlockedConstellations: string[]
  exploredConstellations: string[]
  highlightedConstellations: string[]
  onConstellationSelect: (id: string) => void
}

export function SkyMap({
  selectedConstellation,
  unlockedConstellations,
  exploredConstellations,
  highlightedConstellations,
  onConstellationSelect,
}: SkyMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })
  const [hoveredConstellation, setHoveredConstellation] = useState<string | null>(null)

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      const entry = entries[0]
      if (entry) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        })
      }
    })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    return () => observer.disconnect()
  }, [])

  const { width, height } = dimensions

  // Project all catalog stars
  const projectedStars: Star[] = STARS.map(star => {
    const [x, y] = projectStar(star.ra, star.dec, width, height)
    return { ...star, x, y }
  })

  const projectedBackground: Star[] = BACKGROUND_STARS.map(star => {
    const [x, y] = projectStar(star.ra, star.dec, width, height)
    return { ...star, x, y }
  })

  // Merge projected into lookup
  const starsById: Record<number, Star> = {
    ...STARS_BY_ID,
    ...Object.fromEntries(projectedStars.map(s => [s.id, s])),
  }

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Shooting stars — occasional meteors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="shooting-star" style={{
          width: 160, top: '13%', left: '8%',
          transform: 'rotate(-10deg)',
          animation: 'shoot-a 16s linear 4s infinite',
        }} />
        <div className="shooting-star" style={{
          width: 120, top: '32%', left: '22%',
          transform: 'rotate(-8deg)',
          animation: 'shoot-b 22s linear 13s infinite',
        }} />
        <div className="shooting-star" style={{
          width: 190, top: '7%', left: '55%',
          transform: 'rotate(-13deg)',
          animation: 'shoot-c 28s linear 20s infinite',
        }} />
      </div>

      <svg
        width={width}
        height={height}
        className="block"
        style={{ background: 'transparent' }}
      >
        {/* Nebula wisps — faint atmospheric depth */}
        <defs>
          <radialGradient id="nebula-teal" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nebula-purple" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nebula-blue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse
          cx={width * 0.22} cy={height * 0.38}
          rx={width * 0.18} ry={height * 0.14}
          fill="url(#nebula-teal)"
          style={{ animation: 'nebula-breathe 9s ease-in-out 0s infinite' }}
        />
        <ellipse
          cx={width * 0.75} cy={height * 0.6}
          rx={width * 0.14} ry={height * 0.16}
          fill="url(#nebula-purple)"
          style={{ animation: 'nebula-breathe 12s ease-in-out 3s infinite' }}
        />
        <ellipse
          cx={width * 0.55} cy={height * 0.25}
          rx={width * 0.12} ry={height * 0.10}
          fill="url(#nebula-blue)"
          style={{ animation: 'nebula-breathe 15s ease-in-out 6s infinite' }}
        />
        {/* Background filler stars */}
        <StarField stars={projectedBackground} />

        {/* Named catalog stars */}
        <StarField stars={projectedStars} />

        {/* Constellation lines (rendered under hit areas) */}
        {CONSTELLATIONS.map(constellation => (
          <ConstellationLines
            key={constellation.id}
            constellation={constellation}
            starsById={starsById}
            isUnlocked={unlockedConstellations.includes(constellation.id)}
            isSelected={selectedConstellation === constellation.id}
            isHovered={hoveredConstellation === constellation.id}
            isHighlighted={highlightedConstellations.includes(constellation.id)}
          />
        ))}

        {/* Pulsing halos on stars of chat-mentioned constellations */}
        {CONSTELLATIONS
          .filter(c => highlightedConstellations.includes(c.id) && selectedConstellation !== c.id)
          .flatMap(c => c.stars.map(id => starsById[id]).filter((s): s is Star => !!(s?.x && s?.y)))
          .map(star => (
            <circle
              key={`halo-${star.id}`}
              cx={star.x}
              cy={star.y}
              r={starRadius(star.mag) + 3}
              fill="rgba(255, 217, 125, 0.15)"
              stroke="rgba(255, 217, 125, 0.8)"
              strokeWidth={1.2}
              style={{
                transformBox: 'fill-box',
                transformOrigin: 'center',
                animation: 'star-halo 2s ease-out infinite',
                animationDelay: `${(star.id % 8) * 0.25}s`,
                pointerEvents: 'none',
              }}
            />
          ))
        }

        {/* Labels */}
        {CONSTELLATIONS.map(constellation => (
          <ConstellationLabel
            key={constellation.id}
            constellation={constellation}
            starsById={starsById}
            isSelected={selectedConstellation === constellation.id}
            isHovered={hoveredConstellation === constellation.id}
            isExplored={exploredConstellations.includes(constellation.id)}
            isHighlighted={highlightedConstellations.includes(constellation.id)}
          />
        ))}

        {/* Interactive hit areas (on top) */}
        {CONSTELLATIONS.map(constellation => (
          <ConstellationHitArea
            key={constellation.id}
            constellation={constellation}
            starsById={starsById}
            isSelected={selectedConstellation === constellation.id}
            isHovered={hoveredConstellation === constellation.id}
            onMouseEnter={() => setHoveredConstellation(constellation.id)}
            onMouseLeave={() => setHoveredConstellation(null)}
            onClick={() => onConstellationSelect(constellation.id)}
          />
        ))}
      </svg>

      {/* Hint text */}
      {!selectedConstellation && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-star-dim text-sm font-serif italic pointer-events-none animate-fade-in">
          Click any constellation to begin exploring
        </div>
      )}
    </div>
  )
}
