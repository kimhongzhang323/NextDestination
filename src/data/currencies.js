export const currencyInfoByDestination = {
  tokyo: {
    code: "JPY",
    exchangeRate: 33.2,
    payment: ["Visa", "Mastercard", "JCB", "PayPay"],
    summary: "Card usage is growing, but keep cash for small eateries and temples.",
    atm: "7-Eleven and Japan Post ATMs widely available."
  },
  seoul: {
    code: "KRW",
    exchangeRate: 315.1,
    payment: ["Visa", "Mastercard", "Naver Pay", "Kakao Pay"],
    summary: "Card-first city, mobile wallets common in urban areas.",
    atm: "ATMs available in subway stations and convenience stores."
  },
  bangkok: {
    code: "THB",
    exchangeRate: 7.8,
    payment: ["Visa", "Mastercard", "PromptPay"],
    summary: "Cash still useful for street markets and taxis.",
    atm: "ATMs are easy to find; foreign card fees may apply."
  },
  bali: {
    code: "IDR",
    exchangeRate: 3700,
    payment: ["Visa", "Mastercard", "QRIS"],
    summary: "Tourist zones accept cards; carry cash for rural areas.",
    atm: "Use bank branch ATMs to avoid skimming risk."
  },
  london: {
    code: "GBP",
    exchangeRate: 0.17,
    payment: ["Visa", "Mastercard", "Amex", "Apple Pay", "Google Pay"],
    summary: "Mostly cashless, contactless works almost everywhere.",
    atm: "Bank ATMs are common and generally fee-free."
  },
  istanbul: {
    code: "TRY",
    exchangeRate: 7.1,
    payment: ["Visa", "Mastercard", "Troy"],
    summary: "Cards accepted in malls, cash useful in bazaars.",
    atm: "ATMs available across districts; choose local currency carefully."
  }
};
