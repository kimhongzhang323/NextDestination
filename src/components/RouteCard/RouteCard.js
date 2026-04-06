import styles from "./RouteCard.module.css";

export default function RouteCard({ route }) {
  return (
    <article className={styles.card}>
      <h4>{route.mode}</h4>
      <p>
        {route.duration} · {route.fare}
      </p>
    </article>
  );
}
