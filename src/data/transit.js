export const departureTransitByOrigin = {
  "kuala lumpur": {
    homeToAirport: [
      { mode: "KLIA Ekspres", duration: "28m", fare: "MYR 55.00", notes: "From KL Sentral, most reliable" },
      { mode: "Airport Taxi", duration: "50m", fare: "MYR 75.00", notes: "Door-to-door, price includes toll" },
      { mode: "Grab / AirAsia Ride", duration: "45m", fare: "MYR 65.00", notes: "App-based, convenient from home" },
      { mode: "Airport Bus", duration: "75m", fare: "MYR 12.00", notes: "From KL Sentral/Pudu, budget option" }
    ]
  }
};

export const transitByDestination = {
  tokyo: {
    airportToHotel: [
      { mode: "Narita Express (N'EX)", duration: "60m", fare: "JPY 3,070", notes: "Best for Shinjuku/Tokyo Station" },
      { mode: "Airport Limousine Bus", duration: "80m", fare: "JPY 1,300", notes: "Direct to major hotel lobbies" },
      { mode: "Keisei Skyliner", duration: "45m", fare: "JPY 2,570", notes: "Fastest to Ueno/Asakusa area" }
    ],
    hotelToAttractions: [
      { from: "Shibuya", to: "Harajuku", mode: "Yamanote Line", duration: "3m", fare: "JPY 150" },
      { from: "Shibuya", to: "Shinjuku Gyoen", mode: "Fukutoshin Line", duration: "7m", fare: "JPY 180" },
      { from: "Shibuya", to: "Tokyo Tower", mode: "Hanzomon/Oedo Line", duration: "20m", fare: "JPY 200" }
    ],
    lines: ["Yamanote Line", "Ginza Line", "Hibiya Line", "Shinjuku Line"],
    pass: "Tokyo Subway 72-Hour Pass - JPY 1,500"
  },
  seoul: {
    airportToHotel: [
      { mode: "AREX Express Train", duration: "43m", fare: "KRW 9,500", notes: "Non-stop to Seoul Station" },
      { mode: "KAL Limousine Bus", duration: "70m", fare: "KRW 18,000", notes: "Drops off at Myeongdong/Gangnam hotels" },
      { mode: "Airport Taxi", duration: "60m", fare: "KRW 65,000", notes: "Door-to-door convenience" }
    ],
    hotelToAttractions: [
      { from: "Myeongdong", to: "Gyeongbokgung Palace", mode: "Line 3", duration: "10m", fare: "KRW 1,250" },
      { from: "Myeongdong", to: "Bukchon Hanok Village", mode: "Bus 151", duration: "15m", fare: "KRW 1,200" },
      { from: "Myeongdong", to: "N Seoul Tower", mode: "Nansan Cable Car", duration: "10m", fare: "KRW 14,000" }
    ],
    lines: ["Line 2 (Green)", "Line 5 (Purple)", "Bundang Line"],
    pass: "T-money Card - KRW 4,000 (Reloadable)"
  },
  bangkok: {
    airportToHotel: [
      { mode: "Airport Rail Link (ARL)", duration: "30m", fare: "THB 45", notes: "Connects to BTS/MRT" },
      { mode: "Official Airport Taxi", duration: "50m", fare: "THB 400", notes: "Includes airport surcharge & tolls" },
      { mode: "Grab / Bolt", duration: "45m", fare: "THB 350", notes: "Meeting at Level 1, Gate 4" }
    ],
    hotelToAttractions: [
      { from: "Sukhumvit", to: "Grand Palace", mode: "BTS + Chao Phraya Express Boat", duration: "40m", fare: "THB 65" },
      { from: "Sukhumvit", to: "Wat Arun", mode: "MRT Blue Line", duration: "25m", fare: "THB 42" },
      { from: "Sukhumvit", to: "Chatuchak Market", mode: "BTS Sukhumvit Line", duration: "20m", fare: "THB 44" }
    ],
    lines: ["BTS Sukhumvit", "BTS Silom", "MRT Blue Line", "Gold Line"],
    pass: "Rabbit Card (BTS) - THB 100"
  },
  bali: {
    airportToHotel: [
      { mode: "Grab/Gojek (Official)", duration: "40m", fare: "IDR 150,000", notes: "Lounge pickup at Ngurah Rai" },
      { mode: "Blue Bird Taxi", duration: "45m", fare: "IDR 180,000", notes: "Metereo-based pricing" },
      { mode: "Private Hotel Shuttle", duration: "35m", fare: "IDR 250,000", notes: "Pre-booked with name board" }
    ],
    hotelToAttractions: [
      { from: "Canggu", to: "Tanah Lot", mode: "Scooter Rental", duration: "30m", fare: "IDR 75,000/day" },
      { from: "Canggu", to: "Uluwatu Temple", mode: "Private Driver", duration: "90m", fare: "IDR 500,000/day" },
      { from: "Canggu", to: "Kuta Beach", mode: "Gojek Bike", duration: "25m", fare: "IDR 35,000" }
    ],
    lines: ["Kura-Kura Bus", "No rail network"],
    pass: "Scooter Rental Recommended - IDR 70,000/day"
  },
  london: {
    airportToHotel: [
      { mode: "Heathrow Express", duration: "15m", fare: "GBP 25.00", notes: "Fastest to Paddington" },
      { mode: "Elizabeth Line", duration: "35m", fare: "GBP 12.80", notes: "Direct to West End/City" },
      { mode: "Piccadilly Line (Tube)", duration: "60m", fare: "GBP 5.50", notes: "Cheapest, frequent stops" }
    ],
    hotelToAttractions: [
      { from: "Paddington", to: "Buckingham Palace", mode: "District Line", duration: "12m", fare: "GBP 2.70" },
      { from: "Paddington", to: "British Museum", mode: "Elizabeth Line", duration: "8m", fare: "GBP 2.70" },
      { from: "Paddington", to: "London Eye", mode: "Bakerloo Line", duration: "15m", fare: "GBP 2.70" }
    ],
    lines: ["Central Line", "Jubilee Line", "Piccadilly Line", "Elizabeth Line"],
    pass: "Oyster Card or Contactless Bank Card"
  },
  istanbul: {
    airportToHotel: [
      { mode: "Havaist Airport Bus", duration: "60m", fare: "TRY 200", notes: "Drop to Taksim/Sultanahmet" },
      { mode: "M11 Metro + M2 Transfer", duration: "55m", fare: "TRY 50", notes: "Requires Istanbulkart" },
      { mode: "Private Airport Shuttle", duration: "50m", fare: "TRY 1,200", notes: "Pre-booked, door-to-door" }
    ],
    hotelToAttractions: [
      { from: "Beyoglu", to: "Hagia Sophia", mode: "T1 Tram Line", duration: "15m", fare: "TRY 15" },
      { from: "Beyoglu", to: "Grand Bazaar", mode: "T1 Tram Line", duration: "20m", fare: "TRY 15" },
      { from: "Beyoglu", to: "Bosphorus Cruise", mode: "F1 Funicular + Ferry", duration: "10m", fare: "TRY 30" }
    ],
    lines: ["M11 (Airport)", "M2 (Metro)", "T1 (Tram)", "F1 (Funicular)"],
    pass: "Istanbulkart - TRY 70 + credit"
  }
};
