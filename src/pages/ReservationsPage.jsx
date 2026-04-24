import { useState } from 'react';
import { T } from '../tokens';
import { RESERVATIONS } from '../data';
import { useNavigateTo } from '../hooks/useNavigateTo';
import StatusPill from '../components/StatusPill';

function pageBtn(active, disabled) {
  return {
    width: 34, height: 34, borderRadius: 8,
    border: active ? 'none' : `1px solid ${T.line}`,
    background: active ? T.grad : 'white',
    color: active ? 'white' : (disabled ? T.muted : T.ink2),
    fontSize: 12, fontWeight: 600, cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    boxShadow: active ? '0 4px 10px rgba(233,30,140,0.25)' : 'none',
  };
}

export default function ReservationsPage() {
  const setRoute = useNavigateTo();
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [cancelling, setCancelling] = useState(null);
  const [data, setData] = useState(RESERVATIONS);

  const filtered = filter === 'all' ? data : data.filter(r => r.status === (filter === 'upcoming' ? 'Confirmée' : 'Terminée'));
  const perPage = 5;
  const pageCount = Math.ceil(filtered.length / perPage);
  const rows = filtered.slice((page - 1) * perPage, page * perPage);

  const confirmCancel = () => {
    setData(data.map(r => r.id === cancelling ? { ...r, status: 'Annulée' } : r));
    setCancelling(null);
  };

  return (
    <div className="as-page">
      <div style={{ padding: '24px 32px 0', display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={() => setRoute('dashboard-sub')} style={{
          width: 40, height: 40, borderRadius: 12, border: `1px solid ${T.line}`,
          background: 'white', cursor: 'pointer', color: T.ink2,
        }}>
          <i className="fa-solid fa-arrow-left"/>
        </button>
        <div>
          <div style={{ fontSize: 26, fontWeight: 800, color: T.ink, letterSpacing: '-0.02em' }}>Mes réservations</div>
          <div style={{ fontSize: 14, color: T.muted, marginTop: 4 }}>Gérez vos leçons à venir et consultez votre historique.</div>
        </div>
      </div>

      <div style={{ padding: '24px 32px 40px' }}>
        <div style={{ background: 'white', borderRadius: 20, border: `1px solid ${T.line}`, boxShadow: T.shadow, overflow: 'hidden' }}>
          <div style={{ padding: '18px 22px', borderBottom: `1px solid ${T.line}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 6, background: T.bg, padding: 4, borderRadius: 10 }}>
              {[{ k: 'all', l: 'Toutes' }, { k: 'upcoming', l: 'À venir' }, { k: 'past', l: 'Historique' }].map(f => (
                <button key={f.k} onClick={() => { setFilter(f.k); setPage(1); }} style={{
                  padding: '8px 14px', borderRadius: 8, border: 'none', cursor: 'pointer',
                  fontSize: 13, fontWeight: 600,
                  background: filter === f.k ? 'white' : 'transparent',
                  color: filter === f.k ? T.ink : T.muted,
                  boxShadow: filter === f.k ? '0 2px 6px rgba(0,0,0,0.05)' : 'none',
                }}>{f.l}</button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px', border: `1px solid ${T.line}`, borderRadius: 10, background: T.bg }}>
                <i className="fa-solid fa-magnifying-glass" style={{ color: T.muted, fontSize: 12 }}/>
                <input placeholder="Rechercher..." style={{ border: 'none', outline: 'none', background: 'transparent', padding: '9px 0', fontSize: 13, width: 160, fontFamily: 'inherit' }}/>
              </div>
              <button style={{ padding: '9px 14px', borderRadius: 10, border: `1px solid ${T.line}`, background: 'white', color: T.ink2, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                <i className="fa-solid fa-filter" style={{ marginRight: 6, fontSize: 11 }}/> Filtres
              </button>
              <button style={{ padding: '9px 14px', borderRadius: 10, border: 'none', background: T.grad, color: 'white', fontSize: 13, fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 10px rgba(233,30,140,0.25)' }}>
                <i className="fa-solid fa-plus" style={{ marginRight: 6, fontSize: 11 }}/> Nouvelle
              </button>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 900 }}>
              <thead>
                <tr style={{ background: T.bg }}>
                  {['ID', 'Date', 'Heure', 'Véhicule', 'Lieu', 'Enseignant', 'Statut', 'Action'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '14px 18px', fontSize: 11, fontWeight: 700, color: T.muted, textTransform: 'uppercase', letterSpacing: 0.5 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(r => (
                  <tr key={r.id} style={{ borderBottom: `1px solid ${T.line}` }}>
                    <td style={{ padding: '16px 18px', fontSize: 13, fontWeight: 700, color: T.ink, fontFamily: "'JetBrains Mono', monospace" }}>{r.id}</td>
                    <td style={{ padding: '16px 18px', fontSize: 13, color: T.ink2 }}>{r.date}</td>
                    <td style={{ padding: '16px 18px', fontSize: 13, color: T.ink2, fontWeight: 600 }}>{r.time}</td>
                    <td style={{ padding: '16px 18px', fontSize: 13, color: T.ink2 }}>{r.vehicle}</td>
                    <td style={{ padding: '16px 18px', fontSize: 13, color: T.ink2 }}>{r.location}</td>
                    <td style={{ padding: '16px 18px', fontSize: 13, color: T.ink2 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 26, height: 26, borderRadius: '50%', background: T.pink, color: 'white', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>KB</div>
                        {r.teacher}
                      </div>
                    </td>
                    <td style={{ padding: '16px 18px' }}><StatusPill s={r.status}/></td>
                    <td style={{ padding: '16px 18px' }}>
                      {r.status === 'Confirmée' ? (
                        <button onClick={() => setCancelling(r.id)} style={{ padding: '6px 12px', borderRadius: 8, border: `1px solid ${T.red}40`, background: T.redSoft, color: T.red, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                          <i className="fa-solid fa-xmark" style={{ marginRight: 5 }}/> Annuler
                        </button>
                      ) : (
                        <button style={{ padding: '6px 12px', borderRadius: 8, border: `1px solid ${T.line2}`, background: 'white', color: T.ink2, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                          <i className="fa-solid fa-eye" style={{ marginRight: 5 }}/> Voir
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr><td colSpan="8" style={{ padding: 40, textAlign: 'center', color: T.muted, fontSize: 14 }}>Aucune réservation.</td></tr>
                )}
              </tbody>
            </table>
          </div>

          <div style={{ padding: '16px 22px', borderTop: `1px solid ${T.line}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ fontSize: 12, color: T.muted }}>
              Affichage {(page - 1) * perPage + 1}–{Math.min(page * perPage, filtered.length)} sur {filtered.length}
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              <button disabled={page === 1} onClick={() => setPage(page - 1)} style={pageBtn(false, page === 1)}><i className="fa-solid fa-chevron-left"/></button>
              {Array.from({ length: Math.max(pageCount, 1) }).map((_, i) => (
                <button key={i} onClick={() => setPage(i + 1)} style={pageBtn(page === i + 1)}>{i + 1}</button>
              ))}
              <button disabled={page === pageCount} onClick={() => setPage(page + 1)} style={pageBtn(false, page === pageCount)}><i className="fa-solid fa-chevron-right"/></button>
            </div>
          </div>
        </div>
      </div>

      {cancelling && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(26,11,36,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, backdropFilter: 'blur(4px)' }} onClick={() => setCancelling(null)}>
          <div onClick={e => e.stopPropagation()} style={{ background: 'white', borderRadius: 20, padding: 28, maxWidth: 380, width: '90%', boxShadow: '0 24px 60px rgba(0,0,0,0.25)' }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: T.redSoft, color: T.red, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="fa-solid fa-triangle-exclamation"/>
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: T.ink, marginTop: 14 }}>Annuler la réservation ?</div>
            <div style={{ fontSize: 13, color: T.muted, marginTop: 6, lineHeight: 1.5 }}>
              La réservation <b style={{ color: T.ink2 }}>{cancelling}</b> sera annulée. Les annulations sous 48h peuvent être facturées.
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              <button onClick={() => setCancelling(null)} style={{ flex: 1, padding: '12px', borderRadius: 10, border: `1px solid ${T.line}`, background: 'white', color: T.ink2, fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Retour</button>
              <button onClick={confirmCancel} style={{ flex: 1, padding: '12px', borderRadius: 10, border: 'none', background: T.red, color: 'white', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>Confirmer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
