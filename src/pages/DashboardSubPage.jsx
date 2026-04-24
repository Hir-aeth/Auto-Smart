import { T } from '../tokens';
import { USER, UPCOMING_LESSONS, INSTRUCTORS, FORFAITS_CLASSIC } from '../data';
import { useApp } from '../context/AppContext';
import { useNavigateTo } from '../hooks/useNavigateTo';
import TopBar from '../components/TopBar';
import IconBtn from '../components/IconBtn';
import Stars from '../components/Stars';

export default function DashboardSubPage() {
  const setRoute = useNavigateTo();
  const { activeForfait } = useApp();
  const forfait = activeForfait || FORFAITS_CLASSIC[1];
  const usedHours = 6;
  const totalHours = forfait.hours;
  const pct = usedHours / totalHours;

  return (
    <div className="as-page">
      <TopBar
        title={`Bonjour, ${USER.firstName} 👋`}
        subtitle="Voici votre progression cette semaine."
        right={
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <div style={{
              padding: '8px 14px', borderRadius: 12, background: T.gradSoft,
              color: T.pink, fontSize: 13, fontWeight: 700, border: `1px solid ${T.line2}`,
            }}>
              <i className="fa-solid fa-crown" style={{ marginRight: 6, fontSize: 11 }}/>
              Forfait {forfait.name}
            </div>
            <IconBtn icon="fa-bell" />
          </div>
        }
      />

      <div style={{ padding: '24px 32px 40px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="as-stats-row">
          <div style={{ background: 'white', border: `1px solid ${T.line}`, borderRadius: 16, padding: 20, boxShadow: T.shadow }}>
            <div style={{ fontSize: 12, color: T.muted, fontWeight: 500 }}>Heures restantes</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 4 }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: T.ink, letterSpacing: '-0.02em' }}>{totalHours - usedHours}h</span>
              <span style={{ fontSize: 13, color: T.muted }}>/ {totalHours}h</span>
            </div>
            <div style={{ height: 6, background: T.bg, borderRadius: 3, marginTop: 10, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${pct * 100}%`, background: T.grad, borderRadius: 3 }}/>
            </div>
          </div>

          <div style={{ background: 'white', border: `1px solid ${T.line}`, borderRadius: 16, padding: 20, boxShadow: T.shadow }}>
            <div style={{ fontSize: 12, color: T.muted, fontWeight: 500 }}>Moniteur assigné</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
              <div style={{
                width: 38, height: 38, borderRadius: '50%', background: INSTRUCTORS[0].color,
                color: 'white', fontSize: 13, fontWeight: 800,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>KB</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: T.ink }}>Karim Bennani</div>
                <div style={{ fontSize: 11, color: T.muted }}><Stars rating={4.9} size={10}/> <span style={{ marginLeft: 2 }}>4.9 · Manuel</span></div>
              </div>
            </div>
          </div>

          <div style={{ background: T.grad, color: 'white', borderRadius: 16, padding: 20, boxShadow: T.shadow }}>
            <div style={{ fontSize: 12, opacity: 0.85, fontWeight: 500 }}>Prochain cours</div>
            <div style={{ fontSize: 18, fontWeight: 800, marginTop: 6, letterSpacing: '-0.01em' }}>Lun. 20 avr.</div>
            <div style={{ fontSize: 13, opacity: 0.9, marginTop: 2 }}>
              <i className="fa-solid fa-clock" style={{ marginRight: 6, fontSize: 11 }}/> 14:00 — 16:00
            </div>
            <div style={{ fontSize: 11, opacity: 0.85, marginTop: 6 }}>
              <i className="fa-solid fa-location-dot" style={{ marginRight: 5 }}/> Agence Maârif
            </div>
          </div>

          <div style={{ background: 'white', border: `1px solid ${T.line}`, borderRadius: 16, padding: 20, boxShadow: T.shadow }}>
            <div style={{ fontSize: 12, color: T.muted, fontWeight: 500 }}>Crédit utilisé</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: T.ink, letterSpacing: '-0.02em', marginTop: 4 }}>
              {Math.round(forfait.price * pct).toLocaleString('fr-FR')} <span style={{ fontSize: 13, color: T.muted, fontWeight: 600 }}>MAD</span>
            </div>
            <div style={{ fontSize: 11, color: T.muted, marginTop: 4 }}>sur {forfait.price.toLocaleString('fr-FR')} MAD</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 20 }} className="as-two-col">
          <div style={{ background: 'white', border: `1px solid ${T.line}`, borderRadius: 20, boxShadow: T.shadow, overflow: 'hidden' }}>
            <div style={{ padding: '18px 22px', borderBottom: `1px solid ${T.line}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: T.ink }}>Leçons à venir</div>
              <button onClick={() => setRoute('reservations')} style={{
                background: 'none', border: 'none', color: T.pink, fontSize: 13, fontWeight: 600, cursor: 'pointer',
              }}>Tout voir <i className="fa-solid fa-arrow-right" style={{ marginLeft: 4, fontSize: 10 }}/></button>
            </div>
            {UPCOMING_LESSONS.map(l => (
              <div key={l.id} style={{ padding: '18px 22px', borderBottom: `1px solid ${T.line}`, display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14, background: T.gradSoft,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, border: `1px solid ${T.line2}`,
                }}>
                  <div style={{ fontSize: 10, color: T.pink, textTransform: 'uppercase', fontWeight: 700, letterSpacing: 0.5 }}>{l.date.split(' ')[0].slice(0, 3)}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: T.ink, lineHeight: 1 }}>{l.date.split(' ')[1]}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: T.ink }}>{l.type}</div>
                  <div style={{ fontSize: 12, color: T.muted, marginTop: 3, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <span><i className="fa-solid fa-clock" style={{ marginRight: 4 }}/>{l.time}</span>
                    <span><i className="fa-solid fa-user" style={{ marginRight: 4 }}/>{l.instructor}</span>
                    <span><i className="fa-solid fa-location-dot" style={{ marginRight: 4 }}/>{l.location}</span>
                  </div>
                </div>
                <button style={{
                  padding: '8px 14px', borderRadius: 10, border: `1px solid ${T.line2}`,
                  background: 'white', color: T.ink2, fontSize: 12, fontWeight: 600, cursor: 'pointer',
                }}>Détails</button>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{
              background: T.grad, borderRadius: 20, padding: 24, color: 'white',
              position: 'relative', overflow: 'hidden', boxShadow: T.shadowHi,
            }}>
              <div style={{ fontSize: 15, fontWeight: 700, position: 'relative', zIndex: 2 }}>Nouvelle réservation</div>
              <div style={{ fontSize: 13, opacity: 0.9, marginTop: 4, lineHeight: 1.4, position: 'relative', zIndex: 2 }}>
                Réservez votre prochaine leçon en quelques clics.
              </div>
              <button onClick={() => setRoute('conduite')} style={{
                marginTop: 16, padding: '12px 18px', borderRadius: 10, border: 'none',
                background: 'white', color: T.pink, fontSize: 13, fontWeight: 700, cursor: 'pointer',
                position: 'relative', zIndex: 2,
              }}>
                Réserver maintenant <i className="fa-solid fa-plus" style={{ marginLeft: 8, fontSize: 11 }}/>
              </button>
              <div style={{ position: 'absolute', right: -20, bottom: -30, width: 140, height: 140, borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }}/>
              <i className="fa-solid fa-calendar-plus" style={{ position: 'absolute', right: 24, top: 24, fontSize: 28, opacity: 0.3 }}/>
            </div>

            <div style={{ background: 'white', border: `1px solid ${T.line}`, borderRadius: 20, padding: 22, boxShadow: T.shadow }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: T.ink }}>Progression</div>
              <div style={{ fontSize: 12, color: T.muted, marginTop: 4 }}>Parcours de formation</div>
              <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { l: 'Code de la route', p: 85, c: T.pink },
                  { l: 'Conduite ville', p: 60, c: T.violet },
                  { l: 'Manoeuvres', p: 45, c: '#C42A9E' },
                  { l: 'Autoroute', p: 15, c: '#A42BB8' },
                ].map(s => (
                  <div key={s.l}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 5 }}>
                      <span style={{ color: T.ink2, fontWeight: 600 }}>{s.l}</span>
                      <span style={{ color: T.muted, fontWeight: 600 }}>{s.p}%</span>
                    </div>
                    <div style={{ height: 6, background: T.bg, borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${s.p}%`, background: s.c, borderRadius: 3, transition: 'width 0.5s' }}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
