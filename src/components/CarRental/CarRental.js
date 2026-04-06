"use client";

import { formatMYR } from "@/utils/currency";

const carLogos = {
  "Toyota Rent-a-Car": "https://images.kiwi.com/airlines/64/AK.png",
  "Nippon Rent": "https://images.kiwi.com/airlines/64/NH.png",
  "Lotte Rent": "https://images.kiwi.com/airlines/64/KE.png",
  "Hertz": "https://images.kiwi.com/airlines/64/U2.png",
  "Avis": "https://images.kiwi.com/airlines/64/U2.png",
  "Budget": "https://images.kiwi.com/airlines/64/U2.png",
  "Enterprise": "https://images.kiwi.com/airlines/64/U2.png",
  "Sixt": "https://images.kiwi.com/airlines/64/U2.png",
};

export default function CarRental({ options }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {options.map((item) => (
        <article key={`${item.provider}-${item.vehicle}`} style={{
          display: 'grid', gridTemplateColumns: '1fr auto',
          backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '10px',
          overflow: 'hidden',
        }}>
          {/* Left: Details */}
          <div style={{ padding: '20px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '8px',
                backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '1.2rem',
              }}>🚗</div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#1e293b' }}>{item.provider}</h4>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.vehicle}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', fontSize: '0.85rem', color: '#475569' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>📍</span> Pickup: {item.pickup}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>{item.insurance ? '✅' : '⚠️'}</span> Insurance {item.insurance ? 'included' : 'not included'}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
              <span style={{ fontSize: '0.75rem', backgroundColor: '#f1f5f9', padding: '3px 8px', borderRadius: '4px', color: '#475569' }}>Automatic</span>
              <span style={{ fontSize: '0.75rem', backgroundColor: '#f1f5f9', padding: '3px 8px', borderRadius: '4px', color: '#475569' }}>A/C</span>
              <span style={{ fontSize: '0.75rem', backgroundColor: '#f1f5f9', padding: '3px 8px', borderRadius: '4px', color: '#475569' }}>4 seats</span>
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
      ))}
    </div>
  );
}
