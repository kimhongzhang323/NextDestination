import Link from "next/link";
import styles from "./JourneyStrip.module.css";

const steps = ["All", "Departure", "Flights", "Arrival", "Hotels", "Local Plan", "Checklist"];

export default function JourneyStrip({ activeTab = "All", queryParams = "" }) {
  return (
    <div className={styles.strip}>
      {steps.map((step, index) => {
        const isActive = activeTab === step;
        return (
          <div key={step} className={styles.step}>
            <Link 
              href={`/results?q=${encodeURIComponent(queryParams)}&tab=${encodeURIComponent(step)}`}
              style={{ fontWeight: isActive ? 'bold' : 'normal', color: isActive ? '#1e3a5f' : 'inherit', textDecoration: 'none', fontSize: '0.9rem' }}
            >
              {step}
            </Link>
            {index !== steps.length - 1 ? <i style={{ width: '12px', height: '12px', borderTop: '2px solid #cbd5e1', borderRight: '2px solid #cbd5e1', transform: 'rotate(45deg)', margin: '0 12px', opacity: 0.5 }} /> : null}
          </div>
        );
      })}
    </div>
  );
}
