import type { Asterism } from '../types'

export const ASTERISMS: Asterism[] = [
  {
    id: 'big_dipper',
    name: 'Big Dipper',
    altNames: ['Great Dipper', 'The Plough', 'The Plow', 'Nā Hiku', 'Beidou', 'Northern Dipper'],
    constellationId: 'ursa_major',
    stars: [1, 2, 3, 4, 5, 6, 7],
    lines: [
      // Bowl (closed quadrilateral)
      { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 1 },
      // Handle
      { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 },
    ],
  },
  {
    id: 'sickle_of_leo',
    name: 'Sickle of Leo',
    altNames: ["The Sickle", "Leo's Sickle", 'Sickle'],
    constellationId: 'leo',
    stars: [40, 42, 44, 45, 46],
    lines: [
      // Curved hook from Rasalas down to Regulus
      { from: 44, to: 45 }, { from: 45, to: 42 }, { from: 42, to: 46 }, { from: 46, to: 40 },
    ],
  },
  {
    id: 'orions_belt',
    name: "Orion's Belt",
    altNames: ['Belt of Orion', 'The Belt', 'Three Kings', 'Three Sisters', 'Mamalhuaztli', 'Tautoro'],
    constellationId: 'orion',
    stars: [103, 104, 105],
    lines: [
      { from: 103, to: 104 }, { from: 104, to: 105 },
    ],
  },
]

export const ASTERISMS_BY_ID: Record<string, Asterism> = Object.fromEntries(
  ASTERISMS.map(a => [a.id, a])
)
