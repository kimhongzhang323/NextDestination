import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.brand}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        NextDestination
      </Link>
      <nav className={styles.links}>
        <Link href="/" className={styles.active}>Home</Link>
        <Link href="#book">Book Now</Link>
        <Link href="#packages">Packages</Link>
        <Link href="#places">Popular Places</Link>
      </nav>
      <button className={styles.joinBtn}>Join</button>
    </header>
  );
}
