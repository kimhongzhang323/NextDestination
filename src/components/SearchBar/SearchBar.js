"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("Tokyo");

  function onSubmit(event) {
    event.preventDefault();
    router.push(`/results?q=${encodeURIComponent(`KL to ${location}, 5 days, RM5000 budget`)}`);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.field}>
        <label>Location <span className={styles.downArrow}>&#8964;</span></label>
        <input 
           placeholder="Where are you going" 
           aria-label="Location"
           value={location}
           onChange={(e) => setLocation(e.target.value)} 
        />
      </div>
      <div className={styles.divider}></div>
      <div className={styles.field}>
        <label>Date <span className={styles.downArrow}>&#8964;</span></label>
        <input placeholder="Choose date" aria-label="Date" />
      </div>
      <div className={styles.divider}></div>
      <div className={styles.field}>
        <label>Guest <span className={styles.downArrow}>&#8964;</span></label>
        <input placeholder="- Add +" aria-label="Guest" />
      </div>
      <button type="submit" className={styles.searchBtn}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        Search
      </button>
    </form>
  );
}
