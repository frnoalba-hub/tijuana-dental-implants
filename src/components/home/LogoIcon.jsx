import React from 'react';

export default function LogoIcon({ className }) {
  return (
    <svg
      viewBox="0 0 120 130"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── LEFT CUSP (outer shape) ── */}
      <polyline
        points="18,52 30,18 56,28 72,52 56,72 30,80 18,52"
        strokeWidth="3.5"
      />

      {/* ── RIGHT CUSP (inner / overlapping diamond) ── */}
      <polyline
        points="44,24 72,14 88,38 72,52 56,28 44,24"
        strokeWidth="3.5"
      />

      {/* ── LEFT TOOTH BODY – tapers down from the two cusps ── */}
      <path
        d="M 30,80 L 26,100 L 34,112 L 42,100 L 56,72"
        strokeWidth="3.5"
      />

      {/* ── IMPLANT SCREW BARS (right side, below right cusp) ── */}
      {/* bar 1 */}
      <line x1="72" y1="62" x2="90" y2="62" strokeWidth="5" />
      {/* bar 2 */}
      <line x1="74" y1="73" x2="88" y2="73" strokeWidth="5" />
      {/* bar 3 */}
      <line x1="76" y1="83" x2="86" y2="83" strokeWidth="5" />
      {/* bar 4 */}
      <line x1="78" y1="93" x2="84" y2="93" strokeWidth="5" />
      {/* tip */}
      <line x1="80" y1="103" x2="82" y2="103" strokeWidth="5" />
    </svg>
  );
}