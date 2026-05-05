import { useState } from 'react'
import { CONSTELLATIONS } from '../../data/constellations'

interface ProgressIndicatorProps {
  exploredConstellations: string[]
}

export function ProgressIndicator({ exploredConstellations }: ProgressIndicatorProps) {
  const [open, setOpen] = useState(false)
  const total = CONSTELLATIONS.length
  const exploredSet = new Set(exploredConstellations)

  if (exploredConstellations.length === 0) return null

  return (
    <>
      {/* Clickable badge button */}
      <button
        onClick={() => setOpen(true)}
        className="absolute top-4 left-4 bg-space-900/70 border border-star-blue/15 rounded-xl px-3 py-2 hover:border-star-blue/40 hover:bg-space-900/90 transition-all duration-200 group cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <span className="text-star-gold text-xs">✦</span>
          <span className="text-star-dim text-xs font-serif group-hover:text-star-white transition-colors">
            {exploredConstellations.length} / {total} explored
          </span>
          <span className="text-star-blue/50 text-xs group-hover:text-star-blue/80 transition-colors">›</span>
        </div>
        <div className="mt-1.5 w-24 h-1 bg-space-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-star-blue to-star-gold rounded-full transition-all duration-700"
            style={{ width: `${(exploredConstellations.length / total) * 100}%` }}
          />
        </div>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Panel */}
          <div
            className="relative z-10 bg-space-900/95 border border-star-blue/20 rounded-2xl p-6 w-80 max-h-[70vh] flex flex-col shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-star-white font-serif text-base tracking-wide">Your Sky Journal</h2>
                <p className="text-star-dim text-xs mt-0.5">
                  {exploredConstellations.length} of {total} constellations explored
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-star-dim hover:text-star-white text-lg leading-none transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-space-700 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-gradient-to-r from-star-blue to-star-gold rounded-full transition-all duration-700"
                style={{ width: `${(exploredConstellations.length / total) * 100}%` }}
              />
            </div>

            {/* Constellation list */}
            <ul className="overflow-y-auto flex-1 space-y-2 pr-1">
              {CONSTELLATIONS.map(c => {
                const explored = exploredSet.has(c.id)
                return (
                  <li
                    key={c.id}
                    className={`rounded-xl px-3 py-2.5 border transition-colors ${
                      explored
                        ? 'bg-space-800/60 border-star-blue/20'
                        : 'bg-space-900/40 border-star-blue/5'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`text-sm ${explored ? 'text-star-gold' : 'text-star-dim/30'}`}>
                        {explored ? '✦' : '○'}
                      </span>
                      <span
                        className={`text-sm font-serif ${
                          explored ? 'text-star-white' : 'text-star-dim/40'
                        }`}
                      >
                        {c.name}
                      </span>
                      {c.altNames[0] && !explored && (
                        <span className="text-star-dim/25 text-xs ml-auto">{c.iauAbbr}</span>
                      )}
                    </div>
                    {explored && (
                      <p className="text-star-dim text-xs mt-1.5 leading-relaxed pl-5">
                        {c.funFact}
                      </p>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
