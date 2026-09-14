// Renders the shared SVG filter used to roughen icon strokes (woodcut look).
// Mount once near the root; reference via style={{ filter: 'url(#rough)' }}.
export function RoughFilterDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <filter id="rough">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale={1.6} />
      </filter>
    </svg>
  );
}
