import { useLocation } from 'react-router-dom';
import { T } from '../tokens';
import { USER } from '../data';
import { useApp } from '../context/AppContext';
import { useNavigateTo } from '../hooks/useNavigateTo';
import Logo from './Logo';

const NAV_ITEMS = [
  { key: 'dashboard', label: 'Accueil', icon: 'fa-house', path: '/dashboard' },
  { key: 'conduite', label: 'Conduite', icon: 'fa-car', path: '/conduite' },
  { key: 'code', label: 'Code en ligne', icon: 'fa-book-open-reader', path: '/code' },
  { key: 'boutique', label: 'Boutique', icon: 'fa-store', path: '/boutique' },
  { key: 'reservations', label: 'Mes réservations', icon: 'fa-calendar-check', path: '/reservations' },
  { key: 'transactions', label: 'Transactions', icon: 'fa-wallet', path: '/transactions' },
  { key: 'parametres', label: 'Paramètres', icon: 'fa-gear', path: '/parametres' },
];

export default function Sidebar() {
  const location = useLocation();
  const setRoute = useNavigateTo();
  const { hasSubscription } = useApp();

  return (
    <aside className="as-sidebar">
      <div style={{ padding: '24px 20px 28px' }}>
        <Logo size={34} />
      </div>
      <nav style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {NAV_ITEMS.map(it => {
          const active =
            location.pathname === it.path ||
            location.pathname.startsWith(it.path + '/') ||
            (it.key === 'dashboard' && location.pathname === '/dashboard/sub');
          return (
            <button
              key={it.key}
              onClick={() => setRoute(it.key === 'dashboard' ? (hasSubscription ? 'dashboard-sub' : 'dashboard') : it.key)}
              className="as-nav-item"
              style={{
                background: active ? T.grad : 'transparent',
                color: active ? 'white' : T.ink2,
                boxShadow: active ? '0 6px 16px rgba(233, 30, 140, 0.25)' : 'none',
              }}
            >
              <i className={`fa-solid ${it.icon}`} style={{ width: 18, fontSize: 15, opacity: active ? 1 : 0.7 }} />
              <span>{it.label}</span>
            </button>
          );
        })}
      </nav>
      <div style={{ padding: 12, borderTop: `1px solid ${T.line}`, margin: '0 12px' }}>
        <button onClick={() => setRoute('login')} className="as-nav-item" style={{ color: T.muted, background: 'transparent' }}>
          <i className="fa-solid fa-right-from-bracket" style={{ width: 18, fontSize: 15 }} />
          <span>Déconnexion</span>
        </button>
        <div style={{
          marginTop: 8, padding: '10px 12px', borderRadius: 12,
          background: T.gradSoft, display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{
            width: 34, height: 34, borderRadius: '50%', background: T.grad,
            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: 13,
          }}>YE</div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.ink, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {USER.firstName} {USER.lastName}
            </div>
            <div style={{ fontSize: 11, color: T.muted }}>Élève · {USER.city}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
