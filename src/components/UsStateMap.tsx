import { useRef, useState } from 'react';
import { US_STATE_PATHS, US_MAP_VIEWBOX } from '../data/usStatePaths';

interface UsStateMapProps {
  selected: string;
  onSelect: (name: string) => void;
}

interface HoverState {
  name: string;
  x: number;
  y: number;
}

const [VB_X, VB_Y, VB_W, VB_H] = US_MAP_VIEWBOX.split(' ').map(Number);

function GridLines() {
  const step = 90;
  const lines = [];
  for (let x = Math.ceil(VB_X / step) * step; x < VB_X + VB_W; x += step) {
    lines.push(<line key={`v${x}`} x1={x} y1={VB_Y} x2={x} y2={VB_Y + VB_H} />);
  }
  for (let y = Math.ceil(VB_Y / step) * step; y < VB_Y + VB_H; y += step) {
    lines.push(<line key={`h${y}`} x1={VB_X} y1={y} x2={VB_X + VB_W} y2={y} />);
  }
  return (
    <g stroke="var(--kicker)" strokeWidth={1} strokeDasharray="1 7" opacity={0.4}>
      {lines}
    </g>
  );
}

function CompassRose({ x, y }: { x: number; y: number }) {
  const r = 26;
  return (
    <g transform={`translate(${x},${y})`} style={{ filter: 'url(#rough)' }} opacity={0.85}>
      <circle r={r} fill="var(--photo-frame)" stroke="var(--ink)" strokeWidth={1.5} />
      <circle r={r - 6} fill="none" stroke="var(--ink)" strokeWidth={1} />
      <path d={`M0,${-r + 3} L5,0 L0,${r - 3} L-5,0 Z`} fill="var(--rust)" stroke="var(--ink)" strokeWidth={1} />
      <path d={`M${-r + 3},0 L0,5 L${r - 3},0 L0,-5 Z`} fill="var(--forest)" stroke="var(--ink)" strokeWidth={1} opacity={0.9} />
      <text y={-r - 6} textAnchor="middle" fontSize={11} fontWeight={800} fill="var(--ink)" fontFamily="var(--font-heading)">
        N
      </text>
    </g>
  );
}

export function UsStateMap({ selected, onSelect }: UsStateMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<HoverState | null>(null);

  function showAt(name: string, clientX: number, clientY: number) {
    const box = containerRef.current?.getBoundingClientRect();
    if (!box) return;
    setHover({ name, x: clientX - box.left, y: clientY - box.top });
  }

  return (
    <div ref={containerRef} className="torn" style={{ position: 'relative', background: 'var(--photo-frame)', padding: '18px 14px', filter: 'drop-shadow(3px 4px 3px rgba(36,26,16,.35))' }}>
      <svg
        viewBox={US_MAP_VIEWBOX}
        role="group"
        aria-label="Map of the United States — select your state"
        style={{ width: '100%', height: 'auto', maxHeight: 480, display: 'block', margin: '0 auto' }}
      >
        <rect x={VB_X} y={VB_Y} width={VB_W} height={VB_H} fill="var(--hero-band)" opacity={0.5} />
        <GridLines />
        {Object.entries(US_STATE_PATHS).map(([name, { d }]) => {
          const isSelected = name === selected;
          return (
            <path
              key={name}
              d={d}
              role="button"
              tabIndex={0}
              aria-label={name}
              aria-pressed={isSelected}
              onClick={() => onSelect(name)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelect(name);
                }
              }}
              style={{
                fill: isSelected ? 'var(--rust)' : 'var(--parchment)',
                stroke: 'var(--ink)',
                strokeWidth: isSelected ? 2.5 : 1.4,
                strokeLinejoin: 'round',
                cursor: 'pointer',
                outline: 'none',
                transition: 'fill .12s ease',
                filter: 'url(#rough)',
              }}
              onMouseMove={(e) => showAt(name, e.clientX, e.clientY)}
              onMouseEnter={(e) => {
                if (!isSelected) e.currentTarget.style.fill = 'var(--mustard)';
                showAt(name, e.clientX, e.clientY);
              }}
              onMouseLeave={(e) => {
                if (!isSelected) e.currentTarget.style.fill = 'var(--parchment)';
                setHover(null);
              }}
              onFocus={(e) => {
                if (!isSelected) e.currentTarget.style.fill = 'var(--mustard)';
                const box = e.currentTarget.getBoundingClientRect();
                showAt(name, box.left + box.width / 2, box.top);
              }}
              onBlur={(e) => {
                if (!isSelected) e.currentTarget.style.fill = 'var(--parchment)';
                setHover(null);
              }}
            />
          );
        })}
        <CompassRose x={VB_X + 44} y={VB_Y + 46} />
        <rect x={VB_X + 2} y={VB_Y + 2} width={VB_W - 4} height={VB_H - 4} fill="none" stroke="var(--ink)" strokeWidth={4} />
        <rect x={VB_X + 9} y={VB_Y + 9} width={VB_W - 18} height={VB_H - 18} fill="none" stroke="var(--ink)" strokeWidth={1} opacity={0.6} />
      </svg>

      {hover && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: hover.x,
            top: hover.y,
            transform: 'translate(-50%, -130%)',
            pointerEvents: 'none',
            background: 'var(--ink)',
            color: 'var(--cream)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: 13,
            letterSpacing: '-0.01em',
            padding: '5px 10px',
            border: '2px solid var(--ink)',
            whiteSpace: 'nowrap',
            zIndex: 5,
            boxShadow: '2px 2px 0 rgba(36,26,16,.4)',
          }}
        >
          {hover.name}
        </div>
      )}
    </div>
  );
}
