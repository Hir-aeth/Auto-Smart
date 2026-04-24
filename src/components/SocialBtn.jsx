import { T } from '../tokens';

export default function SocialBtn({ icon, label }) {
  return (
    <button type="button" style={{
      padding: '11px 14px', borderRadius: 12, border: `1px solid ${T.line}`,
      background: 'white', cursor: 'pointer', fontSize: 14, fontWeight: 600, color: T.ink2,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    }}>
      <i className={icon} /> {label}
    </button>
  );
}
