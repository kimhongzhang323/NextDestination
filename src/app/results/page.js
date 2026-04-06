import Link from "next/link";
import { parseSearchQuery } from "@/utils/searchParser";
import { getDestinationBySlug } from "@/data/destinations";
import { flightsByDestination } from "@/data/flights";
import { hotelsByDestination } from "@/data/hotels";
import { carRentalsByDestination } from "@/data/carRentals";
import { arrivalInfoByDestination } from "@/data/arrivalCards";
import { currencyInfoByDestination } from "@/data/currencies";
import { transitByDestination } from "@/data/transit";
import { travelChecklistByDestination } from "@/data/travelChecklist";
import JourneyStrip from "@/components/JourneyStrip/JourneyStrip";
import FlightCard from "@/components/FlightCard/FlightCard";
import CarRental from "@/components/CarRental/CarRental";
import TransitMap from "@/components/TransitMap/TransitMap";
import HotelCompare from "@/components/HotelCompare/HotelCompare";
import ArrivalCard from "@/components/ArrivalCard/ArrivalCard";
import CurrencyInfo from "@/components/CurrencyInfo/CurrencyInfo";
import DoorToDoorBar from "@/components/DoorToDoorBar/DoorToDoorBar";
import AIAssistant from "@/components/AIAssistant/AIAssistant";
import TravelChecklist from "@/components/TravelChecklist/TravelChecklist";
import styles from "./page.module.css";

const airlineIATAMap = {
  "AirAsia": "AK", "Malaysia Airlines": "MH", "JAL": "JL", "Scoot": "TR",
  "Korean Air": "KE", "Thai Airways": "TG", "Singapore Airlines": "SQ",
  "Emirates": "EK", "Turkish Airlines": "TK", "Qatar Airways": "QR", "ANA": "NH"
};

function FilterSidebar() {
  return (
    <aside className={styles.filterSidebar}>
      <h3 style={{ marginBottom: '1.25rem', fontSize: '1.25rem', paddingBottom: '0.75rem', borderBottom: '2px solid #e2e8f0', color: '#0f172a' }}>Filter Results</h3>
      
      <div style={{ marginBottom: '1.75rem' }}>
        <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', color: '#1e293b', fontWeight: 'bold' }}>Stops</h4>
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#475569' }}><input type="checkbox" defaultChecked style={{ marginRight: '8px' }} /> Any stops</label>
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#475569' }}><input type="checkbox" style={{ marginRight: '8px' }} /> Non-stop only</label>
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#475569' }}><input type="checkbox" style={{ marginRight: '8px' }} /> Up to 1 stop</label>
      </div>

      <div style={{ marginBottom: '1.75rem' }}>
        <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', color: '#1e293b', fontWeight: 'bold' }}>Price Range</h4>
        <input type="range" min="0" max="10000" defaultValue="5000" style={{ width: '100%', marginBottom: '0.5rem' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.85rem' }}>
          <span>RM 0</span>
          <span>Max: RM 5000</span>
        </div>
      </div>

      <div style={{ marginBottom: '1.75rem' }}>
        <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', color: '#1e293b', fontWeight: 'bold' }}>Time Adjustable</h4>
        <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '8px' }}>Show flights departing after:</p>
        <input type="time" defaultValue="00:00" style={{ width: '100%', padding: '8px', border: '1px solid #e2e8f0', borderRadius: '4px' }} />
      </div>

      <div style={{ marginBottom: '1.75rem' }}>
        <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', color: '#1e293b', fontWeight: 'bold' }}>Airlines</h4>
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#475569' }}><input type="checkbox" defaultChecked style={{ marginRight: '8px' }} /> AirAsia</label>
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#475569' }}><input type="checkbox" defaultChecked style={{ marginRight: '8px' }} /> Malaysia Airlines</label>
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#475569' }}><input type="checkbox" defaultChecked style={{ marginRight: '8px' }} /> JAL</label>
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#475569' }}><input type="checkbox" defaultChecked style={{ marginRight: '8px' }} /> Scoot</label>
      </div>

      <div style={{ marginBottom: '1.75rem' }}>
        <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', color: '#1e293b', fontWeight: 'bold' }}>Seat Type</h4>
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#475569' }}><input type="checkbox" defaultChecked style={{ marginRight: '8px' }} /> Economy</label>
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#475569' }}><input type="checkbox" defaultChecked style={{ marginRight: '8px' }} /> Premium Economy</label>
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#475569' }}><input type="checkbox" defaultChecked style={{ marginRight: '8px' }} /> Business class</label>
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', color: '#475569' }}><input type="checkbox" defaultChecked style={{ marginRight: '8px' }} /> First class</label>
      </div>

      <button style={{ width: '100%', padding: '0.85rem', backgroundColor: '#ffd166', color: '#1e293b', border: '2px solid #1e293b', fontWeight: '800', cursor: 'pointer', borderRadius: '4px', fontSize: '1rem', textTransform: 'uppercase' }}>Apply Filters</button>
    </aside>
  );
}

