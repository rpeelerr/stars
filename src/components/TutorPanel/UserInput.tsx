import { useState, type KeyboardEvent } from 'react'

interface UserInputProps {
  onSend: (message: string) => void
  disabled?: boolean
  placeholder?: string
}

export function UserInput({ onSend, disabled, placeholder }: UserInputProps) {
  const [value, setValue] = useState('')

  function handleSend() {
    const trimmed = value.trim()
    if (!trimmed || disabled) return
    onSend(trimmed)
    setValue('')
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div
      className="flex gap-2 p-3 border-t border-star-blue/10"
      style={{ background: 'rgba(5,13,26,0.6)', backdropFilter: 'blur(4px)' }}
    >
      <textarea
        className="flex-1 bg-space-800/50 border border-star-blue/20 rounded-xl px-3 py-2 text-sm text-star-white/90 font-serif placeholder-star-dim/50 resize-none focus:outline-none focus:border-star-blue/55 transition-all duration-300"
        style={{ boxShadow: 'inset 0 1px 0 rgba(168,216,234,0.05)' }}
        rows={2}
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder={placeholder ?? 'Ask about this constellation...'}
      />
      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        className="flex-shrink-0 w-10 h-10 mt-auto rounded-xl bg-nebula-purple/35 border border-nebula-purple/45 text-star-white disabled:opacity-25 hover:bg-nebula-purple/55 hover:border-nebula-purple/70 transition-all duration-200 flex items-center justify-center"
        style={{ boxShadow: '0 0 12px rgba(124,58,237,0.15)' }}
        aria-label="Send message"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </div>
  )
}
