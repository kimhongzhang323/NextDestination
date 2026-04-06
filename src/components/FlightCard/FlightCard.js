"use client";

import { formatMYR } from "@/utils/currency";

const airlineIATA = {
  "AirAsia": "AK",
  "Malaysia Airlines": "MH",
  "JAL": "JL",
  "Scoot": "TR",
  "Korean Air": "KE",
  "Thai Airways": "TG",
  "Singapore Airlines": "SQ",
  "Emirates": "EK",
  "Turkish Airlines": "TK",
  "Qatar Airways": "QR",
  "ANA": "NH"
};

export default function FlightCard({ flight, view = 'list' }) {
  const iata = airlineIATA[flight.airline] || "U2";
  const logo = `https://images.kiwi.com/airlines/64/${iata}.png`;
  const flightNum = `${iata} ${Math.floor(100 + flight.price % 900)}`;

  /* ───────────────── LIST VIEW (Google Flights style) ───────────────── */
  if (view === 'list') {
    const isGreen = flight.emissions?.includes('-');
    return (
      <article style={{
        display: 'grid',
        gridTemplateColumns: '48px 200px 120px 130px 140px 110px 28px',
        alignItems: 'center',
        padding: '14px 20px',
        backgroundColor: '#202124',
        color: '#e8eaed',
        borderBottom: '1px solid #3c4043',
        fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
        fontSize: '0.9rem',
        minHeight: '72px',
      }}>
        <img src={logo} alt={flight.airline} width="32" height="32"
          style={{ borderRadius: '50%', backgroundColor: '#fff', padding: '2px', objectFit: 'contain' }} />

        <div>
          <div style={{ fontWeight: 500, whiteSpace: 'nowrap' }}>
            {flight.departureTime} – {flight.arrivalTime}
          </div>
          <div style={{ color: '#9aa0a6', fontSize: '0.8rem', marginTop: '2px' }}>{flight.airline}</div>
        </div>

        <div>
          <div style={{ fontWeight: 500 }}>{flight.duration}</div>
          <div style={{ color: '#9aa0a6', fontSize: '0.8rem', marginTop: '2px' }}>{flight.route}</div>
        </div>

        <div>
          <div style={{ fontWeight: 500 }}>
            {flight.stops === 0
              ? <span style={{ color: '#81c995' }}>Nonstop</span>
              : <span>{flight.stops} stop</span>}
          </div>
          <div style={{ color: '#9aa0a6', fontSize: '0.8rem', marginTop: '2px' }}>{flight.stops > 0 ? flight.stopsInfo : ''}</div>
        </div>

        <div>
          <div style={{ fontWeight: 500 }}>{flight.co2} CO₂e</div>
          {isGreen ? (
            <div style={{
              fontSize: '0.75rem', color: '#81c995', marginTop: '2px',
              backgroundColor: 'rgba(129,201,149,0.12)', display: 'inline-block',
              padding: '1px 6px', borderRadius: '3px',
            }}>{flight.emissions}</div>
          ) : (
            <div style={{ fontSize: '0.75rem', color: '#9aa0a6', marginTop: '2px' }}>{flight.emissions}</div>
          )}
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontWeight: 600, fontSize: '1rem', color: '#81c995' }}>{formatMYR(flight.price)}</div>
          <div style={{ color: '#9aa0a6', fontSize: '0.75rem', marginTop: '2px' }}>round trip</div>
        </div>

        <svg width="20" height="20" viewBox="0 0 24 24" fill="#9aa0a6" style={{ justifySelf: 'end' }}>
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </article>
    );
  }

  /* ───────────────── AIRLINE VIEW (SQ-style itinerary card) ───────────────── */
  const depCode = flight.route.split('–')[0];
  const arrCode = flight.route.split('–')[1];
  const stopLabel = flight.stops === 0 ? 'Non-stop' : `One-stop`;

  return (
    <article style={{
      backgroundColor: '#fff', color: '#1e293b',
      border: '1px solid #d1d5db', borderRadius: '6px',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        minHeight: '120px',
      }}>
        {/* Left: Flight itinerary */}
        <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>

          {/* Stop info label */}
          <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '4px' }}>
            {stopLabel} · {flight.duration}
          </div>

          {/* Main itinerary row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>

            {/* Departure */}
            <div style={{ minWidth: '130px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>{depCode}</span>
                <span style={{ fontSize: '1.6rem', fontWeight: 700, fontFamily: 'Georgia, serif', color: '#1e3a5f' }}>
                  {flight.departureTime?.replace(' AM', '').replace(' PM', '')}
                </span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>
                {depCode === 'KUL' ? 'Kuala Lumpur' : depCode}
              </div>
            </div>

            {/* Route line */}
            <div style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
              minWidth: '120px', padding: '0 12px',
            }}>
              <div style={{
                width: '100%', height: '2px', backgroundColor: '#cbd5e1',
                position: 'relative', margin: '8px 0',
              }}>
                {/* Plane icon at start */}
                <div style={{
                  position: 'absolute', left: '-2px', top: '-5px',
                  fontSize: '0.7rem', color: '#64748b',
                }}>✈</div>
                {/* Stop dot */}
                {flight.stops > 0 && (
                  <div style={{
                    position: 'absolute', top: '-5px', left: '50%',
                    transform: 'translateX(-50%)',
                    width: '10px', height: '10px',
                    backgroundColor: '#d97706', borderRadius: '50%',
                  }} />
                )}
                {/* Plane icon at end */}
                <div style={{
                  position: 'absolute', right: '-2px', top: '-5px',
                  fontSize: '0.7rem', color: '#64748b',
                }}>✈</div>
              </div>
              {flight.stops > 0 && (
                <div style={{ fontSize: '0.7rem', color: '#64748b', textAlign: 'center', fontWeight: 600 }}>
                  {flight.stopsInfo?.split(' ').slice(-1)[0]} · {flight.stopsInfo?.split(' ').slice(0, -1).join(' ')}
                </div>
              )}
            </div>

            {/* Arrival */}
            <div style={{ minWidth: '130px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>{arrCode}</span>
                <span style={{ fontSize: '1.6rem', fontWeight: 700, fontFamily: 'Georgia, serif', color: '#1e3a5f' }}>
                  {flight.arrivalTime?.replace(' AM', '').replace(' PM', '')}
                </span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>
                {arrCode === 'KIX' ? 'Osaka' : arrCode === 'ICN' ? 'Seoul' : arrCode === 'BKK' ? 'Bangkok' : arrCode === 'DPS' ? 'Bali' : arrCode === 'LHR' ? 'London' : arrCode === 'IST' ? 'Istanbul' : arrCode}
              </div>
            </div>
          </div>

          {/* Operating airlines + flight numbers */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
            <img src={logo} alt={flight.airline} width="20" height="20"
              style={{ borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #e5e7eb', objectFit: 'contain' }} />
            <span style={{ fontSize: '0.8rem', color: '#475569' }}>
              {flight.airline} · {flightNum}
            </span>
            {flight.stops > 0 && (
              <span style={{ fontSize: '0.8rem', color: '#475569' }}>
                · {flight.airline} · {iata} {Math.floor(600 + flight.price % 300)}
              </span>
            )}
          </div>

          {/* More details link */}
          <div style={{ marginTop: '4px' }}>
            <span style={{ fontSize: '0.8rem', color: '#0369a1', cursor: 'pointer' }}>More details ▾</span>
          </div>
        </div>

        {/* Right: Price + class badge */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
          justifyContent: 'flex-start', padding: '20px 24px', gap: '8px',
          borderLeft: '1px solid #e5e7eb', minWidth: '160px',
        }}>
          {/* Class badge */}
          <div style={{
            backgroundColor: '#0e7c61', color: '#fff',
            fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
            padding: '4px 14px', borderRadius: '4px', letterSpacing: '0.5px',
          }}>Economy</div>

          {/* Price */}
          <div style={{ textAlign: 'right', marginTop: '4px' }}>
            <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>From MYR</div>
            <div style={{
              fontSize: '1.5rem', fontWeight: 700, color: '#1e3a5f',
              fontFamily: 'Georgia, serif', lineHeight: 1.1,
            }}>
              {flight.price.toLocaleString()}<span style={{ fontSize: '1rem' }}>.00</span>
            </div>
            <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600, marginTop: '2px' }}>Per Adult</div>
          </div>

          {/* Expand */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#9ca3af" style={{ marginTop: 'auto' }}>
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      </div>
    </article>
  );
}
