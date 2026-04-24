import { T } from '../../tokens';

export default function Field({ label, style: extraStyle, ...props }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, ...extraStyle }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: T.ink2 }}>{label}</span>
      <input {...props} style={{
        border: `1px solid ${T.line}`, outline: 'none', background: T.bg,
        borderRadius: 10, padding: '11px 14px', fontSize: 14, color: T.ink,
        fontFamily: 'inherit',
      }}/>
    </label>
  );
}
