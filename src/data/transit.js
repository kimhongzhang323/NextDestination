export const transitByDestination = {
  tokyo: {
    airportToCity: [
      { mode: "Narita Express", duration: "60m", fare: "JPY 3070" },
      { mode: "Airport Limousine Bus", duration: "80m", fare: "JPY 1300" }
    ],
    lines: ["Yamanote Line", "Ginza Line", "Hibiya Line"],
    pass: "Tokyo Subway 72-Hour Pass - JPY 1500"
  },
  seoul: {
    airportToCity: [
      { mode: "AREX Express", duration: "43m", fare: "KRW 9500" },
      { mode: "Airport Bus", duration: "70m", fare: "KRW 17000" }
    ],
    lines: ["Line 2", "Line 5", "Bundang Line"],
    pass: "T-money recommended for all transit"
  },
  bangkok: {
    airportToCity: [
      { mode: "Airport Rail Link", duration: "30m", fare: "THB 45" },
      { mode: "Taxi", duration: "50m", fare: "THB 350" }
    ],
    lines: ["BTS Sukhumvit", "BTS Silom", "MRT Blue Line"],
    pass: "Rabbit Card for BTS"
  },
  bali: {
    airportToCity: [
      { mode: "Ride-hailing", duration: "40m", fare: "IDR 120000" },
      { mode: "Private transfer", duration: "35m", fare: "IDR 180000" }
    ],
    lines: ["No rail network"],
    pass: "Car rental or driver recommended"
  },
  london: {
    airportToCity: [
      { mode: "Heathrow Express", duration: "15m", fare: "GBP 25" },
      { mode: "Elizabeth Line", duration: "35m", fare: "GBP 12.8" }
    ],
    lines: ["Central Line", "Jubilee Line", "Piccadilly Line"],
    pass: "Use contactless bank card or Oyster"
  },
  istanbul: {
    airportToCity: [
      { mode: "Havaist Bus", duration: "60m", fare: "TRY 180" },
      { mode: "M11 Metro", duration: "45m", fare: "TRY 35" }
    ],
    lines: ["M11", "M2", "T1 Tram"],
    pass: "Istanbulkart for metro, bus, tram"
  }
};
