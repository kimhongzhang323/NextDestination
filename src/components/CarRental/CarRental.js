"use client";

import { formatMYR } from "@/utils/currency";
import styles from "./CarRental.module.css";

const carLogos = {
  "Toyota Rent-a-Car": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
  "Nippon Rent": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Nippon_Rent-A-Car_logo.svg",
  "Lotte Rent": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Lotte_logo.svg",
  "Hertz": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Hertz_logo.svg",
  "Avis": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Avis_logo.svg",
  "Budget": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Budget_Rent_a_Car_logo.svg",
  "Enterprise": "https://upload.wikimedia.org/wikipedia/commons/8/87/Enterprise_Rent-A-Car_Logo.svg",
  "Sixt": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sixt_logo.svg",
  "Garenta": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Airplane_silhouette.svg",
  "Bali Local Wheels": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Airplane_silhouette.svg"
};

export default function CarRental({ options }) {
  return (
    <div className={styles.wrap}>
      {options.map((item) => {
        const logo = carLogos[item.provider] || "https://upload.wikimedia.org/wikipedia/commons/a/a2/Airplane_silhouette.svg";
        return (
          <article key={`${item.provider}-${item.vehicle}`} className={styles.card}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <img src={logo} alt={item.provider} width="32" height="24" style={{ borderRadius: '4px', objectFit: 'contain' }} />
              <h4 style={{ margin: 0 }}>{item.provider}</h4>
            </div>
            <p>
              {item.vehicle} · {formatMYR(item.dailyRate)}/day
            </p>
            <small>
              Pickup: {item.pickup} · Insurance {item.insurance ? "included" : "not included"}
            </small>
          </article>
        );
      })}
    </div>
  );
}
