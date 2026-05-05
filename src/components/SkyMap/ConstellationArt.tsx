import type { Constellation, Star } from '../../types'

interface ConstellationArtProps {
  constellation: Constellation
  starsById: Record<number, Star>
  isSelected: boolean
  isHovered: boolean
}

export function ConstellationArt({
  constellation,
  starsById,
  isSelected,
  isHovered,
}: ConstellationArtProps) {
  if (!isSelected && !isHovered) return null

  const pts = constellation.stars
    .map(id => starsById[id])
    .filter((s): s is Star => s?.x !== undefined && s?.y !== undefined)

  if (pts.length < 2) return null

  const xs = pts.map(s => s.x!)
  const ys = pts.map(s => s.y!)
  const minX = Math.min(...xs)
  const maxX = Math.max(...xs)
  const minY = Math.min(...ys)
  const maxY = Math.max(...ys)
  const cx = (minX + maxX) / 2
  const cy = (minY + maxY) / 2
  const bboxW = maxX - minX
  const bboxH = maxY - minY

  // For very elongated constellations (like Hydra), cap the square
  // at 2.5× the short axis so the art stays readable
  const aspect = bboxW / Math.max(bboxH, 1)
  const base = aspect > 2.5 ? bboxH * 2.5 : Math.max(bboxW, bboxH)
  const size = Math.max(base * 1.55, 140)

  const filename = constellation.id.replace(/_/g, '-')
  const opacity = isSelected ? 0.30 : 0.14

  // Per-constellation art overrides
  const rotationDeg = constellation.id === 'hydra' ? 35
    : constellation.id === 'leo' ? 40
    : constellation.id === 'gemini' ? -40
    : 0
  const sizeScale = constellation.id === 'hydra' ? 0.675 : 1
  const displaySize = size * sizeScale
  const offsetY = constellation.id === 'orion' ? -20 : 0

  const transform = rotationDeg !== 0
    ? `rotate(${rotationDeg}, ${cx}, ${cy + offsetY})`
    : undefined

  return (
    <image
      href={`/constellations/${filename}.png`}
      x={cx - displaySize / 2}
      y={cy - displaySize / 2 + offsetY}
      width={displaySize}
      height={displaySize}
      opacity={opacity}
      preserveAspectRatio="xMidYMid meet"
      transform={transform}
      style={{
        mixBlendMode: 'screen',
        transition: 'opacity 0.5s ease',
        pointerEvents: 'none',
      }}
    />
  )
}
