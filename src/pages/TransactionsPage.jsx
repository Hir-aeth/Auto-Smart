import { useState } from 'react';
import { T } from '../tokens';
import { TRANSACTIONS } from '../data';
import { useNavigateTo } from '../hooks/useNavigateTo';

function MoneyStat({ label, value, color }) {
  return (
    <div style={{ background: 'white', border: `1px solid ${T.line}`, borderRadius: 16, padding: 18, boxShadow: T.shadow }}>
      <div style={{ fontSize: 12, color: T.muted, fontWeight: 500 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color, letterSpacing: '-0.02em', marginTop: 6 }}>{value}</div>
    </div>
  );
}

export default function TransactionsPage() {
  const setRoute = useNavigateTo();
  const [filter, setFilter] = useState('all');
  const rows = filter === 'all' ? TRANSACTIONS : TRANSACTIONS.filter(t => t.type === filter);
  const total = TRANSACTIONS.reduce((s, t) => s + t.amount, 0);

  return (
    <div className="as-page">
      <div style={{ padding: '24px 32px 0', display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={() => setRoute('parametres')} style={{ width: 40, height: 40, borderRadius: 12, border: `1px solid ${T.line}`, background: 'white', cursor: 'pointer', color: T.ink2 }}>
          <i className="fa-solid fa-arrow-left"/>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: T.ink, letterSpacing: '-0.02em' }}>Transactions</div>
          <div style={{ fontSize: 14, color: T.muted, marginTop: 4 }}>Historique de vos paiements, remboursements et crédits.</div>
        </div>
        <button style={{ padding: '10px 16px', borderRadius: 10, border: `1px solid ${T.line}`, background: 'white', color: T.ink2, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
          <i className="fa-solid fa-download" style={{ marginRight: 6, fontSize: 11 }}/>Exporter
        </button>
      </div>

      <div style={{ padding: '24px 32px 40px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="as-stats-row">
          <MoneyStat label="Total dépensé" value={`${TRANSACTIONS.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0)} MAD`} color={T.ink}/>
          <MoneyStat label="Remboursé" value={`${Math.abs(TRANSACTIONS.filter(t => t.type === 'refund').reduce((s, t) => s + t.amount, 0))} MAD`} color={T.green}/>
          <MoneyStat label="Crédit compte" value="200 MAD" color={T.pink}/>
          <MoneyStat label="Net" value={`${total} MAD`} color={T.violet}/>
        </div>

        <div style={{ background: 'white', borderRadius: 20, border: `1px solid ${T.line}`, boxShadow: T.shadow, overflow: 'hidden' }}>
          <div style={{ padding: '16px 22px', borderBottom: `1px solid ${T.line}`, display: 'flex', gap: 6, background: 'white' }}>
            {[{ k: 'all', l: 'Toutes' }, { k: 'achat', l: 'Achats' }, { k: 'credit', l: 'Crédits' }, { k: 'refund', l: 'Remboursements' }].map(f => (
              <button key={f.k} onClick={() => setFilter(f.k)} style={{
                padding: '8px 14px', borderRadius: 8, border: 'none', cursor: 'pointer',
                fontSize: 13, fontWeight: 600,
                background: filter === f.k ? T.gradSoft : 'transparent',
                color: filter === f.k ? T.pink : T.muted,
              }}>{f.l}</button>
            ))}
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: T.bg }}>
                {['ID', 'Date', 'Description', 'Méthode', 'Statut', 'Montant', ''].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '14px 18px', fontSize: 11, fontWeight: 700, color: T.muted, textTransform: 'uppercase', letterSpacing: 0.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(t => (
                <tr key={t.id} style={{ borderBottom: `1px solid ${T.line}` }}>
                  <td style={{ padding: '14px 18px', fontSize: 12, fontWeight: 600, color: T.muted, fontFamily: "'JetBrains Mono', monospace" }}>{t.id}</td>
                  <td style={{ padding: '14px 18px', fontSize: 13, color: T.ink2 }}>{t.date}</td>
                  <td style={{ padding: '14px 18px', fontSize: 13, color: T.ink, fontWeight: 600 }}>{t.label}</td>
                  <td style={{ padding: '14px 18px', fontSize: 13, color: T.ink2 }}>
                    <i className={`fa-solid ${t.method.includes('Carte') ? 'fa-credit-card' : t.method.includes('Virement') ? 'fa-building-columns' : 'fa-wallet'}`} style={{ marginRight: 6, color: T.muted, fontSize: 11 }}/>
                    {t.method}
                  </td>
                  <td style={{ padding: '14px 18px' }}>
                    <span style={{
                      padding: '4px 10px', borderRadius: 7, fontSize: 11, fontWeight: 700,
                      background: t.status === 'Payée' ? T.greenSoft : t.status === 'Remboursée' ? T.amberSoft : T.violetSoft,
                      color: t.status === 'Payée' ? T.green : t.status === 'Remboursée' ? T.amber : T.violet,
                    }}>{t.status}</span>
                  </td>
                  <td style={{ padding: '14px 18px', fontSize: 14, fontWeight: 800, color: t.amount < 0 ? T.green : T.ink }}>
                    {t.amount > 0 ? '+' : ''}{t.amount.toLocaleString('fr-FR')} MAD
                  </td>
                  <td style={{ padding: '14px 18px' }}>
                    <button style={{ padding: '6px 10px', borderRadius: 7, border: `1px solid ${T.line2}`, background: 'white', color: T.ink2, fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>
                      <i className="fa-solid fa-download" style={{ marginRight: 4, fontSize: 10 }}/>Reçu
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
