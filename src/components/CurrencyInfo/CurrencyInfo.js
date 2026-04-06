import { formatNumber } from "@/utils/currency";
import styles from "./CurrencyInfo.module.css";

export default function CurrencyInfo({ info }) {
  return (
    <section className={styles.card}>
      <h3>Currency & Payment</h3>
      <p>1 MYR = {formatNumber(info.exchangeRate)} {info.code}</p>
      <p>{info.summary}</p>
      <p>{info.atm}</p>
      <div className={styles.tags}>
        {info.payment.map((method) => (
          <span key={method}>{method}</span>
        ))}
      </div>
    </section>
  );
}
