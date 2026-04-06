"use client";

import { useState, useEffect } from "react";
import styles from "./AIAssistant.module.css";

export default function AIAssistant({ destination }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate AI generation time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.sparkle}>🪄</span>
        <h3 style={{ margin: 0 }}>AI Prep Guide: {destination.city}</h3>
      </div>
      {loading ? (
        <div className={styles.loading}>
          <div className={styles.pulse}></div>
          <p>Analyzing pre-arrival needs for {destination.country}...</p>
        </div>
      ) : (
        <ul className={styles.tips}>
          <li><strong>Visa Check:</strong> Ensure your passport has 6 months validity. Check if your nationality requires an entry visa.</li>
          <li><strong>Connectivity:</strong> Buy a local {destination.country} eSIM or arrange portable Wi-Fi prior to boarding.</li>
          <li><strong>Adapters:</strong> Find out the standard plug type in {destination.city} and pack a universal adapter in your carry-on.</li>
          <li><strong>Offline Maps:</strong> Download offline Google Maps for {destination.city} in case of spotty internet on arrival.</li>
          <li><strong>Cash:</strong> Prepare a small amount of local currency ({destination.currency}) for immediate needs at the airport if cards aren't accepted everywhere.</li>
        </ul>
      )}
    </div>
  );
}
