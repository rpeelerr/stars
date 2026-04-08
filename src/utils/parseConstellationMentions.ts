import { CONSTELLATIONS } from '../data/constellations'

export function parseConstellationMentions(text: string): string[] {
  const lower = text.toLowerCase()
  const found: string[] = []
  for (const c of CONSTELLATIONS) {
    const names = [c.name, ...c.altNames]
    if (names.some(n => lower.includes(n.toLowerCase()))) {
      if (!found.includes(c.id)) found.push(c.id)
    }
  }
  return found
}
