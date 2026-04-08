import { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { useChat } from '../../hooks/useChat'

// Floating sparkle particles — deterministic positions so no layout shift
const PARTICLES = [
  { left: '11%',  top: '22%',  delay: '0s',    dur: '4.2s',  size: 10, char: '✦' },
  { left: '84%',  top: '16%',  delay: '1.4s',  dur: '5.1s',  size: 8,  char: '·' },
  { left: '27%',  top: '73%',  delay: '0.7s',  dur: '4.8s',  size: 10, char: '✦' },
  { left: '72%',  top: '62%',  delay: '2.1s',  dur: '3.9s',  size: 7,  char: '·' },
  { left: '48%',  top: '82%',  delay: '1.0s',  dur: '5.5s',  size: 9,  char: '✦' },
  { left: '91%',  top: '48%',  delay: '3.2s',  dur: '4.4s',  size: 7,  char: '·' },
  { left: '6%',   top: '57%',  delay: '2.6s',  dur: '4.9s',  size: 9,  char: '✦' },
  { left: '58%',  top: '9%',   delay: '0.4s',  dur: '3.6s',  size: 8,  char: '·' },
  { left: '38%',  top: '18%',  delay: '1.8s',  dur: '4.6s',  size: 7,  char: '✦' },
  { left: '78%',  top: '33%',  delay: '3.8s',  dur: '5.2s',  size: 8,  char: '·' },
  { left: '18%',  top: '42%',  delay: '2.9s',  dur: '4.1s',  size: 7,  char: '✦' },
  { left: '63%',  top: '78%',  delay: '0.2s',  dur: '5.8s',  size: 9,  char: '·' },
]

export function IntroScreen() {
  const { dispatch } = useAppContext()
  const { sendMessage } = useChat()
  const [starting, setStarting] = useState(false)

  async function handleBegin() {
    setStarting(true)
    dispatch({ type: 'SET_PHASE', payload: 'chat' })
    await sendMessage(
      'Hello! I\'m here to learn about the stars and constellations.',
      {}
    )
  }

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center"
      style={{ background: 'rgba(2,4,9,0.94)', backdropFilter: 'blur(16px)' }}
    >
      {/* Floating sparkle particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            fontSize: p.size,
            color: p.char === '✦' ? 'rgba(168,216,234,0.7)' : 'rgba(255,217,125,0.6)',
            animation: `particle-rise ${p.dur} ease-out ${p.delay} infinite`,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {p.char}
        </span>
      ))}

      {/* Ambient glow rings behind icon */}
      <div
        className="absolute"
        style={{
          width: 300, height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,216,234,0.06) 0%, transparent 70%)',
          animation: 'nebula-breathe 6s ease-in-out infinite',
        }}
      />

      {/* Content card */}
      <div className="relative max-w-md text-center px-8 animate-fade-in">

        {/* Icon cluster */}
        <div
          className="mb-7 relative inline-block"
          style={{ animation: 'icon-float 5s ease-in-out infinite' }}
        >
          {/* Expanding ring */}
          <div style={{
            position: 'absolute',
            inset: -20,
            borderRadius: '50%',
            border: '1px solid rgba(168,216,234,0.25)',
            animation: 'ring-expand 4s ease-out 0.5s infinite',
          }} />
          <div style={{
            position: 'absolute',
            inset: -10,
            borderRadius: '50%',
            border: '1px solid rgba(168,216,234,0.15)',
            animation: 'ring-expand 4s ease-out 1.5s infinite',
          }} />

          {/* Main icon */}
          <span
            style={{
              fontSize: 52,
              lineHeight: 1,
              display: 'block',
              animation: 'gold-glow 3.5s ease-in-out infinite',
            }}
          >
            ✦
          </span>

          {/* Satellite stars */}
          <span style={{
            position: 'absolute', top: -6, right: -12,
            fontSize: 10, color: 'rgba(168,216,234,0.8)',
            animation: 'twinkle 2.1s ease-in-out 0.3s infinite',
          }}>✦</span>
          <span style={{
            position: 'absolute', bottom: -4, left: -14,
            fontSize: 8, color: 'rgba(255,217,125,0.6)',
            animation: 'twinkle 3.2s ease-in-out 1.1s infinite',
          }}>✦</span>
          <span style={{
            position: 'absolute', top: 4, left: -18,
            fontSize: 6, color: 'rgba(168,216,234,0.5)',
            animation: 'twinkle 2.8s ease-in-out 0.7s infinite',
          }}>·</span>
        </div>

        {/* Title */}
        <h1
          className="text-star-white font-serif text-5xl mb-2 tracking-widest"
          style={{ animation: 'text-shimmer 4s ease-in-out infinite' }}
        >
          Stars
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <span style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, rgba(168,216,234,0.3))' }} />
          <span className="text-star-gold text-xs" style={{ animation: 'twinkle 4s ease-in-out infinite' }}>✦</span>
          <span style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, rgba(168,216,234,0.3))' }} />
        </div>

        <p className="text-star-blue/75 font-serif italic text-sm mb-3">
          A guide to the night sky
        </p>
        <p className="text-star-dim font-serif text-sm mb-8 leading-relaxed">
          Explore the constellations visible from Southern California this April.
          Discover the stories they carry — from ancient Greece to the Pacific Islands.
        </p>

        {/* Cultural tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['Greek mythology', 'Egyptian astronomy', 'Indigenous star lore', 'Navigation'].map((tag, i) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-space-800 border border-star-blue/20 text-star-dim font-serif"
              style={{
                animation: `fadeIn 0.6s ease-out ${0.1 * i + 0.3}s both`,
                boxShadow: '0 0 8px rgba(168,216,234,0.04)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Begin button */}
        <button
          onClick={handleBegin}
          disabled={starting}
          className="px-10 py-3 bg-space-800 border border-star-blue/30 rounded-xl text-star-white font-serif text-base hover:border-star-blue/65 hover:bg-space-700 transition-all duration-300 disabled:opacity-50"
          style={{
            animation: starting ? undefined : 'button-ambient 3.5s ease-in-out infinite',
            letterSpacing: '0.05em',
          }}
        >
          {starting ? (
            <span className="flex items-center gap-2">
              <span style={{ animation: 'twinkle 0.8s ease-in-out infinite' }}>✦</span>
              Opening the sky...
            </span>
          ) : (
            'Begin your journey'
          )}
        </button>

        {/* Hint */}
        <p
          className="text-star-dim/50 font-serif text-xs mt-5 italic"
          style={{ animation: 'fadeIn 1.2s ease-out 1s both' }}
        >
          Click any constellation to explore its story
        </p>
      </div>
    </div>
  )
}
