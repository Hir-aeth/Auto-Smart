import { T } from '../tokens';

export default function TopBar({ title, subtitle, right }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '24px 32px 0',
    }}>
      <div>
        <div style={{ fontSize: 26, fontWeight: 800, color: T.ink, letterSpacing: '-0.02em' }}>{title}</div>
        {subtitle && <div style={{ fontSize: 14, color: T.muted, marginTop: 4 }}>{subtitle}</div>}
      </div>
      {right}
    </div>
  );
}
