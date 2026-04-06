import { parseSearchQuery } from "@/utils/searchParser";
import { getDestinationBySlug } from "@/data/destinations";
import { flightsByDestination } from "@/data/flights";
import { hotelsByDestination } from "@/data/hotels";
import { carRentalsByDestination } from "@/data/carRentals";
import { arrivalInfoByDestination } from "@/data/arrivalCards";
import { currencyInfoByDestination } from "@/data/currencies";
import { transitByDestination } from "@/data/transit";
import JourneyStrip from "@/components/JourneyStrip/JourneyStrip";
import FlightCard from "@/components/FlightCard/FlightCard";
import CarRental from "@/components/CarRental/CarRental";
import TransitMap from "@/components/TransitMap/TransitMap";
import HotelCompare from "@/components/HotelCompare/HotelCompare";
import ArrivalCard from "@/components/ArrivalCard/ArrivalCard";
import CurrencyInfo from "@/components/CurrencyInfo/CurrencyInfo";
import DoorToDoorBar from "@/components/DoorToDoorBar/DoorToDoorBar";
import AIAssistant from "@/components/AIAssistant/AIAssistant";
import styles from "./page.module.css";

function FilterSidebar() {
  return (
    <aside className={styles.filterSidebar}>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', paddingBottom: '0.5rem', borderBottom: '2px solid #e2e8f0' }}>Filters</h3>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: '#64748b' }}>Stops (Flights)</h4>
        <label style={{ display: 'block', marginBottom: '0.3rem' }}><input type="checkbox" defaultChecked /> Any stops</label>
        <label style={{ display: 'block', marginBottom: '0.3rem' }}><input type="checkbox" /> Non-stop only</label>
        <label style={{ display: 'block', marginBottom: '0.3rem' }}><input type="checkbox" /> Up to 1 stop</label>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: '#64748b' }}>Airlines</h4>
        <label style={{ display: 'block', marginBottom: '0.3rem' }}><input type="checkbox" defaultChecked /> AirAsia</label>
        <label style={{ display: 'block', marginBottom: '0.3rem' }}><input type="checkbox" defaultChecked /> Malaysia Airlines</label>
        <label style={{ display: 'block', marginBottom: '0.3rem' }}><input type="checkbox" defaultChecked /> JAL</label>
        <label style={{ display: 'block', marginBottom: '0.3rem' }}><input type="checkbox" defaultChecked /> Scoot</label>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: '#64748b' }}>Car Types</h4>
        <label style={{ display: 'block', marginBottom: '0.3rem' }}><input type="checkbox" defaultChecked /> Compact</label>
        <label style={{ display: 'block', marginBottom: '0.3rem' }}><input type="checkbox" defaultChecked /> SUV</label>
        <label style={{ display: 'block', marginBottom: '0.3rem' }}><input type="checkbox" defaultChecked /> Sedan</label>
      </div>

      <button style={{ width: '100%', padding: '0.75rem', backgroundColor: '#ffd166', color: '#1e293b', border: '2px solid #1e293b', fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px' }}>Apply Filters</button>
    </aside>
  );
}

export default async function ResultsPage({ searchParams }) {
  const params = await searchParams;
  const rawQ = params?.q || "";
  const activeTab = params?.tab || "All";
  const parsed = parseSearchQuery(rawQ);
  const destination = getDestinationBySlug(parsed.destinationSlug);
  const flights = flightsByDestination[parsed.destinationSlug] || [];
  const hotels = hotelsByDestination[parsed.destinationSlug] || [];
  const cars = carRentalsByDestination[parsed.destinationSlug] || [];
  const arrival = arrivalInfoByDestination[parsed.destinationSlug];
  const currency = currencyInfoByDestination[parsed.destinationSlug];
  const transit = transitByDestination[parsed.destinationSlug];

  const cheapestFlight = flights.length ? Math.min(...flights.map((item) => item.price)) : 0;
  const cheapestHotel = hotels.length
    ? Math.min(...hotels.map((hotel) => Math.min(...Object.values(hotel.prices)))) * parsed.days
    : 0;
  const cheapestCar = cars.length ? Math.min(...cars.map((item) => item.dailyRate)) * parsed.days : 0;
  const total = cheapestFlight + cheapestHotel + cheapestCar;

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
              <h2>Flights</h2>
              <div className={styles.cards}>
                {flights.map((flight) => (
                  <FlightCard key={`${flight.airline}-${flight.price}`} flight={flight} />
                ))}
              </div>
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
