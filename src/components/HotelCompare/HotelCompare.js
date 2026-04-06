"use client";

import { formatMYR } from "@/utils/currency";

const platformDomains = {
  direct: "hotel.com",
  agoda: "agoda.com",
  booking: "booking.com",
  airbnb: "airbnb.com",
  expedia: "expedia.com",
  trip: "trip.com",
};

// Reliable SVG Icons
const IconStar = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

const IconPin = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export default function HotelCompare({ hotels, nights }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {hotels.map((hotel) => {
        const values = Object.values(hotel.prices);
        const cheapest = Math.min(...values);

        return (
          <article key={hotel.name} style={{
            backgroundColor: '#fff', border: '1px solid #e2e8f0',
            borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            {/* Hotel header */}
            <div style={{
              padding: '24px', backgroundColor: '#f8fafc',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, color: '#1e3a8a', fontFamily: 'Georgia, serif' }}>{hotel.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748b' }}>
                    <IconPin />
                    <span style={{ fontSize: '0.85rem' }}>{hotel.area}</span>
                  </div>
                  <span style={{
                    fontSize: '0.75rem', backgroundColor: '#fff7ed',
                    color: '#c2410c', padding: '2px 8px', borderRadius: '4px', fontWeight: 700,
                    display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid #fed7aa'
                  }}>
                    <IconStar />
                    {hotel.ratings}
                  </span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Best from</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#059669' }}>
                    {formatMYR(cheapest)}<span style={{ fontSize: '0.9rem', fontWeight: 500 }}>/nt</span>
                </div>
              </div>
            </div>

            {/* Price comparison table */}
            <div style={{ padding: '0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f1f5f9' }}>
                    <th style={{ padding: '12px 24px', textAlign: 'left', color: '#475569', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase' }}>Provider</th>
                    <th style={{ padding: '12px 24px', textAlign: 'right', color: '#475569', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase' }}>Per Night</th>
                    <th style={{ padding: '12px 24px', textAlign: 'right', color: '#475569', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase' }}>{nights} Nights</th>
                    <th style={{ padding: '12px 24px', textAlign: 'right' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(platformDomains).map((platform) => {
                    const isCheapest = hotel.prices[platform] === cheapest;
                    const favUrl = `https://www.google.com/s2/favicons?domain=${platformDomains[platform]}&sz=64`;

                    return (
                      <tr key={platform} style={{
                        borderBottom: '1px solid #f1f5f9',
                        backgroundColor: isCheapest ? '#f0fdfa' : 'transparent',
                        transition: 'background-color 0.1s'
                      }}>
                        <td style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <img src={favUrl} width="16" height="16" alt={platform} style={{ objectFit: 'contain' }} 
                            onError={(e) => { e.target.src = "https://img.icons8.com/parakeet/48/home.png"; }} />
                          <span style={{ fontWeight: 600, textTransform: 'capitalize', color: '#1e293b' }}>{platform}</span>
                          {isCheapest && <span style={{ fontSize: '0.65rem', backgroundColor: '#059669', color: '#fff', padding: '1px 8px', borderRadius: '4px', fontWeight: 800 }}>BEST PRICE</span>}
                        </td>
                        <td style={{ padding: '14px 24px', textAlign: 'right', fontWeight: 600, color: '#334155' }}>{formatMYR(hotel.prices[platform])}</td>
                        <td style={{ padding: '14px 24px', textAlign: 'right', fontWeight: 800, color: isCheapest ? '#059669' : '#0f172a' }}>{formatMYR(hotel.prices[platform] * nights)}</td>
                        <td style={{ padding: '14px 24px', textAlign: 'right' }}>
                          <button style={{
                            padding: '8px 18px', fontSize: '0.8rem', fontWeight: 800,
                            border: isCheapest ? 'none' : '1px solid #cbd5e1',
                            backgroundColor: isCheapest ? '#3b82f6' : '#fff',
                            color: isCheapest ? '#fff' : '#1e3a8a',
                            borderRadius: '6px', cursor: 'pointer',
                          }}>Reserve</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </article>
        );
      })}
    </div>
  );
}
