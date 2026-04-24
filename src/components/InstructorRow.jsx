import { T } from '../tokens';
import Stars from './Stars';

export default function InstructorRow({ i, selected, onClick, onBook }) {
  return (
    <div onClick={onClick} style={{
      padding: '18px 20px',
      borderBottom: `1px solid ${T.line}`,
      background: selected ? T.gradSoft : 'transparent',
      cursor: 'pointer', transition: 'background 0.15s',
    }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: i.color, color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: 15, flexShrink: 0,
          boxShadow: `0 4px 10px ${i.color}40`,
        }}>{i.avatar}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: T.ink }}>{i.name}</div>
            <div style={{ fontSize: 12, color: T.muted, fontWeight: 500 }}>{i.distance} km</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 3 }}>
            <Stars rating={i.rating} />
            <span style={{ fontSize: 12, color: T.ink2, fontWeight: 600 }}>{i.rating}</span>
            <span style={{ fontSize: 11, color: T.muted }}>({i.reviews} avis)</span>
          </div>
          <div style={{ fontSize: 12, color: T.muted, marginTop: 3 }}>
            <i className="fa-solid fa-car" style={{ marginRight: 6, fontSize: 10 }}/>{i.car}
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
            {i.slots.map(s => (
              <span key={s} style={{
                fontSize: 11, padding: '5px 10px', borderRadius: 8,
                background: 'white', color: T.ink2, fontWeight: 600,
                border: `1px solid ${T.line2}`,
              }}>{s}</span>
            ))}
          </div>
          {selected && (
            <button onClick={(e) => { e.stopPropagation(); onBook(); }} style={{
              marginTop: 12, padding: '10px 14px', borderRadius: 10, border: 'none',
              background: T.grad, color: 'white', fontSize: 13, fontWeight: 700, cursor: 'pointer',
              width: '100%', boxShadow: '0 4px 10px rgba(233,30,140,0.3)',
            }}>
              Réserver une leçon <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6, fontSize: 11 }} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
