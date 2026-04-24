import { useState } from 'react';
import { T } from '../tokens';
import SettingsShell from '../components/settings/SettingsShell';
import SCard from '../components/settings/SCard';
import Field from '../components/settings/Field';
import PrimaryBtn from '../components/settings/PrimaryBtn';
import GhostBtn from '../components/settings/GhostBtn';

export default function ProfilPage() {
  const [saved, setSaved] = useState(false);
  const save = (e) => { e.preventDefault(); setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <SettingsShell title="Profil" subtitle="Vos informations personnelles et coordonnées.">
      <SCard>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div style={{ width: 84, height: 84, borderRadius: 22, background: T.grad, color: 'white', fontWeight: 800, fontSize: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: T.shadowHi }}>YE</div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: T.ink }}>Photo de profil</div>
            <div style={{ fontSize: 12, color: T.muted, marginTop: 4 }}>JPG ou PNG, max 2 Mo. Recommandé 400×400.</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
              <PrimaryBtn style={{ padding: '8px 14px', fontSize: 12 }}>
                <i className="fa-solid fa-upload" style={{ marginRight: 6, fontSize: 10 }}/>Téléverser
              </PrimaryBtn>
              <GhostBtn style={{ padding: '8px 14px', fontSize: 12, color: T.red, borderColor: `${T.red}30` }}>Supprimer</GhostBtn>
            </div>
          </div>
        </div>
      </SCard>

      <form onSubmit={save}>
        <SCard title="Informations personnelles">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="as-form-grid">
            <Field label="Prénom" defaultValue="Yasmine"/>
            <Field label="Nom" defaultValue="El Amrani"/>
            <Field label="Date de naissance" type="date" defaultValue="2004-06-12"/>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: T.ink2 }}>Genre</span>
              <select defaultValue="F" style={{ border: `1px solid ${T.line}`, background: T.bg, borderRadius: 10, padding: '11px 14px', fontSize: 14, color: T.ink, outline: 'none', fontFamily: 'inherit' }}>
                <option value="F">Féminin</option><option value="M">Masculin</option>
              </select>
            </label>
            <Field label="CIN" defaultValue="BK 456789"/>
            <Field label="Nationalité" defaultValue="Marocaine"/>
          </div>
        </SCard>

        <SCard title="Coordonnées">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="as-form-grid">
            <Field label="Email" type="email" defaultValue="yasmine.elamrani@gmail.com"/>
            <Field label="Téléphone" type="tel" defaultValue="+212 6 12 34 56 78"/>
            <Field label="Adresse" defaultValue="42 rue Ibn Batouta" style={{ gridColumn: '1 / -1' }}/>
            <Field label="Ville" defaultValue="Casablanca"/>
            <Field label="Code postal" defaultValue="20250"/>
          </div>
        </SCard>

        <SCard title="Contact d'urgence">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="as-form-grid">
            <Field label="Nom du contact" defaultValue="Rachid El Amrani"/>
            <Field label="Lien" defaultValue="Père"/>
            <Field label="Téléphone" type="tel" defaultValue="+212 6 61 23 45 67"/>
          </div>
        </SCard>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
          <div style={{ fontSize: 13, color: saved ? T.green : T.muted }}>
            {saved ? <><i className="fa-solid fa-circle-check"/> Modifications enregistrées</> : 'Dernière mise à jour il y a 2 semaines'}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <GhostBtn type="button">Annuler</GhostBtn>
            <PrimaryBtn type="submit">Enregistrer</PrimaryBtn>
          </div>
        </div>
      </form>
    </SettingsShell>
  );
}
