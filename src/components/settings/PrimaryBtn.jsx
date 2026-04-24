import { T } from '../../tokens';

export default function PrimaryBtn({ children, style: extraStyle, ...p }) {
  return (
    <button {...p} style={{
      padding: '11px 20px', borderRadius: 10, border: 'none',
      background: T.grad, color: 'white', fontWeight: 700, fontSize: 13, cursor: 'pointer',
      boxShadow: '0 6px 14px rgba(233,30,140,0.3)', ...(extraStyle || {}),
    }}>
      {children}
    </button>
  );
}
