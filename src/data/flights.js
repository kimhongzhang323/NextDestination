export const flightsByDestination = {
  tokyo: [
    { airline: "AirAsia", price: 1299, departureTime: "07:05 AM", arrivalTime: "06:00 PM", duration: "9h 55m", stops: 1, baggage: "20kg", route: "KUL–KIX", stopsInfo: "2 hr 15 min PVG", co2: "354 kg", emissions: "Avg emissions" },
    { airline: "Scoot", price: 2115, departureTime: "10:45 PM", arrivalTime: "02:05 PM", duration: "14h 20m", stops: 1, baggage: "20kg", route: "KUL–KIX", stopsInfo: "6 hr 20 min SIN", co2: "336 kg", emissions: "-6% emissions", tags: ["Cheapest"] },
    { airline: "AirAsia", price: 2545, departureTime: "07:30 AM", arrivalTime: "03:00 PM", duration: "6h 30m", stops: 0, baggage: "20kg", route: "KUL–KIX", stopsInfo: "Nonstop", co2: "306 kg", emissions: "-14% emissions", tags: ["Best"] },
    { airline: "Malaysia Airlines", price: 1638, departureTime: "08:15 PM", arrivalTime: "06:00 PM", duration: "20h 45m", stops: 1, baggage: "25kg", route: "KUL–KIX", stopsInfo: "12 hr 50 min PVG", co2: "354 kg", emissions: "Avg emissions" },
    { airline: "JAL", price: 1920, departureTime: "01:55 AM", arrivalTime: "12:10 PM", duration: "9h 15m", stops: 1, baggage: "30kg", route: "KUL–KIX", stopsInfo: "1 hr 25 min PVG", co2: "401 kg", emissions: "+13% emissions" },
    { airline: "Scoot", price: 2115, departureTime: "11:35 AM", arrivalTime: "02:05 PM", duration: "25 hr 30 min", stops: 1, baggage: "20kg", route: "KUL–KIX", stopsInfo: "17 hr 35 min SIN", co2: "351 kg", emissions: "Avg emissions" },
    { airline: "Singapore Airlines", price: 3100, departureTime: "10:15 AM", arrivalTime: "09:30 PM", duration: "10h 15m", stops: 1, baggage: "30kg", route: "KUL–KIX", stopsInfo: "1 hr 45 min SIN", co2: "320 kg", emissions: "-8% emissions" },
    { airline: "ANA", price: 2800, departureTime: "02:15 PM", arrivalTime: "10:45 PM", duration: "7h 30m", stops: 0, baggage: "30kg", route: "KUL–KIX", stopsInfo: "Nonstop", co2: "340 kg", emissions: "Avg emissions" }
  ],
  seoul: [
    { airline: "AirAsia", price: 999, departureTime: "08:00 AM", arrivalTime: "03:20 PM", duration: "6h 20m", stops: 0, baggage: "20kg", route: "KUL–ICN", stopsInfo: "Nonstop", co2: "310 kg", emissions: "-10% emissions", tags: ["Best", "Cheapest"] },
    { airline: "Korean Air", price: 1420, departureTime: "11:30 PM", arrivalTime: "06:35 AM", duration: "6h 5m", stops: 0, baggage: "25kg", route: "KUL–ICN", stopsInfo: "Nonstop", co2: "350 kg", emissions: "Avg emissions" },
    { airline: "Malaysia Airlines", price: 1260, departureTime: "10:15 AM", arrivalTime: "05:30 PM", duration: "6h 15m", stops: 0, baggage: "25kg", route: "KUL–ICN", stopsInfo: "Nonstop", co2: "330 kg", emissions: "-5% emissions" }
  ],
  bangkok: [
    { airline: "Thai Airways", price: 499, departureTime: "09:00 AM", arrivalTime: "11:10 AM", duration: "2h 10m", stops: 0, baggage: "20kg", route: "KUL–BKK", stopsInfo: "Nonstop", co2: "150 kg", emissions: "Avg emissions", tags: ["Best"] },
    { airline: "AirAsia", price: 450, departureTime: "01:20 PM", arrivalTime: "03:25 PM", duration: "2h 5m", stops: 0, baggage: "20kg", route: "KUL–BKK", stopsInfo: "Nonstop", co2: "145 kg", emissions: "-3% emissions", tags: ["Cheapest"] },
    { airline: "Singapore Airlines", price: 920, departureTime: "08:15 AM", arrivalTime: "12:35 PM", duration: "4h 20m", stops: 1, baggage: "25kg", route: "KUL–BKK", stopsInfo: "1h 30m SIN", co2: "180 kg", emissions: "+5% emissions" }
  ],
  bali: [
    { airline: "AirAsia", price: 799, departureTime: "10:30 AM", arrivalTime: "01:40 PM", duration: "3h 10m", stops: 0, baggage: "20kg", route: "KUL–DPS", stopsInfo: "Nonstop", co2: "190 kg", emissions: "-5% emissions", tags: ["Best", "Cheapest"] },
    { airline: "Malaysia Airlines", price: 980, departureTime: "02:15 PM", arrivalTime: "05:20 PM", duration: "3h 5m", stops: 0, baggage: "25kg", route: "KUL–DPS", stopsInfo: "Nonstop", co2: "200 kg", emissions: "Avg emissions" },
    { airline: "Scoot", price: 760, departureTime: "08:00 AM", arrivalTime: "12:20 PM", duration: "4h 20m", stops: 1, baggage: "20kg", route: "KUL–DPS", stopsInfo: "1h 10m SIN", co2: "210 kg", emissions: "Avg emissions" }
  ],
  london: [
    { airline: "Emirates", price: 2699, departureTime: "07:15 PM", arrivalTime: "10:55 AM", duration: "15h 40m", stops: 1, baggage: "30kg", route: "KUL–LHR", stopsInfo: "3h DXB", co2: "1200 kg", emissions: "Avg emissions", tags: ["Best"] },
    { airline: "Singapore Airlines", price: 2890, departureTime: "11:55 PM", arrivalTime: "02:45 PM", duration: "14h 50m", stops: 1, baggage: "30kg", route: "KUL–LHR", stopsInfo: "2h SIN", co2: "1150 kg", emissions: "-4% emissions" },
    { airline: "Malaysia Airlines", price: 2499, departureTime: "11:15 PM", arrivalTime: "03:35 PM", duration: "16h 20m", stops: 1, baggage: "25kg", route: "KUL–LHR", stopsInfo: "Direct", co2: "1250 kg", emissions: "Avg emissions", tags: ["Cheapest"] }
  ],
  istanbul: [
    { airline: "Turkish Airlines", price: 2090, departureTime: "11:55 PM", arrivalTime: "11:10 AM", duration: "11h 15m", stops: 1, baggage: "30kg", route: "KUL–IST", stopsInfo: "Nonstop", co2: "850 kg", emissions: "-5% emissions", tags: ["Best"] },
    { airline: "Emirates", price: 2210, departureTime: "07:30 PM", arrivalTime: "07:35 AM", duration: "12h 5m", stops: 1, baggage: "30kg", route: "KUL–IST", stopsInfo: "2h DXB", co2: "900 kg", emissions: "Avg emissions" },
    { airline: "Qatar Airways", price: 1980, departureTime: "02:15 AM", arrivalTime: "02:05 PM", duration: "11h 50m", stops: 1, baggage: "25kg", route: "KUL–IST", stopsInfo: "1h DOH", co2: "880 kg", emissions: "Avg emissions", tags: ["Cheapest"] }
  ]
};
