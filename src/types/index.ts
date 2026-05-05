export interface Star {
  id: number
  ra: number       // Right ascension in hours (0–24)
  dec: number      // Declination in degrees (-90 to +90)
  mag: number      // Apparent magnitude (lower = brighter)
  name?: string    // Common name e.g. "Polaris"
  bayer?: string   // Bayer designation e.g. "α UMa"
  // Computed SVG coordinates (populated by projection)
  x?: number
  y?: number
}

export interface ConstellationLine {
  from: number   // Star id
  to: number     // Star id
}

export interface Mythology {
  culture: string       // e.g. "Greek", "Indigenous Hawaiian", "Chinese"
  story: string         // 2–3 sentence summary
  significance: string  // Navigation, seasonal, agricultural meaning
}

export interface Constellation {
  id: string
  iauAbbr: string
  name: string
  altNames: string[]
  stars: number[]              // HYG star ids belonging to this constellation
  lines: ConstellationLine[]   // Stick-figure connections
  artPath?: string             // Path to SVG art overlay
  centerRa: number
  centerDec: number
  mythology: Mythology[]
  difficulty: 1 | 2 | 3       // 1 = easy, 3 = advanced
  funFact: string              // Short fun fact shown after exploring
}

export interface Asterism {
  id: string
  name: string
  altNames: string[]
  constellationId: string      // parent constellation
  stars: number[]              // star ids in this asterism
  lines: ConstellationLine[]   // lines to draw for the asterism
}

export type MessageRole = 'user' | 'assistant'

export interface ChatMessage {
  id: string
  role: MessageRole
  content: string
  timestamp: number
}

export type FamiliarityLevel = 'none' | 'some' | 'expert'
export type AppPhase = 'intro' | 'chat' | 'quiz' | 'review'

export interface AppState {
  phase: AppPhase
  selectedConstellation: string | null
  exploredConstellations: string[]           // ids where chat has occurred
  unlockedConstellations: string[]           // ids with visible lines/art on map
  highlightedConstellations: string[]        // ids mentioned in latest AI message
  highlightedAsterisms: string[]             // asterism ids mentioned in latest AI message
  highlightedStars: number[]                 // individual star ids mentioned in latest AI message
  messages: ChatMessage[]
  isStreaming: boolean
  userFamiliarityLevel: FamiliarityLevel
  constellationEngagement: Record<string, number>  // id → message count
}

export type AppAction =
  | { type: 'SET_PHASE'; payload: AppPhase }
  | { type: 'SELECT_CONSTELLATION'; payload: string | null }
  | { type: 'ADD_MESSAGE'; payload: ChatMessage }
  | { type: 'APPEND_STREAM_TOKEN'; payload: { id: string; token: string } }
  | { type: 'UPDATE_MESSAGE'; payload: { id: string; content: string } }
  | { type: 'UNLOCK_CONSTELLATION'; payload: string }
  | { type: 'MARK_EXPLORED'; payload: string }
  | { type: 'SET_STREAMING'; payload: boolean }
  | { type: 'SET_FAMILIARITY'; payload: FamiliarityLevel }
  | { type: 'INCREMENT_ENGAGEMENT'; payload: string }
  | { type: 'SET_HIGHLIGHTED'; payload: { constellations: string[]; asterisms: string[]; stars: number[] } }
