interface ImagePlaceholderProps {
  label: string;
  height?: number | string;
  rotate?: number;
  /** Real product photo — when provided, replaces the sketch placeholder entirely. */
  src?: string;
}

/** Plain rounded photo frame. Shows a real photo when `src` is given, otherwise a sketch placeholder standing in for photography not yet sourced. */
export function ImagePlaceholder({ label, height = 190, src }: ImagePlaceholderProps) {
  return (
    <div
      style={{
        height,
        borderRadius: 10,
        overflow: 'hidden',
        border: '1px solid rgba(27,67,50,.12)',
      }}
    >
      {src ? (
        <img src={src} alt={label} style={{ height: '100%', width: '100%', objectFit: 'contain', background: '#fff' }} />
      ) : (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 12,
            background: 'var(--sage)',
          }}
        >
          <span style={{ fontSize: 11, letterSpacing: '.04em', color: 'var(--kicker)', fontWeight: 600 }}>{label}</span>
        </div>
      )}
    </div>
  );
}
