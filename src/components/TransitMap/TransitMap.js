import RouteCard from "@/components/RouteCard/RouteCard";
import styles from "./TransitMap.module.css";

export default function TransitMap({ transit }) {
  return (
    <section className={styles.card}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <h3 style={{ margin: 0 }}>Transit Overview</h3>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_Maps_icon.svg" height="24" width="16" alt="Google Maps" />
      </div>
      <p style={{ fontWeight: 'bold', color: '#1e293b' }}>{transit.pass}</p>
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
