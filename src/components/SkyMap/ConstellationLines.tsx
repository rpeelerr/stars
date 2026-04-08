import type { Constellation, Star } from '../../types'

interface ConstellationLinesProps {
  constellation: Constellation
  starsById: Record<number, Star>
  isUnlocked: boolean
  isSelected: boolean
  isHovered: boolean
  isHighlighted: boolean
}

export function ConstellationLines({
  constellation,
  starsById,
  isUnlocked,
  isSelected,
  isHovered,
  isHighlighted,
}: ConstellationLinesProps) {
  if (!isUnlocked && !isHovered && !isHighlighted) return null

  const opacity = isSelected ? 1 : isHighlighted ? 0.85 : isHovered ? 0.7 : 0.45

  // Core line color
  const coreColor = isSelected
    ? '#d0eeff'
    : isHighlighted
    ? '#ffd97d'
    : isHovered
    ? '#a8d8ea'
    : '#6baed6'

  // Glow layer color (wider, softer)
  const glowColor = isSelected
    ? 'rgba(168,216,234,0.35)'
    : isHighlighted
    ? 'rgba(255,217,125,0.30)'
    : isHovered
    ? 'rgba(168,216,234,0.22)'
    : 'rgba(107,174,214,0.18)'

  const coreWidth = isSelected ? 1.2 : isHighlighted ? 1.2 : 0.8
  const glowWidth = isSelected ? 6 : isHighlighted ? 7 : isHovered ? 5 : 4

  const glowFilter = isSelected
    ? 'drop-shadow(0 0 5px rgba(168,216,234,0.8)) drop-shadow(0 0 12px rgba(168,216,234,0.3))'
    : isHighlighted
    ? 'drop-shadow(0 0 6px rgba(255,217,125,0.9)) drop-shadow(0 0 14px rgba(255,200,80,0.4))'
    : undefined

  return (
    <g
      className="constellation-lines"
      style={{
        opacity,
        animation: isHighlighted && !isSelected
          ? 'highlight-pulse 1.8s ease-in-out infinite'
          : isSelected
          ? 'constellation-glow-pulse 3s ease-in-out infinite'
          : undefined,
        transition: isHighlighted || isSelected ? undefined : 'opacity 0.5s ease',
      }}
    >
      {constellation.lines.map((line, i) => {
        const from = starsById[line.from]
        const to = starsById[line.to]
        if (!from?.x || !from?.y || !to?.x || !to?.y) return null

        return (
          <g key={i}>
            {/* Glow layer — wide, soft, transparent */}
            <line
              x1={from.x} y1={from.y}
              x2={to.x}   y2={to.y}
              stroke={glowColor}
              strokeWidth={glowWidth}
              strokeLinecap="round"
            />
            {/* Core layer — thin, sharp, bright */}
            <line
              x1={from.x} y1={from.y}
              x2={to.x}   y2={to.y}
              stroke={coreColor}
              strokeWidth={coreWidth}
              strokeLinecap="round"
              style={{ filter: glowFilter }}
            />
          </g>
        )
      })}
    </g>
  )
}
