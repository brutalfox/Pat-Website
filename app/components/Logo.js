// Geometric M2M logo mark — approximates the official brand mark.
// variant="light" → dark M shapes for white/light nav backgrounds
// variant="dark"  → white M shapes for zinc-950 dark backgrounds
export default function Logo({ variant = 'light' }) {
  const mFill = variant === 'dark' ? '#ffffff' : '#09090b';
  const accent = '#9cd0ec';
  const labelColor = variant === 'dark' ? '#ffffff' : '#09090b';

  return (
    <div className="flex flex-col items-center leading-none select-none" aria-label="M2M Made 2 Measure Joinery Ltd">
      <svg viewBox="0 0 122 42" className="h-9 w-auto" aria-hidden="true">
        {/* Left M — 3 parallelogram stripes, bottom-aligned, middle stripe shorter to form valley */}
        <polygon points="3,0 13,0 10,42 0,42"       fill={mFill} />
        <polygon points="16,21 26,21 23,42 13,42"   fill={mFill} />
        <polygon points="29,0 39,0 36,42 26,42"     fill={mFill} />

        {/* "2" ice-blue accent */}
        <text
          x="49" y="38"
          fontSize="30" fontWeight="900"
          fill={accent}
          fontFamily="system-ui,-apple-system,sans-serif"
          letterSpacing="-1"
        >2</text>

        {/* Right M — mirrored position, same geometry */}
        <polygon points="83,0 93,0 90,42 80,42"     fill={mFill} />
        <polygon points="96,21 106,21 103,42 93,42" fill={mFill} />
        <polygon points="109,0 119,0 116,42 106,42" fill={mFill} />
      </svg>

      <span
        className="text-[9px] font-semibold tracking-[0.14em] uppercase leading-none mt-0.5"
        style={{ color: labelColor }}
      >
        Made 2 Measure
      </span>
      <span
        className="text-[8px] font-bold tracking-[0.22em] uppercase leading-none mt-0.5"
        style={{ color: accent }}
      >
        JOINERY LTD
      </span>
    </div>
  );
}
