import { T } from '../tokens';

export default function ForfaitCard({ p, onBuy }) {
  return (
    <div style={{
      background: p.popular ? T.grad : 'white',
      color: p.popular ? 'white' : T.ink,
      borderRadius: 20, padding: 28,
      border: p.popular ? 'none' : `1px solid ${T.line}`,
      boxShadow: p.popular ? T.shadowHi : T.shadow,
      position: 'relative', display: 'flex', flexDirection: 'column',
      transform: p.popular ? 'scale(1.02)' : 'scale(1)',
    }}>
      {p.popular && (
        <div style={{
          position: 'absolute', top: -12, right: 20,
          background: '#1A0B24', color: 'white',
          padding: '6px 12px', borderRadius: 20, fontSize: 11, fontWeight: 700,
          letterSpacing: 0.5, textTransform: 'uppercase',
        }}>
          <i className="fa-solid fa-star" style={{ marginRight: 5, fontSize: 10, color: '#FFD966' }}/>
          Plus populaire
        </div>
      )}
      <div style={{ fontSize: 13, fontWeight: 700, opacity: p.popular ? 0.9 : 1, color: p.popular ? 'white' : T.pink, textTransform: 'uppercase', letterSpacing: 1 }}>
        {p.name}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 10 }}>
        <span style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.03em' }}>{p.price.toLocaleString('fr-FR')}</span>
        <span style={{ fontSize: 14, fontWeight: 600, opacity: 0.8 }}>MAD</span>
      </div>
      <div style={{ fontSize: 13, opacity: 0.8, marginTop: -4 }}>
        soit {Math.round(p.price / p.hours)} MAD / heure
      </div>
      <div style={{ height: 1, background: p.popular ? 'rgba(255,255,255,0.2)' : T.line, margin: '20px 0' }} />
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {p.features.map(f => (
          <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, lineHeight: 1.4 }}>
            <div style={{
              width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
              background: p.popular ? 'rgba(255,255,255,0.25)' : T.gradSoft,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: p.popular ? 'white' : T.pink, fontSize: 9, marginTop: 1,
            }}>
              <i className="fa-solid fa-check" />
            </div>
            <span style={{ opacity: p.popular ? 0.95 : 1, color: p.popular ? 'white' : T.ink2 }}>{f}</span>
          </li>
        ))}
      </ul>
      <button onClick={onBuy} style={{
        marginTop: 24, padding: '14px 20px', borderRadius: 12, border: 'none',
        background: p.popular ? 'white' : T.grad,
        color: p.popular ? T.pink : 'white',
        fontSize: 14, fontWeight: 700, cursor: 'pointer',
        boxShadow: p.popular ? '0 6px 16px rgba(0,0,0,0.12)' : '0 6px 16px rgba(233,30,140,0.3)',
      }}>
        Acheter <i className="fa-solid fa-arrow-right" style={{ marginLeft: 8, fontSize: 12 }} />
      </button>
    </div>
  );
}
