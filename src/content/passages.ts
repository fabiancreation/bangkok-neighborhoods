export type Passage = {
  id: string;
  chapter: string;
  location: string;
  text: string;
  highlight?: string;
};

export const passages: Passage[] = [
  {
    id: "thonburi-crossing",
    chapter: "Chapter 1 · Thonburi",
    location: "The cross-river ferry from Tha Tien",
    text: "The cross-river ferry from Tha Tien costs four baht. You step off a concrete pier on the Rattanakosin side, where tourists photograph the Grand Palace and tuk-tuk drivers call out prices, and three minutes later you step onto a wooden dock where a woman is grilling bananas over charcoal. Behind her, a narrow lane disappears between corrugated tin walls. A cat sleeps on a motorcycle seat. There is no signage in English.",
    highlight: "Three minutes and four baht, and you are in a different city.",
  },
  {
    id: "wat-traimit",
    chapter: "Chapter 4 · Chinatown / Yaowarat",
    location: "Wat Traimit, 1955",
    text: "In 1955, workers were moving a large stucco Buddha image from an old temple that was being demolished. The image was heavy and unremarkable, one of thousands of plaster Buddhas in Bangkok. During the move, the ropes broke. The statue fell. The plaster cracked. Underneath was five and a half tonnes of solid gold, the largest such statue in the world.",
    highlight:
      "Chinatown's Chinese identity is like the gold under the plaster: still there, still present, still shaping the structure, but covered by layers of Thai identity so thick that most people have stopped looking for what is underneath.",
  },
  {
    id: "khlong-toei-market",
    chapter: "Chapter 16 · Khlong Toei",
    location: "The wholesale market at five in the morning",
    text: "At five in the morning, Khlong Toei Market is already loud. Not the noise of shoppers but the noise of labor: ice being crushed and shoveled into styrofoam boxes, crates of river prawns dropped onto wet concrete, the flat crack of a cleaver through a pork spine. Pickup trucks idle at the loading bays on Rama IV Road, their beds stacked with produce from the central plains. A man in rubber boots hoses down the floor between stalls.",
    highlight: "The restaurants have not opened yet. The condo kitchens on Sukhumvit are still dark. But the supply chain that feeds them begins here.",
  },
  {
    id: "dusit-memory",
    chapter: "Chapter 8 · Dusit",
    location: "The 14 October Memorial",
    text: "The 14 October Memorial, a low modernist structure on Ratchadamnoen between the Democracy Monument and Khao San Road, commemorates those killed in 1973. On its anniversary each year, wreaths appear, speeches are given, and a shrinking number of people who were there in person come to remember. A granite wall lists the names of the dead.",
    highlight: "The building is easy to walk past without noticing. Most people do.",
  },
  {
    id: "closing-river",
    chapter: "Closing Essay",
    location: "Downriver from Nonthaburi",
    text: "Bangkok resists the kind of ending a book is supposed to provide. There is no final image that captures it, no sentence that holds it still. What I can offer is the boat ride back south from Nonthaburi on a late afternoon, when the express boat is half empty and the river is wide and brown and the skyline reappears in the distance, glass and concrete pressing up against the haze.",
    highlight:
      "You know that behind every tower is a soi, and behind every soi is a life that the tower cannot see, and behind every life is a history that goes back further than the concrete.",
  },
];
