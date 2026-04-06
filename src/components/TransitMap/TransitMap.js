import RouteCard from "@/components/RouteCard/RouteCard";
import styles from "./TransitMap.module.css";

export default function TransitMap({ transit }) {
  return (
    <section className={styles.card}>
      <h3>Transit Overview</h3>
      <p>{transit.pass}</p>
      <div className={styles.lines}>
        {transit.lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <div className={styles.routes}>
        {transit.airportToCity.map((route) => (
          <RouteCard key={route.mode} route={route} />
        ))}
      </div>
    </section>
  );
}
