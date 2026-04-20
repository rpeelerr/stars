import type { Constellation } from '../types'

export const CONSTELLATIONS: Constellation[] = [
  {
    id: 'ursa_major',
    iauAbbr: 'UMa',
    name: 'Ursa Major',
    altNames: ['Great Bear'],
    stars: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    lines: [
      { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 },
      { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 },
      { from: 1, to: 9 }, { from: 9, to: 10 }, { from: 10, to: 11 },
    ],
    centerRa: 11.5, centerDec: 55.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek',
        story: 'Callisto was a nymph beloved by Zeus who was transformed into a bear by the jealous Hera. Zeus placed her among the stars as Ursa Major so she would be immortal, eternally circling the celestial pole.',
        significance: 'The two "pointer stars" Merak and Dubhe always point toward Polaris, making Ursa Major the most important navigational constellation in the northern hemisphere.',
      },
      {
        culture: 'Iroquois (Haudenosaunee)',
        story: 'The bowl of the Big Dipper represents a great bear, and the three handle stars are hunters pursuing her. In autumn when the bear "descends" lower in the sky, the hunters have wounded her — and her blood turns the leaves red.',
        significance: "Served as a seasonal calendar: the bear's position in the sky marked planting and harvest times through the year.",
      },
      {
        culture: 'Chinese',
        story: 'Known as Beidou, the Northern Dipper, these seven stars form a ladle that pours the celestial waters of life. The star Dubhe is the palace of the celestial emperor, ruling from the north.',
        significance: 'The Northern Dipper was used to determine the direction of north and to mark the progression of seasons in ancient Chinese astronomy.',
      },
      {
        culture: 'Babylonian',
        story: 'The MUL.APIN star catalog (c. 1000 BCE) called Ursa Major EREQQU — "The Wagon" — and associated it with Ninlil, queen of heaven. The faint star Alcor, just above Mizar in the handle, was called the Fox and linked to the war god Erra. The wagon was pictured eternally rolling around the pole, never stopping.',
        significance: 'The Wagon was one of the foundational circumpolar stars in Babylonian astronomy. Its ceaseless circling around the pole made it a symbol of divine order and cosmic permanence — the sky\'s eternal clock.',
      },
      {
        culture: 'Hawaiian',
        story: 'Hawaiian navigators called these seven stars Nā Hiku — "The Seven." They formed the beginning of Ka Iwikuamo\'o, the Backbone starline — a chain of stars stretching from Hokupā\'a (the North Star) down through Nā Hiku, continuing to Hōkūle\'a (Arcturus) and Hikianalia (Spica). Navigators memorized this chain as a living spine across the sky.',
        significance: 'Nā Hiku anchored the entire Hawaiian celestial navigation system. By knowing which direction each star rose and set, Polynesian voyagers were able to cross thousands of miles of open Pacific Ocean without any instruments.',
      },
    ],
  },
  {
    id: 'ursa_minor',
    iauAbbr: 'UMi',
    name: 'Ursa Minor',
    altNames: ['Little Dipper', 'Little Bear'],
    stars: [20, 21, 22, 23, 24, 25, 26],
    lines: [
      // Handle: Polaris → δ → ε → ζ
      { from: 20, to: 23 }, { from: 23, to: 24 }, { from: 24, to: 25 },
      // Bowl (IAU order): ζ → η → γ (Pherkad) → β (Kochab) → ζ
      { from: 25, to: 26 }, { from: 26, to: 22 }, { from: 22, to: 21 }, { from: 21, to: 25 },
    ],
    centerRa: 15.0, centerDec: 78.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek',
        story: 'Arcas, the son of Callisto, was placed in the sky as Ursa Minor by Zeus. He nearly killed his mother (transformed into Ursa Major) when hunting, and Zeus prevented the tragedy by lifting them both to the stars.',
        significance: 'Polaris, the North Star at the tip of the Little Dipper\'s handle, stays fixed in the sky while all other stars rotate around it — making it the perfect navigational anchor.',
      },
      {
        culture: 'Phoenician',
        story: 'Ancient Phoenician sailors called Polaris the "Guiding Star" and used the Little Bear to navigate the Mediterranean. Unlike Greek sailors who used the Big Dipper, Phoenicians relied on this tighter constellation for precision.',
        significance: 'The fixed position of Polaris enabled open-ocean navigation across the Mediterranean and beyond, enabling the Phoenicians to become the greatest traders of the ancient world.',
      },
      {
        culture: 'Hindu (Jyotisha)',
        story: 'Polaris is Dhruva, a young prince who meditated so devoutly that Vishnu granted him an eternal place in the heavens as the immovable star around which all creation revolves.',
        significance: 'Dhruva symbolizes devotion and steadfastness. The story teaches that sincere effort and focus can elevate anyone to the highest position.',
      },
      {
        culture: 'Aztec',
        story: 'The Aztecs knew Ursa Minor as Xonecuilli — the "Twisted Foot." It represented Nanahuatzin, a poor and humble deity covered in sores and boils, who bravely leaped into a great bonfire during the creation of the world to become Tonatiuh, the Sun god. His twisted feet mark his eternal place in the sky as a reminder of his sacrifice.',
        significance: 'Nanahuatzin\'s story taught that courage and self-sacrifice, even from the lowliest being, can transform the world. This was one of the most important moral lessons in Aztec cosmology — greatness comes not from privilege but from willingness to give everything.',
      },
      {
        culture: 'Babylonian',
        story: 'The Babylonians called Ursa Minor MAR.GÍD.DA.AN.NA — the "Wagon of Heaven" — associated with the god Damkianna. While the Great Wagon (Ursa Major) was tied to the earthly realm, this smaller wagon rode the heavens themselves, circling the celestial pole as a chariot of the sky gods.',
        significance: 'As a circumpolar constellation, the Wagon of Heaven never sank below the horizon — an eternal presence that anchored the north of the Babylonian sky and served as a fixed reference point for astronomical observations.',
      },
    ],
  },
  {
    id: 'leo',
    iauAbbr: 'Leo',
    name: 'Leo',
    altNames: ['The Lion', 'Lion'],
    stars: [40, 41, 42, 43, 44, 45, 46, 47],
    lines: [
      // Body loop (IAU standard): Denebola → Chertan → Regulus → η → Algieba → Zosma → Denebola
      { from: 41, to: 47 }, { from: 47, to: 40 }, { from: 40, to: 46 }, { from: 46, to: 42 },
      { from: 42, to: 43 }, { from: 43, to: 41 },
      // Sickle spur from Algieba: Algieba → Adhafera → Rasalas
      { from: 42, to: 45 }, { from: 45, to: 44 },
    ],
    centerRa: 10.5, centerDec: 18.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek / Roman',
        story: 'Leo represents the Nemean Lion, a ferocious beast with impenetrable golden fur that Hercules strangled with his bare hands as the first of his Twelve Labors. Zeus honored the lion\'s ferocity by placing it in the sky.',
        significance: 'In ancient times, the Sun passed through Leo during summer solstice. When the Nile flooded each year (vital for Egyptian agriculture), Leo was prominent in the sky — some believe the Sphinx was built facing Leo rising at dawn.',
      },
      {
        culture: 'Mesopotamian',
        story: 'In the oldest star catalogs, the Babylonians called Leo "The Great Lion" (UR.GU.LA) and associated it with the king and the Sun. The bright star Regulus — meaning "little king" — was considered the most royal star in the sky.',
        significance: 'Regulus in Leo marks the ecliptic so precisely that it was used to calibrate ancient star catalogs. Royal coronations were sometimes timed to align with Regulus.',
      },
      {
        culture: 'Hindu (Vedic)',
        story: 'Leo corresponds to Simha in Vedic astrology, ruled by the Sun. It represents Narasimha, the half-lion half-man avatar of Vishnu who protected his devotee Prahlada from the demon king Hiranyakashipu.',
        significance: 'The Lion\'s sickle asterism (Regulus through the curve of stars) was used as a calendar marker for agricultural seasons in the Indus Valley.',
      },
      {
        culture: 'Chinese',
        story: 'In traditional Chinese astronomy, the stars of Leo fell within the Supreme Palace Enclosure (Tàiwēiyuán) — the celestial court where the emperor and his ministers conducted the affairs of the kingdom. The stars were organized as officials, generals, and courtiers, each with a role in the heavenly government mirroring the one on Earth.',
        significance: 'The Supreme Palace Enclosure was the administrative heart of the Chinese sky. By watching which officials were prominent in the night sky, ancient Chinese astronomers and advisors drew omens and guidance for the affairs of the imperial court.',
      },
    ],
  },
  {
    id: 'cassiopeia',
    iauAbbr: 'Cas',
    name: 'Cassiopeia',
    altNames: ['The Queen', 'The W', 'The M'],
    stars: [60, 61, 62, 63, 64],
    lines: [
      { from: 61, to: 60 }, { from: 60, to: 62 }, { from: 62, to: 63 }, { from: 63, to: 64 },
    ],
    centerRa: 1.0, centerDec: 60.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek',
        story: 'Queen Cassiopeia of Ethiopia boasted she was more beautiful than the sea nymphs. Poseidon punished her hubris by chaining her daughter Andromeda to a rock as a sea monster\'s sacrifice. As punishment, Cassiopeia was placed in the sky chained to her throne, spinning around the north pole — sometimes hanging upside down in humiliation.',
        significance: 'Cassiopeia is circumpolar from most of the northern hemisphere, meaning it never sets. It always points toward the Milky Way\'s most star-rich regions and serves as a landmark for finding Andromeda galaxy.',
      },
      {
        culture: 'Arabic',
        story: 'Arab astronomers called this constellation Al-Kaff al-Khadib ("the stained hand"), depicting a hand dyed with henna in a gesture of celebration. The five stars traced the fingers and palm of an outstretched hand.',
        significance: 'The constellation was used by Arabian navigators to track the seasons and locate the north celestial pole when Polaris was harder to see.',
      },
      {
        culture: 'Babylonian',
        story: 'In the ancient Babylonian star catalog MUL.APIN, Cassiopeia was EPINNU — "The Plough" — associated with the great god Enlil, lord of wind, storm, and destiny. The adjacent Wolf star (gamma Cassiopeiae) was the plough\'s seeder, scattering stars across the sky like grain across a field.',
        significance: 'As a circumpolar constellation visible all year from Mesopotamia, the Plough never set below the horizon — an eternal sign of Enlil\'s presence overseeing the cosmic harvest.',
      },
      {
        culture: 'Hawaiian',
        story: 'Hawaiian navigators called Cassiopeia\'s W-shape \'Iwakeli\'i — the Chief Frigate Bird. Frigatebirds fly enormous distances over open ocean and were known to guide voyagers toward land. In the Ka Lupe o Kawelo starline, \'Iwakeli\'i served as the northern starting point, with its shape pointing navigators toward their bearing.',
        significance: 'The frigate bird is a sacred wayfinding symbol in Polynesian culture. Seeing frigatebirds in flight at sea meant land was near — so naming a star formation after them was both practical navigation and spiritual acknowledgment.',
      },
    ],
  },
  {
    id: 'gemini',
    iauAbbr: 'Gem',
    name: 'Gemini',
    altNames: ['The Twins', 'Castor and Pollux'],
    stars: [80, 81, 82, 83, 84, 85, 86, 87],
    lines: [
      // Head connection
      { from: 81, to: 80 },
      // Castor's body (west leg): Castor → Mebsuda → Tejat → Propus
      { from: 81, to: 84 }, { from: 84, to: 85 }, { from: 85, to: 87 },
      // Pollux's body (east leg): Pollux → Wasat → Mekbuda → Alhena
      { from: 80, to: 83 }, { from: 83, to: 86 }, { from: 86, to: 82 },
    ],
    centerRa: 7.1, centerDec: 23.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek / Roman',
        story: 'Castor and Pollux were the twin sons of Leda. Castor was mortal (son of the king of Sparta) and Pollux was divine (son of Zeus). When Castor died in battle, Pollux was so grief-stricken he begged Zeus to share his immortality — so they alternate between Olympus and the underworld, forever together.',
        significance: 'Sailors considered Castor and Pollux protective spirits of the sea. "St. Elmo\'s fire" — the electrical glow seen on ship masts during storms — was thought to be the twins watching over sailors.',
      },
      {
        culture: 'Mesopotamian',
        story: 'The Babylonians called these stars "The Great Twins" (MASH.TAB.BA.GAL.GAL), associating them with Lugalirra and Meslamtaea, twin gods of the underworld who also protected the living from evil.',
        significance: 'The Sun entered Gemini at summer solstice in ancient times. Gemini was called the "Gate of the Sun" — the doorway between the mortal world and the realm of the gods.',
      },
      {
        culture: 'Aztec',
        story: 'The Aztecs called Gemini Citlaltlachtli — "The Ball Game of the Stars." The sacred ball game (tlachtli) was not just a sport but a cosmic ritual, with the ball\'s movement across the playing field representing the motion of the Sun and Moon through the heavens. The twin stars of Gemini embodied this eternal celestial match.',
        significance: 'The ball game held deep ritual and cosmological meaning in Mesoamerican cultures. Connecting these twin stars to the game linked the night sky directly to cycles of life, death, and rebirth played out on the court.',
      },
      {
        culture: 'Hawaiian',
        story: 'Hawaiian navigators named Castor Nanamua ("forward twin") and Pollux Nanahope ("rear twin"), and they were central stars in Ke Ka o Makali\'i — the great canoe bailer that scoops up the sky. Along with Capella, Procyon, and Sirius, the twins formed a navigation tool stretching across the winter sky, guiding voyagers by their rising and setting points.',
        significance: 'In Hawaiian celestial navigation, the rising and setting "houses" of stars like the Gemini twins gave precise compass bearings. A navigator who memorized all the star houses could guide a canoe accurately across the entire Pacific.',
      },
    ],
  },
  {
    id: 'orion',
    iauAbbr: 'Ori',
    name: 'Orion',
    altNames: ['The Hunter', 'The Giant'],
    stars: [100, 101, 102, 103, 104, 105, 107, 108],
    lines: [
      { from: 108, to: 100 }, { from: 108, to: 102 }, // Meissa (head) → shoulders
      { from: 100, to: 105 }, // Betelgeuse → Alnitak (left shoulder down to belt)
      { from: 102, to: 103 }, // Bellatrix → Mintaka (right shoulder down to belt)
      { from: 103, to: 104 }, { from: 104, to: 105 }, // belt: Mintaka → Alnilam → Alnitak
      { from: 105, to: 107 }, // Alnitak → Saiph (left foot)
      { from: 103, to: 101 }, // Mintaka → Rigel (right foot)
      { from: 107, to: 101 }, // Saiph → Rigel (across the feet)
    ],
    centerRa: 5.5, centerDec: 0.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek',
        story: 'Orion was the greatest hunter in the world, son of Poseidon, so mighty he could walk on water. He boasted he would hunt all animals to extinction, so Gaia sent a scorpion to kill him. They were placed on opposite sides of the sky so they would never meet again.',
        significance: 'Orion rises in the east and sets in the west like all stars, but his belt — three perfectly aligned stars — points east to west. For thousands of years, the rising of Orion marked the beginning of the agricultural year in many cultures.',
      },
      {
        culture: 'Egyptian',
        story: 'The Egyptians saw Orion as Osiris, god of the afterlife and resurrection. The three belt stars aligned with the three pyramids of Giza. The Nile mirrored the Milky Way, and Orion\'s rising announced the Nile flood that brought fertility to Egypt.',
        significance: 'The alignment of the Giza pyramids with Orion\'s belt remains one of archaeology\'s most discussed architectural alignments — though debated, it reflects the profound importance of Orion to Egyptian civilization.',
      },
      {
        culture: 'Aboriginal Australian (Yolŋu)',
        story: 'The Yolŋu people of Arnhem Land see three men in a canoe fishing — the belt stars are the men, and the nebula below is their catch. As Orion rises, it signals the time for certain fish to be plentiful along the coasts.',
        significance: 'Indigenous Australians developed sophisticated ecological calendars based on star positions — Orion\'s visibility was tied to seasonal food availability, tidal patterns, and ceremony timing.',
      },
      {
        culture: 'Aztec',
        story: 'The Aztecs called Orion\'s Belt Mamalhuaztli — the fire-drilling sticks used to ignite the New Fire. Every 52 years, when the Pleiades crossed midnight, all fires in the Aztec world were extinguished. Priests watched these belt stars and drilled new fire on the chest of a sacrificial victim. If the New Fire was lit successfully, the world would continue for another 52 years.',
        significance: 'The New Fire ceremony was the most important ritual in the Aztec calendar cycle. Orion\'s Belt being the fire drill meant these three modest stars carried the weight of the entire world\'s continued existence.',
      },
      {
        culture: 'Māori',
        story: 'The Māori of New Zealand called Orion\'s Belt Tautoro and recognized the whole figure as part of Te Ra-o-Tainui — a great celestial voyaging canoe. The belt stars formed the keel of the canoe, the Hyades cluster above was its claw sail, and the Pleiades the bow. This sky canoe commemorated the legendary navigator Tainui.',
        significance: 'Pacific Islander navigation traditions are among the most sophisticated ever developed. By encoding their voyaging vessels in the stars, Māori ensured each new generation would learn celestial navigation as part of their cultural identity.',
      },
    ],
  },
  {
    id: 'canis_major',
    iauAbbr: 'CMa',
    name: 'Canis Major',
    altNames: ['The Greater Dog', 'Orion\'s Dog'],
    stars: [120, 121, 122, 123, 124, 125],
    lines: [
      { from: 120, to: 122 }, { from: 120, to: 125 }, { from: 125, to: 121 },
      { from: 121, to: 123 }, { from: 123, to: 124 },
    ],
    centerRa: 6.9, centerDec: -22.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek',
        story: 'Canis Major is one of Orion\'s faithful hunting dogs. Some say it represents Laelaps, the fastest dog in the world, given to Europa by Zeus. Laelaps could catch anything — but was set to chase a fox that could never be caught. Zeus solved the paradox by turning them both to stone and casting them to the stars.',
        significance: 'Sirius, the "Dog Star," is the brightest star in the entire night sky. Its annual return at dawn (the "heliacal rising") was used by Egyptians to predict the Nile flood and marked their new year.',
      },
      {
        culture: 'Egyptian',
        story: 'Sirius was Sopdet to the Egyptians, the goddess who announced the Nile flood. Her disappearance from the sky for 70 days mirrored the 70-day mummification period. When she rose again before dawn, it was the Egyptian New Year — a moment of rebirth.',
        significance: 'The Great Pyramid of Giza has a shaft aligned precisely with Sirius. Ancient Egyptians considered Sirius to be the soul of Isis, and its appearance was the most important astronomical event of their year.',
      },
      {
        culture: 'Babylonian',
        story: 'In the MUL.APIN star catalog, the stars around Sirius formed GAG.SI.SÁ — "The Arrow" — the great weapon of Ninurta, hero god of war and agriculture. The arrow was aimed at the Bow (a nearby asterism), and Sirius was its glittering arrowhead, brightest in all the sky.',
        significance: 'Ninurta was one of Babylon\'s most powerful gods — a god of both battle and the plow, the two forces that shaped Mesopotamian civilization. Placing his arrow in the sky, anchored by the sky\'s brightest star, was a statement of divine supremacy.',
      },
      {
        culture: 'Hawaiian',
        story: 'Hawaiian navigators called Sirius \'A\'a — simply "Blazing." It was the southernmost star in Ke Ka o Makali\'i, the great canoe bailer in the sky. Together with Capella, Castor, Pollux, and Procyon, \'A\'a completed a line of bright stars that served as an arc-shaped navigation tool across the winter sky.',
        significance: 'Sirius rising in the Hawaiian sky announced specific seasons and helped navigators orient their canoes. Its extraordinary brightness made it one of the easiest stars to identify even in hazy conditions at sea.',
      },
    ],
  },
  {
    id: 'canis_minor',
    iauAbbr: 'CMi',
    name: 'Canis Minor',
    altNames: ['The Lesser Dog', 'Orion\'s Little Dog'],
    stars: [140, 141],
    lines: [
      { from: 140, to: 141 },
    ],
    centerRa: 7.6, centerDec: 6.0,
    difficulty: 1,
    mythology: [
      {
        culture: 'Greek',
        story: 'Canis Minor is Orion\'s second hunting dog. Some legends identify it as Maera, the faithful dog of the shepherd Icarius who was killed unjustly. The dog grieved so deeply at his master\'s grave that the gods honored his loyalty by placing him among the stars.',
        significance: 'Procyon, meaning "before the dog" in Greek, rises shortly before Sirius — acting as a herald. Sailors and farmers used its appearance to prepare for seasonal changes signaled by Sirius\'s rising.',
      },
      {
        culture: 'Hawaiian',
        story: 'Procyon was called Puana — "Blossom" — by Hawaiian navigators, and was one of the key stars in Ke Ka o Makali\'i, the canoe bailer starline. Stretching from Capella in the north through the Gemini twins and down to Sirius in the south, Puana helped complete the arc of the bailer, scooping stars up from the horizon.',
        significance: 'In Hawaiian navigation, star lines like Ke Ka o Makali\'i were tools for memorizing the sky. A navigator didn\'t need instruments — just the deeply memorized paths of rising and setting stars that their teachers had taught them.',
      },
      {
        culture: 'Māori',
        story: 'The Māori called Procyon Puanga Hori — "False Puanga" — because it rose at dawn just before Puanga (Rigel), the star that officially marked the Māori New Year. Both stars were heralds of winter planting season. The prefix "hori" means "false" or "misleading" — Procyon teased observers by rising first, but it was Rigel that carried the real calendar significance.',
        significance: 'Some Māori tribes used Procyon\'s rise rather than Rigel\'s to mark the new year, leading to regional calendar variations across New Zealand. The debate over which star was the "true" new year star shows how precisely Pacific peoples tracked the sky.',
      },
    ],
  },
  {
    id: 'cancer',
    iauAbbr: 'Cnc',
    name: 'Cancer',
    altNames: ['The Crab', 'The Crayfish'],
    stars: [160, 161, 162, 163, 164],
    lines: [
      { from: 161, to: 163 }, { from: 163, to: 162 },
      { from: 162, to: 164 }, { from: 164, to: 160 }, { from: 160, to: 162 },
    ],
    centerRa: 8.7, centerDec: 19.0,
    difficulty: 2,
    mythology: [
      {
        culture: 'Greek',
        story: 'When Hercules fought the Lernaean Hydra as his second labor, Hera sent a crab to distract him by pinching his foot. Hercules crushed it — but Hera honored its small act of bravery by placing it in the sky, where it shines dimly as a reminder that even small creatures can act courageously.',
        significance: 'In ancient times the Sun was in Cancer during the summer solstice. The "Tropic of Cancer" — where the Sun reaches its highest point — is named after this constellation. Cancer marked the celestial gateway through which souls were said to descend to Earth.',
      },
      {
        culture: 'Babylonian',
        story: 'The Babylonians called Cancer ALLUTTU — "The Crab" — and described it as the seat of Anu, the supreme god of heaven. In Babylonian cosmology, Anu sat at the top of the divine hierarchy, so placing his throne in the sky made the crab\'s region the holiest zone of the zodiac.',
        significance: 'Despite being the faintest constellation in the zodiac, Cancer was cosmologically significant in ancient Mesopotamia precisely because of its position — it marked the summit of the Sun\'s annual path, the gateway through which divine power entered the world.',
      },
    ],
  },
  {
    id: 'virgo',
    iauAbbr: 'Vir',
    name: 'Virgo',
    altNames: ['The Maiden', 'The Virgin'],
    stars: [180, 181, 182, 183, 184, 185, 186],
    lines: [
      { from: 181, to: 182 },  // Zaniah → Porrima
      { from: 182, to: 183 },  // Porrima → Vindemiatrix (upper arm)
      { from: 182, to: 186 },  // Porrima → Auva
      { from: 186, to: 184 },  // Auva → Heze
      { from: 184, to: 180 },  // Heze → Spica
      { from: 180, to: 185 },  // Spica → Syrma (lower extension)
    ],
    centerRa: 13.0, centerDec: -2.0,
    difficulty: 2,
    mythology: [
      {
        culture: 'Greek',
        story: 'Virgo is Demeter, goddess of the harvest. When her daughter Persephone was taken to the underworld, Demeter withdrew her gifts from the Earth, creating winter. When Persephone returns each spring, Virgo rises in the night sky and the Earth blooms again.',
        significance: 'Spica, the bright blue-white star in Virgo\'s hand, was used by Hipparchus around 127 BCE to discover the precession of the equinoxes — one of the most important discoveries in the history of astronomy.',
      },
      {
        culture: 'Mesopotamian',
        story: 'The Babylonians called Virgo "The Furrow," depicting the goddess Shala holding an ear of grain (represented by Spica). She was the embodiment of the agricultural year — planting, growing, and harvest.',
        significance: 'Virgo marks the beginning of spring planting season. The Virgo Cluster of galaxies — 1,300 galaxies located near Spica — makes this the richest region of deep sky objects visible to amateur astronomers.',
      },
      {
        culture: 'Babylonian (MUL.APIN)',
        story: 'The ancient Babylonian star catalog named Virgo ŠERŪ — "The Furrow" — and linked it to the goddess Šala, who held an ear of grain. The bright star Spica represented that single ear of grain held aloft, the promise of harvest. This catalog was written on clay tablets around 1000 BCE and is one of the oldest systematic star records ever found.',
        significance: 'Šala was a storm goddess whose rains fed the grain fields of Mesopotamia. Placing her in the sky as the harvest maiden connected celestial observation directly to the agricultural calendar that sustained ancient civilization.',
      },
      {
        culture: 'Hawaiian',
        story: 'Hawaiian navigators called Spica Hikianalia — the companion star of Hōkūle\'a (Arcturus). These two bright stars, one in Virgo and one in Boötes, traveled together through the spring sky and were the central pair of Ka Iwikuamo\'o, the Backbone starline. Two Polynesian Voyaging Society canoes were named after this star pair.',
        significance: 'The pairing of Hikianalia and Hōkūle\'a in Hawaiian navigation reflects a beautiful logic: two stars that travel closely through the sky were imagined as companions on a voyage, watching over the canoes named in their honor.',
      },
    ],
  },
  {
    id: 'bootes',
    iauAbbr: 'Boo',
    name: 'Boötes',
    altNames: ['The Herdsman', 'The Bear Driver'],
    stars: [200, 201, 202, 203, 204, 205, 206],
    lines: [
      // Kite right spine: Arcturus → Izar → δ → Nekkar
      { from: 200, to: 203 }, { from: 203, to: 205 }, { from: 205, to: 201 },
      // Kite left side: Nekkar → Seginus → Arcturus
      { from: 201, to: 202 }, { from: 202, to: 200 },
      // Bottom spur: Arcturus → Muphrid
      { from: 200, to: 204 },
      // Right outer branch: Nekkar → Alkalurops
      { from: 201, to: 206 },
    ],
    centerRa: 14.7, centerDec: 30.0,
    difficulty: 2,
    mythology: [
      {
        culture: 'Greek',
        story: 'Boötes is Arcas, the son who was placed in the sky to "drive" Ursa Major around the celestial pole. In another myth, he is Icarius, the first man taught to make wine by Dionysus. Neighbors who drank his wine thought they were poisoned (they were just drunk) and killed him — the gods immortalized him in stars.',
        significance: 'Arcturus, the fourth brightest star in the sky and the brightest in the northern celestial hemisphere, anchors Boötes. Follow the arc of the Big Dipper\'s handle and you "Arc to Arcturus" — one of the most reliable star-finding techniques.',
      },
      {
        culture: 'Arabic',
        story: 'Arab astronomers saw Boötes as Al-Auwwa ("the barker") — a herding dog barking to drive the Great Bear around the pole. The stars were also seen as a shepherd with a crook, guiding his flock across the sky.',
        significance: 'Arcturus was the first star ever observed in daylight, seen through a telescope in 1635. Its high proper motion — visibly moving relative to other stars over centuries — helped astronomers understand that stars are not fixed objects.',
      },
      {
        culture: 'Babylonian',
        story: 'The Babylonians called the bright star of Boötes ŠU.PA — possibly "The Bright One" — and linked it to Enlil, the most powerful of all Babylonian gods, "who determines the destinies of the land." The star Arcturus was said to be his vizier, carrying out the divine decree across the sky.',
        significance: 'In Babylonian religion, Enlil controlled wind, storms, floods, and fate itself. Associating the brightest star of the northern spring sky with him underscored how deeply celestial observation was woven into Mesopotamian theology and statecraft.',
      },
      {
        culture: 'Hawaiian',
        story: 'Hawaiian navigators called Arcturus Hōkūle\'a — "Star of Gladness" — because it is the zenith star of the Hawaiian Islands. When you see Hōkūle\'a directly overhead, you are at the latitude of Hawai\'i. Nainoa Thompson, the master navigator who revived Hawaiian wayfinding in the 1970s, used this star to guide the voyaging canoe Hōkūle\'a back home across the Pacific.',
        significance: 'Hōkūle\'a is more than a navigation star — it became the symbol of the Hawaiian cultural renaissance. The voyaging canoe named after it circumnavigated the globe using only traditional celestial navigation, carrying the message of Mālama Honua: "care for our island Earth."',
      },
    ],
  },
  {
    id: 'corvus',
    iauAbbr: 'Crv',
    name: 'Corvus',
    altNames: ['The Crow', 'The Raven'],
    stars: [220, 221, 222, 223, 224],
    lines: [
      { from: 223, to: 220 }, { from: 220, to: 224 }, { from: 224, to: 222 },
      { from: 222, to: 221 }, { from: 221, to: 223 },
    ],
    centerRa: 12.4, centerDec: -20.0,
    difficulty: 2,
    mythology: [
      {
        culture: 'Greek',
        story: 'Apollo sent the crow (originally white) to fetch water in a cup (the neighboring constellation Crater). The lazy crow waited for figs to ripen to eat, then lied to Apollo that a water snake (Hydra) blocked the spring. Apollo saw through the lie and punished the crow by placing it forever in the sky, next to the cup but unable to drink — its feathers turned black as punishment.',
        significance: 'Corvus, Crater (the Cup), and Hydra (the Water Snake) are three constellations that form a connected story across the spring sky — one of the few multi-constellation myths where the figures are actually depicted adjacent to each other.',
      },
      {
        culture: 'Chinese',
        story: 'In Chinese astronomy, the four main stars of Corvus form the "Chariot" or "Military Camp," part of the Vermilion Bird of the South — one of the four symbols of the Chinese constellations representing the southern direction and summer.',
        significance: 'The compact, distinctive quadrilateral of Corvus makes it one of the easiest constellations to recognize in the spring sky once you know it.',
      },
      {
        culture: 'Babylonian',
        story: 'The Babylonians called Corvus ĀRIBU — "The Raven" — and linked it to Adad, the god of thunder, storms, and rain. The raven was considered Adad\'s sacred messenger, a bird that could cross between the human world and the divine realm, carrying news of what was to come.',
        significance: 'Ravens appear as divine messengers in many cultures across the ancient world, from Mesopotamia to Norse mythology. The Babylonians placing Adad\'s raven in the sky showed how widespread and deep this bird\'s symbolic power was across civilizations.',
      },
    ],
  },
  {
    id: 'auriga',
    iauAbbr: 'Aur',
    name: 'Auriga',
    altNames: ['The Charioteer', 'The Wagoner'],
    stars: [240, 241, 242, 243, 244],
    lines: [
      { from: 240, to: 244 }, { from: 244, to: 243 }, { from: 243, to: 242 },
      { from: 242, to: 241 }, { from: 241, to: 240 },
    ],
    centerRa: 5.5, centerDec: 39.5,
    difficulty: 2,
    mythology: [
      {
        culture: 'Greek',
        story: 'Auriga is Erichthonius, a prince of Athens who was the first to harness four horses to a chariot, mimicking the Sun god\'s ride across the sky. Athena was so impressed she convinced Zeus to honor him with a constellation.',
        significance: 'Capella, the sixth brightest star in the sky, is actually four stars — two pairs of stars orbiting each other. The name "Capella" means "little she-goat," and the three faint stars nearby (the "Kids") are the goat\'s offspring according to myth.',
      },
      {
        culture: 'Mesopotamian',
        story: 'Babylonian astronomers knew Capella as the "Shepherd of the Heavenly Flock," a star of the god Anu who presided over the sky. Capella\'s prominent position at winter zenith made it a time-keeping star for ancient calendars.',
        significance: 'In April, Auriga is visible in the western sky after sunset, with Capella unmistakably bright. It was one of the first constellations to be identified by ancient cultures due to Capella\'s extreme brightness.',
      },
      {
        culture: 'Babylonian (MUL.APIN)',
        story: 'In the ancient Babylonian catalog, the stars of Auriga formed GAMLU — "The Throwing-stick," the curved weapon of the god Gamlum. A throwing-stick was a hunting tool shaped like a bent club, hurled spinning through the air to bring down birds. The arcing shape of Auriga\'s brightest stars echoed this curving form.',
        significance: 'The Babylonian catalog MUL.APIN, written around 1000 BCE, is one of the world\'s oldest systematic observations of the night sky. Nearly every constellation they named has a direct descendant in the sky we look at today, bridging four thousand years of stargazing.',
      },
      {
        culture: 'Hawaiian',
        story: 'Hawaiian navigators called Capella Hōkūlei — "Lei Star" or "Garland Star" — a star of joyful celebration. It was the northernmost star in Ke Ka o Makali\'i, the Canoe Bailer starline. Together with Castor, Pollux, Procyon, and Sirius, Hōkūlei formed the arc of a great bailer that scooped the entire winter sky.',
        significance: 'In Hawaiian culture, a lei represents celebration, love, and the gathering of community. Naming a navigation star "lei star" embedded these values into the act of finding one\'s way home across the ocean.',
      },
    ],
  },
  {
    id: 'perseus',
    iauAbbr: 'Per',
    name: 'Perseus',
    altNames: ['The Hero'],
    stars: [260, 261, 262, 263, 264, 265],
    lines: [
      // Main chain (N to S): η → γ → Mirfak → δ → Menkib
      { from: 265, to: 264 }, { from: 264, to: 260 }, { from: 260, to: 262 },
      { from: 262, to: 263 },
      // Branch: Mirfak → Algol
      { from: 260, to: 261 },
    ],
    centerRa: 3.5, centerDec: 47.0,
    difficulty: 2,
    mythology: [
      {
        culture: 'Greek',
        story: 'Perseus was tasked with slaying Medusa, the Gorgon whose gaze turned men to stone. Armed with a mirrored shield from Athena, winged sandals from Hermes, and a helmet of invisibility from Hades, he beheaded Medusa while looking at her reflection. He carried her severed head on his journey, using it to rescue Andromeda from a sea monster.',
        significance: 'Algol — Beta Persei — is the most famous variable star, dimming and brightening every 2.87 days as a companion star eclipses it. Ancient Arabic astronomers called it "the Demon Star" (Ra\'s al-Ghul, "head of the ghoul") — possibly because they noticed its mysterious variability, giving it an ominous reputation.',
      },
      {
        culture: 'Arabic',
        story: 'Medieval Arab astronomers depicted Perseus as a man holding a Gorgon\'s head in one hand and a sword in the other. Algol, the demon star in the Gorgon\'s head, was considered an ill omen — no major undertakings were advised when it was bright.',
        significance: 'The Perseid meteor shower, one of the most spectacular annual meteor showers (peaking in August), appears to radiate from the constellation Perseus, making this hero a source of celestial fireworks every year.',
      },
      {
        culture: 'Babylonian',
        story: 'The Babylonian star catalog MUL.APIN called Perseus ŠĪBU — "The Old Man" — and associated it with the god Enmešarra, an ancient deity of the underworld who represented the accumulated wisdom of past ages. Where the Greeks saw a young hero, the Babylonians saw an elder whose knowledge had been forged over a lifetime.',
        significance: 'The contrast is striking: the same group of stars became a youthful hero in Greece and a wise elder in Babylon. This shows how the same night sky can tell completely different stories depending on the culture doing the telling.',
      },
    ],
  },
  {
    id: 'hydra',
    iauAbbr: 'Hya',
    name: 'Hydra',
    altNames: ['The Water Snake', 'The Sea Serpent'],
    stars: [280, 281, 282, 283, 284, 285, 286, 287],
    lines: [
      // Snake body west→east (head to tail): ε → ζ → α(Alphard) → ν → ξ → β → γ → π
      { from: 286, to: 287 }, { from: 287, to: 280 }, { from: 280, to: 284 },
      { from: 284, to: 283 }, { from: 283, to: 281 }, { from: 281, to: 282 }, { from: 282, to: 285 },
    ],
    centerRa: 10.5, centerDec: -18.0,
    difficulty: 3,
    mythology: [
      {
        culture: 'Greek',
        story: 'The Lernaean Hydra was a monstrous water serpent with nine heads — when one was cut off, two grew back. Hercules defeated it as his second labor by having his companion Iolaus sear each neck after he severed the head, preventing regrowth. He dipped his arrows in the Hydra\'s poison, which led to his eventual death.',
        significance: 'Hydra is the largest constellation in the sky, stretching 100 degrees across the celestial equator. Following it from head to tail takes you past five other constellations — Corvus and Crater sit on its back like passengers.',
      },
      {
        culture: 'Babylonian',
        story: 'The Babylonians knew Hydra as the cosmic sea serpent Mušhuššu, the dragon-serpent of the chaos god Tiamat. After Marduk defeated Tiamat to create the ordered cosmos, the serpent was placed in the sky as a reminder of the chaos that predates creation.',
        significance: 'Alphard, the brightest star in Hydra, means "the solitary one" in Arabic — it stands alone in a large area with no other bright stars nearby, making it both easy and satisfying to find once you know where to look.',
      },
      {
        culture: 'Babylonian (MUL.APIN)',
        story: 'The MUL.APIN catalog identified Hydra with the divine snake NIRĀH and associated it with Ningišzida, "Lord of the Good Tree," the ancient god of the netherworld and vegetation. Ningišzida was a serpent deity who guarded the gate to the underworld and was also associated with healing — the snake that brings both death and renewal.',
        significance: 'Ningišzida appears on one of the oldest pieces of art in the world: the libation vase of Gudea (c. 2100 BCE), where two intertwined serpents coil around a staff — a motif still used today as the medical caduceus. This ancient water serpent in the sky was one of humanity\'s most enduring symbols.',
      },
    ],
  },
]

export const CONSTELLATIONS_BY_ID: Record<string, Constellation> = Object.fromEntries(
  CONSTELLATIONS.map(c => [c.id, c])
)

// Ordered learning path (difficulty 1 first, then 2, then 3)
export const LEARNING_ORDER: string[] = [
  'ursa_major', 'ursa_minor', 'cassiopeia',   // northern anchors
  'orion', 'gemini', 'canis_major', 'canis_minor', // winter/spring transition
  'leo', 'cancer',                             // spring center
  'virgo', 'corvus',                           // spring south
  'bootes',                                    // spring north
  'auriga', 'perseus',                         // winter/spring overhead
  'hydra',                                     // challenge
]
