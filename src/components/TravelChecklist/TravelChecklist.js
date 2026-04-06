"use client";

import { useState } from "react";

// Reliable SVG Icons
const IconPassport = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="12" r="3"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
);
const IconDoc = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
);
const IconHealth = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h5v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/></svg>
);
const IconMoney = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
);
const IconLuggage = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="7" width="12" height="13"/><path d="M9 7V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3"/></svg>
);
const IconPlane = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#3b82f6"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
);

export default function TravelChecklist({ checklist }) {
  const [checked, setChecked] = useState({});

  if (!checklist) return null;

  const toggleItem = (catIdx, taskIdx) => {
    const key = `${catIdx}-${taskIdx}`;
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalTasks = checklist.items.reduce((acc, cat) => acc + cat.tasks.length, 0);
  const completedTasks = Object.values(checked).filter(Boolean).length;
  const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Progress header */}
      <div style={{
        padding: '24px', backgroundColor: '#fff', border: '1px solid #cbd5e1',
        borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <IconPlane />
            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, color: '#1e3a8a', fontFamily: 'Georgia, serif' }}>
              Journey Checklist: Prepare for {checklist.country}
            </h3>
          </div>
          <span style={{
            fontSize: '0.85rem', fontWeight: 800,
            color: progress === 100 ? '#059669' : '#3b82f6',
            backgroundColor: progress === 100 ? '#f0fdf4' : '#eff6ff',
            padding: '4px 12px', borderRadius: '20px', border: '1px solid currentColor'
          }}>{progress}% Prepared</span>
        </div>
        <div style={{
          width: '100%', height: '10px', backgroundColor: '#f1f5f9',
          borderRadius: '5px', overflow: 'hidden', border: '1px solid #e2e8f0'
        }}>
          <div style={{
            width: `${progress}%`, height: '100%',
            backgroundColor: progress === 100 ? '#10b981' : '#3b82f6',
            borderRadius: '5px', transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }} />
        </div>
      </div>

      {/* Category sections */}
      {checklist.items.map((cat, catIdx) => (
        <div key={cat.category} style={{
          backgroundColor: '#fff', border: '1px solid #e2e8f0',
          borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            padding: '16px 20px', backgroundColor: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex', alignItems: 'center', gap: '12px',
          }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#fff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {cat.category === 'Documentation' ? <IconDoc /> :
               cat.category === 'Immigration & Customs' ? <IconPassport /> :
               cat.category === 'Health & Insurance' ? <IconHealth /> :
               cat.category === 'Money & Connectivity' ? <IconMoney /> :
               cat.category === 'Packing Essentials' ? <IconLuggage /> : <IconDoc />}
            </div>
            <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#1e3a5f' }}>{cat.category}</h4>
          </div>
          <div style={{ padding: '8px 0' }}>
            {cat.tasks.map((item, taskIdx) => {
              const key = `${catIdx}-${taskIdx}`;
              const done = !!checked[key];
              return (
                <label key={taskIdx} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '12px 24px', cursor: 'pointer',
                  borderBottom: taskIdx < cat.tasks.length - 1 ? '1px solid #f1f5f9' : 'none',
                  backgroundColor: done ? '#f8fafc' : 'transparent',
                  transition: 'background-color 0.1s',
                }}>
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={() => toggleItem(catIdx, taskIdx)}
                    style={{ width: '20px', height: '20px', accentColor: '#10b981', cursor: 'pointer' }}
                  />
                  <div style={{ flex: 1 }}>
                     <div style={{
                        fontSize: '0.95rem', color: done ? '#94a3b8' : '#1e293b',
                        textDecoration: done ? 'line-through' : 'none',
                        fontWeight: done ? 400 : 500,
                        transition: 'color 0.1s'
                     }}>
                        {item.task}
                     </div>
                  </div>
                  {item.required && (
                    <span style={{
                      fontSize: '0.65rem', fontWeight: 800,
                      backgroundColor: '#fef2f2', color: '#dc2626',
                      padding: '3px 8px', borderRadius: '4px', border: '1px solid #fecaca',
                      whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.5px'
                    }}>Mandatory</span>
                  )}
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
