import { T } from '../tokens';

export default function Logo({ size = 32, dark = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: size, height: size, borderRadius: size * 0.28,
        background: T.grad,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(233, 30, 140, 0.3)',
        position: 'relative',
      }}>
        <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none">
          <path d="M4 14 L6 9 Q6.5 7.5 8 7.5 H16 Q17.5 7.5 18 9 L20 14 V18 H17 V16 H7 V18 H4 V14 Z"
                fill="white" stroke="white" strokeWidth="0.5" strokeLinejoin="round"/>
          <circle cx="8" cy="15" r="1.4" fill={T.pink}/>
          <circle cx="16" cy="15" r="1.4" fill={T.pink}/>
        </svg>
      </div>
      <div style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
        fontSize: size * 0.55, color: dark ? 'white' : T.ink,
        letterSpacing: '-0.02em',
      }}>
        auto<span style={{ background: T.grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>smart</span>
      </div>
    </div>
  );
}
