import { T } from '../tokens';
import { USER } from '../data';
import { useNavigateTo } from '../hooks/useNavigateTo';
import TopBar from '../components/TopBar';
import IconBtn from '../components/IconBtn';

export default function ParametresPage() {
  const setRoute = useNavigateTo();

  const tiles = [
    { k: 'profil', t: 'Profil', d: 'Nom, email, photo, coordonnées', ic: 'fa-user', c: T.pink, route: 'profil' },
    { k: 'pwd', t: 'Mot de passe', d: 'Sécurité et authentification', ic: 'fa-lock', c: T.violet, route: 'password' },
    { k: 'res', t: 'Mes réservations', d: 'Historique et à venir', ic: 'fa-calendar-check', c: '#C42A9E', route: 'reservations' },
    { k: 'dossier', t: 'Dossier administratif', d: "Pièces d'identité et documents", ic: 'fa-folder-open', c: '#A42BB8', route: 'dossier' },
    { k: 'parr', t: 'Parrainage', d: 'Invitez des amis et gagnez', ic: 'fa-gift', c: T.pink, badge: '-200 MAD', route: 'parrainage' },
    { k: 'tx', t: 'Transactions', d: 'Historique des paiements', ic: 'fa-wallet', c: T.violet, route: 'transactions' },
    { k: 'ctc', t: 'Contactez-nous', d: 'Questions générales', ic: 'fa-comment-dots', c: '#C42A9E', route: 'contact' },
    { k: 'legal', t: 'Légal', d: 'CGU, confidentialité, cookies', ic: 'fa-scale-balanced', c: '#A42BB8', route: 'legal' },
    { k: 'tech', t: 'Support technique', d: "Problème avec l'application", ic: 'fa-life-ring', c: T.pink, route: 'support' },
    { k: 'ctr', t: 'Téléchargez votre contrat', d: 'PDF signé · v. 12 mars 2026', ic: 'fa-file-arrow-down', c: T.violet, cta: 'Voir contrat', route: 'contrat' },
  ];

  return (
    <div className="as-page">
      <TopBar
        title="Paramètres du compte"
        subtitle="Gérez votre profil, votre dossier administratif et vos préférences."
        right={<IconBtn icon="fa-circle-question" title="Aide"/>}
      />

      <div style={{ padding: '24px 32px 40px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{
          background: 'white', border: `1px solid ${T.line}`, borderRadius: 20,
          padding: 24, boxShadow: T.shadow,
          display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap',
        }}>
          <div style={{
            width: 72, height: 72, borderRadius: 18, background: T.grad,
            color: 'white', fontSize: 26, fontWeight: 800,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: T.shadowHi,
          }}>YE</div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontSize: 19, fontWeight: 800, color: T.ink }}>{USER.firstName} {USER.lastName}</div>
            <div style={{ fontSize: 13, color: T.muted, marginTop: 3 }}>{USER.email}</div>
            <div style={{ display: 'flex', gap: 14, marginTop: 10, flexWrap: 'wrap', fontSize: 12, color: T.ink2 }}>
              <span><i className="fa-solid fa-map-marker-alt" style={{ color: T.pink, marginRight: 6 }}/> {USER.city}</span>
              <span><i className="fa-solid fa-calendar" style={{ color: T.pink, marginRight: 6 }}/> Membre depuis {USER.joined}</span>
              <span style={{ padding: '2px 8px', borderRadius: 6, background: T.greenSoft, color: T.green, fontWeight: 700 }}>
                <i className="fa-solid fa-circle-check" style={{ marginRight: 4, fontSize: 9 }}/> Dossier validé
              </span>
            </div>
          </div>
          <button onClick={() => setRoute('profil')} style={{
            padding: '10px 18px', borderRadius: 10, border: `1px solid ${T.line2}`,
            background: 'white', color: T.ink2, fontSize: 13, fontWeight: 600, cursor: 'pointer',
          }}>
            <i className="fa-solid fa-pen" style={{ marginRight: 6, fontSize: 11 }}/> Modifier
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="as-settings-grid">
          {tiles.map(tile => (
            <div key={tile.k} onClick={() => setRoute(tile.route)}
              className="as-tile"
              style={{
                background: 'white', border: `1px solid ${T.line}`, borderRadius: 16,
                padding: 20, cursor: 'pointer', transition: 'all 0.15s',
                boxShadow: T.shadow, display: 'flex', flexDirection: 'column', gap: 14, minHeight: 140,
                position: 'relative',
              }}>
              {tile.badge && (
                <div style={{
                  position: 'absolute', top: 14, right: 14,
                  background: T.greenSoft, color: T.green,
                  padding: '3px 8px', borderRadius: 6, fontSize: 10, fontWeight: 700,
                }}>{tile.badge}</div>
              )}
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${tile.c}18`, color: tile.c, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>
                <i className={`fa-solid ${tile.ic}`}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: T.ink }}>{tile.t}</div>
                <div style={{ fontSize: 12, color: T.muted, marginTop: 3, lineHeight: 1.5 }}>{tile.d}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8, borderTop: `1px solid ${T.line}` }}>
                <span style={{ fontSize: 12, color: tile.cta ? T.pink : T.muted, fontWeight: 600 }}>{tile.cta || 'Accéder'}</span>
                <i className={`fa-solid ${tile.cta ? 'fa-download' : 'fa-arrow-right'}`} style={{ color: tile.cta ? T.pink : T.muted, fontSize: 11 }}/>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'white', border: `1px solid ${T.line}`, borderRadius: 16,
          padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: T.ink }}>Supprimer mon compte</div>
            <div style={{ fontSize: 12, color: T.muted, marginTop: 3 }}>Action irréversible. Toutes vos données seront effacées.</div>
          </div>
          <button style={{ padding: '10px 16px', borderRadius: 10, border: `1px solid ${T.red}40`, background: T.redSoft, color: T.red, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
            Supprimer le compte
          </button>
        </div>
      </div>
    </div>
  );
}
