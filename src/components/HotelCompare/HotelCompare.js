import { formatMYR } from "@/utils/currency";

const platforms = ["direct", "agoda", "booking", "airbnb", "expedia", "trip"];

const platformLogos = {
  direct: "🏨",
  agoda: "🅰️",
  booking: "🅱️",
  airbnb: "🏡",
  expedia: "🌐",
  trip: "✈️",
};

export default function HotelCompare({ hotels, nights }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {hotels.map((hotel) => {
        const values = Object.values(hotel.prices);
        const cheapest = Math.min(...values);

        return (
          <article key={hotel.name} style={{
            backgroundColor: '#fff', border: '1px solid #e2e8f0',
            borderRadius: '10px', overflow: 'hidden',
          }}>
            {/* Hotel header */}
            <div style={{
              padding: '20px 24px', backgroundColor: '#f8fafc',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: '#1e293b' }}>{hotel.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '6px' }}>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>📍 {hotel.area}</span>
                  <span style={{
                    fontSize: '0.75rem', backgroundColor: '#fef3c7',
                    color: '#92400e', padding: '2px 8px', borderRadius: '4px', fontWeight: 700,
                  }}>⭐ {hotel.ratings}</span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Best from</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#10b981' }}>{formatMYR(cheapest)}<span style={{ fontSize: '0.8rem', fontWeight: 500 }}>/night</span></div>
              </div>
            </div>

            {/* Price comparison table */}
            <div style={{ padding: '0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f1f5f9' }}>
                    <th style={{ padding: '10px 24px', textAlign: 'left', color: '#64748b', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Platform</th>
                    <th style={{ padding: '10px 24px', textAlign: 'right', color: '#64748b', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>Per Night</th>
                    <th style={{ padding: '10px 24px', textAlign: 'right', color: '#64748b', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase' }}>{nights} Nights Total</th>
                    <th style={{ padding: '10px 24px', textAlign: 'right' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {platforms.map((platform) => {
                    const isCheapest = hotel.prices[platform] === cheapest;
                    return (
                      <tr key={platform} style={{
                        borderBottom: '1px solid #f1f5f9',
                        backgroundColor: isCheapest ? '#f0fdf4' : 'transparent',
                      }}>
                        <td style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span>{platformLogos[platform]}</span>
                          <span style={{ fontWeight: isCheapest ? 700 : 400, textTransform: 'capitalize' }}>{platform}</span>
                          {isCheapest && <span style={{ fontSize: '0.65rem', backgroundColor: '#10b981', color: '#fff', padding: '1px 6px', borderRadius: '3px', fontWeight: 700 }}>BEST</span>}
                        </td>
                        <td style={{ padding: '12px 24px', textAlign: 'right', fontWeight: 500 }}>{formatMYR(hotel.prices[platform])}</td>
                        <td style={{ padding: '12px 24px', textAlign: 'right', fontWeight: 700, color: isCheapest ? '#059669' : '#0f172a' }}>{formatMYR(hotel.prices[platform] * nights)}</td>
                        <td style={{ padding: '12px 24px', textAlign: 'right' }}>
                          <button style={{
                            padding: '6px 14px', fontSize: '0.75rem', fontWeight: 700,
                            border: isCheapest ? 'none' : '1px solid #e2e8f0',
                            backgroundColor: isCheapest ? '#3b82f6' : '#fff',
                            color: isCheapest ? '#fff' : '#3b82f6',
                            borderRadius: '4px', cursor: 'pointer',
                          }}>Book</button>
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
