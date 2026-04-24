import { useLocation } from 'react-router-dom';
import { T } from '../tokens';
import { useApp } from '../context/AppContext';
import { useNavigateTo } from '../hooks/useNavigateTo';

export default function MobileBottomNav() {
  const location = useLocation();
  const setRoute = useNavigateTo();
  const { hasSubscription } = useApp();

  const items = [
    { key: hasSubscription ? 'dashboard-sub' : 'dashboard', path: '/dashboard', label: 'Accueil', icon: 'fa-house' },
    { key: 'boutique', path: '/boutique', label: 'Boutique', icon: 'fa-store' },
    { key: 'reservations', path: '/reservations', label: 'Leçons', icon: 'fa-calendar-check' },
    { key: 'parametres', path: '/parametres', label: 'Profil', icon: 'fa-user' },
  ];

  return (
    <nav className="as-bottom-nav">
      {items.map(i => {
        const active = location.pathname === i.path || location.pathname === '/dashboard/sub';
        return (
          <button key={i.key} onClick={() => setRoute(i.key)} style={{
            flex: 1, padding: '10px 4px', border: 'none', background: 'none',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            color: active ? T.pink : T.muted, cursor: 'pointer',
          }}>
            <i className={`fa-solid ${i.icon}`} style={{ fontSize: 16 }}/>
            <span style={{ fontSize: 10, fontWeight: 600 }}>{i.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
