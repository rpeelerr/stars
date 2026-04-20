import type { Asterism, Star } from '../../types'

interface AsterismLinesProps {
  asterism: Asterism
  starsById: Record<number, Star>
}

const ASTERISM_CORE_COLOR = '#7ec8e3'
const ASTERISM_GLOW_COLOR = 'rgba(126,200,227,0.30)'
const ASTERISM_GLOW_FILTER = 'drop-shadow(0 0 6px rgba(126,200,227,0.9)) drop-shadow(0 0 14px rgba(80,180,220,0.4))'

export function AsterismLines({ asterism, starsById }: AsterismLinesProps) {
  return (
    <g
      className="asterism-lines"
      style={{
        animation: 'highlight-pulse 1.8s ease-in-out infinite',
        pointerEvents: 'none',
      }}
    >
      {asterism.lines.map((line, i) => {
        const from = starsById[line.from]
        const to = starsById[line.to]
        if (!from?.x || !from?.y || !to?.x || !to?.y) return null

        return (
          <g key={i}>
            {/* Glow layer */}
            <line
              x1={from.x} y1={from.y}
              x2={to.x}   y2={to.y}
              stroke={ASTERISM_GLOW_COLOR}
              strokeWidth={7}
              strokeLinecap="round"
            />
            {/* Core layer */}
            <line
              x1={from.x} y1={from.y}
              x2={to.x}   y2={to.y}
              stroke={ASTERISM_CORE_COLOR}
              strokeWidth={1.4}
              strokeLinecap="round"
              style={{ filter: ASTERISM_GLOW_FILTER }}
            />
          </g>
        )
      })}
    </g>
  )
}
