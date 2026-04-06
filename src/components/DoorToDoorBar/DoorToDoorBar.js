import { formatMYR } from "@/utils/currency";
import styles from "./DoorToDoorBar.module.css";

export default function DoorToDoorBar({ currentTotal, budgetLimit }) {
  const isOverBudget = currentTotal > budgetLimit;
  const percentage = Math.min((currentTotal / budgetLimit) * 100, 100);
  const remaining = budgetLimit - currentTotal;

  return (
    <aside className={styles.bar} style={{
      display: 'flex', flexDirection: 'column', gap: '8px', 
      padding: '16px 24px', height: 'auto',
      borderTop: '1px solid #e2e8f0',
      backgroundColor: '#fff'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Current Expenses</span>
            <strong style={{ fontSize: '1.25rem', color: isOverBudget ? '#ef4444' : '#1e3a5f' }}>{formatMYR(currentTotal)}</strong>
          </div>
          <div style={{ width: '1px', height: '30px', backgroundColor: '#e2e8f0' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Your Budget</span>
            <strong style={{ fontSize: '1.25rem', color: '#1e293b' }}>{formatMYR(budgetLimit)}</strong>
          </div>
        </div>
        
        <div style={{ textAlign: 'right' }}>
          {isOverBudget ? (
            <span style={{ color: '#ef4444', fontWeight: 700, fontSize: '0.9rem' }}>⚠️ Over Budget by {formatMYR(Math.abs(remaining))}</span>
          ) : (
            <span style={{ color: '#059669', fontWeight: 700, fontSize: '0.9rem' }}>✅ Within Budget! {formatMYR(remaining)} left</span>
          )}
          <div style={{
            width: '200px', height: '10px', backgroundColor: '#f1f5f9', borderRadius: '5px',
            marginTop: '6px', overflow: 'hidden', display: 'inline-block', verticalAlign: 'middle', marginLeft: '12px',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{
              width: `${percentage}%`, height: '100%',
              backgroundColor: isOverBudget ? '#ef4444' : (percentage > 80 ? '#f59e0b' : '#3b82f6'),
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      </div>
      
      <div style={{ fontSize: '0.75rem', color: '#94a3b8', textAlign: 'center' }}>
        Includes Flights + Hotels ({budgetLimit / 1000} travelers, {Math.floor(budgetLimit/2000)} days) · Real-time estimation
      </div>
    </aside>
  );
}
