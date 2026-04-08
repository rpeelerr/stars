import type { Star } from '../../types'
import { starRadius, starOpacity } from '../../hooks/useSkyMap'

interface StarFieldProps {
  stars: Star[]
}

// Deterministic pseudo-random for stable per-star variation
function hashId(id: number) {
  return ((id * 2654435761) >>> 0) % 100
}

// Star color temperature — O/B/A blue-whites, F/G white, K slightly warm
const STAR_COLORS = [
  '#c8dcff', // blue-white (O/B type)
  '#d8e8ff', // cool white (A type)
  '#eef2ff', // white (F type)
  '#f4f0ff', // near-white with violet hint
  '#fff8f0', // very slightly warm (G type)
  '#ffe8d4', // faint warm tint (K type)
]

function starColor(id: number, mag: number): string {
  if (mag > 3.5) return '#c8d8f0'   // dim background stars stay neutral
  const bucket = hashId(id) % STAR_COLORS.length
  return STAR_COLORS[bucket]
}


export function StarField({ stars }: StarFieldProps) {
  return (
    <g className="star-field">
      {stars.map(star => {
        if (star.x === undefined || star.y === undefined) return null
        const r = starRadius(star.mag)
        const opacity = starOpacity(star.mag)
        const h = hashId(star.id)
        const twinkleDelay = (h / 100) * 5
        const color = starColor(star.id, star.mag)

        const isVeryBright = star.mag < 1.5
        const isBright = star.mag < 2.5

        // Twinkle speed varies by hash bucket
        const twinkleSpeed = h < 30 ? 1.8 : h < 60 ? 3.0 : 4.5
        const twinkleAnim = isBright
          ? `twinkle-fast ${twinkleSpeed}s ease-in-out ${twinkleDelay}s infinite`
          : h < 40
          ? `twinkle ${twinkleSpeed + 1}s ease-in-out ${twinkleDelay}s infinite`
          : undefined

        return (
          <g key={star.id}>
            {/* Mid glow — static soft halo, no animation/scaling */}
            {isBright && (
              <circle
                cx={star.x} cy={star.y}
                r={r * 2.4}
                fill={color}
                opacity={0.14}
                style={{ pointerEvents: 'none' }}
              />
            )}

            {/* Star core */}
            <circle
              cx={star.x}
              cy={star.y}
              r={r}
              fill={color}
              opacity={opacity}
              style={{
                animation: twinkleAnim,
                filter: isVeryBright
                  ? `drop-shadow(0 0 ${r * 2.5}px ${color}) drop-shadow(0 0 ${r * 5}px rgba(168,216,234,0.4))`
                  : isBright
                  ? `drop-shadow(0 0 ${r * 1.8}px rgba(200,220,255,0.7))`
                  : undefined,
              }}
            />
          </g>
        )
      })}
    </g>
  )
}
