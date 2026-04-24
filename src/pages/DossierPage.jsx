import { T } from '../tokens';
import { useNavigateTo } from '../hooks/useNavigateTo';

export default function DossierPage() {
  const setRoute = useNavigateTo();

  const docs = [
    { k: 'cin', l: "Carte d'identité nationale", st: 'Validé', date: '12 mars 2026', ic: 'fa-id-card' },
    { k: 'photo', l: "Photo d'identité", st: 'Validé', date: '12 mars 2026', ic: 'fa-camera' },
    { k: 'medical', l: 'Certificat médical', st: 'Validé', date: '14 mars 2026', ic: 'fa-stethoscope' },
    { k: 'justif', l: 'Justificatif de domicile', st: 'En attente', date: 'Manquant', ic: 'fa-house' },
    { k: 'auth', l: 'Autorisation parentale', st: 'Non requis', date: '—', ic: 'fa-file-signature' },
    { k: 'contrat', l: 'Contrat de formation', st: 'Validé', date: '12 mars 2026', ic: 'fa-file-contract' },
  ];

  const stColor = (st) => st === 'Validé'
    ? { bg: T.greenSoft, fg: T.green, ic: 'fa-circle-check' }
    : st === 'En attente'
    ? { bg: T.amberSoft, fg: T.amber, ic: 'fa-clock' }
    : { bg: T.bg, fg: T.muted, ic: 'fa-minus' };

  const pct = Math.round(docs.filter(d => d.st === 'Validé').length / docs.filter(d => d.st !== 'Non requis').length * 100);

  return (
    <div className="as-page">
      <div style={{ padding: '24px 32px 0', display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={() => setRoute('parametres')} style={{ width: 40, height: 40, borderRadius: 12, border: `1px solid ${T.line}`, background: 'white', cursor: 'pointer', color: T.ink2 }}>
          <i className="fa-solid fa-arrow-left"/>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: T.ink, letterSpacing: '-0.02em' }}>Dossier administratif</div>
          <div style={{ fontSize: 14, color: T.muted, marginTop: 4 }}>Gérez vos documents pour l'inscription à l'examen.</div>
        </div>
      </div>

      <div style={{ padding: '24px 32px 40px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ background: T.grad, borderRadius: 20, padding: 24, color: 'white', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', position: 'relative', overflow: 'hidden', boxShadow: T.shadowHi }}>
          <svg width="86" height="86" viewBox="0 0 86 86" style={{ zIndex: 2 }}>
            <circle cx="43" cy="43" r="36" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="8"/>
            <circle cx="43" cy="43" r="36" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 36 * pct / 100} ${2 * Math.PI * 36}`}
              transform="rotate(-90 43 43)"/>
            <text x="43" y="50" textAnchor="middle" fontSize="18" fontWeight="800" fill="white">{pct}%</text>
          </svg>
          <div style={{ flex: 1, zIndex: 2, minWidth: 240 }}>
            <div style={{ fontSize: 20, fontWeight: 800 }}>Dossier presque complet</div>
            <div style={{ fontSize: 14, opacity: 0.9, marginTop: 6, lineHeight: 1.5, maxWidth: 440 }}>
              Il vous manque le justificatif de domicile pour finaliser votre inscription à l'examen pratique.
            </div>
          </div>
          <button style={{ padding: '12px 20px', borderRadius: 10, border: 'none', background: 'white', color: T.pink, fontWeight: 700, fontSize: 13, cursor: 'pointer', zIndex: 2 }}>
            Téléverser maintenant <i className="fa-solid fa-arrow-up-from-bracket" style={{ marginLeft: 8, fontSize: 11 }}/>
          </button>
          <div style={{ position: 'absolute', right: -40, top: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }}/>
        </div>

        <div style={{ background: 'white', borderRadius: 20, border: `1px solid ${T.line}`, boxShadow: T.shadow, overflow: 'hidden' }}>
          {docs.map((d, idx) => {
            const c = stColor(d.st);
            return (
              <div key={d.k} style={{ padding: '18px 22px', borderBottom: idx < docs.length - 1 ? `1px solid ${T.line}` : 'none', display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: T.gradSoft, color: T.pink, fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`fa-solid ${d.ic}`}/>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: T.ink }}>{d.l}</div>
                  <div style={{ fontSize: 12, color: T.muted, marginTop: 3 }}>{d.date}</div>
                </div>
                <span style={{ padding: '5px 10px', borderRadius: 8, background: c.bg, color: c.fg, fontSize: 11, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  <i className={`fa-solid ${c.ic}`} style={{ fontSize: 10 }}/>{d.st}
                </span>
                <button style={{ padding: '8px 14px', borderRadius: 10, border: `1px solid ${T.line2}`, background: 'white', color: T.ink2, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                  <i className={`fa-solid ${d.st === 'En attente' ? 'fa-upload' : 'fa-eye'}`} style={{ marginRight: 6, fontSize: 10 }}/>
                  {d.st === 'En attente' ? 'Téléverser' : 'Voir'}
                </button>
              </div>
            );
          })}
        </div>

        <div style={{ padding: 16, borderRadius: 14, background: T.violetSoft, border: `1px solid ${T.line2}`, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <i className="fa-solid fa-circle-info" style={{ color: T.violet, marginTop: 2, fontSize: 14 }}/>
          <div style={{ fontSize: 13, color: T.ink2, lineHeight: 1.5 }}>
            Les documents sont traités sous 48h par notre équipe. Formats acceptés : PDF, JPG, PNG (max 5 Mo par fichier).
          </div>
        </div>
      </div>
    </div>
  );
}
