import { CONSTELLATIONS } from '../data/constellations'
import { ASTERISMS } from '../data/asterisms'
import { STARS } from '../data/stars'

export interface ParsedMentions {
  constellations: string[]
  asterisms: string[]
  stars: number[]
}

export function parseConstellationMentions(text: string): ParsedMentions {
  const lower = text.toLowerCase()
  const constellations: string[] = []
  const asterisms: string[] = []
  const stars: number[] = []

  for (const c of CONSTELLATIONS) {
    const names = [c.name, ...c.altNames]
    if (names.some(n => lower.includes(n.toLowerCase()))) {
      if (!constellations.includes(c.id)) constellations.push(c.id)
    }
  }

  for (const a of ASTERISMS) {
    const names = [a.name, ...a.altNames]
    if (names.some(n => lower.includes(n.toLowerCase()))) {
      if (!asterisms.includes(a.id)) asterisms.push(a.id)
    }
  }

  for (const s of STARS) {
    if (s.name && lower.includes(s.name.toLowerCase())) {
      if (!stars.includes(s.id)) stars.push(s.id)
    }
  }

  return { constellations, asterisms, stars }
}
