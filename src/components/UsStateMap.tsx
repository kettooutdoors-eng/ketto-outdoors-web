import { US_STATE_PATHS, US_MAP_VIEWBOX } from '../data/usStatePaths';

interface UsStateMapProps {
  selected: string;
  onSelect: (name: string) => void;
}

export function UsStateMap({ selected, onSelect }: UsStateMapProps) {
  return (
    <svg viewBox={US_MAP_VIEWBOX} role="group" aria-label="Map of the United States — select your state" style={{ width: '100%', height: 'auto', maxHeight: 480, display: 'block', margin: '0 auto' }}>
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
              strokeWidth: isSelected ? 2 : 1,
              strokeLinejoin: 'round',
              cursor: 'pointer',
              outline: 'none',
              transition: 'fill .12s ease',
            }}
            onMouseEnter={(e) => {
              if (!isSelected) e.currentTarget.style.fill = 'var(--mustard)';
            }}
            onMouseLeave={(e) => {
              if (!isSelected) e.currentTarget.style.fill = 'var(--parchment)';
            }}
            onFocus={(e) => {
              if (!isSelected) e.currentTarget.style.fill = 'var(--mustard)';
            }}
            onBlur={(e) => {
              if (!isSelected) e.currentTarget.style.fill = 'var(--parchment)';
            }}
          >
            <title>{name}</title>
          </path>
        );
      })}
    </svg>
  );
}
