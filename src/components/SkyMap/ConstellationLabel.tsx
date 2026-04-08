import type { Constellation, Star } from '../../types'

interface ConstellationLabelProps {
  constellation: Constellation
  starsById: Record<number, Star>
  isSelected: boolean
  isHovered: boolean
  isExplored: boolean
  isHighlighted: boolean
}

export function ConstellationLabel({
  constellation,
  starsById,
  isSelected,
  isHovered,
  isExplored,
  isHighlighted,
}: ConstellationLabelProps) {
  if (!isSelected && !isHovered && !isHighlighted) return null

  const positions = constellation.stars
    .map(id => starsById[id])
    .filter(s => s?.x !== undefined && s?.y !== undefined)

  if (positions.length === 0) return null

  const cx = positions.reduce((sum, s) => sum + (s.x ?? 0), 0) / positions.length
  const cy = positions.reduce((sum, s) => sum + (s.y ?? 0), 0) / positions.length

  const isActive = isSelected || isHighlighted
  const fillColor = isActive ? '#ffd97d' : '#a8d8ea'
  const fontSize = isActive ? 13 : 11
  const letterSpacing = isActive ? '0.08em' : '0.04em'

  const textFilter = isSelected
    ? 'drop-shadow(0 0 5px rgba(255,217,125,0.9)) drop-shadow(0 0 12px rgba(255,200,80,0.5))'
    : isHighlighted
    ? 'drop-shadow(0 0 6px rgba(255,217,125,0.85)) drop-shadow(0 0 14px rgba(255,200,80,0.4))'
    : isHovered
    ? 'drop-shadow(0 0 4px rgba(168,216,234,0.7))'
    : undefined

  return (
    <g style={{ pointerEvents: 'none' }}>
      {/* Label backdrop for readability */}
      {isActive && (
        <rect
          x={cx - 44}
          y={cy - 30}
          width={88}
          height={18}
          rx={4}
          fill="rgba(2,4,9,0.45)"
        />
      )}

      <text
        x={cx}
        y={cy - 16}
        textAnchor="middle"
        fill={fillColor}
        fontSize={fontSize}
        fontFamily="Georgia, serif"
        fontStyle="italic"
        letterSpacing={letterSpacing}
        style={{
          opacity: isActive ? 1 : 0.8,
          animation: isHighlighted && !isSelected
            ? 'highlight-pulse 1.8s ease-in-out infinite'
            : undefined,
          transition: isHighlighted ? undefined : 'opacity 0.3s ease',
          filter: textFilter,
          userSelect: 'none',
        }}
      >
        {constellation.name}
        {isExplored && ' ✦'}
      </text>
    </g>
  )
}
