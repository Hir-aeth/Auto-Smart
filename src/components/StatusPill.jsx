import { T } from '../tokens';

export default function StatusPill({ s }) {
  const map = {
    'Confirmée': { bg: T.greenSoft, fg: T.green, ic: 'fa-circle-check' },
    'Terminée': { bg: T.bg, fg: T.muted, ic: 'fa-flag-checkered' },
    'Annulée': { bg: T.redSoft, fg: T.red, ic: 'fa-ban' },
  }[s] || {};
  return (
    <span style={{
      padding: '5px 10px', borderRadius: 8, background: map.bg, color: map.fg,
      fontSize: 11, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6,
    }}>
      <i className={`fa-solid ${map.ic}`} style={{ fontSize: 10 }} /> {s}
    </span>
  );
}
