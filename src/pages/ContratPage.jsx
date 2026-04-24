import { T } from '../tokens';
import SettingsShell from '../components/settings/SettingsShell';
import SCard from '../components/settings/SCard';
import PrimaryBtn from '../components/settings/PrimaryBtn';
import GhostBtn from '../components/settings/GhostBtn';

export default function ContratPage() {
  return (
    <SettingsShell title="Votre contrat" subtitle="Téléchargez et consultez votre contrat de formation.">
      <SCard>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div style={{ width: 110, height: 140, borderRadius: 10, background: 'white', border: `1px solid ${T.line}`, padding: 10, flexShrink: 0, position: 'relative', overflow: 'hidden', boxShadow: '0 6px 16px rgba(0,0,0,0.08)' }}>
            <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, background: T.grad }}/>
              <div style={{ height: 4, background: T.ink, borderRadius: 2, flex: 1, alignSelf: 'center' }}/>
            </div>
            {[...Array(10)].map((_, i) => (
              <div key={i} style={{ height: 3, background: i === 0 ? T.ink : T.line2, borderRadius: 1, marginBottom: 4, width: `${60 + (i * 7) % 40}%` }}/>
            ))}
            <div style={{ position: 'absolute', bottom: 10, right: 10, width: 32, height: 16, borderRadius: 2, background: `${T.pink}30`, transform: 'rotate(-8deg)' }}/>
          </div>

          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ fontSize: 19, fontWeight: 800, color: T.ink }}>Contrat de formation AutoSmart</div>
            <div style={{ fontSize: 13, color: T.muted, marginTop: 4 }}>PDF signé · 4 pages · 486 Ko</div>
            <div style={{ display: 'flex', gap: 14, marginTop: 14, flexWrap: 'wrap', fontSize: 12, color: T.ink2 }}>
              <span><i className="fa-solid fa-calendar" style={{ color: T.pink, marginRight: 6 }}/>Signé le 12 mars 2026</span>
              <span><i className="fa-solid fa-signature" style={{ color: T.pink, marginRight: 6 }}/>Signature électronique vérifiée</span>
              <span style={{ padding: '2px 8px', borderRadius: 6, background: T.greenSoft, color: T.green, fontWeight: 700 }}>
                <i className="fa-solid fa-circle-check" style={{ marginRight: 4, fontSize: 9 }}/> Valide
              </span>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
              <PrimaryBtn><i className="fa-solid fa-download" style={{ marginRight: 6, fontSize: 11 }}/>Télécharger PDF</PrimaryBtn>
              <GhostBtn><i className="fa-solid fa-eye" style={{ marginRight: 6, fontSize: 11 }}/>Prévisualiser</GhostBtn>
              <GhostBtn><i className="fa-solid fa-envelope" style={{ marginRight: 6, fontSize: 11 }}/>Envoyer par email</GhostBtn>
            </div>
          </div>
        </div>
      </SCard>

      <SCard title="Détails du contrat">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="as-form-grid">
          {[
            ['Numéro de contrat', 'CTR-2026-04128'],
            ['Forfait souscrit', 'Essentiel — 20h'],
            ['Montant total', '2 400 MAD'],
            ['Mode de paiement', 'Carte CMI'],
            ['Date de début', '12 mars 2026'],
            ['Date de fin validité', '12 mars 2027'],
            ['Auto-école partenaire', 'AutoSmart Maârif'],
            ['Agrément', 'N° 45/2024 · MTPL'],
          ].map(([l, v]) => (
            <div key={l} style={{ padding: '12px 14px', background: T.bg, borderRadius: 10 }}>
              <div style={{ fontSize: 11, color: T.muted, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>{l}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: T.ink, marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>
      </SCard>

      <SCard title="Avenants et modifications">
        {[
          { n: 'Avenant #1', d: '22 mars 2026', t: "Ajout d'une heure supplémentaire", st: 'Signé' },
          { n: 'Avenant #2', d: '08 avr. 2026', t: 'Application du crédit parrainage (-200 MAD)', st: 'Signé' },
        ].map((a, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderTop: i > 0 ? `1px solid ${T.line}` : 'none' }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: T.gradSoft, color: T.pink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="fa-solid fa-file-signature"/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: T.ink }}>{a.n} — {a.t}</div>
              <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>{a.d}</div>
            </div>
            <span style={{ padding: '5px 10px', borderRadius: 8, background: T.greenSoft, color: T.green, fontSize: 11, fontWeight: 700 }}>
              <i className="fa-solid fa-circle-check" style={{ marginRight: 4, fontSize: 9 }}/>{a.st}
            </span>
            <GhostBtn style={{ padding: '7px 12px', fontSize: 12 }}>
              <i className="fa-solid fa-download" style={{ marginRight: 5, fontSize: 10 }}/>PDF
            </GhostBtn>
          </div>
        ))}
      </SCard>
    </SettingsShell>
  );
}
