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

export function UsStateMap({ selected, onSelect }: UsStateMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<HoverState | null>(null);

  function showAt(name: string, clientX: number, clientY: number) {
    const box = containerRef.current?.getBoundingClientRect();
    if (!box) return;
    setHover({ name, x: clientX - box.left, y: clientY - box.top });
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', background: '#fff', padding: '18px 14px', borderRadius: 12, boxShadow: 'var(--shadow-md)' }}>
      <svg
        viewBox={US_MAP_VIEWBOX}
        role="group"
        aria-label="Map of the United States — select your state"
        style={{ width: '100%', height: 'auto', maxHeight: 480, display: 'block', margin: '0 auto' }}
      >
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
                fill: isSelected ? 'var(--forest)' : 'var(--sage)',
                stroke: '#fff',
                strokeWidth: 1.2,
                strokeLinejoin: 'round',
                cursor: 'pointer',
                outline: 'none',
                transition: 'fill .12s ease',
              }}
              onMouseMove={(e) => showAt(name, e.clientX, e.clientY)}
              onMouseEnter={(e) => {
                if (!isSelected) e.currentTarget.style.fill = 'var(--rust)';
                showAt(name, e.clientX, e.clientY);
              }}
              onMouseLeave={(e) => {
                if (!isSelected) e.currentTarget.style.fill = 'var(--sage)';
                setHover(null);
              }}
              onFocus={(e) => {
                if (!isSelected) e.currentTarget.style.fill = 'var(--rust)';
                const box = e.currentTarget.getBoundingClientRect();
                showAt(name, box.left + box.width / 2, box.top);
              }}
              onBlur={(e) => {
                if (!isSelected) e.currentTarget.style.fill = 'var(--sage)';
                setHover(null);
              }}
            />
          );
        })}
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
            padding: '6px 12px',
            borderRadius: 6,
            whiteSpace: 'nowrap',
            zIndex: 5,
            boxShadow: '0 4px 12px rgba(0,0,0,.25)',
          }}
        >
          {hover.name}
        </div>
      )}
    </div>
  );
}
