import { T } from '../../tokens';

export default function SCard({ children, title, desc }) {
  return (
    <div style={{
      background: 'white', borderRadius: 20, border: `1px solid ${T.line}`,
      boxShadow: T.shadow, padding: 24, marginBottom: 16,
    }}>
      {title && (
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: T.ink, letterSpacing: '-0.01em' }}>{title}</div>
          {desc && <div style={{ fontSize: 13, color: T.muted, marginTop: 4 }}>{desc}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
