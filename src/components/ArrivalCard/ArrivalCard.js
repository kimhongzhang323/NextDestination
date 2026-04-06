import styles from "./ArrivalCard.module.css";

export default function ArrivalCard({ info }) {
  return (
    <section className={styles.card}>
      <h3>Arrival Card & Entry</h3>
      <p>{info.visa}</p>
      <p>{info.health}</p>
      <p>{info.customs}</p>
    </section>
  );
}
