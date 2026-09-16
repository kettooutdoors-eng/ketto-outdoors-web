import { STATE_GRID, GRID_COLS } from '../data/stateGrid';

interface UsStateMapProps {
  selected: string;
  onSelect: (name: string) => void;
}

export function UsStateMap({ selected, onSelect }: UsStateMapProps) {
  return (
    <div style={{ overflowX: 'auto', padding: '4px 4px 12px' }}>
      <div
        className="us-state-map"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${GRID_COLS}, 34px)`,
          gridAutoRows: '34px',
          gap: 3,
          width: 'max-content',
          margin: '0 auto',
        }}
      >
        {STATE_GRID.map((s) => {
          const isSelected = s.name === selected;
          const isInset = s.row === 8;
          return (
            <button
              key={s.code}
              type="button"
              aria-pressed={isSelected}
              aria-label={s.name}
              title={s.name}
              onClick={() => onSelect(s.name)}
              style={{
                gridColumn: s.col,
                gridRow: s.row,
                marginTop: isInset ? 14 : 0,
                width: 34,
                height: 34,
                fontSize: 10.5,
                fontWeight: 800,
                fontFamily: 'var(--font-body)',
                letterSpacing: '.01em',
                border: `2px solid var(--ink)`,
                background: isSelected ? 'var(--rust)' : 'var(--parchment)',
                color: isSelected ? 'var(--cream)' : 'var(--ink)',
                cursor: 'pointer',
                transition: 'transform .1s ease, background .15s ease',
                transform: isSelected ? 'scale(1.12)' : 'scale(1)',
                zIndex: isSelected ? 1 : 0,
                boxShadow: isSelected ? '2px 2px 0 rgba(36,26,16,.4)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) e.currentTarget.style.background = 'var(--mustard)';
              }}
              onMouseLeave={(e) => {
                if (!isSelected) e.currentTarget.style.background = 'var(--parchment)';
              }}
            >
              {s.code}
            </button>
          );
        })}
      </div>
    </div>
  );
}
