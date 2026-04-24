import { useState } from 'react';
import { T } from '../tokens';
import { USER, INSTRUCTORS } from '../data';
import { useApp } from '../context/AppContext';
import { useNavigateTo } from '../hooks/useNavigateTo';
import TopBar from '../components/TopBar';
import IconBtn from '../components/IconBtn';
import StatCard from '../components/StatCard';
import FakeMap from '../components/FakeMap';
import InstructorRow from '../components/InstructorRow';

export default function DashboardPage() {
  const setRoute = useNavigateTo();
  const { setHasSubscription } = useApp();
  const [filter, setFilter] = useState('Manuel');
  const [selected, setSelected] = useState(null);
  const filtered = INSTRUCTORS.filter(i => i.type === filter);

  return (
    <div className="as-page">
      <TopBar
        title={`Bonjour, ${USER.firstName} 👋`}
        subtitle="Bienvenue sur AutoSmart. Prêt·e à commencer votre formation ?"
        right={
          <div style={{ display: 'flex', gap: 10 }}>
            <IconBtn icon="fa-bell" title="Notifications" />
            <IconBtn icon="fa-magnifying-glass" title="Rechercher" />
          </div>
        }
      />

      <div style={{ padding: '24px 32px 40px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{
          background: T.grad, borderRadius: 20, padding: 28, color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          position: 'relative', overflow: 'hidden', boxShadow: T.shadowHi,
        }}>
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 520 }}>
            <div style={{ fontSize: 12, opacity: 0.85, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600 }}>
              Compte actif · Date d'adhésion {USER.joined}
            </div>
            <div style={{ fontSize: 26, fontWeight: 800, marginTop: 8, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              Vous n'avez pas encore de forfait actif.
            </div>
            <div style={{ fontSize: 14, opacity: 0.9, marginTop: 8, lineHeight: 1.5 }}>
              Choisissez un forfait pour débloquer la réservation de leçons, le code en ligne et votre moniteur dédié.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, zIndex: 2, position: 'relative' }}>
            <button onClick={() => setRoute('boutique')} style={{
              padding: '14px 22px', borderRadius: 12, border: 'none',
              background: 'white', color: T.pink, fontWeight: 700, fontSize: 14, cursor: 'pointer',
              boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
            }}>
              Choisissez votre plan <i className="fa-solid fa-arrow-right" style={{ marginLeft: 8 }} />
            </button>
          </div>
          <div style={{ position: 'absolute', right: -40, top: -40, width: 220, height: 220, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ position: 'absolute', right: 140, bottom: -60, width: 140, height: 140, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="as-stats-row">
          <StatCard icon="fa-clock" label="Heures réalisées" value="0h" hint="Sur 0h prévues" />
          <StatCard icon="fa-car-side" label="Leçons suivies" value="0" hint="Aucune leçon" />
          <StatCard icon="fa-book-open-reader" label="Code en ligne" value="—" hint="Non activé" />
          <StatCard icon="fa-graduation-cap" label="Date examen" value="—" hint="À planifier" />
        </div>

        <div style={{
          background: 'white', borderRadius: 20, border: `1px solid ${T.line}`,
          boxShadow: T.shadow, overflow: 'hidden',
        }}>
          <div style={{ padding: '20px 24px', borderBottom: `1px solid ${T.line}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 800, color: T.ink }}>Moniteurs près de vous</div>
              <div style={{ fontSize: 13, color: T.muted, marginTop: 2 }}>{filtered.length} moniteurs disponibles à {USER.city}</div>
            </div>
            <div style={{ display: 'flex', gap: 6, background: T.bg, padding: 4, borderRadius: 12 }}>
              {['Manuel', 'Automatique', 'Moto'].map(f => (
                <button key={f} onClick={() => { setFilter(f); setSelected(null); }} style={{
                  padding: '8px 16px', borderRadius: 9, border: 'none', cursor: 'pointer',
                  fontSize: 13, fontWeight: 600,
                  background: filter === f ? T.grad : 'transparent',
                  color: filter === f ? 'white' : T.ink2,
                  boxShadow: filter === f ? '0 4px 10px rgba(233,30,140,0.25)' : 'none',
                  transition: 'all 0.2s',
                }}>
                  <i className={`fa-solid ${f === 'Manuel' ? 'fa-gears' : f === 'Automatique' ? 'fa-gauge-high' : 'fa-motorcycle'}`} style={{ marginRight: 6, fontSize: 11 }} />
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', minHeight: 440 }} className="as-map-grid">
            <div style={{ position: 'relative', background: '#EEF0F5', overflow: 'hidden' }}>
              <FakeMap instructors={filtered} selected={selected} setSelected={setSelected} />
            </div>
            <div style={{ overflowY: 'auto', maxHeight: 540 }}>
              {filtered.map(i => (
                <InstructorRow
                  key={i.id} i={i}
                  selected={selected === i.id}
                  onClick={() => setSelected(i.id)}
                  onBook={() => { setHasSubscription(true); setRoute('dashboard-sub'); }}
                />
              ))}
              {filtered.length === 0 && (
                <div style={{ padding: 40, textAlign: 'center', color: T.muted, fontSize: 14 }}>
                  Aucun moniteur {filter.toLowerCase()} pour le moment.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
