"use client";

import RouteCard from "@/components/RouteCard/RouteCard";

const iconTicket = "https://img.icons8.com/parakeet/48/ticket.png";
const iconTrain = "https://img.icons8.com/parakeet/48/train.png";
const iconBus = "https://img.icons8.com/parakeet/48/bus.png";
const iconTaxi = "https://img.icons8.com/parakeet/48/taxi.png";
const iconApp = "https://img.icons8.com/parakeet/48/smartphone.png";
const iconVan = "https://img.icons8.com/parakeet/48/shuttle-bus.png";
const iconSubway = "https://img.icons8.com/parakeet/48/subway.png";
const iconHome = "https://img.icons8.com/parakeet/48/home.png";
const iconMarker = "https://img.icons8.com/parakeet/48/marker.png";

const MapPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export default function TransitMap({ transit, departure, mode = 'arrival' }) {
  if (!transit && !departure) return null;

  const showDeparture = mode === 'departure' || mode === 'all';
  const showArrival = mode === 'arrival' || mode === 'all';
  const showLocal = mode === 'local' || mode === 'all';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* 1. Departure Segment */}
      {showDeparture && departure?.homeToAirport && (
        <div style={{
          backgroundColor: '#fff', border: '1px solid #e2e8f0',
          borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            padding: '16px 20px', backgroundColor: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
               <img src={iconHome} width="20" height="20" alt="Home" />
               <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#1e293b' }}>Home → Departure Airport</h4>
            </div>
            <img src="https://img.icons8.com/color/48/google-maps-new.png" height="24" width="24" alt="Google Maps" />
          </div>
          <div style={{ padding: '0' }}>
            {departure.homeToAirport.map((route, idx) => (
              <div key={route.mode} style={{
                display: 'grid', gridTemplateColumns: '1fr 100px 120px',
                alignItems: 'center', padding: '14px 20px',
                borderBottom: idx < departure.homeToAirport.length - 1 ? '1px solid #f1f5f9' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img src={route.mode.toLowerCase().includes('ekspres') ? iconTrain : route.mode.toLowerCase().includes('bus') ? iconBus : iconApp} width="24" height="24" alt={route.mode} />
                  <div>
                    <div style={{ fontWeight: 600, color: '#1e293b', fontSize: '0.9rem' }}>{route.mode}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{route.notes}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#64748b' }}>{route.duration}</div>
                <div style={{ textAlign: 'right', fontWeight: 700, color: '#0f172a' }}>{route.fare}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Arrival Segment */}
      {showArrival && transit?.airportToHotel && (
        <div style={{
          backgroundColor: '#fff', border: '1px solid #e2e8f0',
          borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            padding: '16px 20px', backgroundColor: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
               <MapPin />
               <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#1e293b' }}>Arrival Airport → Hotel</h4>
            </div>
            <img src="https://img.icons8.com/color/48/google-maps-new.png" height="24" width="24" alt="Google Maps" />
          </div>
          <div style={{ padding: '0' }}>
            {transit.airportToHotel.map((route, idx) => (
              <div key={route.mode} style={{
                display: 'grid', gridTemplateColumns: '1fr 100px 120px',
                alignItems: 'center', padding: '14px 20px',
                borderBottom: idx < transit.airportToHotel.length - 1 ? '1px solid #f1f5f9' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img src={route.mode.toLowerCase().includes('train') || route.mode.toLowerCase().includes('skyliner') || route.mode.toLowerCase().includes('express') ? iconTrain : iconBus} width="24" height="24" alt={route.mode} />
                  <div>
                    <div style={{ fontWeight: 600, color: '#1e293b', fontSize: '0.9rem' }}>{route.mode}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{route.notes}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#64748b' }}>{route.duration}</div>
                <div style={{ textAlign: 'right', fontWeight: 700, color: '#0f172a' }}>{route.fare}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Local Plan Segment */}
      {showLocal && transit?.hotelToAttractions && (
        <div style={{
          backgroundColor: '#fff', border: '1px solid #e2e8f0',
          borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
        }}>
          <div style={{ padding: '16px 20px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
            <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#1e293b' }}>Local Plan: Exploring the City</h4>
          </div>
          <div style={{ padding: '0' }}>
            {transit.hotelToAttractions.map((route, idx) => (
              <div key={`${route.to}-${idx}`} style={{
                display: 'grid', gridTemplateColumns: 'minmax(180px, 1fr) 120px 80px 100px',
                alignItems: 'center', padding: '14px 20px',
                borderBottom: idx < transit.hotelToAttractions.length - 1 ? '1px solid #f1f5f9' : 'none',
              }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 800 }}>Visit: {route.to}</div>
                  <div style={{ fontWeight: 600, color: '#1e3a8a', fontSize: '0.9rem' }}>From {route.from}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img src={iconSubway} width="16" height="16" alt="Metro" />
                  <span style={{ fontSize: '0.85rem', color: '#475569' }}>{route.mode}</span>
                </div>
                <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#64748b' }}>{route.duration}</div>
                <div style={{ textAlign: 'right', fontWeight: 700, color: '#0f172a' }}>{route.fare}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommended Pass */}
      {(showArrival || showLocal) && transit?.pass && (
        <div style={{
          padding: '16px 20px', backgroundColor: '#f0fdfa', border: '1px solid #99f6e4',
          borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px',
        }}>
          <img src={iconTicket} width="32" height="32" alt="Pass" />
          <div>
            <div style={{ fontSize: '0.75rem', color: '#0d9488', fontWeight: 800, textTransform: 'uppercase' }}>Recommended Local Transit Pass</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#134e4a' }}>{transit.pass}</div>
          </div>
        </div>
      )}
    </div>
  );
}
