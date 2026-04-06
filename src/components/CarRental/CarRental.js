import { formatMYR } from "@/utils/currency";
import styles from "./CarRental.module.css";

export default function CarRental({ options }) {
  return (
    <div className={styles.wrap}>
      {options.map((item) => (
        <article key={`${item.provider}-${item.vehicle}`} className={styles.card}>
          <h4>{item.provider}</h4>
          <p>
            {item.vehicle} · {formatMYR(item.dailyRate)}/day
          </p>
          <small>
            Pickup: {item.pickup} · Insurance {item.insurance ? "included" : "not included"}
          </small>
        </article>
      ))}
    </div>
  );
}
