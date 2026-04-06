import Link from "next/link";
import styles from "./JourneyStrip.module.css";

const steps = ["All", "Flights", "Car Rental", "Transit", "Hotels", "Return"];

export default function JourneyStrip({ activeTab = "All", queryParams = "" }) {
  return (
    <div className={styles.strip}>
      {steps.map((step, index) => {
        const isActive = activeTab === step;
        return (
          <div key={step} className={styles.step}>
            <Link 
              href={`/results?q=${encodeURIComponent(queryParams)}&tab=${encodeURIComponent(step)}`}
              style={{ fontWeight: isActive ? 'bold' : 'normal', color: isActive ? '#1e293b' : 'inherit', textDecoration: 'none' }}
            >
              {step}
            </Link>
            {index !== steps.length - 1 ? <i /> : null}
          </div>
        );
      })}
    </div>
  );
}
