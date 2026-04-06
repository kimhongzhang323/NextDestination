import { formatMYR } from "@/utils/currency";
import styles from "./HotelCompare.module.css";

const platforms = ["direct", "agoda", "booking", "airbnb", "expedia", "trip"];

export default function HotelCompare({ hotels, nights }) {
  return (
    <div className={styles.wrap}>
      {hotels.map((hotel) => {
        const values = Object.values(hotel.prices);
        const cheapest = Math.min(...values);

        return (
          <article key={hotel.name} className={styles.card}>
            <h3>{hotel.name}</h3>
            <p>{hotel.area}</p>
            <table>
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Night</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {platforms.map((platform) => (
                  <tr key={platform} className={hotel.prices[platform] === cheapest ? styles.best : ""}>
                    <td>{platform}</td>
                    <td>{formatMYR(hotel.prices[platform])}</td>
                    <td>{formatMYR(hotel.prices[platform] * nights)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        );
      })}
    </div>
  );
}
