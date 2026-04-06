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
import styles from "./page.module.css";

export default async function ResultsPage({ searchParams }) {
  const params = await searchParams;
  const parsed = parseSearchQuery(params?.q || "");
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
      <h1>
        {parsed.origin} to {destination.city}
      </h1>
      <p className={styles.subtext}>
        {parsed.days} days · {parsed.travelers} traveler(s) · Budget RM {parsed.budget}
      </p>

      <JourneyStrip />

      <div className={styles.grid}>
        <section className={styles.main}>
          <h2>Flights</h2>
          <div className={styles.cards}>
            {flights.map((flight) => (
              <FlightCard key={`${flight.airline}-${flight.price}`} flight={flight} />
            ))}
          </div>

          <h2>Car Rental</h2>
          <CarRental options={cars} />

          <h2>Transit</h2>
          <TransitMap transit={transit} />

          <h2>Hotels</h2>
          <HotelCompare hotels={hotels} nights={parsed.days} />
        </section>

        <aside className={styles.sidebar}>
          <ArrivalCard info={arrival} />
          <CurrencyInfo info={currency} />
        </aside>
      </div>

      <DoorToDoorBar total={total} />
    </div>
  );
}
