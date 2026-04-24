import { useState } from 'react';
import { T } from '../tokens';
import { useNavigateTo } from '../hooks/useNavigateTo';

function Stat({ big, l, accent }) {
  return (
    <div>
      <div style={{ fontSize: 26, fontWeight: 800, color: accent ? T.pink : T.ink, letterSpacing: '-0.02em' }}>{big}</div>
      <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>{l}</div>
    </div>
  );
}

export default function ParrainagePage() {
  const setRoute = useNavigateTo();
  const [copied, setCopied] = useState(false);
  const code = 'YASMINE200';
  const friends = [
    { name: 'Sara Benali', status: 'Inscrite', date: '08 avr. 2026', earned: 200 },
    { name: 'Omar Fassi', status: 'En cours', date: '15 avr. 2026', earned: 0 },
    { name: 'Leila Amrani', status: 'Invitée', date: '17 avr. 2026', earned: 0 },
  ];

  const copy = () => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="as-page">
      <div style={{ padding: '24px 32px 0', display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={() => setRoute('parametres')} style={{ width: 40, height: 40, borderRadius: 12, border: `1px solid ${T.line}`, background: 'white', cursor: 'pointer', color: T.ink2 }}>
          <i className="fa-solid fa-arrow-left"/>
        </button>
        <div>
          <div style={{ fontSize: 26, fontWeight: 800, color: T.ink, letterSpacing: '-0.02em' }}>Parrainage</div>
          <div style={{ fontSize: 14, color: T.muted, marginTop: 4 }}>Invitez vos amis et gagnez ensemble.</div>
        </div>
      </div>

      <div style={{ padding: '24px 32px 40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20 }} className="as-two-col">
        <div style={{ background: T.grad, borderRadius: 20, padding: 32, color: 'white', position: 'relative', overflow: 'hidden', boxShadow: T.shadowHi }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.85, textTransform: 'uppercase', letterSpacing: 1.5 }}>
              <i className="fa-solid fa-gift" style={{ marginRight: 6 }}/>Gagnez 200 MAD
            </div>
            <div style={{ fontSize: 30, fontWeight: 800, marginTop: 10, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Chaque ami qui s'inscrit,<br/>200 MAD pour vous deux.
            </div>
            <div style={{ fontSize: 14, opacity: 0.9, marginTop: 10, maxWidth: 440, lineHeight: 1.5 }}>
              Partagez votre code unique avec vos amis. Dès qu'ils souscrivent à un forfait, vous recevez chacun 200 MAD de crédit.
            </div>
            <div style={{ marginTop: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.85, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Votre code</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, maxWidth: 360, background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: 6 }}>
                <div style={{ flex: 1, padding: '12px 16px', fontFamily: "'JetBrains Mono', monospace", fontSize: 18, fontWeight: 700, letterSpacing: 2 }}>{code}</div>
                <button onClick={copy} style={{ padding: '12px 18px', borderRadius: 8, border: 'none', background: 'white', color: T.pink, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                  <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`} style={{ marginRight: 6, fontSize: 11 }}/>
                  {copied ? 'Copié !' : 'Copier'}
                </button>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {[{ l: 'WhatsApp', ic: 'fa-brands fa-whatsapp' }, { l: 'Email', ic: 'fa-solid fa-envelope' }, { l: 'SMS', ic: 'fa-solid fa-message' }].map(s => (
                <button key={s.l} style={{ padding: '10px 16px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                  <i className={s.ic} style={{ marginRight: 6, fontSize: 12 }}/>{s.l}
                </button>
              ))}
            </div>
          </div>
          <div style={{ position: 'absolute', right: -30, bottom: -40, fontSize: 260, opacity: 0.08, transform: 'rotate(-15deg)' }}>
            <i className="fa-solid fa-gift"/>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: 'white', borderRadius: 20, border: `1px solid ${T.line}`, boxShadow: T.shadow, padding: 22 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: T.ink }}>Votre impact</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 14 }}>
              <Stat big="3" l="Invitations"/>
              <Stat big="1" l="Inscriptions"/>
              <Stat big="200" l="MAD gagnés" accent/>
              <Stat big="400" l="MAD potentiels"/>
            </div>
          </div>
          <div style={{ background: 'white', borderRadius: 20, border: `1px solid ${T.line}`, boxShadow: T.shadow, padding: 22 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: T.ink, marginBottom: 14 }}>Comment ça marche ?</div>
            {[
              { n: 1, t: 'Partagez votre code avec un ami' },
              { n: 2, t: "Il s'inscrit et choisit un forfait" },
              { n: 3, t: 'Vous recevez chacun 200 MAD' },
            ].map(s => (
              <div key={s.n} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 10 }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: T.gradSoft, color: T.pink, fontSize: 12, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.n}</div>
                <div style={{ fontSize: 13, color: T.ink2 }}>{s.t}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ gridColumn: '1 / -1', background: 'white', borderRadius: 20, border: `1px solid ${T.line}`, boxShadow: T.shadow, overflow: 'hidden' }}>
          <div style={{ padding: '18px 22px', borderBottom: `1px solid ${T.line}`, fontSize: 15, fontWeight: 800, color: T.ink }}>Amis invités</div>
          {friends.map((f, i) => {
            const sc = f.status === 'Inscrite'
              ? { bg: T.greenSoft, fg: T.green, ic: 'fa-circle-check' }
              : f.status === 'En cours'
              ? { bg: T.amberSoft, fg: T.amber, ic: 'fa-clock' }
              : { bg: T.violetSoft, fg: T.violet, ic: 'fa-paper-plane' };
            return (
              <div key={i} style={{ padding: '16px 22px', borderTop: i > 0 ? `1px solid ${T.line}` : 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: T.gradSoft, color: T.pink, fontWeight: 800, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {f.name.split(' ').map(x => x[0]).join('')}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: T.ink }}>{f.name}</div>
                  <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>{f.date}</div>
                </div>
                <span style={{ padding: '5px 10px', borderRadius: 8, background: sc.bg, color: sc.fg, fontSize: 11, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  <i className={`fa-solid ${sc.ic}`} style={{ fontSize: 10 }}/>{f.status}
                </span>
                <div style={{ fontSize: 14, fontWeight: 800, color: f.earned > 0 ? T.green : T.muted, width: 90, textAlign: 'right' }}>
                  {f.earned > 0 ? `+${f.earned} MAD` : '—'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
