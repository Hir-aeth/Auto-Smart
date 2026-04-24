export default function Stars({ rating, size = 12 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div style={{ display: 'inline-flex', gap: 1, color: '#F4B400', fontSize: size }}>
      {[0, 1, 2, 3, 4].map(i => (
        <i key={i} className={`fa-${i < full ? 'solid' : (i === full && half ? 'solid' : 'regular')} fa-star${i === full && half ? '-half-stroke' : ''}`} />
      ))}
    </div>
  );
}
