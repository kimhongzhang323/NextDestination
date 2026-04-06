import RouteCard from "@/components/RouteCard/RouteCard";

export default function TransitMap({ transit }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Transit pass banner */}
      <div style={{
        padding: '16px 20px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe',
        borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px',
      }}>
        <span style={{ fontSize: '1.5rem' }}>🎫</span>
        <div>
          <div style={{ fontSize: '0.8rem', color: '#1d4ed8', fontWeight: 600, textTransform: 'uppercase' }}>Recommended Pass</div>
          <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1e3a8a' }}>{transit.pass}</div>
        </div>
      </div>

      {/* Airport to City routes */}
      <div style={{
        backgroundColor: '#fff', border: '1px solid #e2e8f0',
        borderRadius: '10px', overflow: 'hidden',
      }}>
        <div style={{
          padding: '16px 20px', backgroundColor: '#f8fafc',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#1e293b' }}>Airport → City Centre</h4>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_Maps_icon.svg" height="24" width="16" alt="Google Maps" />
        </div>
        <div style={{ padding: '0' }}>
          {transit.airportToCity.map((route, idx) => (
            <div key={route.mode} style={{
              display: 'grid', gridTemplateColumns: '1fr 100px 120px',
              alignItems: 'center', padding: '14px 20px',
              borderBottom: idx < transit.airportToCity.length - 1 ? '1px solid #f1f5f9' : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.2rem' }}>
                  {route.mode.toLowerCase().includes('bus') ? '🚌' :
                   route.mode.toLowerCase().includes('taxi') ? '🚕' :
                   route.mode.toLowerCase().includes('ride') ? '📱' :
                   route.mode.toLowerCase().includes('transfer') ? '🚐' : '🚆'}
                </span>
                <div>
                  <div style={{ fontWeight: 600, color: '#1e293b' }}>{route.mode}</div>
                </div>
              </div>
              <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#64748b' }}>
                ⏱ {route.duration}
              </div>
              <div style={{ textAlign: 'right', fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>
                {route.fare}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transit lines */}
      <div style={{
        backgroundColor: '#fff', border: '1px solid #e2e8f0',
        borderRadius: '10px', padding: '16px 20px',
      }}>
        <h4 style={{ margin: '0 0 10px', fontSize: '1rem', fontWeight: 700, color: '#1e293b' }}>Key Transit Lines</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {transit.lines.map((line) => (
            <span key={line} style={{
              padding: '6px 14px', backgroundColor: '#f1f5f9',
              borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, color: '#334155',
              border: '1px solid #e2e8f0',
            }}>🚇 {line}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
