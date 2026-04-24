import { useState, useEffect } from 'react';
import { T } from '../tokens';
import { QUIZ } from '../data';
import { useNavigateTo } from '../hooks/useNavigateTo';

export default function CodePage() {
  const setRoute = useNavigateTo();
  const [qi, setQi] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(28);
  const q = QUIZ[qi];

  useEffect(() => {
    if (answered) return;
    const t = setInterval(() => setTime(s => s > 0 ? s - 1 : 0), 1000);
    return () => clearInterval(t);
  }, [answered, qi]);

  const pick = (i) => {
    if (answered) return;
    setPicked(i); setAnswered(true);
    if (i === q.correct) setScore(s => s + 1);
  };
  const next = () => {
    if (qi < QUIZ.length - 1) { setQi(qi + 1); setAnswered(false); setPicked(null); setTime(30); }
    else { setQi(0); setAnswered(false); setPicked(null); setScore(0); setTime(30); }
  };

  return (
    <div className="as-page">
      <div style={{ padding: '24px 32px 0', display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={() => setRoute('dashboard-sub')} style={{ width: 40, height: 40, borderRadius: 12, border: `1px solid ${T.line}`, background: 'white', cursor: 'pointer', color: T.ink2 }}>
          <i className="fa-solid fa-arrow-left"/>
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: T.ink, letterSpacing: '-0.02em' }}>Code de la route</div>
          <div style={{ fontSize: 14, color: T.muted, marginTop: 4 }}>Série d'entraînement · 40 questions · Objectif 35/40</div>
        </div>
        <div style={{
          padding: '8px 14px', borderRadius: 12, background: time < 10 ? T.redSoft : T.gradSoft,
          color: time < 10 ? T.red : T.pink, fontSize: 14, fontWeight: 800,
          border: `1px solid ${time < 10 ? T.redSoft : T.line2}`,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <i className="fa-solid fa-stopwatch" style={{ fontSize: 12 }}/>
          {String(Math.floor(time / 60)).padStart(2, '0')}:{String(time % 60).padStart(2, '0')}
        </div>
      </div>

      <div style={{ padding: '24px 32px 40px' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: T.muted, fontWeight: 600, marginBottom: 8 }}>
            <span>Question {qi + 1} sur {QUIZ.length}</span>
            <span>Score : {score}/{QUIZ.length}</span>
          </div>
          <div style={{ height: 6, background: T.bg, borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${((qi + (answered ? 1 : 0)) / QUIZ.length) * 100}%`, background: T.grad, transition: 'width 0.4s' }}/>
          </div>

          <div style={{ marginTop: 20, background: 'white', borderRadius: 20, border: `1px solid ${T.line}`, boxShadow: T.shadow, overflow: 'hidden' }}>
            <div style={{ height: 220, background: 'linear-gradient(135deg, #EEF0F5 0%, #DFE3EC 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: `1px solid ${T.line}`, position: 'relative', overflow: 'hidden' }}>
              {q.img === 'stop' && (
                <div style={{ width: 100, height: 100, background: '#D93A3A', clipPath: 'polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 20 }}>STOP</div>
              )}
              {q.img === 'vitesse-ville' && (
                <div style={{ width: 110, height: 110, borderRadius: '50%', background: 'white', border: '10px solid #D93A3A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 800, color: T.ink }}>50</div>
              )}
              {q.img === 'priorite-droite' && (
                <svg width="300" height="180" viewBox="0 0 300 180">
                  <rect x="0" y="80" width="300" height="40" fill="#B0B8C4"/>
                  <rect x="130" y="0" width="40" height="180" fill="#B0B8C4"/>
                  <rect x="100" y="95" width="30" height="18" rx="3" fill={T.pink}/>
                  <rect x="155" y="40" width="22" height="32" rx="3" fill={T.violet}/>
                  <text x="10" y="100" fontSize="10" fill="#fff" fontWeight="700">Vous</text>
                </svg>
              )}
              <div style={{ position: 'absolute', top: 12, right: 12, padding: '4px 10px', background: 'rgba(26,11,36,0.7)', color: 'white', borderRadius: 6, fontSize: 10, fontWeight: 600 }}>
                Placeholder · image réelle ici
              </div>
            </div>

            <div style={{ padding: 24 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: T.ink, lineHeight: 1.4 }}>{q.q}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
                {q.options.map((o, i) => {
                  const isCorrect = answered && i === q.correct;
                  const isWrong = answered && picked === i && i !== q.correct;
                  const border = isCorrect ? T.green : isWrong ? T.red : picked === i ? T.pink : T.line;
                  const bg = isCorrect ? T.greenSoft : isWrong ? T.redSoft : picked === i ? T.gradSoft : 'white';
                  return (
                    <button key={i} onClick={() => pick(i)} disabled={answered} style={{
                      display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px',
                      borderRadius: 12, border: `1.5px solid ${border}`, background: bg,
                      textAlign: 'left', cursor: answered ? 'default' : 'pointer', transition: 'all 0.15s',
                    }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: 8,
                        background: isCorrect ? T.green : isWrong ? T.red : picked === i ? T.pink : 'white',
                        color: isCorrect || isWrong || picked === i ? 'white' : T.muted,
                        border: `1.5px solid ${isCorrect ? T.green : isWrong ? T.red : picked === i ? T.pink : T.line}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 12, fontWeight: 800, flexShrink: 0,
                      }}>
                        {isCorrect ? <i className="fa-solid fa-check"/> : isWrong ? <i className="fa-solid fa-xmark"/> : String.fromCharCode(65 + i)}
                      </div>
                      <span style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>{o}</span>
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div style={{ marginTop: 18, padding: 16, borderRadius: 12, background: picked === q.correct ? T.greenSoft : T.redSoft, color: picked === q.correct ? T.green : T.red, fontSize: 13, lineHeight: 1.5 }}>
                  <div style={{ fontWeight: 800, marginBottom: 4 }}>{picked === q.correct ? '✓ Bonne réponse !' : '✗ Mauvaise réponse'}</div>
                  <div style={{ color: T.ink2 }}>{q.explain}</div>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 18 }}>
                <button style={{ padding: '10px 16px', borderRadius: 10, border: `1px solid ${T.line}`, background: 'white', color: T.ink2, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                  <i className="fa-solid fa-flag" style={{ marginRight: 6, fontSize: 11 }}/>Signaler
                </button>
                {answered && (
                  <button onClick={next} style={{ padding: '12px 22px', borderRadius: 10, border: 'none', background: T.grad, color: 'white', fontWeight: 700, fontSize: 13, cursor: 'pointer', boxShadow: '0 6px 14px rgba(233,30,140,0.3)' }}>
                    {qi < QUIZ.length - 1 ? 'Question suivante' : 'Recommencer'}
                    <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6, fontSize: 11 }}/>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
