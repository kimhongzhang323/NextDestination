import styles from "./TipCard.module.css";

export default function TipCard({ tip }) {
  return <li className={styles.tip}>{tip}</li>;
}
