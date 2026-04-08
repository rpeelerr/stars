import type { ChatMessage } from '../../types'

interface MessageBubbleProps {
  message: ChatMessage
  isStreaming?: boolean
}

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/_(.*?)_/g, '$1')
}

export function MessageBubble({ message, isStreaming }: MessageBubbleProps) {
  const isUser = message.role === 'user'

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 animate-slide-up`}
    >
      {!isUser && (
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full bg-space-800 border border-star-blue/30 flex items-center justify-center mr-2 mt-1"
          style={{ boxShadow: '0 0 8px rgba(168,216,234,0.15)' }}
        >
          <span
            className="text-star-gold text-xs"
            style={{ animation: 'gold-glow 3.5s ease-in-out infinite' }}
          >✦</span>
        </div>
      )}
      <div
        className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? 'bg-nebula-purple/25 text-star-white border border-nebula-purple/35 rounded-tr-sm'
            : 'bg-space-800/70 text-star-white/90 border border-star-blue/12 rounded-tl-sm'
        }`}
        style={!isUser ? {
          boxShadow: '0 1px 12px rgba(168,216,234,0.05), inset 0 1px 0 rgba(168,216,234,0.06)',
        } : undefined}
      >
        <p className="font-serif whitespace-pre-wrap">{stripMarkdown(message.content)}
          {isStreaming && (
            <span
              className="inline-block w-0.5 h-3.5 bg-star-blue/80 ml-0.5 align-middle"
              style={{ animation: 'cursor-blink 0.9s ease-in-out infinite' }}
            />
          )}
        </p>
      </div>
    </div>
  )
}
