import { useState } from 'react';
import { T } from '../tokens';
import SettingsShell from '../components/settings/SettingsShell';
import SCard from '../components/settings/SCard';
import PrimaryBtn from '../components/settings/PrimaryBtn';
import GhostBtn from '../components/settings/GhostBtn';

const FAQS = [
  { q: 'Comment réserver une leçon de conduite ?', a: "Depuis votre tableau de bord, cliquez sur \"Nouvelle réservation\" ou rendez-vous dans l'onglet Conduite. Choisissez votre moniteur, le type de leçon, puis sélectionnez un créneau disponible." },
  { q: 'Que faire si mon moniteur annule ?', a: "Vous recevrez une notification immédiate et pourrez choisir un autre créneau ou un moniteur de remplacement. Aucune heure ne sera décomptée de votre forfait." },
  { q: 'Mon dossier administratif est-il obligatoire ?', a: "Oui, il est nécessaire pour l'inscription à l'examen théorique et pratique. Vous pouvez commencer vos leçons avant, mais le dossier doit être complet 15 jours avant l'examen." },
  { q: 'Comment fonctionne le code en ligne ?', a: "Vous avez un accès illimité à plus de 4000 questions et 60 séries thématiques. L'examen blanc reproduit les conditions réelles de l'examen officiel." },
  { q: 'Puis-je changer de forfait en cours de route ?', a: "Oui, vous pouvez upgrader votre forfait à tout moment. La différence sera ajoutée au prorata des heures déjà consommées." },
  { q: 'Les leçons non utilisées sont-elles remboursables ?', a: "Les heures non consommées sont valables 12 mois après l'achat. Au-delà, elles peuvent être remboursées sur demande, moyennant des frais de traitement de 10%." },
];

export default function SupportPage() {
  const [open, setOpen] = useState(0);

  return (
    <SettingsShell title="Support technique" subtitle="Questions fréquentes et assistance.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: 20 }} className="as-form-grid">
        {[
          { t: "Centre d'aide", d: 'Articles et tutoriels', ic: 'fa-book', c: T.pink },
          { t: 'Chat en direct', d: 'Réponse en 2 minutes', ic: 'fa-comment-dots', c: T.violet, live: true },
          { t: 'Signaler un bug', d: 'Problème technique', ic: 'fa-bug', c: '#C42A9E' },
        ].map(c => (
          <button key={c.t} style={{ background: 'white', borderRadius: 16, border: `1px solid ${T.line}`, boxShadow: T.shadow, padding: 20, textAlign: 'left', cursor: 'pointer', position: 'relative' }}>
            {c.live && <span style={{ position: 'absolute', top: 16, right: 16, width: 8, height: 8, borderRadius: '50%', background: T.green, boxShadow: '0 0 0 4px rgba(30,158,106,0.2)' }}/>}
            <div style={{ width: 42, height: 42, borderRadius: 12, background: `${c.c}18`, color: c.c, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
              <i className={`fa-solid ${c.ic}`}/>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: T.ink, marginTop: 12 }}>{c.t}</div>
            <div style={{ fontSize: 12, color: T.muted, marginTop: 4 }}>{c.d}</div>
          </button>
        ))}
      </div>

      <SCard title="Questions fréquentes" desc="Les réponses aux demandes les plus courantes.">
        {FAQS.map((f, i) => (
          <div key={i} style={{ borderTop: i > 0 ? `1px solid ${T.line}` : 'none' }}>
            <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', padding: '16px 0', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, cursor: 'pointer', textAlign: 'left' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: T.ink, flex: 1 }}>{f.q}</span>
              <i className={`fa-solid fa-chevron-${open === i ? 'up' : 'down'}`} style={{ color: T.muted, fontSize: 12 }}/>
            </button>
            {open === i && <div style={{ fontSize: 13, color: T.ink2, lineHeight: 1.6, paddingBottom: 16 }}>{f.a}</div>}
          </div>
        ))}
      </SCard>

      <SCard title="Signaler un problème technique">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="as-form-grid">
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: T.ink2 }}>Catégorie</span>
              <select style={{ border: `1px solid ${T.line}`, background: T.bg, borderRadius: 10, padding: '11px 14px', fontSize: 14, outline: 'none', fontFamily: 'inherit' }}>
                <option>Problème de connexion</option><option>Paiement</option><option>Réservation</option><option>Affichage / bug visuel</option><option>Autre</option>
              </select>
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: T.ink2 }}>Priorité</span>
              <select style={{ border: `1px solid ${T.line}`, background: T.bg, borderRadius: 10, padding: '11px 14px', fontSize: 14, outline: 'none', fontFamily: 'inherit' }}>
                <option>Faible</option><option>Moyenne</option><option>Haute</option><option>Urgente</option>
              </select>
            </label>
          </div>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: T.ink2 }}>Description</span>
            <textarea rows="4" placeholder="Décrivez le problème rencontré, les étapes pour le reproduire..." style={{ border: `1px solid ${T.line}`, background: T.bg, borderRadius: 10, padding: '11px 14px', fontSize: 14, outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}/>
          </label>
          <div style={{ padding: 14, borderRadius: 12, border: `1.5px dashed ${T.line2}`, background: T.bg, display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: T.muted, cursor: 'pointer' }}>
            <i className="fa-solid fa-paperclip" style={{ color: T.pink }}/>
            Glissez un fichier ou <span style={{ color: T.pink, fontWeight: 600, textDecoration: 'underline' }}>parcourez</span> (capture d'écran, max 5 Mo)
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <PrimaryBtn>Envoyer le signalement</PrimaryBtn>
          </div>
        </div>
      </SCard>

      <div style={{ padding: 16, borderRadius: 14, background: T.gradSoft, border: `1px solid ${T.line2}`, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ fontSize: 24 }}>📱</div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.ink }}>Version de l'application</div>
          <div style={{ fontSize: 12, color: T.muted, marginTop: 2, fontFamily: "'JetBrains Mono', monospace" }}>v 3.4.2 · Build 2026.04.18</div>
        </div>
        <GhostBtn style={{ padding: '8px 14px', fontSize: 12 }}>Vérifier les mises à jour</GhostBtn>
      </div>
    </SettingsShell>
  );
}
