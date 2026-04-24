import { T } from '../../tokens';
import { useNavigateTo } from '../../hooks/useNavigateTo';

export default function SettingsShell({ title, subtitle, children, maxWidth = 720 }) {
  const setRoute = useNavigateTo();
  return (
    <div className="as-page">
      <div style={{ padding: '24px 32px 0', display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={() => setRoute('parametres')} style={{
          width: 40, height: 40, borderRadius: 12, border: `1px solid ${T.line}`,
          background: 'white', cursor: 'pointer', color: T.ink2,
        }}>
          <i className="fa-solid fa-arrow-left"/>
        </button>
        <div>
          <div style={{ fontSize: 26, fontWeight: 800, color: T.ink, letterSpacing: '-0.02em' }}>{title}</div>
          <div style={{ fontSize: 14, color: T.muted, marginTop: 4 }}>{subtitle}</div>
        </div>
      </div>
      <div style={{ padding: '24px 32px 40px', maxWidth, margin: '0 auto', width: '100%' }}>
        {children}
      </div>
    </div>
  );
}
