"use client";

import { useState } from "react";

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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Progress header */}
      <div style={{
        padding: '20px 24px', backgroundColor: '#fff', border: '1px solid #e2e8f0',
        borderRadius: '10px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#1e293b' }}>
            ✈️ Pre-Travel Checklist — {checklist.country}
          </h3>
          <span style={{
            fontSize: '0.8rem', fontWeight: 700,
            color: progress === 100 ? '#059669' : '#3b82f6',
          }}>{completedTasks}/{totalTasks} completed</span>
        </div>
        <div style={{
          width: '100%', height: '8px', backgroundColor: '#e2e8f0',
          borderRadius: '4px', overflow: 'hidden',
        }}>
          <div style={{
            width: `${progress}%`, height: '100%',
            backgroundColor: progress === 100 ? '#10b981' : '#3b82f6',
            borderRadius: '4px', transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      {/* Category sections */}
      {checklist.items.map((cat, catIdx) => (
        <div key={cat.category} style={{
          backgroundColor: '#fff', border: '1px solid #e2e8f0',
          borderRadius: '10px', overflow: 'hidden',
        }}>
          <div style={{
            padding: '14px 20px', backgroundColor: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <span style={{ fontSize: '1.1rem' }}>
              {cat.category === 'Documentation' ? '📄' :
               cat.category === 'Immigration & Customs' ? '🛂' :
               cat.category === 'Health & Insurance' ? '🏥' :
               cat.category === 'Money & Connectivity' ? '💳' :
               cat.category === 'Packing Essentials' ? '🧳' : '📋'}
            </span>
            <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#1e293b' }}>{cat.category}</h4>
          </div>
          <div style={{ padding: '4px 0' }}>
            {cat.tasks.map((item, taskIdx) => {
              const key = `${catIdx}-${taskIdx}`;
              const done = !!checked[key];
              return (
                <label key={taskIdx} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '10px 20px', cursor: 'pointer',
                  borderBottom: taskIdx < cat.tasks.length - 1 ? '1px solid #f5f5f5' : 'none',
                  backgroundColor: done ? '#f0fdf4' : 'transparent',
                  transition: 'background-color 0.15s',
                }}>
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={() => toggleItem(catIdx, taskIdx)}
                    style={{ width: '18px', height: '18px', accentColor: '#10b981', cursor: 'pointer' }}
                  />
                  <span style={{
                    fontSize: '0.9rem', color: done ? '#6b7280' : '#1e293b',
                    textDecoration: done ? 'line-through' : 'none',
                    flex: 1,
                  }}>
                    {item.task}
                  </span>
                  {item.required && (
                    <span style={{
                      fontSize: '0.65rem', fontWeight: 700,
                      backgroundColor: '#fef2f2', color: '#dc2626',
                      padding: '2px 6px', borderRadius: '3px',
                      whiteSpace: 'nowrap',
                    }}>REQUIRED</span>
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
