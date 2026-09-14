interface ImagePlaceholderProps {
  label: string;
  height?: number | string;
  rotate?: number;
}

/** Torn-edge sticker-photo placeholder standing in for real product photography (not yet sourced). */
export function ImagePlaceholder({ label, height = 190, rotate = -1.5 }: ImagePlaceholderProps) {
  return (
    <div
      className="torn"
      style={{
        height,
        background: 'var(--photo-frame)',
        padding: 10,
        transform: `rotate(${rotate}deg)`,
        filter: 'drop-shadow(3px 4px 3px rgba(36,26,16,.35))',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 12,
          background:
            'repeating-linear-gradient(135deg, rgba(36,26,16,.05) 0 10px, transparent 10px 20px)',
          border: '1.5px dashed rgba(36,26,16,.3)',
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: '.04em', color: 'var(--kicker)', fontWeight: 600 }}>{label}</span>
      </div>
    </div>
  );
}
