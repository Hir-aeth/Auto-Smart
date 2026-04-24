import { useState } from 'react';
import { T } from '../tokens';
import SettingsShell from '../components/settings/SettingsShell';
import SCard from '../components/settings/SCard';
import Field from '../components/settings/Field';
import PrimaryBtn from '../components/settings/PrimaryBtn';
import GhostBtn from '../components/settings/GhostBtn';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SettingsShell title="Contactez-nous" subtitle="Nous sommes là pour vous aider.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: 20 }} className="as-form-grid">
        {[
          { t: 'Téléphone', v: '+212 5 22 12 34 56', s: 'Lun-Sam · 9h-20h', ic: 'fa-phone', c: T.pink },
          { t: 'Email', v: 'contact@autosmart.ma', s: 'Réponse sous 24h', ic: 'fa-envelope', c: T.violet },
          { t: 'WhatsApp', v: '+212 6 61 23 45 67', s: 'Chat rapide 7j/7', ic: 'fa-brands fa-whatsapp', c: '#25D366' },
        ].map(c => (
          <div key={c.t} style={{ background: 'white', borderRadius: 16, border: `1px solid ${T.line}`, boxShadow: T.shadow, padding: 20 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: `${c.c}18`, color: c.c, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
              <i className={c.ic}/>
            </div>
            <div style={{ fontSize: 12, color: T.muted, marginTop: 12, fontWeight: 600 }}>{c.t}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: T.ink, marginTop: 2 }}>{c.v}</div>
            <div style={{ fontSize: 11, color: T.muted, marginTop: 4 }}>{c.s}</div>
          </div>
        ))}
      </div>

      <SCard title="Envoyez-nous un message" desc="Nous vous répondrons par email sous 24h ouvrées.">
        {sent ? (
          <div style={{ padding: 32, textAlign: 'center', background: T.greenSoft, borderRadius: 14, color: T.green }}>
            <i className="fa-solid fa-circle-check" style={{ fontSize: 28, marginBottom: 10 }}/>
            <div style={{ fontSize: 16, fontWeight: 800 }}>Message envoyé !</div>
            <div style={{ fontSize: 13, color: T.ink2, marginTop: 6 }}>Réponse sous 24h à yasmine.elamrani@gmail.com</div>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="as-form-grid">
              <Field label="Nom complet" defaultValue="Yasmine El Amrani"/>
              <Field label="Email" type="email" defaultValue="yasmine.elamrani@gmail.com"/>
            </div>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: T.ink2 }}>Sujet</span>
              <select defaultValue="general" style={{ border: `1px solid ${T.line}`, background: T.bg, borderRadius: 10, padding: '11px 14px', fontSize: 14, color: T.ink, outline: 'none', fontFamily: 'inherit' }}>
                <option value="general">Question générale</option>
                <option value="billing">Facturation</option>
                <option value="schedule">Planning &amp; réservations</option>
                <option value="instructor">Mon moniteur</option>
                <option value="other">Autre</option>
              </select>
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: T.ink2 }}>Message</span>
              <textarea rows="5" placeholder="Décrivez votre demande..." style={{ border: `1px solid ${T.line}`, background: T.bg, borderRadius: 10, padding: '11px 14px', fontSize: 14, color: T.ink, outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}/>
            </label>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
              <GhostBtn type="button">Annuler</GhostBtn>
              <PrimaryBtn type="submit">Envoyer le message <i className="fa-solid fa-paper-plane" style={{ marginLeft: 6, fontSize: 11 }}/></PrimaryBtn>
            </div>
          </form>
        )}
      </SCard>

      <SCard title="Nos agences">
        {[
          { n: 'Agence Maârif', a: '24 Bd Zerktouni, Casablanca', h: 'Lun-Sam 8h-20h' },
          { n: 'Agence Aïn Diab', a: '8 Bd de la Corniche, Casablanca', h: 'Lun-Sam 9h-19h' },
          { n: 'Agence Rabat Agdal', a: '15 Av. de France, Rabat', h: 'Lun-Sam 9h-19h' },
        ].map((a, i) => (
          <div key={a.n} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderTop: i > 0 ? `1px solid ${T.line}` : 'none' }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: T.gradSoft, color: T.pink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="fa-solid fa-location-dot"/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: T.ink }}>{a.n}</div>
              <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>{a.a} · {a.h}</div>
            </div>
            <GhostBtn style={{ padding: '7px 12px', fontSize: 12 }}>
              <i className="fa-solid fa-diamond-turn-right" style={{ marginRight: 5, fontSize: 10 }}/>Itinéraire
            </GhostBtn>
          </div>
        ))}
      </SCard>
    </SettingsShell>
  );
}
