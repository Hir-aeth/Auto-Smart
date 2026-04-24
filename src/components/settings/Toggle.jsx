import { useState } from 'react';
import { T } from '../../tokens';

export default function Toggle({ on: initial = false }) {
  const [on, setOn] = useState(initial);
  return (
    <button onClick={() => setOn(!on)} style={{
      width: 40, height: 22, borderRadius: 12, border: 'none', cursor: 'pointer',
      background: on ? T.pink : T.line2, padding: 0, position: 'relative',
      transition: 'background 0.2s',
    }}>
      <div style={{
        position: 'absolute', top: 2, left: on ? 20 : 2,
        width: 18, height: 18, borderRadius: '50%', background: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.15)', transition: 'left 0.2s',
      }}/>
    </button>
  );
}
