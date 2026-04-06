import { notFound } from "next/navigation";
import { getDestinationBySlug } from "@/data/destinations";
import { arrivalInfoByDestination } from "@/data/arrivalCards";
import { currencyInfoByDestination } from "@/data/currencies";
import { transitByDestination } from "@/data/transit";
import { tipsByDestination } from "@/data/tips";
import TransitMap from "@/components/TransitMap/TransitMap";
import ArrivalCard from "@/components/ArrivalCard/ArrivalCard";
import CurrencyInfo from "@/components/CurrencyInfo/CurrencyInfo";
import TipCard from "@/components/TipCard/TipCard";
import styles from "./page.module.css";

export default async function DestinationPage({ params }) {
  const route = await params;
  const destination = getDestinationBySlug(route.slug);

  if (!destination) {
    notFound();
  }

  const arrival = arrivalInfoByDestination[destination.slug];
  const currency = currencyInfoByDestination[destination.slug];
  const transit = transitByDestination[destination.slug];
  const tips = tipsByDestination[destination.slug] || [];

  return (
    <div className={styles.page}>
      <h1>
        {destination.city}, {destination.country}
      </h1>
      <p className={styles.subtext}>Transit, arrival info, currency guide, and local tips.</p>

      <div className={styles.tabs}>
        <a href="#transit">Transit Map</a>
        <a href="#arrival">Arrival Card</a>
        <a href="#currency">Currency & Payment</a>
        <a href="#tips">Travel Tips</a>
      </div>

      <section id="transit" className={styles.section}>
        <TransitMap transit={transit} />
      </section>

      <section id="arrival" className={styles.section}>
        <ArrivalCard info={arrival} />
      </section>

      <section id="currency" className={styles.section}>
        <CurrencyInfo info={currency} />
      </section>

      <section id="tips" className={styles.section}>
        <h2>Smart Travel Tips</h2>
        <ul className={styles.tips}>
          {tips.map((tip) => (
            <TipCard key={tip} tip={tip} />
          ))}
        </ul>
      </section>
    </div>
  );
}
