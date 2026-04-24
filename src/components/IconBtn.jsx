import { T } from '../tokens';

export default function IconBtn({ icon, onClick, title }) {
  return (
    <button onClick={onClick} title={title} style={{
      width: 40, height: 40, borderRadius: 12, border: `1px solid ${T.line}`,
      background: 'white', cursor: 'pointer', color: T.ink2, fontSize: 15,
    }}>
      <i className={`fa-solid ${icon}`} />
    </button>
  );
}
