import { formatMYR } from "@/utils/currency";
import styles from "./DoorToDoorBar.module.css";

export default function DoorToDoorBar({ total }) {
  return (
    <aside className={styles.bar}>
      <span>Door-to-door estimate</span>
      <strong>{formatMYR(total)}</strong>
    </aside>
  );
}
