import { useState } from 'react';
import { T } from '../tokens';
import { useNavigateTo } from '../hooks/useNavigateTo';
import Logo from '../components/Logo';
import Input from '../components/Input';
import SocialBtn from '../components/SocialBtn';

export default function LoginPage() {
  const setRoute = useNavigateTo();
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('yasmine.elamrani@gmail.com');
  const [password, setPassword] = useState('••••••••••');
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) { setError('Email invalide'); return; }
    setRoute('dashboard');
  };

  return (
    <div className="as-login-page" style={{
      background: `radial-gradient(1200px 600px at 80% -10%, rgba(233,30,140,0.12), transparent 60%),
                   radial-gradient(900px 500px at -10% 100%, rgba(139,47,201,0.14), transparent 60%),
                   ${T.bg}`,
    }}>

      {/* Hero — display:flex lives in CSS so @media can set display:none without !important */}
      <div className="as-login-hero" style={{ background: T.grad, color: 'white' }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Logo size={40} dark />
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: 460 }}>
            Votre permis,<br />sans friction.
          </div>
          <div style={{ fontSize: 16, marginTop: 16, opacity: 0.9, maxWidth: 440, lineHeight: 1.5 }}>
            Réservez vos leçons, suivez vos heures et préparez votre examen depuis une seule application.
          </div>
          <div style={{ display: 'flex', gap: 24, marginTop: 32 }}>
            {[{ n: '12 000+', l: 'Élèves' }, { n: '340', l: 'Moniteurs' }, { n: '94%', l: 'Réussite' }].map(s => (
              <div key={s.l}>
                <div style={{ fontSize: 24, fontWeight: 800 }}>{s.n}</div>
                <div style={{ fontSize: 12, opacity: 0.8 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'absolute', right: -80, top: -80, width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', right: 60, bottom: -60, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
        <svg style={{ position: 'absolute', right: 40, top: '45%', opacity: 0.12 }} width="260" height="140" viewBox="0 0 260 140" fill="none">
          <path d="M20 90 L50 50 Q55 42 65 42 H195 Q205 42 210 50 L240 90 V115 H210 V105 H50 V115 H20 V90Z" fill="white" />
          <circle cx="60" cy="105" r="14" fill={T.violet} /><circle cx="200" cy="105" r="14" fill={T.violet} />
        </svg>
      </div>

      {/* Form panel */}
      <div className="as-login-form">
        <div className="as-login-card" style={{
          background: 'white', boxShadow: T.shadowHi, border: `1px solid ${T.line}`,
        }}>

          {/* Logo shown only on mobile since hero (which holds the logo) is hidden */}
          <div className="as-login-mobile-logo" style={{ justifyContent: 'center', marginBottom: 20 }}>
            <Logo size={34} />
          </div>

          {/* Tab switcher */}
          <div style={{ display: 'flex', background: T.bg, padding: 4, borderRadius: 12, marginBottom: 24 }}>
            {['login', 'signup'].map(m => (
              <button key={m} onClick={() => setMode(m)} style={{
                flex: 1, padding: '10px 12px', borderRadius: 9, border: 'none', cursor: 'pointer',
                fontSize: 14, fontWeight: 600,
                background: mode === m ? 'white' : 'transparent',
                color: mode === m ? T.ink : T.muted,
                boxShadow: mode === m ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
                transition: 'all 0.2s',
              }}>
                {m === 'login' ? 'Connexion' : 'Inscription'}
              </button>
            ))}
          </div>

          <div style={{ fontSize: 22, fontWeight: 800, color: T.ink, letterSpacing: '-0.02em' }}>
            {mode === 'login' ? 'Bon retour 👋' : 'Créer un compte'}
          </div>
          <div style={{ fontSize: 14, color: T.muted, marginTop: 4 }}>
            {mode === 'login'
              ? 'Connectez-vous pour continuer votre formation.'
              : 'Commencez votre parcours en quelques minutes.'}
          </div>

          <form onSubmit={submit} style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {mode === 'signup' && (
              <div className="as-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <Input label="Prénom" placeholder="Yasmine" defaultValue="Yasmine" />
                <Input label="Nom" placeholder="El Amrani" defaultValue="El Amrani" />
              </div>
            )}
            <Input label="Email" placeholder="vous@exemple.ma" value={email}
              onChange={e => { setEmail(e.target.value); setError(''); }} icon="fa-envelope" />
            <Input label="Mot de passe" placeholder="••••••••" type="password"
              value={password} onChange={e => setPassword(e.target.value)} icon="fa-lock" />
            {mode === 'signup' && (
              <Input label="Téléphone" placeholder="+212 6 12 34 56 78" icon="fa-phone" />
            )}

            {error && (
              <div style={{ color: T.red, fontSize: 13, background: T.redSoft, padding: '8px 12px', borderRadius: 8 }}>
                {error}
              </div>
            )}

            {mode === 'login' && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, flexWrap: 'wrap', gap: 8 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: T.ink2, cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked /> Se souvenir de moi
                </label>
                <a href="#" style={{ color: T.pink, fontWeight: 600, textDecoration: 'none' }}>Mot de passe oublié ?</a>
              </div>
            )}

            <button type="submit" style={{
              marginTop: 8, padding: '14px 20px', borderRadius: 12, border: 'none', width: '100%',
              background: T.grad, color: 'white', fontSize: 15, fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(233,30,140,0.3)', letterSpacing: '-0.01em',
            }}>
              {mode === 'login' ? 'Se connecter' : 'Créer mon compte'}
              <i className="fa-solid fa-arrow-right" style={{ marginLeft: 10, fontSize: 12 }} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '6px 0', color: T.muted, fontSize: 12 }}>
              <div style={{ flex: 1, height: 1, background: T.line }} />
              ou continuer avec
              <div style={{ flex: 1, height: 1, background: T.line }} />
            </div>

            <div className="as-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <SocialBtn icon="fa-brands fa-google" label="Google" />
              <SocialBtn icon="fa-brands fa-apple" label="Apple" />
            </div>

            <div style={{ textAlign: 'center', fontSize: 13, color: T.muted, marginTop: 8 }}>
              {mode === 'login' ? 'Pas encore de compte ? ' : 'Déjà inscrit ? '}
              <a href="#" onClick={e => { e.preventDefault(); setMode(mode === 'login' ? 'signup' : 'login'); }}
                style={{ color: T.pink, fontWeight: 700, textDecoration: 'none' }}>
                {mode === 'login' ? 'Créer un compte' : 'Se connecter'}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