export default async function ResultsPage({ searchParams }) {
  const params = await searchParams;
  const rawQ = params?.q || "";
  const activeTab = params?.tab || "All";
  const flightView = params?.flightView || "list";
  const parsed = parseSearchQuery(rawQ);
  const destination = getDestinationBySlug(parsed.destinationSlug);
  const rawFlights = flightsByDestination[parsed.destinationSlug] || [];
  
  // Sort flights by time (mock sorting based on HH:MM)
  const flights = [...rawFlights].sort((a, b) => {
    const timeA = a.departureTime.includes('PM') && !a.departureTime.startsWith('12') ? parseInt(a.departureTime) + 12 : parseInt(a.departureTime);
    const timeB = b.departureTime.includes('PM') && !b.departureTime.startsWith('12') ? parseInt(b.departureTime) + 12 : parseInt(b.departureTime);
    return timeA - timeB;
  });

  const hotels = hotelsByDestination[parsed.destinationSlug] || [];
  const cars = carRentalsByDestination[parsed.destinationSlug] || [];
  const arrival = arrivalInfoByDestination[parsed.destinationSlug];
  const currency = currencyInfoByDestination[parsed.destinationSlug];
  const transit = transitByDestination[parsed.destinationSlug];
  const checklist = travelChecklistByDestination[parsed.destinationSlug];

  const cheapestFlight = flights.length ? Math.min(...flights.map((item) => item.price)) : 0;
  const cheapestHotel = hotels.length
    ? Math.min(...hotels.map((hotel) => Math.min(...Object.values(hotel.prices)))) * parsed.days
    : 0;
  const cheapestCar = cars.length ? Math.min(...cars.map((item) => item.dailyRate)) * parsed.days : 0;
  const total = cheapestFlight + cheapestHotel + cheapestCar;

  const bestFlight = flights.find(f => f.tags?.includes('Best')) || flights[0];
  const cheapestFlightObj = flights.find(f => f.tags?.includes('Cheapest')) || flights[0];

  return (
    <div className={styles.page}>
      <div className={styles.titleContainer}>
        <div>
          <h1>
            {parsed.origin} to {destination.city}
          </h1>
          <p className={styles.subtext}>
            {parsed.days} days · {parsed.travelers} traveler(s) · Budget RM {parsed.budget}
          </p>
        </div>
        <JourneyStrip activeTab={activeTab} queryParams={rawQ} />
      </div>

      <div className={styles.grid}>
        <FilterSidebar />
        
        <section className={styles.main}>
          {(activeTab === "All" || activeTab === "Flights") && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '1rem 0 1rem' }}>
                <h2 style={{ margin: 0 }}>Flights</h2>
                <div style={{ display: 'flex', gap: '8px', backgroundColor: '#e2e8f0', padding: '4px', borderRadius: '6px' }}>
                  <Link href={`/results?q=${encodeURIComponent(rawQ)}&tab=${encodeURIComponent(activeTab)}&flightView=list`} style={{ padding: '6px 12px', borderRadius: '4px', background: flightView === 'list' ? '#fff' : 'transparent', color: flightView === 'list' ? '#0f172a' : '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold', boxShadow: flightView === 'list' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none' }}>List View</Link>
                  <Link href={`/results?q=${encodeURIComponent(rawQ)}&tab=${encodeURIComponent(activeTab)}&flightView=airline`} style={{ padding: '6px 12px', borderRadius: '4px', background: flightView === 'airline' ? '#fff' : 'transparent', color: flightView === 'airline' ? '#0f172a' : '#64748b', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold', boxShadow: flightView === 'airline' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none' }}>Airline View</Link>
                </div>
              </div>

              {/* Best / Cheapest summary - list view only */}
              {flightView === 'list' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ padding: '14px 16px', border: '2px solid #3b82f6', borderRadius: '8px', backgroundColor: '#eff6ff' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1d4ed8', marginBottom: '4px' }}>Best</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e3a8a' }}>RM {bestFlight.price.toLocaleString()}</div>
                    <div style={{ fontSize: '0.8rem', color: '#3b82f6', marginTop: '2px' }}>{bestFlight.duration}</div>
                  </div>
                  <div style={{ padding: '14px 16px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>Cheapest</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>RM {cheapestFlightObj.price.toLocaleString()}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>{cheapestFlightObj.duration}</div>
                  </div>
                </div>
              )}

              {/* Sort bar - airline view only */}
              {flightView === 'airline' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '16px', fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.5px', borderBottom: '1px solid #e5e7eb', paddingBottom: '10px' }}>
                  <span style={{ color: '#475569' }}>Sort by:</span>
                  <span style={{ color: '#1e3a5f', fontWeight: 700, borderBottom: '2px solid #1e3a5f', paddingBottom: '8px', marginBottom: '-11px', cursor: 'pointer' }}>Travel Duration</span>
                  <span style={{ cursor: 'pointer' }}>Price</span>
                  <span style={{ cursor: 'pointer' }}>Arrival Time</span>
                  <span style={{ cursor: 'pointer' }}>Departure Time</span>
                </div>
              )}

              {/* List view: all flights together */}
              {flightView === 'list' && (
                <div
                  className={styles.cards}
                  style={{ border: '1px solid #3c4043', borderRadius: '8px', overflow: 'hidden' }}
                >
                  {flights.map((flight) => (
                    <FlightCard key={`${flight.airline}-${flight.departureTime}`} flight={flight} view="list" />
                  ))}
                </div>
              )}

              {/* Airline view: grouped by airline */}
              {flightView === 'airline' && (() => {
                const grouped = {};
                flights.forEach(f => {
                  if (!grouped[f.airline]) grouped[f.airline] = [];
                  grouped[f.airline].push(f);
                });
                return Object.entries(grouped).map(([airline, airlineFlights]) => (
                  <div key={airline} style={{ marginBottom: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #1e3a5f' }}>
                      <img src={`https://images.kiwi.com/airlines/64/${airlineIATAMap[airline] || 'U2'}.png`} alt={airline} width="28" height="28" style={{ borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #e5e7eb', objectFit: 'contain' }} />
                      <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: '#1e3a5f', fontFamily: 'Georgia, "Times New Roman", serif' }}>{airline}</h3>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', marginLeft: 'auto' }}>{airlineFlights.length} flight{airlineFlights.length > 1 ? 's' : ''}</span>
                    </div>
                    <div className={styles.cardsSpaced}>
                      {airlineFlights.map((flight) => (
                        <FlightCard key={`${flight.airline}-${flight.departureTime}`} flight={flight} view="airline" />
                      ))}
                    </div>
                  </div>
                ));
              })()}

              {/* Footer count */}
              {flightView === 'airline' && (
                <div style={{ textAlign: 'center', padding: '16px', border: '1px solid #e5e7eb', borderRadius: '6px', marginTop: '12px', color: '#0369a1', fontSize: '0.85rem' }}>
                  <div style={{ fontWeight: 700 }}>Showing {flights.length} out of {flights.length} flights</div>
                  <div style={{ cursor: 'pointer', marginTop: '4px' }}>Show all flights</div>
                </div>
              )}
            </>
          )}

          {(activeTab === "All" || activeTab === "Car Rental") && (
            <>
              <h2>Car Rental</h2>
              <CarRental options={cars} />
            </>
          )}

          {(activeTab === "All" || activeTab === "Transit") && (
            <>
              <h2>Transit</h2>
              <TransitMap transit={transit} />
            </>
          )}

          {(activeTab === "All" || activeTab === "Hotels") && (
            <>
              <h2>Hotels</h2>
              <HotelCompare hotels={hotels} nights={parsed.days} />
            </>
          )}

          {(activeTab === "All" || activeTab === "Checklist") && (
            <>
              <h2>Pre-Travel Checklist</h2>
              <TravelChecklist checklist={checklist} />
            </>
          )}

          {activeTab === "Return" && (
            <>
              <h2>Return Journey</h2>
              <p style={{ color: '#64748b' }}>Select your returning transport details here to complete your booking.</p>
            </>
          )}
        </section>

        <aside className={styles.sidebar}>
          <AIAssistant destination={destination} />
          <ArrivalCard info={arrival} />
          <CurrencyInfo info={currency} />
        </aside>
      </div>

      <DoorToDoorBar total={total} />
    </div>
  );
}
