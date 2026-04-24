import { T } from '../tokens';

export default function Input({ label, icon, ...props }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: T.ink2 }}>{label}</span>
      <div
        style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: T.bg, border: `1px solid ${T.line}`, borderRadius: 12,
          padding: '12px 14px', transition: 'all 0.15s',
        }}
        onFocus={e => { e.currentTarget.style.borderColor = T.pink; e.currentTarget.style.background = 'white'; }}
        onBlur={e => { e.currentTarget.style.borderColor = T.line; e.currentTarget.style.background = T.bg; }}
      >
        {icon && <i className={`fa-solid ${icon}`} style={{ color: T.muted, fontSize: 13, width: 14 }} />}
        <input {...props} style={{ border: 'none', outline: 'none', background: 'transparent', flex: 1, fontSize: 14, color: T.ink, fontFamily: 'inherit' }} />
      </div>
    </label>
  );
}
