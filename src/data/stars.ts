import type { Star } from '../types'

// Curated subset of HYG database — stars visible in April from Southern California (34°N)
// Includes named/bright stars for all 15 featured constellations
// ra = right ascension in hours, dec = declination in degrees, mag = apparent magnitude

export const STARS: Star[] = [
  // ── URSA MAJOR ──────────────────────────────────────────────────────────────
  { id: 1, ra: 11.062, dec: 61.751, mag: 1.81, name: 'Dubhe', bayer: 'α UMa' },
  { id: 2, ra: 11.031, dec: 56.383, mag: 2.37, name: 'Merak', bayer: 'β UMa' },
  { id: 3, ra: 11.897, dec: 53.695, mag: 2.44, name: 'Phecda', bayer: 'γ UMa' },
  { id: 4, ra: 12.257, dec: 57.033, mag: 3.31, name: 'Megrez', bayer: 'δ UMa' },
  { id: 5, ra: 12.900, dec: 55.960, mag: 1.77, name: 'Alioth', bayer: 'ε UMa' },
  { id: 6, ra: 13.399, dec: 54.925, mag: 2.23, name: 'Mizar', bayer: 'ζ UMa' },
  { id: 7, ra: 13.792, dec: 49.313, mag: 1.86, name: 'Alkaid', bayer: 'η UMa' },
  { id: 8, ra: 13.420, dec: 54.988, mag: 3.95, name: 'Alcor', bayer: '80 UMa' },
  { id: 9, ra: 8.987,  dec: 48.042, mag: 3.45, name: 'Talitha', bayer: 'ι UMa' },
  { id: 10, ra: 10.285, dec: 42.915, mag: 3.01, name: 'Tania Borealis', bayer: 'λ UMa' },
  { id: 11, ra: 10.372, dec: 41.499, mag: 3.05, name: 'Tania Australis', bayer: 'μ UMa' },

  // ── URSA MINOR ───────────────────────────────────────────────────────────────
  { id: 20, ra: 2.530,  dec: 89.264, mag: 1.97, name: 'Polaris', bayer: 'α UMi' },
  { id: 21, ra: 14.845, dec: 74.156, mag: 2.08, name: 'Kochab', bayer: 'β UMi' },
  { id: 22, ra: 15.735, dec: 71.834, mag: 3.05, name: 'Pherkad', bayer: 'γ UMi' },
  { id: 23, ra: 17.537, dec: 86.587, mag: 4.35, bayer: 'δ UMi' },
  { id: 24, ra: 16.766, dec: 82.037, mag: 4.23, bayer: 'ε UMi' },
  { id: 25, ra: 15.734, dec: 77.795, mag: 4.31, bayer: 'ζ UMi' },
  { id: 26, ra: 16.292, dec: 75.755, mag: 5.02, name: 'Anwar al Farkadain', bayer: 'η UMi' },

  // ── LEO ─────────────────────────────────────────────────────────────────────
  { id: 40, ra: 10.139, dec: 11.967, mag: 1.35, name: 'Regulus', bayer: 'α Leo' },
  { id: 41, ra: 11.818, dec: 14.573, mag: 2.14, name: 'Denebola', bayer: 'β Leo' },
  { id: 42, ra: 10.333, dec: 19.842, mag: 2.01, name: 'Algieba', bayer: 'γ Leo' },
  { id: 43, ra: 11.235, dec: 20.524, mag: 2.56, name: 'Zosma', bayer: 'δ Leo' },
  { id: 44, ra: 9.879,  dec: 26.007, mag: 3.88, name: 'Rasalas', bayer: 'μ Leo' },
  { id: 45, ra: 10.167, dec: 23.417, mag: 3.44, name: 'Adhafera', bayer: 'ζ Leo' },
  { id: 46, ra: 10.122, dec: 16.763, mag: 3.52, bayer: 'η Leo' },
  { id: 47, ra: 11.237, dec: 15.430, mag: 3.33, name: 'Chertan', bayer: 'θ Leo' },

  // ── CASSIOPEIA ───────────────────────────────────────────────────────────────
  { id: 60, ra: 0.676,  dec: 56.537, mag: 2.24, name: 'Schedar', bayer: 'α Cas' },
  { id: 61, ra: 0.153,  dec: 59.150, mag: 2.28, name: 'Caph', bayer: 'β Cas' },
  { id: 62, ra: 0.945,  dec: 60.717, mag: 2.47, name: 'Navi', bayer: 'γ Cas' },
  { id: 63, ra: 1.430,  dec: 60.235, mag: 2.68, name: 'Ruchbah', bayer: 'δ Cas' },
  { id: 64, ra: 1.907,  dec: 63.670, mag: 3.38, name: 'Segin', bayer: 'ε Cas' },

  // ── GEMINI ──────────────────────────────────────────────────────────────────
  { id: 80, ra: 7.755,  dec: 28.026, mag: 1.14, name: 'Pollux', bayer: 'β Gem' },
  { id: 81, ra: 7.577,  dec: 31.888, mag: 1.58, name: 'Castor', bayer: 'α Gem' },
  { id: 82, ra: 6.629,  dec: 16.399, mag: 1.93, name: 'Alhena', bayer: 'γ Gem' },
  { id: 83, ra: 7.336,  dec: 21.982, mag: 3.60, name: 'Wasat', bayer: 'δ Gem' },
  { id: 84, ra: 6.732,  dec: 25.131, mag: 2.98, name: 'Mebsuda', bayer: 'ε Gem' },
  { id: 85, ra: 6.383,  dec: 22.513, mag: 2.87, name: 'Tejat Posterior', bayer: 'μ Gem' },
  { id: 86, ra: 7.068,  dec: 20.570, mag: 3.79, name: 'Mekbuda', bayer: 'ζ Gem' },
  { id: 87, ra: 6.248,  dec: 22.507, mag: 3.28, name: 'Propus', bayer: 'η Gem' },

  // ── ORION ───────────────────────────────────────────────────────────────────
  { id: 100, ra: 5.919, dec: 7.407,  mag: 0.45, name: 'Betelgeuse', bayer: 'α Ori' },
  { id: 101, ra: 5.242, dec: -8.202, mag: 0.18, name: 'Rigel',      bayer: 'β Ori' },
  { id: 102, ra: 5.419, dec: 6.350,  mag: 1.64, name: 'Bellatrix',  bayer: 'γ Ori' },
  { id: 103, ra: 5.534, dec: -0.299, mag: 2.23, name: 'Mintaka',    bayer: 'δ Ori' },
  { id: 104, ra: 5.603, dec: -1.202, mag: 1.69, name: 'Alnilam',    bayer: 'ε Ori' },
  { id: 105, ra: 5.679, dec: -1.943, mag: 1.74, name: 'Alnitak',    bayer: 'ζ Ori' },
  { id: 107, ra: 5.796, dec: -9.670, mag: 2.06, name: 'Saiph',      bayer: 'κ Ori' },
  { id: 108, ra: 5.586, dec: 9.934,  mag: 3.39, name: 'Meissa',     bayer: 'λ Ori' },

  // ── CANIS MAJOR ─────────────────────────────────────────────────────────────
  { id: 120, ra: 6.753, dec: -16.716, mag: -1.46, name: 'Sirius', bayer: 'α CMa' },
  { id: 121, ra: 6.977, dec: -28.972, mag: 1.98, name: 'Adhara', bayer: 'ε CMa' },
  { id: 122, ra: 6.379, dec: -17.956, mag: 3.02, name: 'Mirzam', bayer: 'β CMa' },
  { id: 123, ra: 7.140, dec: -26.393, mag: 3.78, name: 'Wezen', bayer: 'δ CMa' },
  { id: 124, ra: 7.402, dec: -29.303, mag: 4.12, name: 'Aludra', bayer: 'η CMa' },
  { id: 125, ra: 6.338, dec: -18.229, mag: 3.02, bayer: 'ζ CMa' },

  // ── CANIS MINOR ─────────────────────────────────────────────────────────────
  { id: 140, ra: 7.655, dec: 5.225,  mag: 0.38, name: 'Procyon', bayer: 'α CMi' },
  { id: 141, ra: 7.452, dec: 8.289,  mag: 2.90, name: 'Gomeisa', bayer: 'β CMi' },

  // ── CANCER ──────────────────────────────────────────────────────────────────
  { id: 160, ra: 8.978, dec: 11.858, mag: 3.53, name: 'Tarf', bayer: 'β Cnc' },
  { id: 161, ra: 8.745, dec: 21.469, mag: 3.94, name: 'Acubens', bayer: 'α Cnc' },
  { id: 162, ra: 8.721, dec: 18.154, mag: 4.67, bayer: 'δ Cnc' },
  { id: 163, ra: 8.778, dec: 28.760, mag: 5.14, name: 'Asellus Borealis', bayer: 'γ Cnc' },
  { id: 164, ra: 8.745, dec: 9.187,  mag: 4.25, bayer: 'ι Cnc' },

  // ── VIRGO ───────────────────────────────────────────────────────────────────
  { id: 180, ra: 13.420, dec: -11.161, mag: 0.98, name: 'Spica', bayer: 'α Vir' },
  { id: 181, ra: 11.845, dec: 1.765,   mag: 3.61, name: 'Zaniah', bayer: 'η Vir' },
  { id: 182, ra: 12.332, dec: -0.668,  mag: 2.83, name: 'Porrima', bayer: 'γ Vir' },
  { id: 183, ra: 12.926, dec: 3.397,   mag: 3.38, name: 'Vindemiatrix', bayer: 'ε Vir' },
  { id: 184, ra: 13.036, dec: -5.539,  mag: 3.65, name: 'Heze', bayer: 'ζ Vir' },
  { id: 185, ra: 14.770, dec: 1.893,   mag: 4.08, name: 'Syrma', bayer: 'ι Vir' },
  { id: 186, ra: 12.694, dec: -1.449,  mag: 3.89, name: 'Auva', bayer: 'δ Vir' },

  // ── BOÖTES ──────────────────────────────────────────────────────────────────
  { id: 200, ra: 14.261, dec: 19.182, mag: -0.05, name: 'Arcturus', bayer: 'α Boo' },
  { id: 201, ra: 15.032, dec: 40.391, mag: 3.58,  name: 'Nekkar', bayer: 'β Boo' },
  { id: 202, ra: 14.530, dec: 38.308, mag: 3.04,  name: 'Seginus', bayer: 'γ Boo' },
  { id: 203, ra: 14.750, dec: 27.074, mag: 2.37,  name: 'Izar', bayer: 'ε Boo' },
  { id: 204, ra: 13.912, dec: 18.397, mag: 2.68,  name: 'Muphrid', bayer: 'η Boo' },
  { id: 205, ra: 15.258, dec: 33.316, mag: 3.47,  bayer: 'δ Boo' },
  { id: 206, ra: 15.408, dec: 37.377, mag: 4.31,  name: 'Alkalurops', bayer: 'μ Boo' },

  // ── CORVUS ──────────────────────────────────────────────────────────────────
  { id: 220, ra: 12.169, dec: -24.729, mag: 2.59, name: 'Gienah', bayer: 'γ Crv' },
  { id: 221, ra: 12.498, dec: -23.397, mag: 2.65, name: 'Algorab', bayer: 'δ Crv' },
  { id: 222, ra: 12.573, dec: -16.515, mag: 3.02, name: 'Kraz', bayer: 'β Crv' },
  { id: 223, ra: 12.141, dec: -22.620, mag: 4.02, name: 'Minkar', bayer: 'ε Crv' },
  { id: 224, ra: 12.263, dec: -17.542, mag: 4.86, bayer: 'α Crv' },

  // ── AURIGA ──────────────────────────────────────────────────────────────────
  { id: 240, ra: 5.278,  dec: 45.998, mag: 0.08, name: 'Capella', bayer: 'α Aur' },
  { id: 241, ra: 5.992,  dec: 44.947, mag: 1.90, name: 'Menkalinan', bayer: 'β Aur' },
  { id: 242, ra: 5.995,  dec: 37.21,  mag: 2.65, name: 'Mahasim', bayer: 'θ Aur' },
  { id: 243, ra: 4.949,  dec: 33.166, mag: 2.99, name: 'Hassaleh', bayer: 'ι Aur' },
  { id: 244, ra: 5.033,  dec: 43.823, mag: 3.72, name: 'Almaaz', bayer: 'ε Aur' },

  // ── PERSEUS ──────────────────────────────────────────────────────────────────
  { id: 260, ra: 3.405,  dec: 49.862, mag: 1.80, name: 'Mirfak', bayer: 'α Per' },
  { id: 261, ra: 3.136,  dec: 40.956, mag: 2.12, name: 'Algol', bayer: 'β Per' },
  { id: 262, ra: 3.715,  dec: 47.788, mag: 2.85, bayer: 'δ Per' },
  { id: 263, ra: 3.983,  dec: 35.791, mag: 2.90, name: 'Menkib', bayer: 'ξ Per' },
  { id: 264, ra: 3.083,  dec: 53.507, mag: 2.93, bayer: 'γ Per' },
  { id: 265, ra: 2.845,  dec: 55.896, mag: 3.77, bayer: 'η Per' },

  // ── HYDRA ───────────────────────────────────────────────────────────────────
  { id: 280, ra: 9.460,  dec: -8.659,  mag: 1.98, name: 'Alphard', bayer: 'α Hya' },
  { id: 281, ra: 11.882, dec: -33.908, mag: 3.11, bayer: 'β Hya' },
  { id: 282, ra: 13.315, dec: -23.171, mag: 3.00, bayer: 'γ Hya' },
  { id: 283, ra: 11.550, dec: -31.858, mag: 3.11, bayer: 'ξ Hya' },
  { id: 284, ra: 10.827, dec: -16.194, mag: 3.54, bayer: 'ν Hya' },
  { id: 285, ra: 14.106, dec: -26.682, mag: 3.27, bayer: 'π Hya' },
  { id: 286, ra: 8.780,  dec: 6.419,   mag: 3.38, bayer: 'ε Hya' },
  { id: 287, ra: 9.151,  dec: 2.314,   mag: 3.11, bayer: 'ζ Hya' },
]

export const STARS_BY_ID: Record<number, Star> = Object.fromEntries(
  STARS.map(s => [s.id, s])
)

// Background filler stars for a richer sky (random dim stars across the April sky)
export const BACKGROUND_STARS: Star[] = Array.from({ length: 300 }, (_, i) => ({
  id: 10000 + i,
  ra: Math.random() * 10 + 5,    // April sky: RA 5–15h
  dec: Math.random() * 120 - 30, // Dec range for SoCal: -30 to +90
  mag: 4.5 + Math.random() * 1.5,
}))
