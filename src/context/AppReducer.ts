import type { AppState, AppAction } from '../types'

export const initialState: AppState = {
  phase: 'intro',
  selectedConstellation: null,
  exploredConstellations: [],
  unlockedConstellations: [],
  highlightedConstellations: [],
  messages: [],
  isStreaming: false,
  userFamiliarityLevel: 'none',
  constellationEngagement: {},
}

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_PHASE':
      return { ...state, phase: action.payload }

    case 'SELECT_CONSTELLATION':
      return { ...state, selectedConstellation: action.payload }

    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] }

    case 'APPEND_STREAM_TOKEN': {
      const messages = state.messages.map(m =>
        m.id === action.payload.id
          ? { ...m, content: m.content + action.payload.token }
          : m
      )
      return { ...state, messages }
    }

    case 'UNLOCK_CONSTELLATION':
      if (state.unlockedConstellations.includes(action.payload)) return state
      return {
        ...state,
        unlockedConstellations: [...state.unlockedConstellations, action.payload],
      }

    case 'MARK_EXPLORED':
      if (state.exploredConstellations.includes(action.payload)) return state
      return {
        ...state,
        exploredConstellations: [...state.exploredConstellations, action.payload],
      }

    case 'SET_STREAMING':
      return { ...state, isStreaming: action.payload }

    case 'SET_FAMILIARITY':
      return { ...state, userFamiliarityLevel: action.payload }

    case 'INCREMENT_ENGAGEMENT': {
      const current = state.constellationEngagement[action.payload] ?? 0
      return {
        ...state,
        constellationEngagement: {
          ...state.constellationEngagement,
          [action.payload]: current + 1,
        },
      }
    }

    case 'SET_HIGHLIGHTED':
      return { ...state, highlightedConstellations: action.payload }

    default:
      return state
  }
}
