import { useState } from 'react';
import React from 'react';
import { T } from '../tokens';
import { INSTRUCTORS } from '../data';
import { useApp } from '../context/AppContext';
import { useNavigateTo } from '../hooks/useNavigateTo';

function Row({ l, v, emph }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
      <span style={{ color: T.muted }}>{l}</span>
      <span style={{ color: emph ? T.pink : T.ink, fontWeight: emph ? 800 : 600 }}>{v}</span>
    </div>
  );
}

export default function ConduitePage() {
  const setRoute = useNavigateTo();
  const { setHasSubscription } = useApp();
  const [step, setStep] = useState(1);
  const [selInst, setSelInst] = useState(INSTRUCTORS[0]);
  const [selDay, setSelDay] = useState(1);
  const [selSlot, setSelSlot] = useState('14:00');
  const [type, setType] = useState('Conduite ville');
  const [done, setDone] = useState(false);

  const days = [
    { i: 0, d: 'Lun', n: '21', avail: 4 }, { i: 1, d: 'Mar', n: '22', avail: 6 },
    { i: 2, d: 'Mer', n: '23', avail: 2 }, { i: 3, d: 'Jeu', n: '24', avail: 5 },
    { i: 4, d: 'Ven', n: '25', avail: 3 }, { i: 5, d: 'Sam', n: '26', avail: 8 },
    { i: 6, d: 'Dim', n: '27', avail: 0 },
  ];
  const slots = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  const taken = ['09:00', '15:00'];

  return (
    <div className="as-page">
      <div style={{ padding: '24px 32px 0', display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={() => setRoute('dashboard-sub')} style={{ width: 40, height: 40, borderRadius: 12, border: `1px solid ${T.line}`, background: 'white', cursor: 'pointer', color: T.ink2 }}>
          <i className="fa-solid fa-arrow-left"/>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: T.ink, letterSpacing: '-0.02em' }}>Réserver une leçon</div>
          <div style={{ fontSize: 14, color: T.muted, marginTop: 4 }}>Choisissez votre moniteur, votre créneau et confirmez.</div>
        </div>
      </div>

      <div style={{ padding: '20px 32px 0', display: 'flex', gap: 8, alignItems: 'center', maxWidth: 640 }}>
        {['Moniteur', 'Créneau', 'Confirmation'].map((s, i) => {
          const n = i + 1, active = step === n, passed = step > n;
          return (
            <React.Fragment key={s}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: active ? T.grad : passed ? T.greenSoft : T.bg,
                  color: active ? 'white' : passed ? T.green : T.muted,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800,
                }}>{passed ? <i className="fa-solid fa-check"/> : n}</div>
                <span style={{ fontSize: 13, fontWeight: 700, color: active ? T.ink : T.muted }}>{s}</span>
              </div>
              {i < 2 && <div style={{ flex: 1, height: 2, background: passed ? T.green : T.line, borderRadius: 1 }}/>}
            </React.Fragment>
          );
        })}
      </div>

      <div style={{ padding: '24px 32px 40px' }}>
        {done ? (
          <div style={{ background: 'white', borderRadius: 20, border: `1px solid ${T.line}`, boxShadow: T.shadow, padding: 40, textAlign: 'center', maxWidth: 520, margin: '40px auto' }}>
            <div style={{ width: 64, height: 64, borderRadius: 20, background: T.greenSoft, color: T.green, fontSize: 26, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="fa-solid fa-circle-check"/>
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: T.ink, marginTop: 16 }}>Réservation confirmée</div>
            <div style={{ fontSize: 14, color: T.muted, marginTop: 6, lineHeight: 1.5 }}>
              Votre leçon de <b style={{ color: T.ink2 }}>{type}</b> avec {selInst.name} est confirmée pour le {days[selDay].d} {days[selDay].n} avril à {selSlot}.
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 24 }}>
              <button onClick={() => { setDone(false); setStep(1); }} style={{ padding: '12px 20px', borderRadius: 10, border: `1px solid ${T.line}`, background: 'white', color: T.ink2, fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Réserver une autre</button>
              <button onClick={() => setRoute('reservations')} style={{ padding: '12px 20px', borderRadius: 10, border: 'none', background: T.grad, color: 'white', fontWeight: 700, fontSize: 13, cursor: 'pointer', boxShadow: '0 6px 14px rgba(233,30,140,0.3)' }}>
                Voir mes réservations <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6, fontSize: 11 }}/>
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 20 }} className="as-two-col">
            <div style={{ background: 'white', borderRadius: 20, border: `1px solid ${T.line}`, boxShadow: T.shadow, padding: 24 }}>
              {step === 1 && (
                <>
                  <div style={{ fontSize: 16, fontWeight: 800, color: T.ink }}>Choisissez votre moniteur</div>
                  <div style={{ fontSize: 13, color: T.muted, marginTop: 3 }}>Karim est votre moniteur attitré, mais vous pouvez en choisir un autre.</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
                    {INSTRUCTORS.slice(0, 4).map(i => (
                      <label key={i.id} style={{
                        display: 'flex', alignItems: 'center', gap: 14, padding: 14,
                        borderRadius: 14, border: `1.5px solid ${selInst.id === i.id ? T.pink : T.line}`,
                        background: selInst.id === i.id ? T.gradSoft : 'white', cursor: 'pointer',
                      }}>
                        <input type="radio" name="inst" checked={selInst.id === i.id} onChange={() => setSelInst(i)} style={{ accentColor: T.pink }}/>
                        <div style={{ width: 44, height: 44, borderRadius: 12, background: i.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14 }}>{i.avatar}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 14, fontWeight: 700, color: T.ink }}>{i.name}</div>
                          <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>⭐ {i.rating} · {i.type} · {i.car}</div>
                        </div>
                        <div style={{ fontSize: 12, color: T.muted, fontWeight: 600 }}>{i.distance} km</div>
                      </label>
                    ))}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div style={{ fontSize: 16, fontWeight: 800, color: T.ink }}>Choisissez votre créneau</div>
                  <div style={{ fontSize: 13, color: T.muted, marginTop: 3 }}>Leçons de 1h · Avec {selInst.name}</div>
                  <div style={{ marginTop: 18 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: T.muted, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>Type de leçon</div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {['Conduite ville', 'Manoeuvres', 'Autoroute', 'Examen blanc'].map(t => (
                        <button key={t} onClick={() => setType(t)} style={{
                          padding: '8px 14px', borderRadius: 10, border: `1.5px solid ${type === t ? T.pink : T.line}`,
                          background: type === t ? T.gradSoft : 'white', color: type === t ? T.pink : T.ink2,
                          fontSize: 13, fontWeight: 600, cursor: 'pointer',
                        }}>{t}</button>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: 20 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: T.muted, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>Jour · Avril 2026</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }}>
                      {days.map(d => {
                        const disabled = d.avail === 0;
                        const active = selDay === d.i;
                        return (
                          <button key={d.i} disabled={disabled} onClick={() => setSelDay(d.i)} style={{
                            padding: '10px 4px', borderRadius: 12, border: `1.5px solid ${active ? T.pink : T.line}`,
                            background: active ? T.grad : disabled ? T.bg : 'white',
                            color: active ? 'white' : disabled ? T.muted : T.ink2,
                            cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
                          }}>
                            <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase' }}>{d.d}</span>
                            <span style={{ fontSize: 17, fontWeight: 800 }}>{d.n}</span>
                            <span style={{ fontSize: 9, opacity: 0.7 }}>{d.avail > 0 ? `${d.avail} libres` : 'Fermé'}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div style={{ marginTop: 20 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: T.muted, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>Heure</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
                      {slots.map(s => {
                        const isTaken = taken.includes(s);
                        const active = selSlot === s;
                        return (
                          <button key={s} disabled={isTaken} onClick={() => setSelSlot(s)} style={{
                            padding: '10px 6px', borderRadius: 10, border: `1.5px solid ${active ? T.pink : T.line}`,
                            background: active ? T.grad : isTaken ? T.bg : 'white',
                            color: active ? 'white' : isTaken ? T.muted : T.ink2,
                            fontSize: 13, fontWeight: 700, cursor: isTaken ? 'not-allowed' : 'pointer',
                            textDecoration: isTaken ? 'line-through' : 'none', opacity: isTaken ? 0.5 : 1,
                          }}>{s}</button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div style={{ fontSize: 16, fontWeight: 800, color: T.ink }}>Confirmer la réservation</div>
                  <div style={{ fontSize: 13, color: T.muted, marginTop: 3 }}>Vérifiez les détails avant de valider.</div>
                  <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[
                      { l: 'Moniteur', v: selInst.name, ic: 'fa-user' },
                      { l: 'Type', v: type, ic: 'fa-car' },
                      { l: 'Date', v: `${days[selDay].d} ${days[selDay].n} avril 2026`, ic: 'fa-calendar' },
                      { l: 'Heure', v: `${selSlot} — ${parseInt(selSlot) + 1}:00`, ic: 'fa-clock' },
                      { l: 'Lieu', v: 'Agence Maârif, Casablanca', ic: 'fa-location-dot' },
                      { l: 'Véhicule', v: selInst.car, ic: 'fa-car-side' },
                    ].map(r => (
                      <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', background: T.bg, borderRadius: 12 }}>
                        <i className={`fa-solid ${r.ic}`} style={{ color: T.pink, width: 16, fontSize: 13 }}/>
                        <span style={{ fontSize: 12, color: T.muted, fontWeight: 600, width: 90 }}>{r.l}</span>
                        <span style={{ fontSize: 13, color: T.ink, fontWeight: 600 }}>{r.v}</span>
                      </div>
                    ))}
                  </div>
                  <label style={{ marginTop: 16, display: 'flex', gap: 10, padding: 14, borderRadius: 12, border: `1px solid ${T.line}`, fontSize: 12, color: T.ink2, cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked style={{ accentColor: T.pink, marginTop: 2 }}/>
                    <span>J'accepte les conditions d'annulation. Toute annulation sous 48h sera facturée 50% du montant.</span>
                  </label>
                </>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 22 }}>
                <button disabled={step === 1} onClick={() => setStep(step - 1)} style={{
                  padding: '12px 18px', borderRadius: 10, border: `1px solid ${T.line}`,
                  background: 'white', color: step === 1 ? T.muted : T.ink2,
                  fontWeight: 600, fontSize: 13, cursor: step === 1 ? 'not-allowed' : 'pointer', opacity: step === 1 ? 0.5 : 1,
                }}><i className="fa-solid fa-arrow-left" style={{ marginRight: 6, fontSize: 11 }}/>Précédent</button>
                <button onClick={() => step < 3 ? setStep(step + 1) : setDone(true)} style={{
                  padding: '12px 22px', borderRadius: 10, border: 'none',
                  background: T.grad, color: 'white', fontWeight: 700, fontSize: 13, cursor: 'pointer',
                  boxShadow: '0 6px 14px rgba(233,30,140,0.3)',
                }}>
                  {step === 3 ? 'Confirmer la réservation' : 'Continuer'}
                  <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6, fontSize: 11 }}/>
                </button>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: 20, border: `1px solid ${T.line}`, boxShadow: T.shadow, padding: 22, height: 'fit-content' }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: T.ink }}>Récapitulatif</div>
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Row l="Moniteur" v={selInst.name}/>
                <Row l="Type" v={type}/>
                <Row l="Date" v={step >= 2 ? `${days[selDay].d} ${days[selDay].n} avr.` : '—'}/>
                <Row l="Heure" v={step >= 2 ? selSlot : '—'}/>
                <div style={{ height: 1, background: T.line, margin: '4px 0' }}/>
                <Row l="Durée" v="1h00"/>
                <Row l="Heures restantes après" v="13h" emph/>
              </div>
              <div style={{ marginTop: 18, padding: 14, borderRadius: 12, background: T.gradSoft, fontSize: 12, color: T.ink2, lineHeight: 1.5 }}>
                <i className="fa-solid fa-circle-info" style={{ color: T.pink, marginRight: 6 }}/>
                Cette leçon est incluse dans votre forfait Essentiel. Aucun paiement requis.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
