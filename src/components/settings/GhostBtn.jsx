import { T } from '../../tokens';

export default function GhostBtn({ children, style: extraStyle, ...p }) {
  return (
    <button {...p} style={{
      padding: '11px 18px', borderRadius: 10, border: `1px solid ${T.line}`,
      background: 'white', color: T.ink2, fontWeight: 600, fontSize: 13, cursor: 'pointer',
      ...(extraStyle || {}),
    }}>
      {children}
    </button>
  );
}
