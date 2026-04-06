"use client";

import { formatMYR } from "@/utils/currency";

const carLogos = {
  "Toyota Rent-a-Car": "https://www.toyota.com/favicon.ico",
  "Nippon Rent": "https://www.nipponrentacar.co.jp/favicon.ico",
  "Lotte Rent": "https://www.lotterentacar.com/favicon.ico",
  "Hertz": "https://www.hertz.com/favicon.ico",
  "Avis": "https://www.avis.com/favicon.ico",
  "Budget": "https://www.budget.com/favicon.ico",
  "Enterprise": "https://www.enterprise.com/favicon.ico",
  "Sixt": "https://www.sixt.com/favicon.ico",
};

// Reliable SVG Icons
const IconCar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
);

const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

const IconAlert = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
);

export default function CarRental({ options }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {options.map((item) => {
        const domain = item.provider.toLowerCase().includes('toyota') ? 'toyota.com' : 
                       item.provider.toLowerCase().includes('nippon') ? 'nipponrentacar.co.jp' :
                       item.provider.toLowerCase().includes('hertz') ? 'hertz.com' : 'avis.com';
        const logoUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

        return (
          <article key={`${item.provider}-${item.vehicle}`} style={{
            display: 'grid', gridTemplateColumns: '1fr auto',
            backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px',
            overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            {/* Left: Details */}
            <div style={{ padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '8px',
                  backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', overflow: 'hidden', border: '1px solid #e2e8f0'
                }}>
                  <img src={logoUrl} alt={item.provider} style={{ width: '24px', height: '24px', objectFit: 'contain' }} 
                    onError={(e) => { e.target.src = "https://img.icons8.com/parakeet/48/car.png"; }} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#1e293b' }}>{item.provider}</h4>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.vehicle}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '24px', fontSize: '0.85rem', color: '#475569' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <IconPin /> Pickup: {item.pickup}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {item.insurance ? <IconCheck /> : <IconAlert />} Insurance {item.insurance ? 'included' : 'not included'}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#f1f5f9', padding: '3px 8px', borderRadius: '4px', color: '#475569', fontWeight: 500 }}>Automatic</span>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#f1f5f9', padding: '3px 8px', borderRadius: '4px', color: '#475569', fontWeight: 500 }}>A/C</span>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#f1f5f9', padding: '3px 8px', borderRadius: '4px', color: '#475569', fontWeight: 500 }}>4 seats</span>
              </div>
            </div>

            {/* Right: Price */}
            <div style={{
              padding: '20px 24px', borderLeft: '1px solid #e5e7eb',
              display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
              justifyContent: 'center', minWidth: '150px', backgroundColor: '#fafafa',
            }}>
              <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>From</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>{formatMYR(item.dailyRate)}</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>per day</div>
              <button style={{
                marginTop: '12px', padding: '8px 20px', backgroundColor: '#3b82f6',
                color: '#fff', border: 'none', borderRadius: '6px',
                fontWeight: 700, cursor: 'pointer', fontSize: '0.8rem',
              }}>View Deal</button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
