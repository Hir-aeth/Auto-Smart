import { useState } from 'react';
import { T } from '../tokens';
import { FORFAITS_CLASSIC, FORFAITS_ACCEL } from '../data';
import { useApp } from '../context/AppContext';
import { useNavigateTo } from '../hooks/useNavigateTo';
import TopBar from '../components/TopBar';
import IconBtn from '../components/IconBtn';
import ForfaitCard from '../components/ForfaitCard';

export default function BoutiquePage() {
  const setRoute = useNavigateTo();
  const { setHasSubscription, setActiveForfait } = useApp();
  const [tab, setTab] = useState('classic');
  const plans = tab === 'classic' ? FORFAITS_CLASSIC : FORFAITS_ACCEL;

  return (
    <div className="as-page">
      <TopBar
        title="Boutique des forfaits"
        subtitle="Choisissez la formule qui correspond à votre rythme et votre budget."
        right={<IconBtn icon="fa-circle-question" title="Aide" />}
      />

      <div style={{ padding: '24px 32px 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{
          display: 'flex', background: 'white', padding: 5, borderRadius: 14,
          border: `1px solid ${T.line}`, alignSelf: 'flex-start', boxShadow: T.shadow,
        }}>
          {[{ k: 'classic', l: 'Formules Classiques', ic: 'fa-road' }, { k: 'accel', l: 'Formules Accélérées', ic: 'fa-bolt' }].map(t => (
            <button key={t.k} onClick={() => setTab(t.k)} style={{
              padding: '10px 20px', borderRadius: 10, border: 'none', cursor: 'pointer',
              fontSize: 14, fontWeight: 600,
              background: tab === t.k ? T.grad : 'transparent',
              color: tab === t.k ? 'white' : T.ink2,
              boxShadow: tab === t.k ? '0 4px 10px rgba(233,30,140,0.25)' : 'none',
              transition: 'all 0.2s',
            }}>
              <i className={`fa-solid ${t.ic}`} style={{ marginRight: 8, fontSize: 12 }} />
              {t.l}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="as-forfait-grid">
          {plans.map(p => (
            <ForfaitCard key={p.name} p={p} onBuy={() => { setHasSubscription(true); setActiveForfait(p); setRoute('dashboard-sub'); }} />
          ))}
        </div>

        <div style={{
          background: 'white', border: `1px solid ${T.line}`, borderRadius: 20,
          padding: 24, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, boxShadow: T.shadow,
        }} className="as-value-strip">
          {[
            { ic: 'fa-shield-halved', t: 'Paiement sécurisé', d: 'CMI, cartes bancaires, virement' },
            { ic: 'fa-rotate-left', t: 'Annulation 48h', d: 'Remboursement intégral' },
            { ic: 'fa-headset', t: 'Support 7j/7', d: '09h – 20h, français & arabe' },
            { ic: 'fa-award', t: '94% de réussite', d: 'Premier passage examen' },
          ].map(v => (
            <div key={v.t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: T.gradSoft,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: T.pink, fontSize: 14, flexShrink: 0,
              }}><i className={`fa-solid ${v.ic}`} /></div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: T.ink }}>{v.t}</div>
                <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>{v.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
