import { useState } from 'react';
import { T } from '../tokens';
import SettingsShell from '../components/settings/SettingsShell';
import SCard from '../components/settings/SCard';
import Field from '../components/settings/Field';
import PrimaryBtn from '../components/settings/PrimaryBtn';
import GhostBtn from '../components/settings/GhostBtn';
import Toggle from '../components/settings/Toggle';

export default function PasswordPage() {
  const [pwd, setPwd] = useState('');
  const strength = (() => {
    let s = 0;
    if (pwd.length >= 8) s++;
    if (/[A-Z]/.test(pwd)) s++;
    if (/[0-9]/.test(pwd)) s++;
    if (/[^A-Za-z0-9]/.test(pwd)) s++;
    return s;
  })();
  const strengthInfo = ['Très faible', 'Faible', 'Moyen', 'Fort', 'Excellent'];
  const strengthColor = [T.red, T.red, T.amber, T.green, T.green][strength];

  return (
    <SettingsShell title="Mot de passe" subtitle="Sécurité et authentification de votre compte.">
      <SCard title="Changer le mot de passe" desc="Utilisez au moins 8 caractères avec une majuscule, un chiffre et un symbole.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 480 }}>
          <Field label="Mot de passe actuel" type="password" defaultValue="••••••••••"/>
          <div>
            <Field label="Nouveau mot de passe" type="password" value={pwd} onChange={e => setPwd(e.target.value)}/>
            {pwd && (
              <div style={{ marginTop: 8 }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
                  {[0, 1, 2, 3].map(i => (
                    <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i < strength ? strengthColor : T.line }}/>
                  ))}
                </div>
                <div style={{ fontSize: 11, color: strengthColor, fontWeight: 600 }}>Force : {strengthInfo[strength]}</div>
              </div>
            )}
          </div>
          <Field label="Confirmer le nouveau mot de passe" type="password"/>
          <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
            <PrimaryBtn>Mettre à jour</PrimaryBtn>
            <GhostBtn>Annuler</GhostBtn>
          </div>
        </div>
      </SCard>

      <SCard title="Authentification à deux facteurs" desc="Ajoutez une couche de sécurité supplémentaire.">
        {[
          { t: 'Authentification par SMS', d: '+212 6 •• •• •• 78', on: true, ic: 'fa-mobile-screen' },
          { t: "Application d'authentification", d: 'Google Authenticator, Authy...', on: false, ic: 'fa-shield-halved' },
        ].map((m, i) => (
          <div key={m.t} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderTop: i > 0 ? `1px solid ${T.line}` : 'none' }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: T.gradSoft, color: T.pink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className={`fa-solid ${m.ic}`}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: T.ink }}>{m.t}</div>
              <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>{m.d}</div>
            </div>
            <Toggle on={m.on}/>
          </div>
        ))}
      </SCard>

      <SCard title="Sessions actives" desc="Appareils connectés à votre compte.">
        {[
          { d: 'iPhone 15 · Safari', l: 'Casablanca, MA · Actuel', t: 'Maintenant', ic: 'fa-mobile-screen-button', cur: true },
          { d: 'MacBook Air · Chrome', l: 'Casablanca, MA', t: 'Il y a 2h', ic: 'fa-laptop', cur: false },
          { d: 'iPad · Safari', l: 'Rabat, MA', t: 'Il y a 3 jours', ic: 'fa-tablet-screen-button', cur: false },
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderTop: i > 0 ? `1px solid ${T.line}` : 'none' }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: T.bg, color: T.ink2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className={`fa-solid ${s.ic}`}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: T.ink }}>
                {s.d} {s.cur && <span style={{ marginLeft: 8, fontSize: 10, padding: '2px 7px', background: T.greenSoft, color: T.green, borderRadius: 6, fontWeight: 700 }}>EN COURS</span>}
              </div>
              <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>{s.l} · {s.t}</div>
            </div>
            {!s.cur && <GhostBtn style={{ padding: '7px 12px', fontSize: 12 }}>Déconnecter</GhostBtn>}
          </div>
        ))}
      </SCard>
    </SettingsShell>
  );
}
