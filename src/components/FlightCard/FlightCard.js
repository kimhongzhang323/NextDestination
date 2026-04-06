"use client";

import { formatMYR } from "@/utils/currency";
import styles from "./FlightCard.module.css";

const airlineLogos = {
  "AirAsia": "https://upload.wikimedia.org/wikipedia/commons/f/f5/AirAsia_New_Logo.svg",
  "Malaysia Airlines": "https://upload.wikimedia.org/wikipedia/commons/a/af/Malaysia_Airlines_Logo.svg",
  "JAL": "https://upload.wikimedia.org/wikipedia/en/1/19/Japan_Airlines_Logo.svg",
  "Scoot": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Scoot_logo.svg",
  "Korean Air": "https://upload.wikimedia.org/wikipedia/commons/0/07/Korean_Air_logo.svg",
  "Thai Airways": "https://upload.wikimedia.org/wikipedia/en/5/58/Thai_Airways_Logo.svg",
  "Singapore Airlines": "https://upload.wikimedia.org/wikipedia/en/6/6b/Singapore_Airlines_Logo_2.svg",
  "Emirates": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg",
  "Turkish Airlines": "https://upload.wikimedia.org/wikipedia/commons/4/44/Turkish_Airlines_logo.svg",
  "Qatar Airways": "https://upload.wikimedia.org/wikipedia/en/9/9b/Qatar_Airways_Logo.svg"
};

export default function FlightCard({ flight }) {
  const logo = airlineLogos[flight.airline] || "https://upload.wikimedia.org/wikipedia/commons/a/a2/Airplane_silhouette.svg";
  
  // Airport board styling
  return (
    <article className={styles.card} style={{ backgroundColor: '#111', color: '#ffb000', fontFamily: 'monospace', padding: '16px', border: '2px solid #333' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px dashed #444', paddingBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src={logo} alt={flight.airline} width="24" height="24" style={{ borderRadius: '4px', backgroundColor: '#fff', padding: '2px' }} />
          <h3 style={{ margin: 0, fontSize: '1rem', color: '#fff', textTransform: 'uppercase' }}>{flight.airline}</h3>
        </div>
        <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>From {formatMYR(flight.price)}</div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div>
          <span style={{ color: '#aaa', fontSize: '0.75rem', display: 'block' }}>DEPARTURE</span>
          <span style={{ fontSize: '1.1rem', color: '#0f0' }}>{flight.departureTime || '08:00 AM'}</span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: '#aaa', fontSize: '0.75rem', display: 'block' }}>DURATION</span>
          <span>{flight.duration}</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ color: '#aaa', fontSize: '0.75rem', display: 'block' }}>ARRIVAL</span>
          <span style={{ fontSize: '1.1rem', color: '#0f0' }}>{flight.arrivalTime || '02:45 PM'}</span>
        </div>
      </div>

      <div style={{ background: '#222', padding: '8px', borderRadius: '4px', border: '1px solid #444', overflow: 'hidden' }}>
        <table style={{ width: '100%', fontSize: '0.85rem', color: '#ccc', borderCollapse: 'collapse' }}>
           <thead>
             <tr style={{ textAlign: 'left', borderBottom: '1px dashed #555' }}>
               <th style={{ padding: '4px', fontWeight: 'normal', color: '#777' }}>CLASS</th>
               <th style={{ padding: '4px', fontWeight: 'normal', color: '#777' }}>DEPART</th>
               <th style={{ padding: '4px', fontWeight: 'normal', textAlign: 'right', color: '#777' }}>RATE</th>
               <th style={{ padding: '4px' }}></th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td style={{ padding: '6px 4px', color: '#fff' }}>ECON</td>
               <td style={{ padding: '6px 4px' }}>08:00 AM</td>
               <td style={{ padding: '6px 4px', textAlign: 'right' }}>{formatMYR(flight.price)}</td>
               <td style={{ padding: '6px 4px', textAlign: 'right' }}><button style={{ background: '#0f0', color: '#000', border: 'none', padding: '2px 8px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'monospace' }}>FLY</button></td>
             </tr>
             <tr>
               <td style={{ padding: '6px 4px', color: '#fff' }}>ECON</td>
               <td style={{ padding: '6px 4px' }}>06:30 PM</td>
               <td style={{ padding: '6px 4px', textAlign: 'right' }}>{formatMYR(Math.floor(flight.price * 0.9))}</td>
               <td style={{ padding: '6px 4px', textAlign: 'right' }}><button style={{ background: '#0f0', color: '#000', border: 'none', padding: '2px 8px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'monospace' }}>FLY</button></td>
             </tr>
             <tr style={{ borderTop: '1px dashed #444' }}>
               <td style={{ padding: '6px 4px', color: '#ffb000' }}>BIZ</td>
               <td style={{ padding: '6px 4px' }}>10:15 AM</td>
               <td style={{ padding: '6px 4px', textAlign: 'right' }}>{formatMYR(Math.floor(flight.price * 2.8))}</td>
               <td style={{ padding: '6px 4px', textAlign: 'right' }}><button style={{ background: '#ffb000', color: '#000', border: 'none', padding: '2px 8px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'monospace' }}>FLY</button></td>
             </tr>
           </tbody>
        </table>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#555', marginTop: '12px', borderTop: '1px dashed #444', paddingTop: '8px' }}>
        <span>{flight.stops} stop(s)</span>
        <span>{flight.baggage}</span>
        <span style={{ color: '#f00', animation: 'blink 1s step-end infinite' }}>ON TIME</span>
      </div>
    </article>
  );
}
