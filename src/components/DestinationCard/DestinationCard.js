import Link from "next/link";
import styles from "./DestinationCard.module.css";

const cardImages = [
  "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1587313632739-c894c03b1349?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
];

export default function DestinationCard({ destination, index }) {
  const isHorizontal = index < 2;
  const image = cardImages[index % cardImages.length];

  if (isHorizontal) {
    return (
      <article className={`${styles.card} ${styles.horizontal}`}>
        <div className={styles.imgWrap} style={{ backgroundImage: `url(${image})` }}></div>
        <div className={styles.content}>
          <div className={styles.topInfo}>
            <h3>{destination.country}</h3>
             <p className={styles.location}>
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
               </svg> {destination.city}
             </p>
          </div>
          <Link href={`/destination/${destination.slug}`} className={styles.bookBtn}>Book Now</Link>
        </div>
      </article>
    );
  }

  return (
    <article className={`${styles.card} ${styles.vertical}`} style={{ backgroundImage: `url(${image})` }}>
       <div className={styles.pill}>
         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
         </svg>
         {destination.country}
       </div>
       <div className={styles.bottomOverlay}>
         <h3>{destination.city}</h3>
         <div className={styles.stars}>★★★★★</div>
         <Link href={`/destination/${destination.slug}`} className={styles.bookBtnText}>Book Now</Link>
       </div>
    </article>
  );
}
