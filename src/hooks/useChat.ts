import { useCallback } from 'react'
import { useAppContext } from '../context/AppContext'
import type { ChatMessage } from '../types'
import { CONSTELLATIONS_BY_ID } from '../data/constellations'
import { parseConstellationMentions } from '../utils/parseConstellationMentions'

function makeId() {
  return Math.random().toString(36).slice(2)
}

interface SendOptions {
  constellationEvent?: {
    type: 'selected'
    constellationId: string
  }
  quizRequest?: boolean
  hiddenFromUser?: boolean // if true, user message won't appear in UI
}

export function useChat() {
  const { state, dispatch } = useAppContext()

  const sendMessage = useCallback(async (content: string, options: SendOptions = {}) => {
    const { constellationEvent, quizRequest, hiddenFromUser } = options

    // Add user message to UI (unless hidden system injection)
    if (!hiddenFromUser) {
      const userMsg: ChatMessage = {
        id: makeId(),
        role: 'user',
        content,
        timestamp: Date.now(),
      }
      dispatch({ type: 'ADD_MESSAGE', payload: userMsg })
    }

    // Create assistant placeholder for streaming
    const assistantId = makeId()
    const assistantMsg: ChatMessage = {
      id: assistantId,
      role: 'assistant',
      content: '',
      timestamp: Date.now(),
    }
    dispatch({ type: 'ADD_MESSAGE', payload: assistantMsg })
    dispatch({ type: 'SET_STREAMING', payload: true })
    dispatch({ type: 'SET_HIGHLIGHTED', payload: { constellations: [], asterisms: [], stars: [] } })

    // Build messages array from current state (excluding the empty assistant placeholder)
    const historyMessages = state.messages
      .filter(m => m.content.trim() !== '' || m.role === 'user')
      .map(m => ({ role: m.role, content: m.content }))

    if (!hiddenFromUser) {
      historyMessages.push({ role: 'user', content })
    }

    // Build constellation event payload
    let constellationEventPayload: { type: 'selected'; constellationName: string; constellationId: string } | undefined
    if (constellationEvent) {
      const constellation = CONSTELLATIONS_BY_ID[constellationEvent.constellationId]
      constellationEventPayload = {
        type: 'selected',
        constellationName: constellation?.name ?? constellationEvent.constellationId,
        constellationId: constellationEvent.constellationId,
      }
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: historyMessages,
          context: {
            selectedConstellation: state.selectedConstellation,
            exploredConstellations: state.exploredConstellations,
            userFamiliarityLevel: state.userFamiliarityLevel,
            constellationEngagement: state.constellationEngagement,
          },
          constellationEvent: constellationEventPayload,
          quizRequest,
        }),
      })

      if (!response.body) throw new Error('No response body')

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let accumulatedContent = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split('\n')

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6).trim()
          if (data === '[DONE]') break
          try {
            const parsed = JSON.parse(data)
            if (parsed.token) {
              accumulatedContent += parsed.token
              dispatch({ type: 'APPEND_STREAM_TOKEN', payload: { id: assistantId, token: parsed.token } })
            }
          } catch {
            // ignore malformed chunks
          }
        }
      }

      // Split into paragraphs and stagger as separate bubbles
      const paragraphs = accumulatedContent
        .split(/\n\n+/)
        .map(p => p.trim())
        .filter(p => p.length > 0)

      if (paragraphs.length <= 1) {
        // Single paragraph — keep the streamed message as-is
        const mentioned = parseConstellationMentions(accumulatedContent)
        if (mentioned.constellations.length > 0 || mentioned.asterisms.length > 0 || mentioned.stars.length > 0) {
          dispatch({ type: 'SET_HIGHLIGHTED', payload: mentioned })
        }
      } else {
        // Replace the streamed placeholder with the first paragraph
        dispatch({ type: 'UPDATE_MESSAGE', payload: { id: assistantId, content: paragraphs[0] } })

        // Add remaining paragraphs with 0.5s delay between each
        for (let i = 1; i < paragraphs.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 500))
          const bubbleMsg: ChatMessage = {
            id: makeId(),
            role: 'assistant',
            content: paragraphs[i],
            timestamp: Date.now(),
          }
          dispatch({ type: 'ADD_MESSAGE', payload: bubbleMsg })
        }

        const mentioned = parseConstellationMentions(accumulatedContent)
        if (mentioned.constellations.length > 0 || mentioned.asterisms.length > 0 || mentioned.stars.length > 0) {
          dispatch({ type: 'SET_HIGHLIGHTED', payload: mentioned })
        }
      }

      // After streaming, if this was for a constellation, mark it explored
      if (constellationEvent) {
        dispatch({ type: 'MARK_EXPLORED', payload: constellationEvent.constellationId })
        dispatch({ type: 'UNLOCK_CONSTELLATION', payload: constellationEvent.constellationId })
        dispatch({ type: 'INCREMENT_ENGAGEMENT', payload: constellationEvent.constellationId })
      } else if (state.selectedConstellation) {
        dispatch({ type: 'INCREMENT_ENGAGEMENT', payload: state.selectedConstellation })
      }
    } catch (err) {
      console.error('Chat error:', err)
      dispatch({
        type: 'APPEND_STREAM_TOKEN',
        payload: { id: assistantId, token: 'Sorry, the stars are a bit cloudy right now. Please try again.' },
      })
    } finally {
      dispatch({ type: 'SET_STREAMING', payload: false })
    }
  }, [state, dispatch])

  return { sendMessage, messages: state.messages, isStreaming: state.isStreaming }
}
