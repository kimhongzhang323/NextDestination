import { formatMYR } from "@/utils/currency";
import styles from "./FlightCard.module.css";

export default function FlightCard({ flight }) {
  return (
    <article className={styles.card}>
      <h3>{flight.airline}</h3>
      <p>{formatMYR(flight.price)}</p>
      <small>
        {flight.duration} · {flight.stops} stop(s) · {flight.baggage}
      </small>
    </article>
  );
}
