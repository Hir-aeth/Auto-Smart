import { useState } from 'react';
import { T } from '../tokens';
import SettingsShell from '../components/settings/SettingsShell';
import GhostBtn from '../components/settings/GhostBtn';

const DOCS = [
  { k: 'cgu', t: "Conditions générales d'utilisation", d: 'En vigueur depuis le 1er janvier 2026',
    body: [
      { h: '1. Objet', p: "AutoSmart propose une plateforme de mise en relation entre élèves et auto-écoles agréées au Maroc. L'utilisateur reconnaît avoir pris connaissance des présentes conditions avant toute utilisation." },
      { h: '2. Inscription et compte', p: "L'accès au service nécessite la création d'un compte personnel. L'utilisateur s'engage à fournir des informations exactes et à mettre à jour son dossier administratif dans les délais." },
      { h: '3. Forfaits et paiement', p: "Les forfaits sont payables à la souscription. Aucun remboursement n'est dû après 14 jours d'utilisation, sauf annulation justifiée conformément à l'article 7." },
      { h: '4. Annulation et report', p: "Toute leçon peut être annulée gratuitement jusqu'à 48h avant. Au-delà, 50% du montant est facturé. Les reports sont possibles sous réserve de disponibilité du moniteur." },
      { h: '5. Responsabilité', p: "AutoSmart agit en qualité d'intermédiaire technique. L'auto-école partenaire demeure responsable de la qualité pédagogique et de la conformité réglementaire de la formation." },
    ]},
  { k: 'privacy', t: 'Politique de confidentialité', d: 'Conforme à la Loi 09-08 sur la protection des données personnelles',
    body: [
      { h: 'Données collectées', p: "Nous collectons vos données d'identification (nom, email, CIN), vos coordonnées et votre activité sur la plateforme dans le seul but de fournir le service." },
      { h: 'Durée de conservation', p: "Vos données sont conservées pendant toute la durée de votre inscription, puis archivées 3 ans après la dernière utilisation." },
      { h: 'Vos droits', p: "Conformément à la loi, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez dpo@autosmart.ma pour exercer ces droits." },
    ]},
  { k: 'cookies', t: 'Gestion des cookies', d: 'Dernière mise à jour le 12 mars 2026',
    body: [
      { h: 'Cookies essentiels', p: "Indispensables au fonctionnement du service (authentification, sécurité). Ils ne peuvent pas être désactivés." },
      { h: 'Cookies analytiques', p: "Nous aident à mesurer l'audience et améliorer l'expérience. Vous pouvez les désactiver via les préférences." },
    ]},
  { k: 'mentions', t: 'Mentions légales', d: 'Société AutoSmart Maroc SARL',
    body: [
      { h: 'Éditeur', p: "AutoSmart Maroc SARL, capital 500 000 MAD, RC Casablanca 456789, ICE 002345678000034. Siège : 42 Bd Zerktouni, 20250 Casablanca." },
      { h: 'Directeur de publication', p: "Mehdi Alami, Directeur Général." },
      { h: 'Hébergement', p: "Serveurs OVH Cloud, datacenter Paris. Données hébergées exclusivement en Union européenne." },
    ]},
];

export default function LegalPage() {
  const [open, setOpen] = useState('cgu');
  const active = DOCS.find(d => d.k === open);

  return (
    <SettingsShell title="Légal" subtitle="Conditions, confidentialité, mentions légales." maxWidth={960}>
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 20 }} className="as-legal-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {DOCS.map(d => (
            <button key={d.k} onClick={() => setOpen(d.k)} style={{
              padding: '14px 16px', borderRadius: 12, cursor: 'pointer',
              background: open === d.k ? T.gradSoft : 'white',
              color: open === d.k ? T.pink : T.ink2,
              border: `1px solid ${open === d.k ? T.line2 : T.line}`,
              textAlign: 'left', fontSize: 13, fontWeight: 600,
            }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{d.t}</div>
              <div style={{ fontSize: 11, color: T.muted, marginTop: 3, fontWeight: 500 }}>{d.d}</div>
            </button>
          ))}
        </div>

        <div style={{ background: 'white', borderRadius: 20, border: `1px solid ${T.line}`, boxShadow: T.shadow, padding: 28, minHeight: 400 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 18 }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: T.ink }}>{active.t}</div>
              <div style={{ fontSize: 12, color: T.muted, marginTop: 4 }}>{active.d}</div>
            </div>
            <GhostBtn style={{ padding: '8px 14px', fontSize: 12 }}>
              <i className="fa-solid fa-download" style={{ marginRight: 5, fontSize: 10 }}/>PDF
            </GhostBtn>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {active.body.map(b => (
              <div key={b.h}>
                <div style={{ fontSize: 14, fontWeight: 800, color: T.ink, marginBottom: 6 }}>{b.h}</div>
                <div style={{ fontSize: 13, color: T.ink2, lineHeight: 1.6 }}>{b.p}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SettingsShell>
  );
}
