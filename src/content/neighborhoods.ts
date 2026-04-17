export type Tier = "major" | "mid" | "minor";
export type Part = "I" | "II" | "III" | "IV" | "V";

export type Neighborhood = {
  number: number;
  slug: string;
  name: string;
  part: Part;
  partTitle: string;
  tier: Tier;
  words: number;
  tagline: string;
  teaser: string;
  /** Coordinates on a 1000x1000 SVG viewBox of the stylized map */
  x: number;
  y: number;
};

export const parts: Record<Part, { title: string; subtitle: string }> = {
  I: { title: "The Old River", subtitle: "Origin and identity. The river as Bangkok's reason for existing." },
  II: { title: "Trade and Layers", subtitle: "The city grows through commerce, immigration, cultural mixing." },
  III: { title: "The City Rebuilds Itself", subtitle: "Modernization, political upheaval, commerce on both banks." },
  IV: { title: "The Eastward Push", subtitle: "New money, new identity. The city extends along Sukhumvit." },
  V: { title: "The City Most People Don't See", subtitle: "Surprise, depth, the edges of Bangkok." },
};

export const neighborhoods: Neighborhood[] = [
  {
    number: 1,
    slug: "thonburi",
    name: "Thonburi",
    part: "I",
    partTitle: "The Old River",
    tier: "major",
    words: 4500,
    tagline: "The pre-Bangkok capital. The other side of the river.",
    teaser:
      "The cross-river ferry from Tha Tien costs four baht. You step off a concrete pier on the Rattanakosin side, where tourists photograph the Grand Palace and tuk-tuk drivers call out prices, and three minutes later you step onto a wooden dock where a woman is grilling bananas over charcoal.",
    x: 305,
    y: 540,
  },
  {
    number: 2,
    slug: "rattanakosin",
    name: "Rattanakosin",
    part: "I",
    partTitle: "The Old River",
    tier: "major",
    words: 5500,
    tagline: "The founding island. Ceremonial heart, daily friction.",
    teaser:
      "The Grand Palace is where the city performs itself. Every arriving visitor sees it first, every Thai schoolchild learns it, every postcard shows it. But live on Maharat Road for a month and the palace becomes weather. You walk past it on the way to the noodle shop. You ignore the tourists the way locals ignore the rain in July.",
    x: 375,
    y: 525,
  },
  {
    number: 3,
    slug: "banglamphu",
    name: "Banglamphu",
    part: "I",
    partTitle: "The Old River",
    tier: "mid",
    words: 3000,
    tagline: "Khao San and everything around it that visitors ignore.",
    teaser:
      "Khao San Road is three hundred meters long. The marketing budget that created its legend is, by now, older than most of the backpackers walking down it. Turn one corner onto Phra Athit Road and the noise stops. The bookshops are quiet. Old Bangkok sits on the benches.",
    x: 400,
    y: 490,
  },
  {
    number: 4,
    slug: "chinatown-yaowarat",
    name: "Chinatown / Yaowarat",
    part: "II",
    partTitle: "Trade and Layers",
    tier: "major",
    words: 5000,
    tagline: "The merchant heart. Thai and Chinese blurred.",
    teaser:
      "Yaowarat at seven in the evening is a wall of gold signage and red neon. Grilled scallops smoke on hot plates. Teochew aunties in plastic stools slurp noodle soup. The gold shops close. The food street opens. Nowhere else in the city is the transition so abrupt.",
    x: 445,
    y: 530,
  },
  {
    number: 5,
    slug: "phahurat",
    name: "Phahurat / Little India",
    part: "II",
    partTitle: "Trade and Layers",
    tier: "minor",
    words: 1700,
    tagline: "Sikh temple, fabric markets, a different world two blocks over.",
    teaser:
      "The gurdwara rises above the shophouses, white and domed, incongruous against the wet-market smell of the surrounding lanes. Inside, langar is served to anyone who sits down. Outside, the Sikh textile families have been selling fabric on this stretch of Chakraphet Road for four generations.",
    x: 420,
    y: 548,
  },
  {
    number: 6,
    slug: "bang-rak-charoen-krung",
    name: "Bang Rak / Charoen Krung",
    part: "II",
    partTitle: "Trade and Layers",
    tier: "major",
    words: 5000,
    tagline: "Thailand's first paved road. Old embassies and new galleries.",
    teaser:
      "Charoen Krung was the first paved road in Thailand, laid in 1864 after Rama IV received complaints from the foreign consuls that their horses could not move in the rainy season. The old consulates still stand on it. Between them, shophouses that were mid-century fabric wholesalers are now galleries.",
    x: 490,
    y: 595,
  },
  {
    number: 7,
    slug: "silom-sathorn",
    name: "Silom / Sathorn",
    part: "II",
    partTitle: "Trade and Layers",
    tier: "mid",
    words: 3000,
    tagline: "The financial corridor. Patpong, Lumpini, glass and soi.",
    teaser:
      "Lumpini at six in the morning is full of people moving. Office workers running the perimeter, tai chi instructors in the shade, old men on benches reading the Thai Rath. By seven the towers around the park begin to fill. The morning is the only time the park wins.",
    x: 555,
    y: 615,
  },
  {
    number: 8,
    slug: "dusit",
    name: "Dusit",
    part: "III",
    partTitle: "The City Rebuilds Itself",
    tier: "major",
    words: 4500,
    tagline: "Rama V's European quarter. Protest stage.",
    teaser:
      "Ratchadamnoen Avenue was designed for ceremonies. The wide boulevard, the even plane trees, the perspective that pulls the eye toward the Democracy Monument. But the avenue has also been a killing ground. 1973. 1976. 1992. 2010. The same stones that carried royal processions carried the bodies of students.",
    x: 410,
    y: 455,
  },
  {
    number: 9,
    slug: "talat-phlu-bang-khae",
    name: "Talat Phlu / Bang Khae",
    part: "III",
    partTitle: "The City Rebuilds Itself",
    tier: "mid",
    words: 3000,
    tagline: "The rising west bank. Wat Paknam, the Instagram Buddha.",
    teaser:
      "Wat Paknam's new stupa rises above the western suburbs, green glass catching the sun. Inside, the largest indoor Buddha image in the world stares down a gallery of selfie sticks. A hundred meters away, the meditation hall where Luang Pu Sodh reconstructed the Dhammakaya tradition is quiet.",
    x: 305,
    y: 640,
  },
  {
    number: 10,
    slug: "ratchathewi-pratunam",
    name: "Ratchathewi / Pratunam",
    part: "III",
    partTitle: "The City Rebuilds Itself",
    tier: "minor",
    words: 2000,
    tagline: "Garment wholesale chaos. Baiyoke Tower.",
    teaser:
      "Pratunam is motion. Porters running garments past you on their shoulders. The same shirts at a thousand different prices depending on who you are and how you asked. Baiyoke Tower sits above it all, tall and slightly tilted-looking in the haze, a monument to a kind of ambition that does not apologize.",
    x: 540,
    y: 485,
  },
  {
    number: 11,
    slug: "siam-pathum-wan",
    name: "Siam / Pathum Wan",
    part: "III",
    partTitle: "The City Rebuilds Itself",
    tier: "minor",
    words: 2000,
    tagline: "Shopping center of gravity. And the Ratchaprasong memory.",
    teaser:
      "The four corners of Ratchaprasong hold the largest concentration of shopping square footage in Southeast Asia. They also hold the memory of the 2010 crackdown. You can stand at the intersection and count both at once. Most people count only one.",
    x: 565,
    y: 528,
  },
  {
    number: 12,
    slug: "sukhumvit-lower",
    name: "Sukhumvit Lower",
    part: "IV",
    partTitle: "The Eastward Push",
    tier: "major",
    words: 4500,
    tagline: "The expat corridor. The soi behind the road.",
    teaser:
      "Sukhumvit Road is a river. The traffic does not stop. The soi run perpendicular into it like tributaries, each one a different country. Soi 3 is Arab. Soi 11 is nightlife. Soi 23 is Japanese. Behind each of them are Thai households the road itself does not see.",
    x: 630,
    y: 555,
  },
  {
    number: 13,
    slug: "thonglor-ekkamai",
    name: "Thonglor / Ekkamai",
    part: "IV",
    partTitle: "The Eastward Push",
    tier: "major",
    words: 5000,
    tagline: "New money, cafe culture, the polished surface.",
    teaser:
      "A flat white on Thonglor Soi 13 costs 180 baht. The staff are polite. The laptop stickers are worldly. The people at the next table work in branding or fund their own shoots. A kilometer south on Sukhumvit, the same coffee costs thirty and comes from a cart. Both coffees are good.",
    x: 685,
    y: 540,
  },
  {
    number: 14,
    slug: "ari",
    name: "Ari / Phahonyothin",
    part: "IV",
    partTitle: "The Eastward Push",
    tier: "minor",
    words: 2000,
    tagline: "The hipster neighborhood that went mainstream.",
    teaser:
      "Ari was once where people went when Thonglor got too loud. Now it is Thonglor with a slightly lower ceiling and better roast. The weekend brunch queue outside the third-wave coffee shop on Soi Ari 1 runs past the photo studio that opened there because the queue started.",
    x: 545,
    y: 395,
  },
  {
    number: 15,
    slug: "chatuchak-lat-phrao",
    name: "Chatuchak / Lat Phrao",
    part: "IV",
    partTitle: "The Eastward Push",
    tier: "minor",
    words: 2000,
    tagline: "Weekend market and the unnarrated residential north.",
    teaser:
      "On Saturday, Chatuchak is a tourist set piece. On Wednesday, the same stalls stand empty and the neighborhood around them is residential Bangkok at its most undecorated. Schools. Dentists. Noodle shops. The parts of the city that nobody is trying to sell.",
    x: 605,
    y: 355,
  },
  {
    number: 16,
    slug: "khlong-toei",
    name: "Khlong Toei",
    part: "V",
    partTitle: "The City Most People Don't See",
    tier: "major",
    words: 5000,
    tagline: "The port, the community, the question of who the city is for.",
    teaser:
      "At five in the morning, Khlong Toei Market is already loud. Not the noise of shoppers but the noise of labor: ice being crushed and shoveled into styrofoam boxes, crates of river prawns dropped onto wet concrete, the flat crack of a cleaver through a pork spine.",
    x: 615,
    y: 640,
  },
  {
    number: 17,
    slug: "on-nut-bang-na",
    name: "On Nut / Bang Na",
    part: "IV",
    partTitle: "The Eastward Push",
    tier: "minor",
    words: 2100,
    tagline: "Where the BTS ends and the middle class begins.",
    teaser:
      "On Nut is where the BTS terminus used to end. Beyond it, the line extends now, pulling middle-class families with it. The new condos are smaller and cheaper. The schools are filling up. This is where Bangkok goes when Thonglor prices it out.",
    x: 745,
    y: 610,
  },
  {
    number: 18,
    slug: "bang-krachao",
    name: "Bang Krachao",
    part: "V",
    partTitle: "The City Most People Don't See",
    tier: "major",
    words: 4500,
    tagline: "The green lung. A jungle inside the city.",
    teaser:
      "The boat from Khlong Toei Pier to Bang Krachao takes four minutes. On one side, container cranes and the smell of diesel. On the other side, mangrove, kingfishers, a boy on a bicycle on a concrete path two feet above the water. Two banks of the same river. Two different centuries.",
    x: 580,
    y: 730,
  },
  {
    number: 19,
    slug: "nonthaburi-pak-kret",
    name: "Nonthaburi / Pak Kret",
    part: "V",
    partTitle: "The City Most People Don't See",
    tier: "minor",
    words: 2200,
    tagline: "The provincial line. Mon pottery. Durian orchards.",
    teaser:
      "Koh Kret is an island in the river made by a canal the king had cut in 1722 to save the bend. The Mon community that settled it three hundred years ago still shapes the pots that made the island famous. The durian trees around them are one of the last orchards the river still feeds.",
    x: 440,
    y: 225,
  },
];
