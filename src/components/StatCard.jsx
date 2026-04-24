import { T } from '../tokens';

export default function StatCard({ icon, label, value, hint }) {
  return (
    <div style={{
      background: 'white', border: `1px solid ${T.line}`, borderRadius: 16,
      padding: 18, display: 'flex', flexDirection: 'column', gap: 8,
      boxShadow: T.shadow,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10, background: T.gradSoft,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: T.pink, fontSize: 14,
        }}>
          <i className={`fa-solid ${icon}`} />
        </div>
      </div>
      <div>
        <div style={{ fontSize: 12, color: T.muted, fontWeight: 500 }}>{label}</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: T.ink, letterSpacing: '-0.02em', marginTop: 2 }}>{value}</div>
        <div style={{ fontSize: 11, color: T.muted, marginTop: 2 }}>{hint}</div>
      </div>
    </div>
  );
}
