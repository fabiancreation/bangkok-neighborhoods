export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shape-of-bangkok.com";

export const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "The Shape of Bangkok",
  alternateName: "The Shape of Bangkok: History and Culture Explained Through Neighborhoods",
  author: {
    "@type": "Person",
    name: "Fabian Arndt",
  },
  inLanguage: "en",
  bookFormat: "https://schema.org/EBook",
  numberOfPages: 320,
  about: [
    "Bangkok",
    "Thai history",
    "Urban history",
    "Southeast Asian culture",
    "Narrative nonfiction",
  ],
  description:
    "A portrait of Bangkok told through nineteen neighborhoods. Chronologically and geographically ordered, written by a resident, grounded in observation.",
  url: SITE_URL,
  image: `${SITE_URL}/cover.png`,
  publisher: {
    "@type": "Organization",
    name: "Understanding Thai Culture",
  },
  isPartOf: {
    "@type": "BookSeries",
    name: "Understanding Thai Culture",
    position: 2,
  },
  offers: {
    "@type": "Offer",
    price: "14.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: SITE_URL,
  },
};
