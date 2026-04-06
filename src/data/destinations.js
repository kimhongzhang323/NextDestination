export const destinations = [
  {
    slug: "tokyo",
    city: "Tokyo",
    country: "Japan",
    code: "NRT",
    fromPrice: 1299,
    currency: "JPY",
    heroImage:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "seoul",
    city: "Seoul",
    country: "South Korea",
    code: "ICN",
    fromPrice: 999,
    currency: "KRW",
    heroImage:
      "https://images.unsplash.com/photo-1538485399081-7c807d4786e8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "bangkok",
    city: "Bangkok",
    country: "Thailand",
    code: "BKK",
    fromPrice: 499,
    currency: "THB",
    heroImage:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "bali",
    city: "Bali",
    country: "Indonesia",
    code: "DPS",
    fromPrice: 799,
    currency: "IDR",
    heroImage:
      "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "london",
    city: "London",
    country: "United Kingdom",
    code: "LHR",
    fromPrice: 2499,
    currency: "GBP",
    heroImage:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "istanbul",
    city: "Istanbul",
    country: "Turkey",
    code: "IST",
    fromPrice: 1899,
    currency: "TRY",
    heroImage:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=80"
  }
];

export function getDestinationBySlug(slug) {
  return destinations.find((item) => item.slug === slug);
}
