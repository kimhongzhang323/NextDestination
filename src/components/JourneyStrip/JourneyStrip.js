import styles from "./JourneyStrip.module.css";

const steps = ["Flights", "Car Rental", "Transit", "Hotels", "Return"];

export default function JourneyStrip() {
  return (
    <div className={styles.strip}>
      {steps.map((step, index) => (
        <div key={step} className={styles.step}>
          <span>{step}</span>
          {index !== steps.length - 1 ? <i /> : null}
        </div>
      ))}
    </div>
  );
}
