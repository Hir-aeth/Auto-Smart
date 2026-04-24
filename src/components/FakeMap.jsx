import { T } from '../tokens';

export default function FakeMap({ instructors, selected, setSelected }) {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#DADEE5" strokeWidth="0.8"/>
          </pattern>
          <pattern id="gridBig" width="160" height="160" patternUnits="userSpaceOnUse">
            <path d="M 160 0 L 0 0 0 160" fill="none" stroke="#C8CDD7" strokeWidth="1.2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
        <rect width="100%" height="100%" fill="url(#gridBig)"/>
        <path d="M 0 200 Q 200 180 400 220 T 900 180" stroke="#FFFFFF" strokeWidth="18" fill="none" strokeLinecap="round"/>
        <path d="M 0 200 Q 200 180 400 220 T 900 180" stroke="#E2E6EC" strokeWidth="1.5" fill="none" strokeDasharray="8 6"/>
        <path d="M 180 0 Q 220 150 190 320 T 240 600" stroke="#FFFFFF" strokeWidth="14" fill="none" strokeLinecap="round"/>
        <path d="M 520 0 Q 500 180 560 360 T 580 600" stroke="#FFFFFF" strokeWidth="14" fill="none" strokeLinecap="round"/>
        <path d="M 0 420 L 900 420" stroke="#FFFFFF" strokeWidth="12" fill="none"/>
        <ellipse cx="720" cy="110" rx="120" ry="60" fill="#D8E6E4" opacity="0.7"/>
        <ellipse cx="120" cy="520" rx="100" ry="50" fill="#D8E6D0" opacity="0.7"/>
        <text x="720" y="115" textAnchor="middle" fontSize="11" fill="#8A9491" fontFamily="Plus Jakarta Sans" fontWeight="600">Corniche</text>
        <text x="120" y="525" textAnchor="middle" fontSize="11" fill="#7A8977" fontFamily="Plus Jakarta Sans" fontWeight="600">Parc</text>
        <text x="300" y="195" fontSize="10" fill="#9BA5B2" fontFamily="Plus Jakarta Sans" fontWeight="500">Bd Zerktouni</text>
      </svg>

      <div style={{ position: 'absolute', left: '45%', top: '45%', transform: 'translate(-50%, -50%)' }}>
        <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(30, 120, 240, 0.15)', animation: 'as-pulse 2s ease-in-out infinite' }}/>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#1E78F0', border: '3px solid white', boxShadow: '0 2px 8px rgba(30,120,240,0.5)' }}/>
        </div>
      </div>

      {instructors.map(i => (
        <button key={i.id} onClick={() => setSelected(i.id)} style={{
          position: 'absolute', left: `${i.x}%`, top: `${i.y}%`,
          transform: `translate(-50%, -100%) ${selected === i.id ? 'scale(1.1)' : 'scale(1)'}`,
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          transition: 'transform 0.2s', zIndex: selected === i.id ? 5 : 2,
        }}>
          <div style={{
            background: selected === i.id ? T.grad : 'white',
            color: selected === i.id ? 'white' : T.ink,
            padding: '6px 10px 6px 6px', borderRadius: 20,
            display: 'flex', alignItems: 'center', gap: 8,
            boxShadow: '0 6px 16px rgba(0,0,0,0.18)',
            border: selected === i.id ? 'none' : `1.5px solid ${T.line2}`,
            fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap',
          }}>
            <div style={{
              width: 22, height: 22, borderRadius: '50%',
              background: selected === i.id ? 'white' : i.color,
              color: selected === i.id ? i.color : 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 800,
            }}>{i.avatar}</div>
            ⭐ {i.rating}
          </div>
          <div style={{
            width: 0, height: 0, margin: '0 auto',
            borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
            borderTop: `8px solid ${selected === i.id ? T.violet : 'white'}`,
          }}/>
        </button>
      ))}

      <div style={{
        position: 'absolute', bottom: 16, left: 16,
        background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)',
        borderRadius: 12, padding: '10px 14px', fontSize: 11, color: T.ink2,
        display: 'flex', gap: 14, alignItems: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)', fontWeight: 500,
      }}>
        <span><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#1E78F0', marginRight: 6 }}/>Vous</span>
        <span><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: T.pink, marginRight: 6 }}/>Moniteur</span>
      </div>
      <div style={{
        position: 'absolute', top: 16, right: 16,
        display: 'flex', flexDirection: 'column', gap: 4,
        background: 'white', borderRadius: 10, padding: 4,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      }}>
        <button style={{ width: 32, height: 32, border: 'none', background: 'none', cursor: 'pointer', color: T.ink2 }}><i className="fa-solid fa-plus"/></button>
        <div style={{ height: 1, background: T.line }}/>
        <button style={{ width: 32, height: 32, border: 'none', background: 'none', cursor: 'pointer', color: T.ink2 }}><i className="fa-solid fa-minus"/></button>
      </div>
    </div>
  );
}
